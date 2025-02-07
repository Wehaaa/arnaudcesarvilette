// PostSection.tsx
'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchGraphQL } from '@/utils/fetchGraphQL'
import { GET_POSTS } from '@/queries/post'
import PostSwiper from './PostSwiper'
import PostSwiperLoading from '@/components/post/loading/LoadingPostSwiper'
import { Post } from '@/types/post'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'

interface PostsResponse {
  posts: {
    nodes: Post[]
    pageInfo: {
      hasNextPage: boolean
      endCursor: string
    }
  }
}

export default function LatestPosts() {
  const { data, status } = useQuery<PostsResponse>({
    queryKey: ['recent-posts'],
    queryFn: async () => {
      return fetchGraphQL(GET_POSTS, {
        first: 6,
        after: null,
      })
    }
  })

  return (
    <section className="px-5">
      <div className="container">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold">À lire également</h2>
          <Link href="/blog" className="flex items-center gap-2 text-gray-600 text-[15px]">
            Voir tous les articles
            <ArrowRightIcon size="18" />
          </Link>
        </div>
        {status === 'pending' ? (
          <PostSwiperLoading />
        ) : status === 'success' && (
          <PostSwiper posts={data.posts.nodes} />
        )}
      </div>
    </section>
  )
}
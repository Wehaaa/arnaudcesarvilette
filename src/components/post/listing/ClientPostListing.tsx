'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import PostList from '@/components/post/listing/PostList'
import { Button } from '@/components/ui/button'
import { fetchGraphQL } from '@/utils/fetchGraphQL'
import { GET_POSTS } from '@/queries/post'

const POSTS_PER_PAGE = 6

interface Post {
  id: string
  title: string
  excerpt: string
  featuredImage?: {
    node: {
      sourceUrl: string
    }
  }
  date: string
  slug: string
}

interface PageInfo {
  hasNextPage: boolean
  endCursor: string | null
}

interface PostPageData {
  posts: Post[]
  pageInfo: PageInfo
}

interface PostListingProps {
  initialPosts: Post[]
  initialPageInfo: PageInfo
}

interface QueryFnProps {
  pageParam?: string | null
}

async function fetchPostPage({ 
  pageParam = null 
}: { 
  pageParam?: string | null 
}): Promise<PostPageData> {
  const data = await fetchGraphQL(GET_POSTS, {
    first: POSTS_PER_PAGE,
    after: pageParam
  })
  
  return {
    posts: data?.posts?.nodes ?? [],
    pageInfo: data?.posts?.pageInfo ?? { hasNextPage: false, endCursor: null }
  }
}

export default function ClientPostListing({ 
  initialPosts, 
  initialPageInfo 
}: PostListingProps) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam }) => fetchPostPage({ pageParam }),
    getNextPageParam: (lastPage) => lastPage.pageInfo.hasNextPage ? lastPage.pageInfo.endCursor : undefined,
    initialData: {
      pages: [{
        posts: initialPosts,
        pageInfo: initialPageInfo
      }],
      pageParams: [null]
    }
  })

  const allPosts = data?.pages.flatMap(page => page.posts) ?? []

  if (status === 'error') {
    return <div>Une erreur est survenue lors du chargement des articles...</div>
  }

  return (
    <div className="px-5 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-8">
          <h1 className="text-3xl font-extrabold">Blog</h1>
          <div className="text-slate-800">
            Retrouvez ici tous mes conseils et mes inspirations, ainsi que quelque tips concrets pour réussir vos projets photos.
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PostList 
            posts={allPosts}
            isLoading={isFetchingNextPage}
            appendMode={true}
            className="inline-block w-full mb-6"
          />
        </div>
      </div>

      {hasNextPage && (
        <Button
          variant="outline"
          onClick={() => fetchNextPage()}
          className="mx-auto block px-4 py-2 border-gray-300 h-14 w-48 shadow-none"
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Chargement...' : 'Voir plus'}
        </Button>
      )}
    </div>
  )
}
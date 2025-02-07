import { fetchGraphQL } from '@/utils/fetchGraphQL'
import { GET_POSTS } from '@/queries/post'
import ClientPostListing from '@/components/post/listing/ClientPostListing'
import WorksSection from '../work/listing/WorksSection'
import CallToAction from '../globals/CallToAction'

const POSTS_PER_PAGE = 6

async function getPosts(cursor: string | null = null) {
  const data = await fetchGraphQL(GET_POSTS, {
    first: POSTS_PER_PAGE,
    after: cursor
  })
  
  return {
    posts: data?.posts?.nodes ?? [],
    pageInfo: data?.posts?.pageInfo ?? { hasNextPage: false, endCursor: null }
  }
}

export default async function PostListing() {
  const initialData = await getPosts()

  return (
    <div>
      <ClientPostListing initialPosts={initialData.posts} initialPageInfo={initialData.pageInfo} />
      <div className="max-w-6xl mx-auto mb-24 space-y-16">
        <WorksSection />
        <CallToAction />
      </div>
    </div>
  )
}
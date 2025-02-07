'use client'

import { PostContentNode } from '@/types/post'
import PostSection from '@/components/post/listing/LatestPosts'
import LatestPosts from '@/components/post/listing/LatestPosts'
import WorkCategoriesListing from '@/components/work/WorkCategoriesListing'

export default function PostFooter({ post }: { post: PostContentNode }) {
  return (
    <footer className="px-6">
      <div className="max-w-6xl mx-auto">
        <hr className="my-8 border-gray-200" />
        <LatestPosts />
        <hr className="my-8 border-gray-200" />
        <WorkCategoriesListing />
      </div>
    </footer>
  )
}
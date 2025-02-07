'use client'

import ContentBlocks from "@/components/globals/ContentBlocks/ContentBlocks"
import { PostContentNode } from '@/types/post'

export default function PostContent({ post }: { post: PostContentNode }) {
  return (
    <div className="px-5">
      <div className="flex justify-center">
        <main className="max-w-3xl mx-auto">
          <ContentBlocks content={post.content || ''} />
        </main>
      </div>
    </div>
  )
}
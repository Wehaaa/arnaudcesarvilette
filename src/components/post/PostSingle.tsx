// PostSingle.tsx
import PostBody from '@/components/post/single/PostBody'

export default function PostSingle({ 
  slug, 
  isPreview = false 
}: { 
  slug: string
  isPreview?: boolean 
}) {
  return (
    <PostBody slug={slug} isPreview={isPreview} />
  )
}


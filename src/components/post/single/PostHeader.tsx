'use client';

import { Badge } from '@/components/ui/badge';
import { PostContentNode } from '@/types/post';

interface PostHeaderProps {
  post: PostContentNode
}

export default function PostHeader({ post }: PostHeaderProps) {

  const category = post.categories?.nodes[0];

  return (
    <div className="max-w-2xl mx-auto space-y-8 mt-12 text-center">
      <Badge className="bg-white/90 text-gray-800 hover:bg-white/95 shadow-md font-medium text-[13px]">
        {category.name}
      </Badge>
      <h1 className="text-4xl font-bold leading-tight">
        {post.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt || '' }} className="text-gray-800 leading-[170%] text-lg" />
      <div className="-mx-32">
        <img src={post.featuredImage?.node.mediaDetails?.sizes.find(size => size.name === 'large')?.sourceUrl} alt={post.featuredImage?.node.altText} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
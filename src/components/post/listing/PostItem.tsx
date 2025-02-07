import React from 'react';
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types/post';

export const PostItem = ({ post, className = "" }: { post: Post, className: string }): JSX.Element => {
  const formatDate = (dateString: string | Date): string => {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const category = post.categories.nodes[0].name;
  const altText = post.featuredImage?.node?.altText || post.title;
  const title = post.title;
  const imageUrl = post.featuredImage?.node?.mediaDetails?.sizes?.find(
    size => size.name === "medium_large"
  )?.sourceUrl;

  return (
    <Link href={post.uri} className={`group block overflow-hidden bg-white ${className}`}>
      <article className="relative flex flex-col">
        <div className="relative w-full rounded-lg overflow-hidden aspect-3/2 bg-slate-200">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={altText}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"

              priority={false}
            />
          )}
          <div className="absolute left-6 top-6">
            <Badge className="bg-white/90 text-gray-800 hover:bg-white/95 shadow-md font-medium text-[13px]">
              {category}
            </Badge>
          </div>
        </div>

        <div className="flex flex-1 flex-col py-6">
          <time className="mb-2 text-sm text-gray-500">
            {formatDate(post.date)}
          </time>
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            {title}
          </h2>
        </div>
      </article>
    </Link>
  );
};
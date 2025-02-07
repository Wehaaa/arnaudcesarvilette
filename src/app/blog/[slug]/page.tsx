import PostSingle from '@/components/post/PostSingle';

interface PostTemplateProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PostTemplateProps) {
  const { slug } = await params;
  const fullSlug = `blog/${slug}`;
  return <PostSingle slug={fullSlug} />;
}
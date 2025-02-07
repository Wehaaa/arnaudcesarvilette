import { nextSlugToWpSlug } from "@/utils/nextSlugToWpSlug";
import PageSingle from "@/components/page/PageSingle";
import PostSingle from "@/components/post/PostSingle";
import HomeTemplate from "@/components/home/HomeTemplate";
import LandingSingle from "@/components/landing/LandingSingle";
import { notFound } from 'next/navigation';

function getContentTypeFromSlug(slug: string[] | undefined): 'post' | 'landing' | 'page' | 'home' {
  if (!slug || slug.length === 0) return 'home';
  
  switch (slug[0]) {
    case 'blog':
      return 'post';
    case 'offre':
      return 'landing';
    default:
      return 'page';
  }
}


export default async function Page({ params }: { params: { slug?: string[] } }) {
  const contentType = getContentTypeFromSlug(params.slug);
  
  try {
    const slug = nextSlugToWpSlug(params.slug);
    
    switch (contentType) {
      case 'home':
        return <HomeTemplate />;
      case 'post':
        return <PostSingle slug={slug} />;
      case 'landing':
        return <LandingSingle slug={slug} />;
      case 'page':
        return <PageSingle slug={slug} />;
      default:
        return notFound();
    }
  } catch (error) {
    console.error("Erreur lors du chargement de la page:", error);
    return notFound();
  }
}
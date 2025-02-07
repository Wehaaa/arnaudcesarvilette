import PageSingle from '@/components/page/PageSingle';
import { notFound } from 'next/navigation';

interface PageTemplateProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageTemplateProps) {


  const { slug } = await params;
  const fullSlug = slug;

  try {
    return <PageSingle slug={fullSlug} />;

  } catch (error) {
    console.error("Erreur lors du chargement de la page:", error);
    return notFound();
  }
}
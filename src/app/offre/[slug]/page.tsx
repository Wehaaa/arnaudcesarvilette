import LandingSingle from '@/components/landing/LandingSingle';

interface LandingTemplateProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: LandingTemplateProps) {
  const { slug } = await params;
  const fullSlug = `offre/${slug}`;
  return <LandingSingle slug={fullSlug} />;
}
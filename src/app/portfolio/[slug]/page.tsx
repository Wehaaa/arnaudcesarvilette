import WorkListing from "@/components/work/WorkListing";

interface LandingTemplateProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: LandingTemplateProps) {
  const { slug } = await params;
  return <WorkListing category={slug} />;
}
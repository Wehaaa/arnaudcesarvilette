import WorkListing from "@/components/work/WorkListing";

const PortfolioPage = ({ params }: {params: {
  slug: string
}}) => {
  return (
    <WorkListing category={params.slug} />
  );
}

export default PortfolioPage;
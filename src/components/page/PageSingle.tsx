import { Suspense } from 'react';
import { notFound } from "next/navigation";
import { print } from "graphql/language/printer";
import gql from "graphql-tag";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { PageContentNode } from "@/types/wordpress";
import { Skeleton } from "@/components/ui/skeleton";
import ContentBlocks from '@/components/globals/ContentBlocks/ContentBlocks';
import SkeletonH1 from '@/components/globals/Loaders/SkeletonH1';
import SkeletonH2 from '@/components/globals/Loaders/SkeletonH2';
import SkeletonParagraph from '@/components/globals/Loaders/SkeletonParagraph';


const PageQuery = gql`
  query PageQuery($slug: ID!, $idType: ContentNodeIdTypeEnum!) {
    contentNode(id: $slug, idType: $idType) {
      ...on Page {
        content
        title
      }
    }
  }
`;

// Composant de chargement
function LoadingPage() {
  return (
    <article>
      <div className="container mt-12 px-4">
        <div className="max-w-prose mx-auto">
          
            <SkeletonH1 />
            
            <SkeletonH2 />
            <SkeletonParagraph />
          
            <SkeletonH2 />
            <SkeletonParagraph />
            
            <SkeletonH2 />
            <SkeletonParagraph />

        </div>
      </div>
      
    </article>
  );
}


async function PageContent({ slug, isPreview }: { slug: string; isPreview: boolean }) {
  const { contentNode } = await fetchGraphQL<{ contentNode: PageContentNode }>(
    print(PageQuery),
    {
      slug: isPreview ? slug.split("preview/")[1] : slug,
      idType: isPreview ? "DATABASE_ID" : "URI",
    }
  );

  if (!contentNode) return notFound();

  const content = contentNode.content || "";

  return (
    <article>
      <div className="mt-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-[32px] lg:text-3xl xl:text-44px font-bold mt-5 mb-12 leading-[150%]">{contentNode.title}</h1>
          <ContentBlocks content={content} />
        </div>
      </div>
    </article>
  );
}

// Composant wrapper qui gère le Suspense
export default function PageTemplate({ slug, isPreview = false }: { slug: string; isPreview?: boolean }) {
  return (
    <Suspense fallback={<LoadingPage />}>
      <PageContent slug={slug} isPreview={isPreview} />
    </Suspense>
  );
}
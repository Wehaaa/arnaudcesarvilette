import ContentBlocks from "@/components/globals/ContentBlocks/ContentBlocks"
import ImageCarousel from "@/components/portfolio/ImageCarousel";
import { LandingContentNode } from '@/types/landing';

interface LandingContentProps {
  landing: LandingContentNode
}

export default function LandingContent({ landing }: LandingContentProps) {

  return (
    <div className="px-5">
      <main className="max-w-3xl mx-auto my-16">
        <ContentBlocks content={landing.content || ''} />
      </main>
    </div>
  );
}
import BrandClients from '@/components/globals/brand/BrandClients';
import ContactDialog from '@/components/globals/ContactDialog';
import { LandingContentNode } from '@/types/landing';

interface LandingHeaderProps {
  landing: LandingContentNode
}

export default function LandingHeader({ landing }: LandingHeaderProps) {

  return (
    <div className="max-w-6xl mx-auto border-gray-200">
      <div className="flex items-center justify-center py-6 gap-4">

        <img 
          src="https://arnaudcesarvilette.cubesite.fr/wp-content/uploads/2025/01/24032021-DSC05379.jpeg" 
          alt="Profile" 
          className="rounded-full w-10 h-10 object-cover"
        />
        <div className="text-xl font-black hover:text-gray-600 transition-colors duration-200">Arnaud César Vilette</div>
      </div>
      <div className="py-16 border-y border-gray-200">
        <div className="max-w-2xl mx-auto flex flex-col items-center space-y-8 text-center">
          <div className="text-4xl font-bold">{landing.title}</div>
          <div className="text-xl leading-[175%] text-gray-800" dangerouslySetInnerHTML={{ __html: landing.excerpt || '' }}></div>
          <ContactDialog />
          <BrandClients />
        </div>
      </div>
    </div>
  );
}
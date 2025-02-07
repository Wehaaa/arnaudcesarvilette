'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import BrandClients from '@/components/globals/brand/BrandClients';
import { ArrowRightIcon } from 'lucide-react';
import ContactDialog from './ContactDialog';

interface CallToActionProps {
  size?: 'lg' | 'sm';
  text?: string;
  secondaryText?: string;
  buttonText?: string;
  theme?: 'dark' | 'light';
  withImage?: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  size = 'lg',
  text = "Vous recherchez un photographe professionnel ?",
  secondaryText = "J'accompagne les entreprises en leur proposant des photos sur-mesure avec un seul objectif : booster leur communication. ",
  buttonText = 'Contactez-moi',
  theme = 'light',
  withImage = false
}) => {

  const [isOpen, setIsOpen] = useState(false);

  const containerStyles = {
    dark: 'bg-zinc-900 text-white',
    light: 'bg-white text-slate-900 border border-gray-100'
  };

  const buttonVariant = theme === 'dark' ? 'outline' : 'default';
  
  const bodyClasses = `
    relative
    w-full 
    ${withImage === true && 'flex flex-col lg:flex-row justify-center items-center'}
    ${theme === 'light' && 'shadow-2xl [--tw-shadow-color:rgba(0,0,0,0.2)]'}
    px-8 
    ${size === 'lg' ? 'xl:px-32 py-24' : 'py-8'}
    ${containerStyles[theme]}
    rounded-xl
    relative
    overflow-hidden
  `;

  const contentClasses = `
    relative z-10 
    mx-auto
    flex flex-col items-center
    text-center
    gap-6
    ${size === 'lg' ? 'md:max-w-xl' : 'md:flex-row md:items-end md:justify-between md:text-left'}
    ${withImage === true && 'lg:text-left lg:items-start w-full lg:max-w-1/2'}
  `;

  const titleClasses = `
    font-semibold
    ${size === 'lg' ? 'text-2xl md:text-3xl leading-[150%]' : 'text-xl min-h-12 flex items-center'}
  `;

  const secondaryTextClass = `
    ${theme === 'dark' ? 'text-zinc-300' : 'text-slate-600'}
  `;

  return (
    <div className={bodyClasses}>
      {withImage && (
        <div className="relative z-10 flex justify-center lg:justify-end w-full lg:max-w-1/2 px-12">
          <img 
            src="https://arnaudcesarvilette.cubesite.fr/wp-content/uploads/2025/01/24032021-DSC05379.jpeg" 
            alt="Profile" 
            className="rounded-full w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 xl:w-84 xl:h-84 object-cover mb-6"
          />
        </div>
      )}
      <div className={contentClasses}>
        <div className={titleClasses}>{text}</div>
        
        { withImage && secondaryText && (
          <p className={secondaryTextClass}>{secondaryText}</p>
        )}
        
        {/* Intégration du ContactDialog */}
        <ContactDialog 
          open={isOpen}
          onOpenChange={setIsOpen}
          theme={theme}
          triggerText={buttonText}
        />

        {size === 'lg' && (
          <div className="mt-4">
            <BrandClients theme={theme} />
          </div>
        )}
      </div>
      <div className="opacity-20 pointer-events-none">
        <div 
          className="absolute -bottom-[30%] -left-[10%] w-[40%] aspect-square 
          bg-gradient-to-tr from-red-300 to-transparent rounded-full mix-blend-multiply filter opacity-50
          animate-blob animation-delay-0"
        ></div>
        <div 
          className="absolute bottom-[-50%] left-[20%] w-[70%] aspect-square
          bg-gradient-to-tl from-yellow-300 to-transparent rounded-full mix-blend-multiply filter opacity-25
          animate-blob animation-delay-2000"
        ></div>
        <div 
          className="absolute -top-[30%] -right-[35%] w-[60%] aspect-square
          bg-gradient-to-br from-pink-300 to-transparent rounded-full mix-blend-multiply filter opacity-25 animate-blob
          animation-delay-4000"
        ></div>
      </div>
    </div>
  );
};

export default CallToAction;
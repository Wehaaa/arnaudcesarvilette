'use client'

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, X as CloseIcon } from 'lucide-react';
import BrandClients from '@/components/globals/brand/BrandClients';

interface ContactDialogProps {
  open?: boolean;
  theme?: 'dark' | 'light';
  onOpenChange?: (open: boolean) => void;
  triggerText?: string;
  buttonClassName?: string;
  buttonVariant?: 'contained' | 'outlined';
}

const ContactDialog: React.FC<ContactDialogProps> = ({ 
  open: controlledOpen, 
  onOpenChange: controlledOnOpenChange, 
  theme = "light", 
  triggerText = "Contactez-moi",
  buttonClassName = "",
  buttonVariant = "md"
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  const onOpenChange = isControlled ? controlledOnOpenChange : setUncontrolledOpen;

  const buttonClasses = `
    ${buttonClassName}
    h-12 tracking-wide px-6
    ${theme === 'dark' ? 'bg-white text-zinc-900 font-semibold' : 'bg-zinc-900 text-white font-normal'}
  `;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className={buttonClasses}>
          {triggerText}
          <span className="ml-1">
            <ArrowRightIcon size={22} />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className={`
        max-w-full h-full p-0 m-0 sm:rounded-none
        `}>
        <div className="grid grid-cols-1 xl:grid-cols-2 h-full">
          
          <DialogHeader className="sr-only">
            <DialogTitle>Formulaire de contact</DialogTitle>
          </DialogHeader>
          
          {/* Left Column - Dark Background with Image and Text */}
          <div className="relative flex justify-center items-center bg-zinc-900 p-8 text-white relative">                
            <div className="space-y-6 w-full max-w-md xl:max-w-80">
              <img 
                src="https://arnaudcesarvilette.cubesite.fr/wp-content/uploads/2025/01/24032021-DSC05379.jpeg" 
                alt="Profile" 
                className="rounded-full w-32 h-32 md:w-48 md:h-48 xl:w-64 xl:h-64 object-cover"
              />
              <h2 className="text-3xl font-bold">Arnaud César Vilette</h2>
              <p className="text-slate-400 font-light text-lg">
                Photographe professionnel au service des entreprises
              </p>
              <BrandClients className="justify-between" theme={theme} />
            </div>

            <div className="absolute pointer-events-none opacity-10 z-30 w-full h-full">
              <div 
                className="absolute -bottom-[30%] left-[-30%] w-[70%] aspect-square 
                bg-gradient-to-tr from-red-300 to-transparent rounded-full opacity-50
                animate-blob animation-delay-0"
              ></div>
              <div 
                className="absolute bottom-[-50%] left-[20%] w-[80%] aspect-square
                bg-gradient-to-tl from-yellow-300 to-transparent rounded-full opacity-25
                animate-blob animation-delay-2000"
              ></div>
              <div 
                className="absolute -top-[30%] -right-[35%] w-[70%] aspect-square
                bg-gradient-to-br from-pink-300 to-transparent rounded-full opacity-25 animate-blob
                animation-delay-4000"
              ></div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex justify-center items-center bg-gray-50 p-8">
            <form className="w-full max-w-md space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Votre nom</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Votre email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="jean.dupont@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none text-gray-600">
                    <option>Sélectionner le sujet</option>
                    <option>Séance photo corporate</option>
                    <option>Événement d'entreprise</option>
                    <option>Shooting produits</option>
                    <option>Autre demande</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Votre message</label>
                  <textarea 
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                    rows={6}
                    placeholder="Décrivez votre projet..."
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 h-12 rounded-lg font-medium transition-colors duration-200"
              >
                Envoyer le message
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
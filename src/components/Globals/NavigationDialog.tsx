// NavigationDialog.tsx
"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Menu from '@/components/globals/Menu';

interface NavigationDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const MenuTrigger = ({ isOpen }: { isOpen: boolean }) => (
  <div className="relative w-8 h-12 flex items-center justify-center cursor-pointer">
    <div className="flex flex-col justify-center items-center w-full space-y-1.5">
      <div
        className={`
          w-full h-0.5 bg-current 
          transition-all duration-300 ease-in-out origin-center
          ${isOpen ? 'rotate-45 translate-y-2' : ''}
        `}
      />
      <div
        className={`
          w-full h-0.5 bg-current
          transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-0' : ''}
        `}
      />
      <div
        className={`
          w-full h-0.5 bg-current
          transition-all duration-300 ease-in-out origin-center
          ${isOpen ? '-rotate-45 -translate-y-2' : ''}
        `}
      />
    </div>
  </div>
);

const NavigationDialog: React.FC<NavigationDialogProps> = ({ 
  isOpen, 
  onOpenChange
}) => {
  return (
    <Dialog modal={false} open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <button 
          className="focus:outline-none"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <MenuTrigger isOpen={isOpen} />
        </button>
      </DialogTrigger>
      
      <DialogContent 
        className={`
          fixed inset-0 
          h-screen w-screen 
          max-w-full m-0 
          px-5 
          !sm:rounded-lg
          sm:rounded-none
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0 translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
          shadow-0
          bg-black text-white
          z-40
        `}
      >
        <div className="max-w-6xl w-full mx-auto pt-18">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold" />
          </DialogHeader>
          
          <nav className="mt-8">
            <Menu 
              className="flex flex-col space-y-4" 
              onLinkClick={() => onOpenChange(false)} 
            />
          </nav>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NavigationDialog;
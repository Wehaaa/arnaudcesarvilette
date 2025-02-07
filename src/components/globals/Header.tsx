"use client";

import React from 'react';
import NavigationDialog from './NavigationDialog';
import ContactDialog from './ContactDialog';
import Link from 'next/link';
import { useDialog } from '@/hooks/useDialog';
import { usePathname } from 'next/navigation';

const Header = () => {
  const navigation = useDialog(false);
  const contact = useDialog(false);
  const pathname = usePathname();

  // Si on est sur une page d'offre, on ne rend rien
  if (pathname?.startsWith('/offre')) return null;

  // On vérifie si on est sur la home page
  const isHomePage = pathname === '/';

  return (
    <header 
      className={`
        ${navigation.isOpen ? 'sticky inset-x-0 top-0' : ''}
        px-5 py-6 
        transition-opacity duration-300 ease-in-out
        z-50 
        border-b ${navigation.isOpen ? 'border-transparent' : 'border-gray-200'}
        ${navigation.isOpen ? 'bg-transparent text-white' : 'bg-transparent text-black'}
      `}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <NavigationDialog 
            isOpen={navigation.isOpen} 
            onOpenChange={navigation.setIsOpen}
          />
          
          {!isHomePage && (
            <Link 
              href="/" 
              className="text-xl font-black hover:text-gray-600 transition-colors duration-200"
            >
              Arnaud César Vilette
            </Link>
          )}
        </div>
        
        {!isHomePage && (
          <div className={navigation.isOpen ? 'opacity-0' : 'opacity-100'}>
            <ContactDialog 
              open={contact.isOpen} 
              onOpenChange={contact.setIsOpen} 
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
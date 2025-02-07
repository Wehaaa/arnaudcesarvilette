import { StarIcon } from "lucide-react";

interface BrandClientsProps {
  theme?: 'dark' | 'light';
  className?: string;
}

const BrandClients: React.FC<BrandClientsProps> = ({ theme = "light", className }) => {

  const brands = [
    'suez',
    'nexity',
    'greenpeace',
    'chanel',
    'blablacar',
  ];

  const logoClasses = `
    w-7 h-7 bg-black border border-gray-300 rounded-full flex items-center justify-center
    ${theme === 'dark' ? 'border-zinc-800' : 'bg-white'}
  `;

  return (
    <div className={`flex gap-3 ${className}`}>
      <div className="flex -space-x-1">
        {brands.map((brand) => (
          <div key={brand} className={logoClasses}>
            <img src={`/assets/images/clients/sm/${brand}-${theme}.png`} alt="" />
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex text-yellow-500 text-lg leading-none align-top gap-0.25">
        {[...Array(5)].map((_, index) => (
          <StarIcon 
            key={index} 
            className="w-4 h-4" 
            fill="oklch(0.795 0.184 86.047)" 
          />
        ))}
        </div>
        <span className="text-sm leading-none">5.0</span>
      </div>
    </div>
  );
};

export default BrandClients;


 
 
 
 

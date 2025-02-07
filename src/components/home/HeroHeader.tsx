import BrandClients from "../globals/brand/BrandClients";
import ContactDialog from "../globals/ContactDialog";

const HeroHeader = () => {
  return (
    <div className="relative py-8 md:py-24 xl:py-32 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between text-center lg:text-left">
          <div className="mb-6">
            <img 
              src="https://arnaudcesarvilette.cubesite.fr/wp-content/uploads/2025/01/24032021-DSC05379.jpeg" 
              alt="Profile" 
              className="rounded-full w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 object-cover"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 space-y-6">
            <h1 className="text-2xl md:text-4xl font-bold">Arnaud César Vilette</h1>
            <p className="text-lg font-normal text-slate-600">Photographe professionnel au service des entreprises.</p>
            <ContactDialog />
            <a href="#clients"><BrandClients /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroHeader;
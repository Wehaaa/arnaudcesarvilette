import ClientsReviews from "../globals/brand/ClientsReviews"
import CallToAction from "../globals/CallToAction";
import WorksSection from "../work/listing/WorksSection";
import WorkCategoriesListing from "../work/WorkCategoriesListing";
import HeroHeader from "./HeroHeader";
import HomeCarouselSection from "./HomeCarouselSection"

const HomeTemplate = () => {

  const images = [
    '/assets/images/clients/md/nexity.png',
    '/assets/images/clients/md/suez.png',
    '/assets/images/clients/md/greenpeace.png',
    '/assets/images/clients/md/chanel.png',
    '/assets/images/clients/md/edhec.png',
    '/assets/images/clients/md/anticor.png',
    '/assets/images/clients/md/blablacar.png',
  ];


  const reviews = [
    {
      id: 1,
      name: "Clotilde B.",
      rating: 5,
      content: "Arnaud est très professionnel, qui sait mettre à l'aise les personnes et le mettre en valeur sur les photos. Un grand merci !"
    },
    {
      id: 2,
      name: "Mélissa C.",
      rating: 5,
      content: "Ravie d'avoir travaillé avec Arnaud sur les portraits de nos collaborateurs. Nous sommes très satisfaits et nous n'hésiterons pas à faire de nouveau appel à ses services. Merci encore !"
    },
    {
      id: 3,
      name: "Valentine M.",
      rating: 5,
      content: "Nous avons travaillé avec Arnaud à plusieurs reprises, son travail et son professionnalisme sont irréprochables et particulièrement appréciables ! Au plaisir de renouveler cette collaboration pour les événements à venir."
    },
    {
      id: 4,
      name: "Jeff J.",
      rating: 5,
      content: "Je garde un excellent souvenir de notre collaboration autour d'un projet pour un grand groupe industriel. Un reportage photo magnifique. Pertinence, professionnalisme et enthousiasme sont pour moi les qualificatifs qui correspondent à Arnaud ;) J'espère à très bientôt,pour de nouveaux projets et de nouvelles collaborations ;)"
    },
    {
      id: 5,
      name: "Agnes D.",
      rating: 5,
      content: "J'ai fait appel à Arnaud pour plusieurs shootings photo corporate et je suis ravie du résultat. Il a réussi à mettre à l'aise les participants et les photos sont naturelles et expressives. Merci beaucoup !"
    },
    {
      id: 6,
      name: "Rislane H.",
      rating: 5,
      content: "[...] La mission s'est extrêmement bien passée. Arnaud a été à l'écoute de nos problématiques, notamment en ce qui concerne les locaux et la luminosité. Il a pris en compte nos retours et nous a livré de magnifiques photos dans les délais convenus."
    }
  ];

  return (
    <div className="px-6 md:px-8">
      <div className="max-w-6xl mx-auto mb-24 space-y-16">
        <HeroHeader /> 
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Mes photos</h2>
          <WorksSection />
        </div>
        <div id="clients" className="space-y-8">
          <h2 className="text-2xl font-bold">Ils me font confiance</h2>
          <HomeCarouselSection images={images} />
          <ClientsReviews reviews={reviews} />
        </div>
        <CallToAction withImage={true} />
      </div>
    </div>
  )
}

export default HomeTemplate
import { LandingContentNode } from '@/types/landing'
import LandingHeader from './LandingHeader'
import LandingContent from './LandingContent'
import LandingFooter from './LandingFooter'


interface LandingBodyProps {
  data: {
    contentNode?: LandingContentNode;
  };
}

export default function LandingBody({ data }: LandingBodyProps) {
  return( 
    // log data
    <LandingHeader landing={data?.contentNode} />
    
  )
  // if (!data?.contentNode) {
  //   return <div>Page non trouvée</div>
  // }

  // return (
  //   <article className="space-y-7">
  //     <LandingHeader landing={data.contentNode} />
  //     <LandingContent landing={data.contentNode} />
  //     <LandingFooter landing={data.contentNode} />
  //   </article>
  // )
}
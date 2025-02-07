import { LandingProps } from './single/types'
import { getLandingData } from './single/LandingData'
import LandingHeader from './single/LandingHeader'
import LandingContent from './single/LandingContent'


export default async function LandingSingle({ slug }: LandingProps) {
  const data = await getLandingData(slug, false)

  return (
    <div>
      <LandingHeader landing={data.contentNode} />
      <LandingContent landing={data.contentNode} />
      {/* <LandingFooter landing={data.contentNode} /> */}
    </div>
  )
}
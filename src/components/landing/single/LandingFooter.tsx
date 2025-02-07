'use client'

import { LandingContentNode } from '@/types/landing'
import LandingSection from '@/components/landing/listing/LatestLandings'

export default function LandingFooter({ landing }: { landing: LandingContentNode }) {
  return (
    <footer className="mt-8">
      <div className="container">
        <hr className="my-10" />
        {/* <LandingSection /> */}
      </div>
    </footer>
  )
}
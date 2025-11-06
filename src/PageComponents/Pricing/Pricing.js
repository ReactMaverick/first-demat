import CommonHeroSection from '@/components/CommonHeroSection/CommonHeroSection'
import { PRICING_HERO_SECTION } from '@/constants/images'
import React from 'react'
import PricingSection from './Components/PricingSection'

export default function Pricing() {
    return (
        <div>
            <CommonHeroSection
                title={"Pricing"}
                backgroundImage={PRICING_HERO_SECTION}
                backgroundColor={{
                    from: "#f7f7f7",
                    to: "#9eaeb5"
                }}
            />
            <PricingSection />
        </div>
    )
}

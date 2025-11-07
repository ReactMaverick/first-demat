import CommonHeroSection from '@/components/CommonHeroSection/CommonHeroSection'
import { PRICING_HERO_SECTION } from '@/constants/images'
import React from 'react'
import PricingSection from './Components/PricingSection'
import TradeCharges from './Components/TradeCharges'

export default function Pricing() {
    return (
        <div>
            <PricingSection />
            <TradeCharges />
        </div>
    )
}

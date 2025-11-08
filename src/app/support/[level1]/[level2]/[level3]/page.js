import SupportLevel3Section from '@/PageComponents/SupportLevel3Section/SupportLevel3Section'
import React from 'react'

export default async function page({ params }) {
    const { level1, level2, level3 } = await params;
    return <SupportLevel3Section openAccordion={level3} prevlevels={[level1]} slug={level2} />
}

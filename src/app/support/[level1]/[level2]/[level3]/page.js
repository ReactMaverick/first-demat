import SupportLevel3Section from '@/PageComponents/SupportLevel3Section/SupportLevel3Section'
import React from 'react'

export default async function page({ params }) {
    const { level1, level2, level3 } = await params;
    console.log("from middel", level2, level1)
    return <SupportLevel3Section prevlevels={[level1]} slug={level2} />
}

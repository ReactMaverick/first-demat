import SupportLevel3Section from '@/PageComponents/SupportLevel3Section/SupportLevel3Section'
import React from 'react'

export default async function page({ params }) {
    const { level3 } = await params;
    
    return <SupportLevel3Section slug={level3} />
}

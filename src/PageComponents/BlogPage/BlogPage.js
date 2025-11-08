import React from 'react'
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb'
import { faqTopicsLev4 } from '../Support/data'

export default function BlogPage({ prevlevels, slug }) {

    const BlogComponent = faqTopicsLev4[slug] || null;

    return (
        <div className="lg:w-10/6 w-full min-h-screen">
            <BreadCrumb home={{ url: "/support", label: "Support" }} prevlevels={prevlevels} slug={slug} />
            <div className='bg-gray-100'>
                {
                    BlogComponent ?
                        <BlogComponent /> :
                        <div className='text-2xl font-bold text-center py-10 text-gray-400'>No Blog Found</div>
                }
            </div>
        </div>
    )
}

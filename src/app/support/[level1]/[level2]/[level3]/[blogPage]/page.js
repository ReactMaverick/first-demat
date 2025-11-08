import BlogPage from '@/PageComponents/BlogPage/BlogPage';
import React from 'react'

export default async function page({ params }) {
    const { level1, level2, level3, blogPage } = await params;
    return (
        <BlogPage prevlevels={[level1, level2, level3]} slug={blogPage} />
    )
}

import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb'
import { capitalizeEachFirstLetterURL } from '@/lib/utils'

export default function BreadCrumb({ prevlevels = [], home = { url: "/", label: "Home" }, slug = "" }) {
    return (
        <div className='py-5'>
            <Breadcrumb>
                <BreadcrumbList>
                    {/* Defult Support section */}
                    <BreadcrumbItem>
                        <BreadcrumbLink href={home.url}>{home.label}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    {/* Path from Support Page */}
                    {
                        prevlevels?.map((level, index) => {
                            // Build cumulative path up to current index
                            const pathSegments = prevlevels.slice(0, index + 1);
                            const href = `/support/${pathSegments.join('/')}`;

                            return (
                                <React.Fragment key={index}>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href={href}>{capitalizeEachFirstLetterURL(level)}</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                </React.Fragment>
                            )
                        })
                    }
                    {/* Fial/Current page */}
                    <BreadcrumbItem>
                        <BreadcrumbPage>{capitalizeEachFirstLetterURL(slug)}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}

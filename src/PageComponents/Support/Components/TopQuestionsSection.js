import { Search } from 'lucide-react'
import React from 'react'

export default function TopQuestionsSection() {
    return (
        <>
            {/* Top Queries section */}
            <div className="space-y-4 md:space-y-6 lg:space-y-[30px]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h2 className="hero-h1-gradiant text-center sm:text-left">Top Support Queries</h2>
                    <button className="primary-button w-full sm:w-auto">My Queries</button>
                </div>
                <div className="w-full flex items-center justify-between py-2 sm:py-[5px] px-3 sm:px-[8px] border-2 border-gray-400 rounded-[100px]">
                    <input
                        placeholder="Search Queries"
                        className="outline-none w-full text-sm sm:text-base"
                    />
                    <button className="rounded-button flex-shrink-0">
                        <Search size={16} className="sm:w-5 sm:h-5" />
                    </button>
                </div>
            </div>
        </>
    )
}

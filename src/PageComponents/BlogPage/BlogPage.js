import React from 'react'
import { Calendar, User, Clock, Play } from 'lucide-react'
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb'

export default function BlogPage({ prevlevels, slug }) {
    // Sample blog data
    const blogData = {
        title: "Understanding Demat Accounts: A Complete Guide for Beginners",
        author: "First Demat Team",
        date: "November 8, 2025",
        readTime: "8 min read",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
        content: "Learn everything you need to know about demat accounts, from opening procedures to trading benefits."
    }

    // Sample table data
    const comparisonData = [
        {
            feature: "Account Opening Time",
            physical: "7-15 days",
            demat: "1-3 days",
            benefit: "Faster processing"
        },
        {
            feature: "Storage Safety",
            physical: "Risk of damage/theft",
            demat: "100% secure digital storage",
            benefit: "Complete security"
        },
        {
            feature: "Transfer Speed",
            physical: "2-4 weeks",
            demat: "Instant (T+2 settlement)",
            benefit: "Quick transactions"
        },
        {
            feature: "Transaction Costs",
            physical: "High stamp duty & fees",
            demat: "Low DP charges only",
            benefit: "Cost effective"
        },
        {
            feature: "Loan Against Securities",
            physical: "Complex process",
            demat: "Easy online application",
            benefit: "Simplified lending"
        }
    ]

    // Sample similar blogs
    const similarBlogs = [
        {
            id: 1,
            title: "How to Choose the Right Trading Platform",
            excerpt: "Essential factors to consider when selecting a trading platform for your investment needs.",
            readTime: "5 min read",
            date: "November 5, 2025",
            image: "/images/blog/trading-platform.jpg"
        },
        {
            id: 2,
            title: "Tax Implications of Stock Trading in India",
            excerpt: "Complete guide to understanding capital gains tax and other tax obligations for traders.",
            readTime: "7 min read",
            date: "November 3, 2025",
            image: "/images/blog/tax-guide.jpg"
        },
        {
            id: 3,
            title: "Risk Management Strategies for New Investors",
            excerpt: "Learn essential risk management techniques to protect your investment portfolio.",
            readTime: "6 min read",
            date: "October 28, 2025",
            image: "/images/blog/risk-management.jpg"
        },
        {
            id: 4,
            title: "Understanding Market Orders vs Limit Orders",
            excerpt: "Know the difference between various order types and when to use each one effectively.",
            readTime: "4 min read",
            date: "October 25, 2025",
            image: "/images/blog/order-types.jpg"
        }
    ]

    return (
        <div className="lg:w-10/6 w-full min-h-screen">
            <BreadCrumb home={{ url: "/support", label: "Support" }} prevlevels={prevlevels} slug={slug} />
            <div className='bg-gray-100'>
                {/* Header Section */}
                <div className="bg-white shadow-sm">
                    <div className="custom-container py-12">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                {blogData.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <User className="w-5 h-5" />
                                    <span>{blogData.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    <span>{blogData.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    <span>{blogData.readTime}</span>
                                </div>
                            </div>
                            <p className="text-lg text-gray-600 mt-4">
                                {blogData.content}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="custom-container py-16">
                    <div className="max-w-4xl mx-auto">

                        {/* Video Section */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Watch Our Detailed Explanation</h2>
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="relative aspect-video">
                                    <iframe
                                        src={blogData.videoUrl}
                                        title="Demat Account Guide Video"
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    {/* Optional: Custom play button overlay */}
                                    {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                  <button className="w-20 h-20 rounded-full bg-white bg-opacity-90 flex items-center justify-center hover:bg-opacity-100 transition-all">
                    <Play className="w-8 h-8 text-blue-600 ml-1" />
                  </button>
                </div> */}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Complete Guide to Demat Accounts
                                    </h3>
                                    <p className="text-gray-600">
                                        Watch this comprehensive video to understand everything about demat accounts,
                                        including the opening process, benefits, and how to get started with trading.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Table Section */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Physical vs Demat Account Comparison</h2>
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-4 text-left font-semibold text-gray-900">Feature</th>
                                                <th className="px-6 py-4 text-left font-semibold text-gray-900">Physical Certificates</th>
                                                <th className="px-6 py-4 text-left font-semibold text-gray-900">Demat Account</th>
                                                <th className="px-6 py-4 text-left font-semibold text-gray-900">Key Benefit</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {comparisonData.map((row, index) => (
                                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                                                    <td className="px-6 py-4 text-gray-600">{row.physical}</td>
                                                    <td className="px-6 py-4 text-green-600 font-medium">{row.demat}</td>
                                                    <td className="px-6 py-4 text-blue-600">{row.benefit}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        {/* Content Section */}
                        <section className="mb-12">
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose a Demat Account?</h2>
                                <div className="prose prose-lg max-w-none text-gray-600">
                                    <p className="mb-4">
                                        A Demat (Dematerialized) account is essential for modern investing. It allows you to hold
                                        shares and securities in electronic format, eliminating the need for physical certificates.
                                    </p>
                                    <p className="mb-4">
                                        With a demat account, you can trade seamlessly, transfer shares instantly, and enjoy
                                        enhanced security for your investments. The digital format also makes it easier to
                                        track your portfolio and manage your holdings.
                                    </p>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Benefits:</h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Instant settlement of trades (T+2 basis)</li>
                                        <li>No risk of physical certificate loss or damage</li>
                                        <li>Easy portfolio tracking and management</li>
                                        <li>Lower transaction costs compared to physical trading</li>
                                        <li>Convenient online access to your holdings</li>
                                        <li>Faster loan processing against securities</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

                {/* Similar Blogs Section */}
                <section className="bg-white py-16">
                    <div className="custom-container">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Similar Blog Posts</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {similarBlogs.map((blog) => (
                                    <div key={blog.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                                        <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 relative">
                                            {/* Placeholder for blog image */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                                    <User className="w-8 h-8 text-blue-600" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                {blog.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                                {blog.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                <span>{blog.date}</span>
                                                <span>{blog.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center mt-8">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-colors">
                                    View All Blog Posts
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

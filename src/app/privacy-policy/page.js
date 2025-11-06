import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20">
        <div className="custom-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
          </p>
          <p className="text-white/70 mt-4">Last Updated: November 6, 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="custom-container py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-h1-gradiant">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to First Demat. We respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you about how we look after your personal data when you visit our
              website and tell you about your privacy rights and how the law protects you.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-h1-gradiant">Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may collect, use, store and transfer different kinds of personal data about you:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-3 mt-0.5 text-blue-600 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-600">
                  <strong className="text-gray-800">Identity Data:</strong> First name, last name, username, or similar identifier
                </span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-3 mt-0.5 text-blue-600 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-600">
                  <strong className="text-gray-800">Contact Data:</strong> Email address, telephone numbers, and billing address
                </span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-3 mt-0.5 text-blue-600 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-600">
                  <strong className="text-gray-800">Technical Data:</strong> Internet protocol (IP) address, browser type and version, and time zone settings
                </span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-3 mt-0.5 text-blue-600 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-600">
                  <strong className="text-gray-800">Usage Data:</strong> Information about how you use our website and services
                </span>
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-h1-gradiant">How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg space-y-3">
              <p className="text-gray-700">✓ To provide and maintain our services</p>
              <p className="text-gray-700">✓ To notify you about changes to our services</p>
              <p className="text-gray-700">✓ To provide customer support</p>
              <p className="text-gray-700">✓ To gather analysis or valuable information to improve our services</p>
              <p className="text-gray-700">✓ To detect, prevent and address technical issues</p>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-h1-gradiant">Data Security</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally
              lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your
              personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong className="text-blue-700">🔒 Encryption:</strong> We use industry-standard encryption to protect your data during transmission and storage.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-h1-gradiant">Your Legal Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-blue-100 p-5 rounded-lg hover:border-blue-300 transition-colors">
                <h3 className="font-semibold text-gray-800 mb-2">Right to Access</h3>
                <p className="text-gray-600 text-sm">Request access to your personal data</p>
              </div>
              <div className="bg-white border-2 border-blue-100 p-5 rounded-lg hover:border-blue-300 transition-colors">
                <h3 className="font-semibold text-gray-800 mb-2">Right to Correction</h3>
                <p className="text-gray-600 text-sm">Request correction of your personal data</p>
              </div>
              <div className="bg-white border-2 border-blue-100 p-5 rounded-lg hover:border-blue-300 transition-colors">
                <h3 className="font-semibold text-gray-800 mb-2">Right to Erasure</h3>
                <p className="text-gray-600 text-sm">Request erasure of your personal data</p>
              </div>
              <div className="bg-white border-2 border-blue-100 p-5 rounded-lg hover:border-blue-300 transition-colors">
                <h3 className="font-semibold text-gray-800 mb-2">Right to Object</h3>
                <p className="text-gray-600 text-sm">Object to processing of your personal data</p>
              </div>
            </div>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-h1-gradiant">Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track the activity on our service and hold certain information.
              Cookies are files with small amount of data which may include an anonymous unique identifier.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
              if you do not accept cookies, you may not be able to use some portions of our service.
            </p>
          </div>

          {/* Third-Party Links */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-h1-gradiant">Third-Party Links</h2>
            <p className="text-gray-600 leading-relaxed">
              This website may include links to third-party websites, plug-ins and applications. Clicking on those links
              or enabling those connections may allow third parties to collect or share data about you. We do not control
              these third-party websites and are not responsible for their privacy statements.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
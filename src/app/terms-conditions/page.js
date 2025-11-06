import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-600 to-blue-800 py-20">
        <div className="custom-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms and Conditions</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our services.
          </p>
          <p className="text-white/70 mt-4">Last Updated: November 6, 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="custom-container py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-h1-gradiant">1. Agreement to Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              By accessing and using First Demat's services, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
              <p className="text-gray-700">
                <strong className="text-blue-700">Important:</strong> These terms constitute a legally binding agreement between you and First Demat.
              </p>
            </div>
          </div>

          {/* Service Description */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-h1-gradiant">2. Service Description</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              First Demat provides design and development services on a subscription basis. Our services include:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-3 mt-0.5 text-blue-600 shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-600">Unlimited design and development requests</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-3 mt-0.5 text-blue-600 shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-600">Priority support and dedicated communication channels</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-3 mt-0.5 text-blue-600 shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-600">Access to specialized talents and expertise</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-3 mt-0.5 text-blue-600 shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-600">Flexible pause and cancellation options</span>
              </li>
            </ul>
          </div>

          {/* Subscription Terms */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-h1-gradiant">3. Subscription Terms</h2>
            <div className="space-y-4">
              <div className="bg-white border-2 border-blue-100 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">3.1 Billing Cycle</h3>
                <p className="text-gray-600">
                  Subscriptions are billed on a monthly, quarterly, or yearly basis depending on your chosen plan.
                  Payment is due at the beginning of each billing cycle.
                </p>
              </div>
              <div className="bg-white border-2 border-blue-100 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">3.2 Auto-Renewal</h3>
                <p className="text-gray-600">
                  Your subscription will automatically renew at the end of each billing cycle unless you cancel
                  before the renewal date. You will be charged the then-current rate for your subscription plan.
                </p>
              </div>
              <div className="bg-white border-2 border-blue-100 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">3.3 Pause & Cancellation</h3>
                <p className="text-gray-600">
                  You may pause or cancel your subscription at any time. Paused subscriptions retain all project
                  data and can be resumed at your convenience. Cancellations take effect at the end of the current billing cycle.
                </p>
              </div>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-h1-gradiant">4. User Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              As a user of our services, you agree to:
            </p>
            <div className="bg-linear-to-r from-blue-50 to-purple-50 p-6 rounded-lg space-y-3">
              <p className="text-gray-700">✓ Provide accurate and complete information during registration</p>
              <p className="text-gray-700">✓ Maintain the security of your account credentials</p>
              <p className="text-gray-700">✓ Notify us immediately of any unauthorized access</p>
              <p className="text-gray-700">✓ Use the services in compliance with all applicable laws</p>
              <p className="text-gray-700">✓ Respect intellectual property rights</p>
              <p className="text-gray-700">✓ Provide timely feedback and necessary materials for project completion</p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-h1-gradiant">5. Intellectual Property Rights</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">5.1 Client Work</h3>
                <p className="text-gray-600 leading-relaxed">
                  Upon full payment, you will own the final deliverables created specifically for you. However,
                  First Demat retains the right to use the work for portfolio and promotional purposes unless
                  otherwise agreed in writing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">5.2 Pre-existing Materials</h3>
                <p className="text-gray-600 leading-relaxed">
                  First Demat owns all rights to pre-existing materials, templates, tools, and methodologies used
                  in providing services. These materials remain the property of First Demat.
                </p>
              </div>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-h1-gradiant">6. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To the maximum extent permitted by law, First Demat shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700">• Your use or inability to use the service</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700">• Unauthorized access to your data</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700">• Service interruptions or errors</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700">• Third-party content or conduct</p>
              </div>
            </div>
          </div>

          {/* Refund Policy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-h1-gradiant">7. Refund Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We offer a satisfaction guarantee for new subscribers:
            </p>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li>• First-time subscribers may request a full refund within 14 days of initial signup</li>
                <li>• Refund requests must be submitted in writing to our support team</li>
                <li>• No refunds are available for renewals or after the 14-day period</li>
                <li>• Partial refunds are not available for unused portions of the subscription period</li>
              </ul>
            </div>
          </div>

          {/* Confidentiality */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-h1-gradiant">8. Confidentiality</h2>
            <p className="text-gray-600 leading-relaxed">
              Both parties agree to keep confidential any proprietary information shared during the course of the
              engagement. This includes business strategies, technical information, customer data, and any materials
              marked as confidential. This obligation survives the termination of the agreement.
            </p>
          </div>

          {/* Termination */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-h1-gradiant">9. Termination</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We reserve the right to terminate or suspend your account and access to services immediately, without
              prior notice or liability, for any reason, including but not limited to:
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-red-500 mr-2">⚠</span>
                <span className="text-gray-600">Breach of these Terms and Conditions</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2">⚠</span>
                <span className="text-gray-600">Fraudulent or illegal activities</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2">⚠</span>
                <span className="text-gray-600">Non-payment of fees</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2">⚠</span>
                <span className="text-gray-600">Abusive behavior towards our team members</span>
              </div>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-h1-gradiant">10. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify or replace these terms at any time. We will provide notice of any
              material changes by posting the new terms on this page and updating the "Last Updated" date. Your
              continued use of the service after any such changes constitutes your acceptance of the new terms.
            </p>
          </div>

          {/* Governing Law */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-h1-gradiant">11. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of India, without regard
              to its conflict of law provisions. Any disputes arising from these terms or the services shall be
              subject to the exclusive jurisdiction of the courts located in [Your City], India.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
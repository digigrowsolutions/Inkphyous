import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Use</h1>
        
        <p className="text-sm text-gray-600 mb-8">
          <strong>Last updated:</strong> January 15, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to <strong>Inkphyous.com</strong> ("Website"), a website owned and operated by{' '}
            <strong>Inkphyous, LLC</strong> ("Inkphyous," "we," or "us"). These Terms of Use and our Privacy 
            Policy apply to all visitors, users, and others who access or use this Website ("Users" or "you"). 
            These Terms of Use outline the conditions under which you may use our Website and services.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            By accessing or using the Website, you acknowledge that you have read, understood, and agree to be 
            bound by these Terms of Use, whether or not you have registered to create an account. These Terms of 
            Use and our{' '}
            <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>{' '}
            together constitute the agreement between you and Inkphyous regarding your use of the Website and any 
            products purchased through it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Please read this Privacy Policy carefully to understand our policies and practices regarding your personal 
            information. By using the Website and services or by providing your personal information to us, you consent 
            to the collection, use, and disclosure of your information in accordance with this Privacy Policy. If you 
            do not agree with any part of this Privacy Policy, please do not access or use the Website, and refrain 
            from providing any personal information.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Please read these Terms of Use carefully before using the Website. By accessing or using this Website 
            and/or purchasing products through it, you agree to comply with and be bound by these Terms of Use and 
            our Privacy Policy found at{' '}
            <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>. If you do 
            not agree to these Terms of Use or the Privacy Policy, you must not access or use this Website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Eligibility to Use</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            You must be at least <strong>16 years old</strong> to use this Website. By using the Website, you 
            represent that you meet this age requirement.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to terminate access if a user is underage or otherwise legally incapacitated.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Account and Membership</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            You may freely browse our website without creating an account. However, to make a purchase or proceed 
            to checkout, you will be required to log in or create an account using accurate, current, and complete 
            information.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            Registration is void where prohibited by law.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We may revoke or terminate your registration at any time, without notice, at our discretion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Electronic Communications</h2>
          <p className="text-gray-700 leading-relaxed">
            By using the Website or communicating with us electronically, you consent to receive communications 
            electronically from us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Conduct and Comments</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            You agree to use the Website lawfully and responsibly. You will not post or submit content that is 
            unlawful, infringing, abusive, defamatory, obscene, threatening, or contains viruses or spam.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            All comments, reviews, feedback, or submissions ("Comments") become our exclusive property. We may use, 
            reproduce, modify, publish, or distribute them without obligation to you.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            You are responsible for your Comments and agree to indemnify Inkphyous for any claims arising from them.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right (but are not obligated) to monitor, edit, or remove any Comments.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            All content on the Website, including text, graphics, logos, images, and software, is the property of 
            Inkphyous and is protected under intellectual property laws.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You may not reproduce, distribute, or create derivative works from content without express written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Product Information and Accuracy</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            We strive to display products accurately, but colors, sizes, and details may vary due to display devices 
            or other factors.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            Product descriptions, pricing, and availability are subject to change without notice.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to limit quantities, modify product information, or refuse/cancel orders in cases 
            of error, unless the product has already been dispatched.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Orders and Payments</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            By placing an order, you agree to provide complete and accurate purchase and account information.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            Payment must be made at the time of purchase. All payments are non-refundable unless otherwise stated.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to refuse or cancel orders, notifying you via the email provided.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Shipping and Delivery</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Shipping costs and delivery times vary based on your location and selected shipping method.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            We are not responsible for delays, loss, or damages occurring during shipping.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Title and risk pass to you once the product is shipped to the carrier.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Returns and Refunds</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Please refer to our Return Policy for details.
          </p>
          <p className="text-gray-700 leading-relaxed">
            All sales are final unless otherwise stated in our Return Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Inkphyous is not liable for any direct or indirect damages arising from your use of the Website or 
            products purchased through it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In no event shall our liability exceed the amount paid for the product.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Pricing</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Prices are displayed by default in United Arab Emirates Dirhams (AED) for customers in Dubai and in 
            Indian Rupees (INR) for customers in India. All prices include applicable taxes but exclude shipping 
            costs. You may change the displayed currency at any time using the currency selection option available 
            at the bottom of the website.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Prices may change at our discretion without prior notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Payment Methods & Security</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Accepted payment methods include:</p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="text-gray-700 mb-1"><strong>Cash on Delivery (COD)</strong> — additional charges may apply</p>
            <p className="text-gray-700 mb-1"><strong>Credit/Debit Cards</strong> — Visa, MasterCard, AMEX, Rupay, Maestro</p>
            <p className="text-gray-700 mb-1"><strong>UPI Payments</strong> — Google Pay, PhonePe, BHIM, etc.</p>
            <p className="text-gray-700"><strong>Wallets</strong> — Paytm, Razorpay, etc.</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-2">
            Payments are securely processed using <strong>SSL encryption</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We never request account or payment details via email.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">14. Termination</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            We may suspend or terminate your access if you breach these Terms.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            Termination does not affect accrued rights or obligations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Content and account information may be deleted without liability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">15. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms and any agreements between you and Inkphyous are governed by the laws of India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">16. Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            We may update or modify these Terms at any time without notice.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Continued use of the Website after changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">17. Contact Information</h2>
          <p className="text-gray-700 leading-relaxed">
            For questions or concerns regarding these Terms, please contact us at:{' '}
            <a href="mailto:info@inkphyous.com" className="text-blue-600 hover:underline font-semibold">
              info@inkphyous.com
            </a>
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            By using Inkphyous.com, you acknowledge that you have read and understood these Terms of Use and agree 
            to be bound by them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
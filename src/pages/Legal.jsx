import React, { useState } from 'react';

export default function LegalitiesPage() {
  const [activePage, setActivePage] = useState('home');

  const renderHome = () => (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="w-full max-w-6xl flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-7xl font-bold text-gray-900 tracking-tight">
            Legalities
          </h1>
        </div>

        <div className="h-96 w-px bg-gradient-to-b from-transparent via-red-500 to-transparent mx-16"></div>

        <div className="flex-1 space-y-8">
          <button
            onClick={() => setActivePage('privacy')}
            className="block text-3xl font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-300 text-left"
          >
            Privacy & Policy
          </button>

          <button
            onClick={() => setActivePage('terms')}
            className="block text-3xl font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-300 text-left"
          >
            Terms & Conditions
          </button>

          <button
            onClick={() => setActivePage('shipping')}
            className="block text-3xl font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-300 text-left"
          >
            Shipping Policy
          </button>

          <button
            onClick={() => setActivePage('returns')}
            className="block text-3xl font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-300 text-left"
          >
            Return & Exchange Policy
          </button>
        </div>
      </div>
    </div>
  );

  const renderPolicyPage = (title, content) => (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto p-12">
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-12">
          {title}
        </h1>

        <div className="flex gap-12">
          {/* Left Sticky Navigation/Sidebar */}
          <div className="w-48 flex-shrink-0">
            <div className="sticky top-36 space-y-4">
              <button
                onClick={() => setActivePage('home')}
                className="mb-4 px-6 py-2 bg-white text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-600 hover:text-white transition-colors"
              >
                ← Back
              </button>
              {content.sections.map((section, idx) => (
                <a
                  key={idx}
                  href={`#section-${idx}`}
                  className="block text-base font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-px bg-gradient-to-b from-transparent via-red-500 to-transparent"></div>

          {/* Right Main Content Area */}
          <div className="flex-1 space-y-12">
            {content.sections.map((section, idx) => (
              <div key={idx} id={`section-${idx}`} className="scroll-mt-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <div className="prose prose-gray max-w-none">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
  // ------------------------------------------------------------------
  // SHIPPING POLICY CONTENT (UPDATED FROM DOCUMENT)
  // ------------------------------------------------------------------
  const shippingContent = {
    sections: [
      {
        title: " Order Processing",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>Please allow up to **24 hours** for order processing, subject to product availability and payment verification[cite: 78].</p>
            [cite_start]<p>Once an order has been confirmed, it **cannot be modified or cancelled**[cite: 79].</p>
            [cite_start]<p>Orders are processed and shipped from **Maharashtra, India**, excluding weekends and public holidays[cite: 79].</p>
            [cite_start]<p>Customers will receive an **order confirmation email** upon successful checkout and a **shipping confirmation** with tracking details once the order is dispatched[cite: 79].</p>
            [cite_start]<p>**INKPHYOUS** reserves the right to cancel any order at its discretion for security or verification reasons[cite: 80].</p>
          </div>
        )
      },
      {
        title: " Pre-Orders",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>Pre-order items will be shipped upon arrival at our facility[cite: 82].</p>
            [cite_start]<p>All pre-orders are charged at checkout and are **non-cancellable and non-refundable**[cite: 83].</p>
            [cite_start]<p>For assistance, contact **info@inkphyous.com**[cite: 83].</p>
          </div>
        )
      },
      {
        title: " Shipping",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p><strong>Domestic Orders:</strong> Complimentary standard delivery within **3–5 business days** after dispatch[cite: 85].</p>
            [cite_start]<p><strong>International Orders:</strong> Shipped via **DHL/UPS or equivalent**[cite: 86]. [cite_start]Duties, taxes, and fees are the customer's responsibility[cite: 87].</p>
            [cite_start]<p>Delivery times are estimates and exclude processing periods[cite: 87]. [cite_start]**INKPHYOUS** is not liable for delays due to customs or courier issues[cite: 88].</p>
          </div>
        )
      },
      {
        title: " Lost or Damaged Shipments",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>Once an order is marked as delivered by the courier, **INKPHYOUS** assumes no liability for loss, theft, or damage[cite: 90]. [cite_start]All transit risks rest with the courier partner[cite: 91].</p>
          </div>
        )
      },
      {
        title: " Final Sale",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>Items purchased during **sales or promotions** are **final sale** and not eligible for return, exchange, or refund[cite: 93].</p>
            [cite_start]<p>**INKPHYOUS** may modify or withdraw sale terms at any time without notice[cite: 94]. [cite_start]No price adjustments will be made for prior purchases[cite: 95].</p>
          </div>
        )
      },
      {
        title: " Customer Support",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>For any queries regarding orders, shipping, or delivery, please contact us on <a href="mailto:info@inkphyous.com" className="text-rose-600 hover:underline">info@inkphyous.com</a> or **fill out the form on our Contact Page**[cite: 97].</p>
          </div>
        )
      }
    ]
  };

  // ------------------------------------------------------------------
  // TERMS & CONDITIONS CONTENT (UPDATED FROM DOCUMENT)
  // ------------------------------------------------------------------
  const termsContent = {
    sections: [
      {
        title: " Introduction",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>Welcome to **Inkphyous.com** (“Website”), a website owned and operated by **Inkphyous, LLC** (“Inkphyous,” “we,” or “us”)[cite: 4]. [cite_start]These **Terms of Use** and our **Privacy Policy** apply to all visitors, users, and others who access or use this Website (“Users” or “you”)[cite: 5].</p>
            [cite_start]<p>By accessing or using this Website and/or purchasing products through it, you agree to comply with and be bound by these Terms of Use and our Privacy Policy[cite: 13]. [cite_start]If you do not agree to these Terms of Use or the Privacy Policy, you must not access or use this Website[cite: 14].</p>
            [cite_start]<p>Last updated on [Insert Date][cite: 2].</p>
          </div>
        )
      },
      {
        title: " Eligibility to Use",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>You must be at least **16 years old** to use this Website[cite: 16]. [cite_start]By using the Website, you represent that you meet this age requirement[cite: 17].</p>
            [cite_start]<p>We reserve the right to terminate access if a user is underage or otherwise legally incapacitated[cite: 18].</p>
          </div>
        )
      },
      {
        title: " Account and Membership",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>You may freely browse our website without creating an account[cite: 20]. [cite_start]However, to make a purchase or proceed to checkout, you will be required to log in or create an account using accurate, current, and complete information[cite: 21].</p>
            [cite_start]<p>We may revoke or terminate your registration at any time, without notice, at our discretion[cite: 23].</p>
          </div>
        )
      },
      {
        title: " Electronic Communications",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>By using the Website or communicating with us electronically, you consent to receive communications electronically from us[cite: 25].</p>
          </div>
        )
      },
      {
        title: " Conduct and Comments",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>You agree to use the Website lawfully and responsibly. You will not post or submit content that is unlawful, infringing, abusive, defamatory, obscene, threatening, or contains viruses or spam[cite: 27].</p>
            [cite_start]<p>All comments, reviews, feedback, or submissions (“Comments”) become our exclusive property[cite: 28]. [cite_start]We may use, reproduce, modify, publish, or distribute them without obligation to you[cite: 29].</p>
            [cite_start]<p>We reserve the right (but are not obligated) to monitor, edit, or remove any Comments[cite: 31].</p>
          </div>
        )
      },
      {
        title: " Intellectual Property",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>All content on the Website, including text, graphics, logos, images, and software, is the property of **Inkphyous** and is protected under intellectual property laws[cite: 33].</p>
            [cite_start]<p>You may not reproduce, distribute, or create derivative works from content without express written permission[cite: 34].</p>
          </div>
        )
      },
      {
        title: " Product Information and Accuracy",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>We strive to display products accurately, but colors, sizes, and details may vary due to display devices or other factors[cite: 36].</p>
            [cite_start]<p>Product descriptions, pricing, and availability are subject to change without notice[cite: 37].</p>
            [cite_start]<p>We reserve the right to limit quantities, modify product information, or refuse/cancel orders in cases of error, unless the product has already been dispatched[cite: 38].</p>
          </div>
        )
      },
      {
        title: " Orders and Payments",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>By placing an order, you agree to provide complete and accurate purchase and account information[cite: 40].</p>
            <p>Payment must be made at the time of purchase. [cite_start]All payments are non-refundable unless otherwise stated[cite: 41].</p>
            [cite_start]<p>We reserve the right to refuse or cancel orders, notifying you via the email provided[cite: 42].</p>
          </div>
        )
      },
      {
        title: " Shipping and Delivery",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>Shipping costs and delivery times vary based on your location and selected shipping method[cite: 44].</p>
            [cite_start]<p>We are not responsible for delays, loss, or damages occurring during shipping[cite: 45].</p>
            [cite_start]<p>Title and risk pass to you once the product is shipped to the carrier[cite: 46].</p>
          </div>
        )
      },
      {
        title: " Returns and Refunds",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>Please refer to our **Return Policy** for details[cite: 48]. [cite_start]All sales are final unless otherwise stated in our Return Policy[cite: 49].</p>
          </div>
        )
      },
      {
        title: " Limitation of Liability",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>Inkphyous is not liable for any direct or indirect damages arising from your use of the Website or products purchased through it[cite: 51].</p>
            [cite_start]<p>In no event shall our liability exceed the amount paid for the product[cite: 52].</p>
          </div>
        )
      },
      {
        title: " Pricing",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>Prices are displayed by default in **United Arab Emirates Dirhams (AED)** for customers in Dubai and in **Indian Rupees (INR)** for customers in India[cite: 54].</p>
            <p>All prices include applicable taxes but exclude shipping costs. [cite_start]You may change the displayed currency at any time using the currency selection option available at the bottom of the website[cite: 55].</p>
            [cite_start]<p>Prices may change at our discretion without prior notice[cite: 56].</p>
          </div>
        )
      },
      {
        title: " Payment Methods & Security",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>Accepted payment methods include:</p>
            <ul className="list-disc ml-6 space-y-1">
              [cite_start]<li>**Cash on Delivery (COD)** – additional charges may apply [cite: 59]</li>
              [cite_start]<li>**Credit/Debit Cards** – Visa, MasterCard, AMEX, Rupay, Maestro [cite: 60]</li>
              [cite_start]<li>**UPI Payments** – Google Pay, PhonePe, BHIM, etc. [cite: 61]</li>
              [cite_start]<li>**Wallets** – Paytm, Razorpay, etc. [cite: 62]</li>
            </ul>
            [cite_start]<p>Payments are securely processed using **SSL encryption**[cite: 63]. [cite_start]We never request account or payment details via email[cite: 64].</p>
          </div>
        )
      },
      {
        title: " Termination",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>We may suspend or terminate your access if you breach these Terms[cite: 66]. [cite_start]Termination does not affect accrued rights or obligations[cite: 67].</p>
            [cite_start]<p>Content and account information may be deleted without liability[cite: 68].</p>
          </div>
        )
      },
      {
        title: " Governing Law",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>These Terms and any agreements between you and Inkphyous are governed by the **laws of India**[cite: 70].</p>
          </div>
        )
      },
      {
        title: " Changes to Terms",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>We may update or modify these Terms at any time without notice[cite: 72].</p>
            [cite_start]<p>Continued use of the Website after changes constitutes acceptance of the updated Terms[cite: 73].</p>
          </div>
        )
      },
      {
        title: " Contact Information",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>For questions or concerns regarding these Terms, please contact us at: <a href="mailto:info@inkphyous.com" className="text-rose-600 hover:underline">info@inkphyous.com</a>[cite: 75].</p>
          </div>
        )
      }
    ]
  };

  // ------------------------------------------------------------------
  // RETURN & EXCHANGE POLICY CONTENT (UPDATED FROM DOCUMENT)
  // ------------------------------------------------------------------
  const returnsContent = {
    sections: [
      {
        title: " General Terms",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>This Return & Exchange Policy (“Policy”) governs all purchases made through **inkphyous.com** (“Website”) and the **INKPHYOUS Return & Exchange Portal**[cite: 100].</p>
            [cite_start]<p>By placing an order or initiating a return or exchange request, you acknowledge and agree to the terms of this Policy[cite: 100].</p>
            [cite_start]<p>The version applicable to your order will be the one in effect at the time of purchase[cite: 102].</p>
          </div>
        )
      },
      {
        title: " Returns and Exchanges",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>We accept return and exchange requests within **Five (5) days** from the date of delivery[cite: 104].</p>
            [cite_start]<p>Once your request has been reviewed and approved, our logistics partner will schedule a collection within **24–48 hours**, subject to service availability in your area[cite: 105]. [cite_start]Pickups will be attempted up to **two times**[cite: 106].</p>
            [cite_start]<p>If our courier partner is unable to complete the collection, you may be required to **return the shipment directly** to our warehouse[cite: 107]. [cite_start]Reverse pickup service is subject to availability based on your area’s pincode coverage[cite: 108].</p>
            [cite_start]<p>Returned products undergo a mandatory **Quality Check (QC)** upon receipt[cite: 109]. [cite_start]Products must be returned in **unused, unwashed, and undamaged** condition, with original packaging, brand tags, and all accompanying accessories intact[cite: 111].</p>
            [cite_start]<p>If the requested size or item is unavailable, a **gift card** of equivalent value will be issued, redeemable for future online purchases[cite: 110].</p>
          </div>
        )
      },
      {
        title: " Cancellations and Refunds",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p><strong>Cash on Delivery (COD) Orders:</strong> May be cancelled only **prior to dispatch** from our warehouse[cite: 113].</p>
            [cite_start]<p><strong>Prepaid Orders:</strong> Are **final and non-refundable** once confirmed[cite: 114].</p>
            [cite_start]<p>Refunds, where applicable, will be issued as **gift cards** valid for **six (6) months** from the date of issue[cite: 114]. [cite_start]Shipping and handling charges are non-refundable[cite: 114].</p>
          </div>
        )
      },
      {
        title: " Product Quality Concerns",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>**INKPHYOUS** offers a **15-day review period** for genuine product issues such as color fading, print cracking, or manufacturing defects[cite: 116].</p>
            [cite_start]<p>If reported within this period, we will arrange a pickup and provide an appropriate resolution in the form of replacement or store credit[cite: 116]. [cite_start]Requests submitted after the 15-day period will not be eligible for return or compensation[cite: 116].</p>
          </div>
        )
      },
      {
        title: " Conditions for Acceptance",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>Return or exchange requests will only be accepted if the following criteria are met:</p>
            <ul className="list-disc ml-6 space-y-1">
              [cite_start]<li>The item is in its original condition, with no signs of use, odor, or damage[cite: 119].</li>
              [cite_start]<li>All brand labels, packaging, and accessories are intact[cite: 120].</li>
              [cite_start]<li>Products purchased as sets are returned in full[cite: 121].</li>
              [cite_start]<li>The return is initiated against the same order and verified by **INKPHYOUS** records[cite: 122].</li>
            </ul>
            [cite_start]<p>**INKPHYOUS** reserves the right to **decline any request** that fails to meet the above requirements[cite: 123].</p>
          </div>
        )
      },
      {
        title: " Customer Support",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            [cite_start]<p>For any assistance or clarification regarding returns, exchanges, or cancellations, please contact us on <a href="mailto:info@inkphyous.com" className="text-rose-600 hover:underline">info@inkphyous.com</a> or **fill out the form on our Contact Page**[cite: 125].</p>
            [cite_start]<p>Our team strives to respond to all queries within **24-48 business hours**[cite: 126].</p>
          </div>
        )
      }
    ]
  };
  
  // ------------------------------------------------------------------
  // PRIVACY POLICY CONTENT (KEPT AS ORIGINAL PLACEHOLDER)
  // ------------------------------------------------------------------
  const privacyContent = {
    sections: [
      {
        title: "Introduction",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p className="text-sm text-gray-500 mb-4">Effective Date: [Insert Date]<br />Last Updated: [Insert Date]</p>
            <p>INKPHYOUS ("we," "our," "us") values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, <a href="https://www.inkphyous.com" className="text-rose-600 hover:underline">www.inkphyous.com</a> ("Website").</p>
            <p>By accessing or using our Website, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.</p>
          </div>
        )
      },
      {
        title: "Information We Collect",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>We may collect the following types of information to provide you with a seamless and secure shopping experience:</p>
            <div className="ml-4 space-y-4">
              <div>
                <p className="font-semibold">a. Personal Information</p>
                <p>When you make a purchase or interact with our Website, we may collect details such as your:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Shipping and billing address</li>
                  <li>Payment information</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">b. Non-Personal Information</p>
                <p>We may collect non-identifiable information automatically through cookies or analytics tools, including:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Browser type and version</li>
                  <li>IP address</li>
                  <li>Device information</li>
                  <li>Pages visited and duration of visit</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">c. Transactional Information</p>
                <p>We collect purchase-related details, including your order history, returns, and product preferences, to enhance your shopping experience.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "How We Use Your Information",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>We use your information only for legitimate business purposes, including to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Process and Fulfill Orders:</strong> To confirm your purchases, process payments, arrange shipping, manage returns, and provide order updates.</li>
              <li><strong>Enhance User Experience:</strong> To analyze browsing patterns, improve website performance, and optimize our services.</li>
              <li><strong>Marketing and Communications:</strong> With your consent, to send you promotional offers, product updates, or newsletters.</li>
              <li><strong>Compliance and Protection:</strong> To comply with legal obligations, prevent fraud, enforce our policies, and respond to lawful requests by public authorities.</li>
            </ul>
          </div>
        )
      },
      {
        title: "Sharing Your Information",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>We respect your privacy and only share your personal data as necessary for business and legal purposes.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party vendors who assist us in operating our Website, processing payments, delivering products, or providing other services. These providers are contractually obligated to protect your data and use it solely for the purposes specified by us.</li>
              <li><strong>Order Fulfillment:</strong> We may share relevant details (e.g., name, shipping address, payment details) with carriers or payment processors to complete your purchase.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information when required by law or in response to valid legal requests, including those related to national security or law enforcement.</li>
              <li><strong>No Sale of Data:</strong> We do not sell, rent, or trade your personal information to third parties.</li>
            </ul>
          </div>
        )
      },
      {
        title: "Data Security",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes secure payment gateways, encryption technologies, and other industry-standard security practices.</p>
            <p>However, please note that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
          </div>
        )
      },
      {
        title: "Your Rights",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>You have the right to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Access and review the personal data we hold about you</li>
              <li>Request corrections or updates to inaccurate or incomplete information</li>
              <li>Request deletion of your data, subject to applicable legal obligations</li>
            </ul>
            <p className="mt-3">To exercise these rights, please contact us at <a href="mailto:info@inkphyous.com" className="text-rose-600 hover:underline">info@inkphyous.com</a>.</p>
          </div>
        )
      },
      {
        title: "Cookies",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>Our Website uses cookies to personalize and enhance your browsing experience. Cookies are small text files placed on your device that help us recognize your browser, store preferences, and analyze site performance.</p>
            <p>You may choose to disable cookies through your browser settings, but this may affect certain features or functionality of the Website.</p>
          </div>
        )
      },
      {
        title: "Changes to This Privacy Policy",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements. Any revisions will be posted on this page with an updated "Last Updated" date.</p>
            <p>We encourage you to review this policy periodically to stay informed about how we protect your information.</p>
          </div>
        )
      },
      {
        title: "Contact Us",
        content: (
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:</p>
            <p className="font-semibold">📧 Email: <a href="mailto:info@inkphyous.com" className="text-rose-600 hover:underline">info@inkphyous.com</a></p>
          </div>
        )
      }
    ]
  };

  if (activePage === 'home') {
    return renderHome();
  } else if (activePage === 'privacy') {
    return renderPolicyPage('Privacy Policy', privacyContent);
  } else if (activePage === 'terms') {
    return renderPolicyPage('Terms & Conditions', termsContent);
  } else if (activePage === 'shipping') {
    return renderPolicyPage('Shipping Policy', shippingContent);
  } else if (activePage === 'returns') {
    return renderPolicyPage('Return & Exchange Policy', returnsContent);
  }
}
import React, { useEffect, useState, useRef } from "react";

export default function LegalNotices() {
  const sections = [
    { id: "privacy-policy", title: "Privacy Policy" },
    { id: "terms-conditions", title: "Terms of Use" },
  ];

  const [activeSection, setActiveSection] = useState("privacy-policy");
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0.1 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white mt-12 text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 border-r border-gray-200 sticky top-0 h-screen p-6 overflow-y-auto">
          <h2 className="text-sm font-semibold tracking-widest text-gray-500 mb-8">
            LEGAL NOTICES
          </h2>
          <ul className="space-y-5">
            {sections.map((section) => (
              <li
                key={section.id}
                className={`cursor-pointer transition-all duration-200 ${
                  activeSection === section.id
                    ? "text-black font-semibold"
                    : "text-gray-500 hover:text-black"
                }`}
                onClick={() => handleScrollTo(section.id)}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 md:p-16 space-y-24 overflow-y-auto">
          {/* Privacy Policy */}
          <section id="privacy-policy" className="scroll-mt-24">
            <h1 className="text-4xl font-semibold mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <div className="space-y-6 text-base leading-relaxed text-gray-700">
              <p><strong>Effective Date:</strong> [Insert Date]</p>
              <p><strong>Last Updated:</strong> [Insert Date]</p>

              <h3 className="text-2xl font-semibold mt-6">1. Introduction</h3>
              <p>
                INKPHYOUS (“we,” “our,” “us”) values your privacy and is committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, 
                www.inkphyous.com (“Website”). By accessing or using our Website, you acknowledge that you have read, understood, 
                and agree to be bound by this Privacy Policy.
              </p>

              <h3 className="text-2xl font-semibold mt-6">2. Information We Collect</h3>
              <p>We may collect the following types of information to provide you with a seamless and secure shopping experience:</p>

              <p><strong>a. Personal Information</strong></p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Shipping and billing address</li>
                <li>Payment information</li>
              </ul>

              <p><strong>b. Non-Personal Information</strong></p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Browser type and version</li>
                <li>IP address</li>
                <li>Device information</li>
                <li>Pages visited and duration of visit</li>
              </ul>

              <p><strong>c. Transactional Information</strong></p>
              <p>
                We collect purchase-related details, including your order history, returns, and product preferences, to enhance your shopping experience.
              </p>

              <h3 className="text-2xl font-semibold mt-6">3. How We Use Your Information</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Process and Fulfill Orders</li>
                <li>Enhance User Experience</li>
                <li>Marketing and Communications (with your consent)</li>
                <li>Compliance and Protection</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6">4. Sharing Your Information</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party vendors who assist in operations, payment, or shipping.</li>
                <li><strong>Order Fulfillment:</strong> Shared with carriers and processors as necessary.</li>
                <li><strong>Legal Requirements:</strong> Disclosed when required by law.</li>
                <li><strong>No Sale of Data:</strong> We do not sell, rent, or trade your personal data.</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6">5. Data Security</h3>
              <p>
                We implement appropriate technical and organizational measures such as secure payment gateways and encryption technologies to protect your data.
              </p>

              <h3 className="text-2xl font-semibold mt-6">6. Your Rights</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Access and review the personal data we hold about you</li>
                <li>Request corrections or updates</li>
                <li>Request deletion of your data, subject to legal obligations</li>
              </ul>
              <p>Contact us at <strong>info@inkphyous.com</strong> to exercise these rights.</p>

              <h3 className="text-2xl font-semibold mt-6">7. Cookies</h3>
              <p>
                Our Website uses cookies to personalize and enhance your experience. You may disable cookies via browser settings.
              </p>

              <h3 className="text-2xl font-semibold mt-6">8. Changes to This Privacy Policy</h3>
              <p>
                We may update this policy periodically. Revisions will be posted on this page with an updated “Last Updated” date.
              </p>

              <h3 className="text-2xl font-semibold mt-6">9. Contact Us</h3>
              <p>
                For questions, contact <strong>info@inkphyous.com</strong>.
              </p>
            </div>
          </section>

          {/* Terms of Use */}
          <section id="terms-conditions" className="scroll-mt-24">
            <h1 className="text-4xl font-semibold mb-6 tracking-tight">
              Terms of Use
            </h1>
            <div className="space-y-6 text-base leading-relaxed text-gray-700">
              <p><strong>Last Updated:</strong> [Insert Date]</p>

              <h3 className="text-2xl font-semibold mt-6">1. Introduction</h3>
              <p>
                Welcome to Inkphyous.com (“Website”), owned and operated by Inkphyous, LLC. 
                These Terms of Use and our Privacy Policy govern your use of our Website and services.
              </p>

              <h3 className="text-2xl font-semibold mt-6">2. Eligibility to Use</h3>
              <p>
                You must be at least 16 years old to use this Website. We may terminate access if the user is underage or legally incapacitated.
              </p>

              <h3 className="text-2xl font-semibold mt-6">3. Account and Membership</h3>
              <p>
                You may browse freely, but creating an account is required to make a purchase. 
                We reserve the right to revoke or terminate your registration without notice.
              </p>

              <h3 className="text-2xl font-semibold mt-6">4. Electronic Communications</h3>
              <p>By using the Website, you consent to receive electronic communications from us.</p>

              <h3 className="text-2xl font-semibold mt-6">5. Conduct and Comments</h3>
              <p>
                You must not post unlawful, defamatory, or harmful content. 
                All comments or feedback become our exclusive property.
              </p>

              <h3 className="text-2xl font-semibold mt-6">6. Intellectual Property</h3>
              <p>
                All content, including text, graphics, and software, is owned by Inkphyous and protected by intellectual property laws.
              </p>

              <h3 className="text-2xl font-semibold mt-6">7. Product Information and Accuracy</h3>
              <p>
                We strive for accuracy but product details and pricing may change without notice. 
                Orders may be refused or canceled in case of errors.
              </p>

              <h3 className="text-2xl font-semibold mt-6">8. Orders and Payments</h3>
              <p>
                Payments must be made at the time of purchase. Orders may be canceled if fraudulent or incorrect.
              </p>

              <h3 className="text-2xl font-semibold mt-6">9. Shipping and Delivery</h3>
              <p>
                Shipping costs and delivery times vary by location. We are not responsible for carrier delays or loss once shipped.
              </p>

              <h3 className="text-2xl font-semibold mt-6">10. Returns and Refunds</h3>
              <p>Refer to our Return Policy for details. All sales are final unless otherwise stated.</p>

              <h3 className="text-2xl font-semibold mt-6">11. Limitation of Liability</h3>
              <p>
                Inkphyous is not liable for indirect damages. 
                Total liability is limited to the amount paid for the product.
              </p>

              <h3 className="text-2xl font-semibold mt-6">12. Pricing</h3>
              <p>
                Prices are displayed in AED for UAE customers and INR for Indian customers. 
                Prices may change without notice and include applicable taxes.
              </p>

              <h3 className="text-2xl font-semibold mt-6">13. Payment Methods & Security</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Cash on Delivery (COD)</li>
                <li>Credit/Debit Cards (Visa, MasterCard, AMEX, Rupay, Maestro)</li>
                <li>UPI (Google Pay, PhonePe, BHIM)</li>
                <li>Wallets (Paytm, Razorpay, etc.)</li>
              </ul>
              <p>
                Payments are processed securely using SSL encryption. 
                We never request sensitive details via email.
              </p>

              <h3 className="text-2xl font-semibold mt-6">14. Termination</h3>
              <p>
                We may suspend or terminate your access for violations. 
                Account data may be deleted without liability.
              </p>

              <h3 className="text-2xl font-semibold mt-6">15. Governing Law</h3>
              <p>
                These Terms are governed by the laws of India.
              </p>

              <h3 className="text-2xl font-semibold mt-6">16. Changes to Terms</h3>
              <p>
                We may modify these Terms at any time. Continued use after changes implies acceptance.
              </p>

              <h3 className="text-2xl font-semibold mt-6">17. Contact Information</h3>
              <p>
                For questions, contact us at <strong>info@inkphyous.com</strong>.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

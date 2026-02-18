import { Card } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="w-full">
      <section className="container py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">
              Legal
            </span>
            <h1 className="text-5xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <Card className="p-8 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
            <p className="text-blue-900 dark:text-blue-100">
              FinVault Inc. ("we," "us," "our," or "the Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </Card>

          <div className="space-y-8">
            {[
              {
                title: "1. Information We Collect",
                content: `We collect information you provide directly to us, such as when you create an account, make a transaction, or contact our support team. This includes:
                
• Personal identification (name, email, phone number)
• Financial information (bank account details, investment preferences)
• Device and usage data (IP address, browser type, pages visited)
• Cookies and similar tracking technologies

We also collect information about your financial transactions and account activity to provide and improve our services.`,
              },
              {
                title: "2. How We Use Your Information",
                content: `We use the information we collect for the following purposes:

• To provide, maintain, and improve our services
• To process financial transactions securely
• To send transactional and promotional communications
• To comply with legal and regulatory obligations
• To detect and prevent fraud and unauthorized access
• To analyze trends and improve user experience
• To personalize your experience with tailored recommendations`,
              },
              {
                title: "3. Data Security",
                content: `We implement comprehensive security measures to protect your personal information:

• 256-bit AES encryption for data at rest
• TLS 1.3 for data in transit
• Multi-factor authentication
• Regular security audits and penetration testing
• Compliance with PCI DSS, SOC 2 Type II, and ISO 27001
• Regular backups and disaster recovery procedures

However, no method of data transmission is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.`,
              },
              {
                title: "4. Sharing Your Information",
                content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with:

• Service providers who assist us in operating our website and conducting business
• Financial institutions and payment processors necessary to fulfill transactions
• Law enforcement when required by law
• Other parties with your explicit consent
• As required by law or to protect our rights and safety

All third-party service providers are bound by confidentiality agreements and are only permitted to use your information as necessary to provide services to us.`,
              },
              {
                title: "5. Your Privacy Rights",
                content: `Depending on your location, you may have the following rights:

• Right to access your personal data
• Right to correct inaccurate data
• Right to delete your data (right to be forgotten)
• Right to restrict processing
• Right to data portability
• Right to withdraw consent
• Right to opt-out of marketing communications

To exercise any of these rights, please contact us at privacy@finvault.io.`,
              },
              {
                title: "6. GDPR Compliance (EU Users)",
                content: `For users in the European Union, FinVault complies with the General Data Protection Regulation (GDPR):

• We only process personal data with a valid legal basis
• We conduct Data Protection Impact Assessments for high-risk processing
• We have appointed a Data Protection Officer
• We provide Data Processing Agreements to customers
• We report data breaches within 72 hours when required
• We maintain records of all processing activities

If you have concerns about our GDPR compliance, you may contact your local data protection authority.`,
              },
              {
                title: "7. Cookies and Tracking",
                content: `We use cookies and similar tracking technologies to:

• Remember your preferences and login information
• Analyze how you use our services
• Improve website functionality
• Deliver personalized content
• Prevent fraud and enhance security

You can control cookie preferences through your browser settings. Disabling cookies may affect functionality.`,
              },
              {
                title: "8. Data Retention",
                content: `We retain your personal information for as long as necessary to:

• Provide our services
• Comply with legal and regulatory requirements
• Resolve disputes
• Enforce our agreements

Typically, we retain financial transaction data for 7 years as required by law. You can request deletion of your account and associated data at any time, subject to legal retention requirements.`,
              },
              {
                title: "9. Third-Party Services",
                content: `Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.`,
              },
              {
                title: "10. Children's Privacy",
                content: `FinVault's services are not offered to children under 18 years of age. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will delete such information immediately.`,
              },
              {
                title: "11. International Data Transfers",
                content: `Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country. We implement safeguards such as Standard Contractual Clauses to ensure appropriate protection.`,
              },
              {
                title: "12. Changes to This Privacy Policy",
                content: `We may update this Privacy Policy periodically to reflect changes in our practices. We will notify you of significant changes by posting the updated policy with a new "Last updated" date. Your continued use of our services after changes constitutes your acceptance of the updated Privacy Policy.`,
              },
              {
                title: "13. Contact Us",
                content: `If you have questions or concerns regarding this Privacy Policy or our privacy practices, please contact us:

Email: privacy@finvault.io
Mailing Address: FinVault Inc., 123 Financial District, Suite 100, San Francisco, CA 94105
Data Protection Officer: dpo@finvault.io
Phone: +1 (555) 123-4567

We will respond to your request within 30 days.`,
              },
            ].map((section, i) => (
              <div key={i} className="space-y-4">
                <h2 className="text-2xl font-bold">{section.title}</h2>
                <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <Card className="p-8 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 space-y-4">
            <h3 className="font-bold text-emerald-900 dark:text-emerald-100">Your Privacy Matters</h3>
            <p className="text-emerald-900 dark:text-emerald-100">
              Your privacy is a fundamental right, and we take our responsibility seriously. We're committed to transparency and maintaining the highest standards of data protection. If you have any concerns, please don't hesitate to contact us.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}

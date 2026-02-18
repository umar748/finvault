import { Card } from "@/components/ui/card";

export default function TermsConditions() {
  return (
    <div className="w-full">
      <section className="container py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">
              Legal
            </span>
            <h1 className="text-5xl font-bold">Terms & Conditions</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <Card className="p-8 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
            <p className="text-blue-900 dark:text-blue-100">
              Please carefully read these Terms and Conditions ("Terms") before accessing or using FinVault. By accessing and using FinVault, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </Card>

          <div className="space-y-8">
            {[
              {
                title: "1. Acceptance of Terms",
                content: `By creating an account and using FinVault, you agree to these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services. We reserve the right to modify these terms at any time. Continued use of our services following notification of changes constitutes acceptance of the modified terms.`,
              },
              {
                title: "2. Account Registration and Eligibility",
                content: `To use FinVault, you must:

• Be at least 18 years old
• Reside in a supported jurisdiction
• Have the legal capacity to enter into binding agreements
• Provide accurate, current, and complete information
• Maintain the confidentiality of your account credentials
• Not use false or misleading identity
• Comply with all applicable laws and regulations

You are solely responsible for all activities under your account. You agree to notify us immediately of unauthorized access.`,
              },
              {
                title: "3. Use of the Service",
                content: `You agree to use FinVault only for lawful purposes. You will not:

• Attempt to gain unauthorized access
• Interfere with the security or functionality of the service
• Reverse engineer or decompile any software
• Engage in any fraudulent or deceptive activity
• Transmit viruses, malware, or harmful code
• Use the service for market manipulation or insider trading
• Violate any third-party intellectual property rights
• Harass, abuse, or threaten other users
• Engage in money laundering or terrorist financing`,
              },
              {
                title: "4. Financial Transactions",
                content: `While we provide tools to track and manage your finances, FinVault does not:

• Offer financial advice or investment recommendations
• Execute transactions on your behalf without explicit authorization
• Guarantee investment returns or market outcomes
• Assume responsibility for your financial decisions
• Insure your investments or assets
• Provide tax or legal advice

You acknowledge that all investment decisions are made at your own risk and discretion. Past performance does not guarantee future results.`,
              },
              {
                title: "5. Fees and Payment",
                content: `Basic service is provided free of charge. Premium features may require payment of fees outlined in our Pricing page. By initiating payment, you authorize us to charge your payment method. Fees are non-refundable except as required by law. We reserve the right to modify fees with 30 days' notice. Billing disputes must be reported within 60 days of the charge.`,
              },
              {
                title: "6. Intellectual Property Rights",
                content: `FinVault owns all intellectual property associated with our platform, including:

• Website design and layout
• Software and source code
• Content, graphics, and imagery
• Trademarks and logos
• Databases and compilation of information

You retain ownership of content you create. By submitting content to FinVault, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute it for service improvement and operation.`,
              },
              {
                title: "7. Third-Party Services and Integrations",
                content: `FinVault may integrate with third-party services. We are not responsible for:

• Third-party service availability or reliability
• Third-party data handling practices
• Third-party technical issues or errors
• Unauthorized access to third-party services

You acknowledge that connecting third-party accounts is at your own risk. Review third-party terms before connecting.`,
              },
              {
                title: "8. Liability and Disclaimers",
                content: `OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL IMPLIED WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

WE ARE NOT LIABLE FOR:
• Data loss, corruption, or unauthorized access
• Investment losses or poor financial outcomes
• Third-party service failures
• Indirect, incidental, consequential, or punitive damages
• Interruptions in service

LIMITATION OF LIABILITY: OUR TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED THE FEES YOU PAID IN THE PRECEDING 12 MONTHS.`,
              },
              {
                title: "9. Indemnification",
                content: `You agree to indemnify and hold harmless FinVault from any claims, damages, losses, or expenses arising from:

• Your violation of these Terms
• Your use of the service
• Your violation of third-party rights
• Your content or information
• Your conduct or negligence`,
              },
              {
                title: "10. Termination",
                content: `You may terminate your account at any time. We may suspend or terminate your account immediately if you:

• Violate these Terms
• Engage in fraud or deception
• Pose a security risk
• Violate applicable laws
• Abuse our services

Upon termination, your right to use the service ceases. We may retain certain information as required by law.`,
              },
              {
                title: "11. Privacy and Data Protection",
                content: `Our Privacy Policy governs the collection and use of personal information. By using FinVault, you consent to our privacy practices as outlined in our separate Privacy Policy. You acknowledge that financial information is sensitive and agree to our security measures.`,
              },
              {
                title: "12. Regulatory Compliance",
                content: `FinVault complies with applicable financial regulations including:

• Anti-Money Laundering (AML) requirements
• Know Your Customer (KYC) regulations
• Securities laws where applicable
• Data protection laws (GDPR, CCPA, etc.)
• Banking regulations

We reserve the right to perform identity verification and financial compliance checks.`,
              },
              {
                title: "13. Dispute Resolution",
                content: `BINDING ARBITRATION: Any dispute arising from these Terms shall be resolved through binding arbitration in San Francisco, California, under JAMS rules.

EXCEPTIONS: The following are not subject to arbitration:
• Claims seeking injunctive relief
• Small claims disputes under $5,000
• Disputes with regulatory agencies

Arbitration shall be conducted by a single arbitrator with each party bearing its own costs.`,
              },
              {
                title: "14. Governing Law",
                content: `These Terms are governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. The UN Convention on Contracts for the International Sale of Goods does not apply.`,
              },
              {
                title: "15. Severability",
                content: `If any provision of these Terms is found to be unenforceable, that provision shall be severed and the remaining provisions shall continue in full force and effect.`,
              },
              {
                title: "16. Entire Agreement",
                content: `These Terms, together with our Privacy Policy, constitute the entire agreement between you and FinVault regarding the use of our services. These terms supersede all prior agreements.`,
              },
              {
                title: "17. Contact Information",
                content: `For questions about these Terms, please contact:

Email: legal@finvault.io
Mailing Address: FinVault Inc., 123 Financial District, Suite 100, San Francisco, CA 94105
Phone: +1 (555) 123-4567

We will respond to your inquiry within 30 days.`,
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

          <Card className="p-8 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 space-y-4">
            <h3 className="font-bold text-amber-900 dark:text-amber-100">Important Notice</h3>
            <p className="text-amber-900 dark:text-amber-100">
              Please review these Terms carefully. Your use of FinVault constitutes your acceptance of all terms. If you have any questions, contact us before proceeding. These terms are subject to change, and we encourage you to check back periodically.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}

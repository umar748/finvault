import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is FinVault and how does it work?",
      answer:
        "FinVault is a comprehensive wealth management platform that helps you track expenses, manage investments, and make informed financial decisions. Our AI-powered system analyzes your spending patterns and provides personalized recommendations to optimize your finances.",
    },
    {
      question: "Is my financial data secure?",
      answer:
        "Absolutely. We use bank-level encryption (AES-256) and comply with GDPR, HIPAA, and SOC 2 standards. Your data is never shared with third parties without explicit consent, and we employ multiple layers of security including 2FA and biometric authentication.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. We also offer annual billing with a 12% discount and flexible payment plans for Business tier customers.",
    },
    {
      question: "Can I switch plans or cancel anytime?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time, and changes take effect immediately. Cancellations are processed without penalties, though you forfeit any paid-in-advance balance for the remaining billing period.",
    },
    {
      question: "Do you offer an API for developers?",
      answer:
        "Yes, we provide comprehensive REST and GraphQL APIs with detailed documentation. API access is available on Pro and Business tiers, with custom rate limits and dedicated support for enterprise customers.",
    },
    {
      question: "How do I export my financial data?",
      answer:
        "You can export all your data in CSV, PDF, or JSON formats directly from your dashboard under Settings > Data Export. We also support automated exports to popular accounting software like QuickBooks and Xero.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Yes! FinVault is available on iOS and Android with full feature parity to the web platform. The mobile app includes offline access, biometric security, and push notifications for budget alerts.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee if you're not satisfied. For annual plans, you can request a refund within 60 days of purchase. No questions asked.",
    },
    {
      question: "Do you offer team/family accounts?",
      answer:
        "Yes, Business tier includes team collaboration features. You can invite up to 10 team members with customizable permissions. Family plans are also available with separate accounts but shared insights.",
    },
    {
      question: "Who should use FinVault?",
      answer:
        "FinVault is designed for anyone who wants to take control of their finances - from freelancers and entrepreneurs to families and investment professionals. Our tools scale from simple expense tracking to complex portfolio management.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-semibold mb-4">
            Help & Support
          </span>
          <h1 className="text-5xl font-bold tracking-tight mb-4 gradient-primary">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about FinVault's features, pricing, security, and more.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full px-6 py-3 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-slate-800"
          />
          <svg
            className="absolute right-4 top-3.5 h-5 w-5 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden hover:border-primary transition-colors duration-200 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200"
              >
                <span className="text-left font-semibold text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openItems.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openItems.includes(index) && (
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 sm:p-12 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
              <p className="text-muted-foreground mb-8">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="h-auto py-6 flex flex-col items-center gap-2"
                asChild
              >
                <a href="/contact">
                  <span className="text-2xl">💬</span>
                  <span className="font-semibold">Contact Support</span>
                  <span className="text-xs text-muted-foreground">Get in touch with our team</span>
                </a>
              </Button>

              <Button
                variant="outline"
                className="h-auto py-6 flex flex-col items-center gap-2"
                asChild
              >
                <a href="/blog">
                  <span className="text-2xl">📚</span>
                  <span className="font-semibold">Read Our Blog</span>
                  <span className="text-xs text-muted-foreground">Learn tips and best practices</span>
                </a>
              </Button>

              <Button
                variant="outline"
                className="h-auto py-6 flex flex-col items-center gap-2"
                asChild
              >
                <a href="https://status.finvault.com" target="_blank" rel="noopener noreferrer">
                  <span className="text-2xl">🚀</span>
                  <span className="font-semibold">Status Page</span>
                  <span className="text-xs text-muted-foreground">Check system status</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Browse by category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: "🔒", title: "Security & Privacy", items: 3 },
            { icon: "💳", title: "Billing & Payments", items: 4 },
            { icon: "📱", title: "Mobile App", items: 2 },
            { icon: "🔗", title: "Integrations", items: 5 },
            { icon: "📊", title: "Analytics & Reports", items: 4 },
            { icon: "👥", title: "Team Features", items: 3 },
          ].map((category, index) => (
            <div
              key={index}
              className="p-6 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="font-semibold mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.items} articles</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

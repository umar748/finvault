import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const [visible, setVisible] = useState(false);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  useEffect(() => setVisible(true), []);

  const plans = [
    {
      name: "Starter",
      price: billingCycle === "monthly" ? 0 : 0,
      period: "/month",
      description: "Perfect for individuals getting started",
      cta: "Start Free",
      link: "/dashboard",
      highlightCTA: false,
      features: [
        "Basic expense tracking",
        "1 connected account",
        "Mobile app access",
        "Basic insights",
      ],
      notIncluded: ["Advanced analytics", "Multiple portfolios", "Priority support"],
    },
    {
      name: "Pro",
      price: billingCycle === "monthly" ? 9 : 8,
      period: billingCycle === "monthly" ? "/month" : "/month (annual)",
      description: "For serious savers and investors",
      cta: "Get Started",
      link: "/dashboard",
      highlightCTA: true,
      features: [
        "All Starter features",
        "Unlimited accounts",
        "Advanced analytics",
        "Portfolio tracking",
        "Budget optimization",
        "Transaction categorization",
      ],
      notIncluded: ["Business team access", "Priority support"],
    },
    {
      name: "Business",
      price: billingCycle === "monthly" ? 49 : 44,
      period: billingCycle === "monthly" ? "/month" : "/month (annual)",
      description: "For teams and enterprises",
      cta: "Contact Sales",
      link: "/contact",
      highlightCTA: false,
      features: [
        "All Pro features",
        "Team access (up to 10)",
        "Advanced permissions",
        "Priority support",
        "Custom integrations",
        "API access",
        "Dedicated account manager",
      ],
      notIncluded: [],
    },
  ];

  const comparisonFeatures = [
    { name: "Basic Tracking", included: [true, true, true] },
    { name: "Multiple Accounts", included: [false, true, true] },
    { name: "Advanced Analytics", included: [false, true, true] },
    { name: "Portfolio Management", included: [false, true, true] },
    { name: "Investment Insights", included: [false, true, true] },
    { name: "Team Access", included: [false, false, true] },
    { name: "Priority Support", included: [false, false, true] },
    { name: "API Access", included: [false, false, true] },
    { name: "Custom Integrations", included: [false, false, true] },
  ];

  return (
    <div className={`w-full transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
      <div className="container py-24 space-y-20">
        {/* Header */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the right plan for your financial goals. No hidden fees, cancel anytime.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`text-sm font-semibold transition-colors ${
                billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`relative inline-flex items-center px-3 py-1 rounded-full transition-colors ${
                billingCycle === "annual"
                  ? "bg-primary text-primary-foreground"
                  : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              }`}
            >
              <span className="text-sm font-semibold">Annual</span>
              <span className="ml-2 text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-full">Save 12%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlightCTA
                  ? "ring-2 ring-primary shadow-xl scale-105 transform"
                  : "border bg-card hover:shadow-lg"
              } p-6 md:p-8 flex flex-col`}
            >
              {plan.highlightCTA && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>

                <div>
                  <span className="text-4xl font-extrabold">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>

                <Button
                  asChild
                  size="lg"
                  className={`w-full ${
                    plan.highlightCTA ? "" : "variant-outline"
                  }`}
                  variant={plan.highlightCTA ? "default" : "outline"}
                >
                  <Link to={plan.link}>{plan.cta}</Link>
                </Button>

                {/* Feature List */}
                <div className="space-y-3 pt-4 border-t">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}

                  {plan.notIncluded.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 opacity-50">
                      <X className="h-5 w-5 text-slate-400 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Detailed Comparison</h2>
            <p className="text-muted-foreground">See exactly what's included in each plan</p>
          </div>

          <Card className="p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 font-semibold">Features</th>
                  <th className="text-center py-4 px-4 font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold">Pro</th>
                  <th className="text-center py-4 px-4 font-semibold">Business</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr key={feature.name} className={i % 2 === 0 ? "bg-slate-50 dark:bg-slate-900/50" : ""}>
                    <td className="py-4 px-4 font-medium">{feature.name}</td>
                    {feature.included.map((included, idx) => (
                      <td key={idx} className="text-center py-4 px-4">
                        {included ? (
                          <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-slate-300 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Common Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about our plans</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Can I change plans anytime?",
                a: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
              },
              {
                q: "Do you offer refunds?",
                a: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.",
              },
              {
                q: "Is there a free trial?",
                a: "Our Starter plan is completely free forever. Upgrade to try Pro features risk-free.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay.",
              },
            ].map((faq) => (
              <div key={faq.q} className="p-6 rounded-xl border hover:shadow-md transition-all">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-emerald-500/10 border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-6">Join thousands of others managing their finances smarter with FinVault.</p>
          <Button asChild size="lg" className="rounded-full">
            <Link to="/login">Start Your Free Account</Link>
          </Button>
          <p className="text-xs text-muted-foreground mt-4">No credit card required. Cancel anytime.</p>
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm text-muted-foreground">
          <p>All plans include bank-level security, 24/7 support, and 99.9% uptime SLA.</p>
        </div>
      </div>
    </div>
  );
}

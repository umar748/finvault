import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, PieChart, Lock, Smartphone, Zap, BarChart3, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: PieChart,
      title: "Smart Expense Tracking",
      description: "Automatically categorize and track your spending with AI-powered insights. Understand where your money goes instantly.",
      features: ["Real-time tracking", "Auto categorization", "Spending insights", "Budget alerts"],
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      icon: TrendingUp,
      title: "Investment Management",
      description: "Build and manage diversified investment portfolios with zero commissions. Access global markets at your fingertips.",
      features: ["Zero commission", "Global markets", "Portfolio analytics", "Robo-advisor"],
      color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: Lock,
      title: "Bank-Level Security",
      description: "Your finances are protected with military-grade encryption and multi-layer security. Sleep soundly knowing you're safe.",
      features: ["256-bit encryption", "2FA authentication", "Biometric login", "24/7 monitoring"],
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    },
    {
      icon: Smartphone,
      title: "Multi-Platform Access",
      description: "Manage your finances on iOS, Android, Web, and Desktop. Seamlessly sync across all your devices.",
      features: ["Native iOS app", "Native Android app", "Web access", "Desktop app"],
      color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    },
    {
      icon: Zap,
      title: "Real-Time Alerts",
      description: "Stay informed with instant notifications for transactions, market movements, and budget milestones.",
      features: ["Transaction alerts", "Market updates", "Budget notifications", "Custom rules"],
      color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    },
    {
      icon: Globe,
      title: "Global Financial Services",
      description: "Access financial services across 75+ countries. Multi-currency support and international transfers.",
      features: ["Multi-currency", "International transfers", "75+ countries", "Local payment methods"],
      color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    },
  ];

  const tiers = [
    {
      name: "Basic",
      description: "Perfect for casual users",
      price: "Free",
      features: [
        "Expense tracking",
        "1 connected account",
        "Basic insights",
        "Mobile app",
        "Community support",
      ],
    },
    {
      name: "Pro",
      description: "For serious investors",
      price: "$9",
      period: "/month",
      features: [
        "Everything in Basic",
        "Unlimited accounts",
        "Advanced analytics",
        "Portfolio tracking",
        "Priority support",
        "API access",
      ],
      highlighted: true,
    },
    {
      name: "Business",
      description: "For teams & enterprises",
      price: "$49",
      period: "/month",
      features: [
        "Everything in Pro",
        "Team access (10+ users)",
        "Advanced permissions",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee",
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="container py-20 space-y-12">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">
            Our Services
          </span>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Everything you need to manage your wealth
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete suite of financial services designed to help you save, invest, and grow your wealth with confidence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container py-20 space-y-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="p-8 hover:shadow-lg transition-all duration-300 group">
                <div className={`h-12 w-12 rounded-lg ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Service Comparison */}
      <section className="container py-20 space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-muted-foreground text-lg">Select the service tier that best fits your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`p-8 relative ${
                tier.highlighted ? "ring-2 ring-primary shadow-xl scale-105" : "hover:shadow-lg transition-all"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{tier.description}</p>
                </div>
                <div>
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && <span className="text-muted-foreground ml-2">{tier.period}</span>}
                </div>
                <Button
                  asChild
                  size="lg"
                  variant={tier.highlighted ? "default" : "outline"}
                  className="w-full rounded-full"
                >
                  <Link to="/dashboard">Get Started</Link>
                </Button>
                <div className="space-y-3 pt-4 border-t">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <span className="text-primary">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Integration Section */}
      <section className="container py-20 space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Integrations</h2>
          <p className="text-muted-foreground text-lg">Connect with your favorite tools and services</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Stripe", "PayPal", "Square", "Wise", "Plaid", "Open Banking", "Excel Export", "API Access"].map((integration) => (
            <Card key={integration} className="p-6 text-center hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-slate-100 dark:bg-slate-800 mx-auto mb-4 flex items-center justify-center">
                <span className="text-sm font-semibold text-muted-foreground">{integration.substring(0, 2)}</span>
              </div>
              <p className="font-medium">{integration}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-emerald-500/10 border border-primary/20 p-12 md:p-16 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Start managing your finances today</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join millions of users who trust FinVault with their financial management. No credit card required.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link to="/login">Open Free Account</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { CheckCircle2, PieChart, Globe, ShieldCheck, Zap, Smartphone, Users, TrendingUp, Lock, Clock, BarChart3, Smartphone as PhoneIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Features() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  const mainFeatures = [
    {
      title: "Smart Budgeting",
      desc: "AI-powered categorization automatically tracks your spending patterns and suggests smarter budgets.",
      icon: PieChart,
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      title: "Global Investing",
      desc: "Access thousands of stocks, ETFs, crypto, and commodities with zero commission fees.",
      icon: Globe,
      color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
    {
      title: "Bank-Level Security",
      desc: "Military-grade encryption, biometric authentication, and 24/7 fraud monitoring.",
      icon: ShieldCheck,
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    },
    {
      title: "Real-time Alerts",
      desc: "Get instant notifications for transactions, market movements, and budget milestones.",
      icon: Zap,
      color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    },
    {
      title: "Multi-Device Sync",
      desc: "Seamlessly sync across all your devices with our native iOS, Android, and web apps.",
      icon: Smartphone,
      color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    },
    {
      title: "Expert Support",
      desc: "Get help whenever you need it with our 24/7 financial experts and in-app chat.",
      icon: Users,
      color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    },
  ];

  const detailedFeatures = [
    {
      title: "Enhanced Analytics",
      desc: "Deep insights into your spending, investment performance, and financial health.",
      icon: BarChart3,
    },
    {
      title: "Goal Tracking",
      desc: "Set and track financial goals with AI-powered recommendations to help you achieve them.",
      icon: TrendingUp,
    },
    {
      title: "Account Security",
      desc: "Two-factor authentication, encrypted connections, and regular security audits.",
      icon: Lock,
    },
    {
      title: "24/7 Availability",
      desc: "Access your finances anytime, anywhere with our mobile-first platform.",
      icon: Clock,
    },
  ];

  return (
    <div className={`w-full transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}>
      {/* Hero Section */}
      <div className="container py-20 space-y-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">Everything You Need</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              Powerful features built for you
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Tools that help you save, invest and grow — intelligent, secure, and delightful. Experience the future of personal finance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/dashboard">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                Request Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="features"
              className="rounded-2xl shadow-2xl object-cover h-96 w-full"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/20 to-transparent"></div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-center">Core Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-2xl border bg-card hover:shadow-xl hover:border-primary/50 transition-all duration-300 group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Features */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Explore in Detail</h2>
            <p className="text-muted-foreground text-lg">Additional highlights that make FinVault special</p>
          </div>

          {detailedFeatures.map((feature, i) => {
            const Icon = feature.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-12 items-center py-12 border-b last:border-b-0 ${isEven ? "lg:grid-flow-reverse" : ""}`}
              >
                <div>
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-primary/10 text-primary mb-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">{feature.desc}</p>
                  <div className="space-y-3">
                    {[
                      "Advanced algorithms",
                      "Machine learning powered",
                      "Privacy-first approach",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-emerald-500/20 flex items-center justify-center">
                    <Icon className="h-32 w-32 text-primary/30" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="space-y-12 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">What Users Say</h2>
            <p className="text-muted-foreground text-lg">Trusted by millions worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Chen",
                role: "Entrepreneur",
                text: "FinVault transformed how I manage my business finances. The insights are incredible.",
              },
              {
                name: "Marcus Johnson",
                role: "Investor",
                text: "Finally a platform that makes investing simple and accessible. Love the zero-commission feature!",
              },
              {
                name: "Emma Williams",
                role: "Freelancer",
                text: "The budgeting tools helped me save 30% more this year. Highly recommend!",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-6 rounded-xl border bg-card hover:shadow-md transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-amber-500 text-lg">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12 space-y-6">
          <h2 className="text-4xl font-bold">Ready to experience the difference?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with FinVault today and take control of your financial future.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link to="/login">Start for Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

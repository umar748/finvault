import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Globe, 
  PieChart, 
  Clock, 
  Users, 
  Smartphone,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 border-b">
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="outline" className="mb-4 py-1 px-4 text-primary border-primary/20 bg-primary/5 rounded-full">
                New: AI-Powered Portfolio Insights
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-600 dark:from-white dark:via-slate-200 dark:to-emerald-400">
                Master Your Money, <br />
                <span className="text-primary">Shape Your Future.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Join over 2 million people using FinVault to track, invest, and grow their wealth with confidence. The most intuitive finance platform for the modern era.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full gap-2 w-full sm:w-auto shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                  <Link to="/dashboard" className="flex items-center gap-2">
                    Open Free Account <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto hover:bg-slate-50 transition-all">
                  Watch Demo
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  No hidden fees
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  FCA Regulated
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Bank-level security
                </div>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-2xl lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <img 
                  src="https://images.pexels.com/photos/28682352/pexels-photo-28682352.jpeg" 
                  alt="FinVault Dashboard Preview" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-gradient-to-b from-primary/5 to-transparent blur-3xl opacity-50"></div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="container">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">Trusted by global leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-bold">TechFlow</span>
            <span className="text-2xl font-bold">NexusPay</span>
            <span className="text-2xl font-bold">CloudBank</span>
            <span className="text-2xl font-bold">NovaCapital</span>
            <span className="text-2xl font-bold">ZenthHub</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 md:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Everything you need to <br /><span className="text-primary">thrive financially</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We've built a comprehensive suite of tools designed to give you total control over your financial life, from daily spending to long-term investing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Smart Budgeting",
                desc: "Automatically categorize expenses and set intelligent limits that adapt to your lifestyle.",
                icon: PieChart,
                color: "bg-blue-500/10 text-blue-600"
              },
              {
                title: "Global Investing",
                desc: "Access thousands of stocks, ETFs, and commodities with zero commission fees.",
                icon: Globe,
                color: "bg-emerald-500/10 text-emerald-600"
              },
              {
                title: "Bank-Level Security",
                desc: "Your data and funds are protected by multi-layer encryption and biometric security.",
                icon: ShieldCheck,
                color: "bg-purple-500/10 text-purple-600"
              },
              {
                title: "Real-time Alerts",
                desc: "Get instant notifications for every transaction and market movement that matters.",
                icon: Zap,
                color: "bg-amber-500/10 text-amber-600"
              },
              {
                title: "Seamless Integration",
                desc: "Connect all your bank accounts, credit cards, and wallets in one unified dashboard.",
                icon: Smartphone,
                color: "bg-rose-500/10 text-rose-600"
              },
              {
                title: "24/7 Expert Support",
                desc: "Our financial experts are available around the clock to help you with any questions.",
                icon: Users,
                color: "bg-indigo-500/10 text-indigo-600"
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-3xl border bg-card hover:shadow-xl transition-all hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${feature.color}`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-extrabold mb-2">$12B+</div>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-wider text-sm">Assets Managed</p>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2">2.4M</div>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-wider text-sm">Active Users</p>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2">99.9%</div>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-wider text-sm">Uptime Reliability</p>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2">4.9/5</div>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-wider text-sm">App Store Rating</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border-2 border-white rounded-full"></div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Real results from real users</h2>
            <p className="text-lg text-muted-foreground">
              See how FinVault has helped customers achieve their financial goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                metric: "35%",
                story: "Reduction in accounting time",
                company: "NextGen Startup"
              },
              {
                metric: "$125K",
                story: "Revenue recovered through smart tax planning",
                company: "Global Consulting"
              },
              {
                metric: "47%",
                story: "Increase in investment returns",
                company: "Portfolio Partners"
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-3">{item.metric}</div>
                <p className="text-foreground font-semibold mb-2">{item.story}</p>
                <p className="text-sm text-muted-foreground">{item.company}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/case-studies">
                Read all case studies <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog/Resources Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Learn and grow with FinVault</h2>
            <p className="text-lg text-muted-foreground">
              Stay ahead with expert insights, tips, and best practices from our financial experts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "The Ultimate Guide to Index Fund Investing",
                category: "Investment",
                readTime: "8 min",
                date: "Feb 10, 2026"
              },
              {
                title: "How to Create a Zero-Based Budget",
                category: "Finance",
                readTime: "6 min",
                date: "Feb 8, 2026"
              },
              {
                title: "Automate Your Finances in 10 Minutes",
                category: "Automation",
                readTime: "5 min",
                date: "Feb 5, 2026"
              },
              {
                title: "Tax Season Hacks: Save Thousands This Year",
                category: "Taxes",
                readTime: "10 min",
                date: "Feb 1, 2026"
              }
            ].map((post, i) => (
              <div key={i} className="group p-6 rounded-2xl border bg-card hover:shadow-lg hover:border-primary transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime} read</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </div>
            ))}
          </div>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">Ready to explore more content?</p>
            <Button asChild size="lg">
              <Link to="/blog">
                Visit our blog <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Got questions? We've got answers</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to the most common questions about FinVault features and pricing.
            </p>
          </div>
          <div className="space-y-4 mb-12">
            {[
              "What is FinVault and how does it work?",
              "Is my financial data secure?",
              "Can I switch plans or cancel anytime?",
              "How do I export my financial data?"
            ].map((question, i) => (
              <div key={i} className="p-4 rounded-lg border bg-white dark:bg-slate-800 hover:border-primary transition-colors cursor-pointer">
                <p className="font-semibold text-foreground flex items-center justify-between">
                  {question}
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/faq">
                View all FAQs <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing/CTA Section */}
      <section id="pricing" className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto rounded-[3rem] p-8 md:p-16 bg-slate-900 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to take control?</h2>
              <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto">
                Join thousands of others who have transformed their relationship with money using FinVault.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-black hover:bg-slate-100 w-full sm:w-auto">
                  <Link to="/dashboard">Get Started for Free</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-slate-700 hover:bg-slate-800 w-full sm:w-auto">
                  <Link to="/contact">Talk to Sales</Link>
                </Button>
              </div>
              <p className="mt-8 text-sm text-slate-500">No credit card required. Cancel anytime.</p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

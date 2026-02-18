import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, PieChart, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseStudies() {
  const caseStudies = [
    {
      company: "NextGen Startup",
      industry: "Tech",
      challenge: "Managing finances across multiple revenue streams and international expenses",
      solution: "Implemented FinVault's multi-currency tracking and automated categorization",
      results: {
        icon: TrendingUp,
        metric: "35%",
        description: "Reduction in accounting time",
        details: "From 15 hours/week to 10 hours/week",
      },
      quote:
        "FinVault completely transformed how we manage our finances. What used to take days now takes hours.",
      author: "Sarah Johnson, CFO at NextGen Startup",
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
    },
    {
      company: "Global Consulting LLC",
      industry: "Consulting",
      challenge: "Tracking client expenses and generating billable hour reports",
      solution: "Used FinVault's API to integrate expense tracking with project management",
      results: {
        icon: BarChart3,
        metric: "$125K",
        description: "Additional revenue recovered",
        details: "From previously unbilled expenses in first year",
      },
      quote:
        "We recovered expenses we didn't even know we were losing. The ROI was immediate.",
      author: "Michael Chen, Finance Director",
      image: "bg-gradient-to-br from-emerald-400 to-emerald-600",
    },
    {
      company: "Portfolio Management Partners",
      industry: "Finance",
      challenge: "Consolidating client portfolios and providing real-time performance tracking",
      solution: "Deployed FinVault Business plan with team access and custom integrations",
      results: {
        icon: PieChart,
        metric: "47%",
        description: "Improvement in client satisfaction",
        details: "Measured through CSAT surveys",
      },
      quote:
        "Our clients now have better visibility into their assets than ever before. It's a competitive advantage.",
      author: "Jennifer Liu, Head of Operations",
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
    },
    {
      company: "Independent Financial Advisor",
      industry: "Advisory",
      challenge: "Managing personal finances while advising clients",
      solution: "Used FinVault Pro to model scenarios and demonstrate best practices",
      results: {
        icon: TrendingUp,
        metric: "28%",
        description: "Growth in client base",
        details: "Through word-of-mouth referrals",
      },
      quote:
        "FinVault lets me practice what I preach. I now recommend it to every client.",
      author: "David Martinez, Independent Financial Advisor",
      image: "bg-gradient-to-br from-amber-400 to-amber-600",
    },
  ];

  const metrics = [
    { label: "Active Case Studies", value: "500+" },
    { label: "Average Cost Savings", value: "$18K", period: "per year" },
    { label: "Customer Satisfaction", value: "4.9/5" },
    { label: "Success Rate", value: "96%", period: "within 6 months" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="container py-20 space-y-12">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">
            Success Stories
          </span>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Real Results from Real Customers
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how businesses and individuals are transforming their financial management with FinVault.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <Card key={metric.label} className="p-6 text-center hover:shadow-lg transition-all">
              <p className="text-4xl font-bold text-primary mb-2">{metric.value}</p>
              <p className="font-medium mb-1">{metric.label}</p>
              {metric.period && <p className="text-sm text-muted-foreground">{metric.period}</p>}
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="container py-20 space-y-16">
        {caseStudies.map((study, i) => {
          const ResultIcon = study.results.icon;
          const isEven = i % 2 === 0;

          return (
            <div
              key={study.company}
              className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "lg:grid-flow-reverse" : ""}`}
            >
              {/* Image/Visual */}
              <div className={`${study.image} h-96 rounded-2xl shadow-xl flex items-center justify-center`}>
                <div className="text-center text-white opacity-80">
                  <div className="text-6xl font-bold mb-4">{study.company.split(" ")[0][0]}</div>
                  <p className="text-lg font-semibold">{study.company}</p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                    {study.industry}
                  </span>
                  <h2 className="text-4xl font-bold mb-3">{study.company}</h2>
                  <p className="text-muted-foreground mb-6">{study.quote}</p>
                  <p className="text-sm text-muted-foreground italic">— {study.author}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">The Challenge</h3>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Solution</h3>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>

                  <div className="rounded-lg bg-gradient-to-r from-primary/10 to-emerald-500/10 border border-primary/20 p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <ResultIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-3xl font-bold">{study.results.metric}</p>
                        <p className="font-semibold">{study.results.description}</p>
                        <p className="text-sm text-muted-foreground mt-1">{study.results.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Implementation Timeline */}
      <section className="container py-20 space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Implementation Timeline</h2>
          <p className="text-muted-foreground text-lg">Typical customer journey to success</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {[
              { week: "Week 1", title: "Setup & Onboarding", desc: "Account setup, integrations, and team training" },
              { week: "Week 2-3", title: "Data Import", desc: "Historical data migration and reconciliation" },
              { week: "4-8", title: "Optimization", desc: "Fine-tuning workflows and customization" },
              { week: "8+", title: "Growth & Expansion", desc: "Advanced features and team scaling" },
            ].map((phase) => (
              <Card key={phase.week} className="p-6 hover:shadow-lg transition-all">
                <div className="flex gap-4 items-start">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">
                    {phase.week}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{phase.title}</h3>
                    <p className="text-muted-foreground mt-1">{phase.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-emerald-500 text-white p-12 md:p-16 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to write your success story?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join hundreds of successful companies using FinVault to transform their financial management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-primary hover:bg-slate-100"
            >
              <Link to="/dashboard">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white text-white hover:bg-white/10"
            >
              <Link to="/contact">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

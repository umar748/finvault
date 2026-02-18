import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, DollarSign, Users, Zap, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Careers() {
  const openPositions = [
    {
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$180K - $240K",
      description:
        "Build scalable financial software that serves millions of users. Work with React, Node.js, and cloud infrastructure.",
      tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      salary: "$150K - $190K",
      description:
        "Lead product strategy and roadmap. Shape the future of fintech. Work closely with engineering and design.",
      tags: ["SaaS", "Fintech", "Product Strategy"],
    },
    {
      title: "Security Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$170K - $210K",
      description:
        "Ensure security of financial data. Implement compliance frameworks, conduct audits, and lead security initiatives.",
      tags: ["Security", "Compliance", "GDPR", "SOC2"],
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      salary: "$80K - $110K",
      description:
        "Help our customers succeed. Build relationships, identify growth opportunities, and drive retention.",
      tags: ["Customer Success", "B2B", "Account Management"],
    },
    {
      title: "Frontend Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$140K - $190K",
      description:
        "Create beautiful, responsive interfaces. Work on React, mobile apps, and design systems.",
      tags: ["React", "UI/UX", "Mobile", "TypeScript"],
    },
    {
      title: "Data Scientist",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$160K - $220K",
      description:
        "Build ML models for fraud detection, insights, and recommendations. Work with large financial datasets.",
      tags: ["Machine Learning", "Python", "Analytics"],
    },
  ];

  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "We encourage creative thinking and experimentation to solve complex problems.",
    },
    {
      icon: Globe,
      title: "Transparency",
      description: "Open communication and clear goals guide our decision-making.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe the best solutions come from diverse perspectives working together.",
    },
  ];

  const benefits = [
    "Competitive salary and equity",
    "Comprehensive health insurance (medical, dental, vision)",
    "401(k) matching",
    "Unlimited PTO",
    "Work from home flexibility",
    "Professional development budget",
    "Gym membership",
    "Parental leave",
    "Mental health support",
    "Free meals and snacks",
    "Team events and retreats",
    "Stock options",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="container py-20 space-y-12">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">
            We're Hiring
          </span>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Join the FinVault Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us build the future of financial technology. We're looking for talented, passionate people to join our growing team.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="container py-20 space-y-12">
        <h2 className="text-4xl font-bold text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title} className="p-8 text-center hover:shadow-lg transition-all">
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-20 space-y-12">
        <h2 className="text-4xl font-bold text-center">Why Join FinVault?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3">
              <span className="h-5 w-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
                ✓
              </span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="container py-20 space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
          <p className="text-muted-foreground text-lg">We currently have {openPositions.length} open roles</p>
        </div>

        <div className="space-y-4">
          {openPositions.map((position) => (
            <Card key={position.title} className="p-6 hover:shadow-lg transition-all cursor-pointer">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl font-bold">{position.title}</h3>
                    <Badge variant="outline" className="rounded-full">
                      {position.type}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground">{position.description}</p>

                  <div className="flex items-center gap-4 flex-wrap text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {position.department}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {position.salary}
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap pt-2">
                    {position.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button asChild className="rounded-full gap-2 whitespace-nowrap">
                  <Link to={`/contact?job=${encodeURIComponent(position.title)}`}>
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="container py-20 space-y-12">
        <h2 className="text-4xl font-bold text-center">Our Culture</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8 space-y-4">
            <h3 className="text-2xl font-bold">Remote-First</h3>
            <p className="text-muted-foreground leading-relaxed">
              We're building a remote-first company where talented people can work from anywhere. Flexible schedules and async-first communication ensure work-life balance.
            </p>
          </Card>

          <Card className="p-8 space-y-4">
            <h3 className="text-2xl font-bold">Growth Focused</h3>
            <p className="text-muted-foreground leading-relaxed">
              We invest in our team's development. Professional development budget, mentorship, and clear career paths ensure continuous growth.
            </p>
          </Card>

          <Card className="p-8 space-y-4">
            <h3 className="text-2xl font-bold">Impact Driven</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your work matters. You'll directly impact millions of users and have a voice in shaping our product and company direction.
            </p>
          </Card>

          <Card className="p-8 space-y-4">
            <h3 className="text-2xl font-bold">Diverse & Inclusive</h3>
            <p className="text-muted-foreground leading-relaxed">
              We celebrate diversity, equity, and inclusion. Everyone's perspective is valued and we actively work to build a welcoming environment.
            </p>
          </Card>
        </div>
      </section>

      {/* Interview Process */}
      <section className="container py-20 space-y-12">
        <h2 className="text-4xl font-bold text-center">Our Hiring Process</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              step: 1,
              title: "Apply",
              description: "Submit your application with resume and cover letter",
            },
            {
              step: 2,
              title: "Phone Screen",
              description: "30-minute call with our recruiting team",
            },
            {
              step: 3,
              title: "Technical Interview",
              description: "Role-specific assessment (varies by position)",
            },
            {
              step: 4,
              title: "Team Interview",
              description: "Meet with team members and hiring manager",
            },
            {
              step: 5,
              title: "Offer",
              description: "Receive offer and negotiate terms",
            },
          ].map((phase) => (
            <Card key={phase.step} className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  {phase.step}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{phase.title}</h3>
                  <p className="text-muted-foreground mt-1">{phase.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-emerald-500 text-white p-12 md:p-16 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Don't see the right role?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white text-primary hover:bg-slate-100"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

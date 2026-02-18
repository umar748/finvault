import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "5 Investment Mistakes to Avoid in 2024",
      excerpt:
        "Learn the most common investment mistakes and how to avoid them. From over-trading to ignoring diversification, we cover it all.",
      category: "Investment",
      author: "Sarah Chen",
      date: "Feb 15, 2026",
      readTime: "5 min read",
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
    },
    {
      id: 2,
      title: "The Complete Guide to Emergency Funds",
      excerpt:
        "Understand how much you should save, where to keep it, and how to build your emergency fund systematically.",
      category: "Finance",
      author: "Marcus Johnson",
      date: "Feb 12, 2026",
      readTime: "8 min read",
      image: "bg-gradient-to-br from-emerald-400 to-emerald-600",
    },
    {
      id: 3,
      title: "How to Automate Your Savings Strategy",
      excerpt:
        "Stop thinking about saving and start automating it. Discover the best tools and strategies for automated savings.",
      category: "Automation",
      author: "Emma Williams",
      date: "Feb 10, 2026",
      readTime: "6 min read",
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
    },
    {
      id: 4,
      title: "Understanding Crypto Investments",
      excerpt:
        "A beginner's guide to cryptocurrency investing: risks, rewards, and how to get started responsibly.",
      category: "Investment",
      author: "David Martinez",
      date: "Feb 8, 2026",
      readTime: "10 min read",
      image: "bg-gradient-to-br from-amber-400 to-amber-600",
    },
    {
      id: 5,
      title: "Tax-Efficient Investing Strategies",
      excerpt:
        "Minimize your tax burden while maximizing returns. Learn strategies FinVault users are using to optimize taxes.",
      category: "Taxes",
      author: "Sarah Chen",
      date: "Feb 5, 2026",
      readTime: "7 min read",
      image: "bg-gradient-to-br from-pink-400 to-pink-600",
    },
    {
      id: 6,
      title: "The Power of Compound Interest",
      excerpt:
        "Albert Einstein called it the eighth wonder of the world. Learn why compound interest is your wealth-building superpower.",
      category: "Finance",
      author: "Michael Chen",
      date: "Feb 1, 2026",
      readTime: "4 min read",
      image: "bg-gradient-to-br from-green-400 to-green-600",
    },
  ];

  const categories = ["All", "Investment", "Finance", "Automation", "Taxes"];

  const filteredPosts = selectedCategory && selectedCategory !== "All"
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  const resources = [
    {
      title: "Financial Planning Checklist",
      description: "A comprehensive checklist for financial planning and optimization",
      type: "PDF",
    },
    {
      title: "Investment Portfolio Template",
      description: "Ready-to-use spreadsheet for tracking your investment portfolio",
      type: "Excel",
    },
    {
      title: "Budget Planning Guide",
      description: "Step-by-step guide to create and maintain a healthy budget",
      type: "Guide",
    },
    {
      title: "Savings Goals Tracker",
      description: "Track your progress toward financial goals with this template",
      type: "Excel",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="container py-20 space-y-12">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">
            Blog & Resources
          </span>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Financial Insights & Tips
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert advice, industry insights, and practical tips to help you master your finances.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="container py-20 space-y-12">
        {/* Categories */}
        <div className="flex gap-3 flex-wrap justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === "All" ? null : category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                (!selectedCategory && category === "All") || selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-slate-100 dark:bg-slate-800 text-muted-foreground hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all group cursor-pointer">
              <div className={`${post.image} h-48 group-hover:opacity-90 transition-opacity`}></div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Tag className="h-3 w-3 text-primary" />
                  <span className="text-sm font-semibold text-primary">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                <div className="pt-4 border-t space-y-3">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{post.readTime}</p>
                </div>
                <Button variant="ghost" className="w-full gap-2 justify-center rounded-full text-primary">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="container py-20">
        <Card className="p-12 md:p-16 bg-gradient-to-r from-primary/10 to-emerald-500/10 border-primary/20 space-y-6 text-center">
          <h2 className="text-3xl font-bold">Get Financial Insights Delivered</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly tips, market insights, and exclusive resources.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-full"
            />
            <Button className="rounded-full gap-2">
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </Card>
      </section>

      {/* Resources Section */}
      <section className="container py-20 space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Free Resources</h2>
          <p className="text-muted-foreground text-lg">Download templates and guides to manage your finances better</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <Card key={resource.title} className="p-6 hover:shadow-lg transition-all group cursor-pointer space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <span className="text-sm font-bold">{resource.type.substring(0, 2).toUpperCase()}</span>
              </div>
              <div>
                <h3 className="font-bold group-hover:text-primary transition-colors">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{resource.description}</p>
              </div>
              <Button variant="ghost" className="w-full rounded-full gap-2 justify-center text-primary">
                Download
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Resource */}
      <section className="container py-20">
        <Card className="p-12 md:p-16 space-y-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Featured Guide
              </span>
              <h2 className="text-4xl font-bold mb-6">The Complete Personal Finance Blueprint</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our comprehensive guide to building a solid financial foundation. From budgeting to investing, learn strategies used by thousands of successful users.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Master your budget in 30 days",
                  "Build an emergency fund",
                  "Start investing with confidence",
                  "Plan for retirement",
                  "Optimize your taxes",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center text-sm">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="rounded-full gap-2">
                Download Free Guide
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">📊</div>
                <p className="text-muted-foreground">Financial Blueprint Preview</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-emerald-500 text-white p-12 md:p-16 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to level up your finances?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Combine these insights with FinVault's tools to transform your financial life.
          </p>
          <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-slate-100">
            <Link to="/dashboard">Get Started Free</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

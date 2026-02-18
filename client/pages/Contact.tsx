import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageSquare, Zap } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a server
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "support@finvault.io",
      description: "Fastest way to reach our support team",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call us Monday to Friday, 9 AM - 6 PM EST",
      color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: MapPin,
      title: "Headquarters",
      value: "San Francisco, CA",
      description: "123 Financial District, Suite 100",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    },
    {
      icon: Clock,
      title: "Support Hours",
      value: "24/7 Live Chat",
      description: "AI-powered + human support round the clock",
      color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    },
  ];

  const faqItems = [
    {
      q: "How quickly will I receive a response?",
      a: "Our support team typically responds within 2 hours during business hours, and 24 hours on weekends.",
    },
    {
      q: "Do you offer phone support?",
      a: "Yes! Pro and Business plans include priority phone support. Basic users have email and chat support.",
    },
    {
      q: "How can I report a security issue?",
      a: "For security concerns, please email security@finvault.io. We take all reports seriously and investigate promptly.",
    },
    {
      q: "What if I need enterprise solutions?",
      a: "Contact our sales team for custom enterprise packages. We serve Fortune 500 companies and large institutions.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="container py-20 space-y-12">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">
            Contact & Support
          </span>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            We're here to help
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Our team is available 24/7 to assist you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Card key={method.title} className="p-6 hover:shadow-lg transition-all">
                <div className={`h-12 w-12 rounded-lg ${method.color} flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-1">{method.title}</h3>
                <p className="text-primary font-semibold mb-2">{method.value}</p>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container py-20">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Send us a message</h2>
                <p className="text-muted-foreground">Fill out the form and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                    className="mt-1"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6">Quick Links</h2>
              </div>

              <Card className="p-6 bg-gradient-to-br from-primary/5 to-emerald-500/5 border-primary/20">
                <div className="flex gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Live Chat Support</h3>
                    <p className="text-sm text-muted-foreground mt-1">Click the chat icon in the bottom right corner</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full rounded-full">
                  Start Chat
                </Button>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Status Page</h3>
                    <p className="text-sm text-muted-foreground mt-1">Check platform status and incidents</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full rounded-full">
                  View Status
                </Button>
              </Card>

              {/* Response Time */}
              <Card className="p-6 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-2">Average Response Time</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">2h</span>
                  <span className="text-sm text-blue-700 dark:text-blue-300">during business hours</span>
                </div>
                <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">24h on weekends</p>
              </Card>

              {/* Features */}
              <div className="space-y-3">
                <p className="text-sm font-semibold">What to expect:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Professional response
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Technical expertise
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Personalized solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-20 bg-gradient-to-b from-slate-50 dark:from-slate-900/50 -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
            <p className="text-muted-foreground text-lg">Find quick answers to frequently asked questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, i) => (
              <Card key={i} className="p-6 hover:shadow-md transition-all">
                <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

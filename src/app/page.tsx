"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Blocks, Cog, Handshake, MessageSquare, Workflow, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const features = [
    {
      title: "Bespoke Solutions",
      description: "We deliver bespoke solutions, not templates, engineered exactly for your unique needs.",
      icon: <Blocks className="h-6 w-6 text-primary" />,
    },
    {
      title: "Workflow Understanding",
      description: "We pride ourselves on our deep business workflow understanding to solve your real problems.",
      icon: <Workflow className="h-6 w-6 text-primary" />,
    },
    {
      title: "Clear Communication",
      description: "You'll always receive honest, clear technical communication without the confusing jargon.",
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
    },
    {
      title: "Lasting Commitment",
      description: "We provide true partnership and unwavering commitment well beyond deployment.",
      icon: <Handshake className="h-6 w-6 text-primary" />,
    },
    {
      title: "Engineering-First",
      description: "We apply a rigorous, engineering-first approach to robust system automation.",
      icon: <Cog className="h-6 w-6 text-primary" />,
    },
    {
      title: "Future-Ready Scalability",
      description: "We build with the next five years in mind. Our modular architecture ensures your tech stack grows effortlessly alongside your business.",
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
    },
  ];
  const clients = [
    { name: "Polaris", logo: "/clients/polaris.png" },
    { name: "IntelliSmart", logo: "/clients/intellismart.jpg" },
    { name: "DTG Infranext", logo: "/clients/dtg-infranext.png" },
    { name: "IPS e Services", logo: "/clients/ips-e-services.png" },
    { name: "Study Gate", logo: "/clients/study-gate.png" },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col justify-center items-center py-20 lg:py-32 overflow-hidden px-4">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 -right-64 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >


          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground mb-6 leading-[1.1]"
          >
            Engineering Intelligent Infrastructure for <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-foreground">
              Modern
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Rama Techworks is a technology-driven enterprise focused on engineering robust, intelligent systems that scale with your SME or enterprise.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="h-12 px-8 text-base rounded-full shadow-lg hover:shadow-primary/25 transition-all w-full sm:w-auto">
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full w-full sm:w-auto">
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Client Logos Section */}
      <section className="py-12 border-t border-border/50 bg-background overflow-hidden relative">
        {/* Gradient Edges using Tailwind directly */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-10">
            Trusted by industry leaders
          </p>

          <div className="w-full inline-flex flex-nowrap overflow-hidden">
            <motion.div
              className="flex items-center justify-center space-x-12 sm:space-x-24 px-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...clients, ...clients].map((client, idx) => (
                <div
                  key={idx}
                  className="relative h-12 sm:h-16 w-32 sm:w-48 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 flex items-center justify-center shrink-0 mix-blend-multiply dark:mix-blend-plus-lighter"
                >
                  {/* Fallback to text if image is missing but using img tag properly allows checking */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`max-h-full max-w-full object-contain ${client.name === "Polaris"
                        ? "drop-shadow-[0_0_3px_rgba(0,0,0,0.5)] dark:drop-shadow-none"
                        : ""
                      }`}
                    onError={(e) => {
                      // Fallback logic if user hasn't uploaded image yet
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="hidden font-bold text-xl sm:text-2xl whitespace-nowrap text-muted-foreground/80">
                    {client.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-muted/50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Choose Rama Techworks?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg pt-2">
              We translate complex technical challenges into streamlined, efficient operational solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-border/50 bg-card hover:shadow-md transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Ready to transform your operations?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Partner with us to build the technology foundation your enterprise needs to thrive.
          </p>
          <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg gap-2">
            Get in touch with our team <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

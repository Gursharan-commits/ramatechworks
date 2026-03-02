"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Cpu, Zap, BarChart3, Users, Network, Lightbulb, Cog, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function About() {
    const itExpertise = [
        "Custom website development",
        "AI-based workflow automation",
        "Business process optimization",
        "Data dashboards and reporting systems",
        "Agentic AI workflows and calling agents"
    ];

    const electricalExpertise = [
        "Large-scale smart electricity meter deployments",
        "On-ground engineering execution",
        "Structured project management",
        "Field operations management across multiple zones"
    ];

    const teamRoles = [
        "CEO & CTO leadership",
        "Senior development expertise",
        "Dedicated marketing strategy",
        "Field management team with structured manpower operations"
    ];

    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border text-center">
                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary font-medium mb-6"
                    >
                        About Rama Techworks
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter mb-6 leading-tight"
                    >
                        Technology should <span className="text-primary block mt-2">simplify growth</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                    >
                        We build custom technology systems tailored to your business,
                        eliminating frustration and creating intelligent pathways to scale.
                    </motion.p>
                </div>
            </section>

            {/* The Problem Section */}
            <section className="py-24 bg-muted/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                                Every growing business reaches a breaking point.
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Manual systems start holding it back. Data scattered across Excel sheets.
                                    Teams repeating the same tasks every day. No visibility. No dashboards. No automation.
                                </p>
                                <p>
                                    We saw this happening across SMEs in India — and we knew it didn&apos;t have to be that way.
                                    Rama Techworks was founded to change this narrative.
                                </p>
                                <p className="font-medium text-foreground">
                                    We don&apos;t believe in one-size-fits-all solutions.
                                </p>
                                <p>
                                    We study how your business operates, understand your workflows, identify bottlenecks,
                                    and build systems exactly around your operational needs.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <div className="space-y-4">
                                <div className="bg-background border border-border/50 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <Lightbulb className="h-5 w-5 text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Identify</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">Discovering bottlenecks inside your operations.</p>
                                </div>
                                <div className="bg-background border border-border/50 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <Cog className="h-5 w-5 text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Architect</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">Designing custom technological workflows.</p>
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="bg-background border border-border/50 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <Zap className="h-5 w-5 text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Automate</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">Replacing manual routines with intelligent systems.</p>
                                </div>
                                <div className="bg-primary text-primary-foreground p-6 rounded-3xl shadow-sm hover:shadow-lg hover:shadow-primary/20 transition-all">
                                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-4">
                                        <BarChart3 className="h-5 w-5 text-primary-foreground" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Scale</h3>
                                    <p className="text-sm text-primary-foreground/90 leading-relaxed">Accelerating growth with total visibility.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-24 border-t border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Expertise</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg pt-2">
                            We operate at the intersection of powerful software and real-world engineering.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-primary/20 bg-primary/5 hover:border-primary/40 transition-colors">
                                <CardHeader>
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                                        <Cpu className="h-7 w-7 text-primary" />
                                    </div>
                                    <CardTitle className="text-2xl">IT & Intelligent Systems</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4 pt-2">
                                        {itExpertise.map((item, idx) => (
                                            <li key={idx} className="flex items-start text-foreground">
                                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                                                <span className="leading-relaxed font-medium text-[15px]">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card className="h-full border-border/50 bg-card hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <div className="w-14 h-14 rounded-2xl bg-muted outline outline-1 outline-border flex items-center justify-center mb-4">
                                        <Network className="h-7 w-7 text-foreground" />
                                    </div>
                                    <CardTitle className="text-2xl">Electrical Infrastructure</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4 pt-2">
                                        {electricalExpertise.map((item, idx) => (
                                            <li key={idx} className="flex items-start text-muted-foreground">
                                                <CheckCircle2 className="h-5 w-5 text-muted-foreground shrink-0 mr-3 mt-0.5" />
                                                <span className="leading-relaxed font-medium text-[15px]">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Smart Meter / Ground Execution Section */}
            <section className="py-24 bg-muted/20 border-t border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 overflow-hidden flex flex-col items-center justify-center p-8 text-center shadow-inner">
                                <MapPin className="h-16 w-16 text-primary mb-6 opacity-80" />
                                <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Uttar Pradesh</h3>
                                <div className="h-1 w-16 bg-primary/40 mx-auto rounded-full mb-6"></div>
                                <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-semibold">
                                    Primary execution sector
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary font-medium mb-2">
                                Track Record
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                                On-Ground Execution & Accuracy
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We have successfully executed smart meter installation projects across Uttar Pradesh for leading energy companies including <strong className="text-foreground">Intellismart, Polaris, IPS E Services, and DTG Infranext</strong>.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                By combining engineering precision with technology-driven accountability, we seamlessly manage thousands of installations, mitigating field challenges and accelerating deployment timelines.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Team / Vision Section */}
            <section className="py-24 border-t border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="max-w-xl">
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">The Guiding Force</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                    Behind Rama Techworks is a focused, capable team combining hardware deployment with software intelligence:
                                </p>
                                <ul className="space-y-4">
                                    {teamRoles.map((role, idx) => (
                                        <li key={idx} className="flex items-center text-foreground font-medium bg-muted/50 py-4 px-6 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                                            <Users className="h-6 w-6 text-primary mr-4 opacity-80" />
                                            {role}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 flex flex-col justify-center h-full"
                        >
                            <h3 className="text-sm font-bold tracking-widest uppercase text-primary mb-4 flex items-center">
                                <span className="w-8 h-[2px] bg-primary mr-3"></span> Our Vision
                            </h3>
                            <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2] tracking-tight text-foreground mb-8">
                                To become a trusted enterprise transformation partner — combining infrastructure, intelligence, and execution.
                            </p>
                            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                                If you&apos;re looking for a team that understands both engineering and business, and builds technology that genuinely makes operations smoother, faster, and smarter, we&apos;re ready to work with you.
                            </p>

                            <div>
                                <Link href="/contact" className="inline-block w-full sm:w-auto">
                                    <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-full shadow-lg gap-2 hover:shadow-primary/25 transition-all">
                                        Let&apos;s build systems that move your business forward <ArrowRight className="h-5 w-5" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, BoxSelect, MonitorCog, ServerCog, LineChart, ShieldCheck, DatabaseZap, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

export default function IntelligentSystemsService() {
    const analysisSteps = [
        "Decision flows",
        "Data movement",
        "Communication gaps",
        "Repetitive friction points",
        "Human intervention requirements"
    ];

    const whatWeBuild = [
        {
            title: "Agentic AI Workflows",
            description: "Custom AI agents that perform structured tasks within defined logic boundaries.",
            icon: <BrainCircuit className="h-6 w-6 text-primary" />
        },
        {
            title: "AI Calling Systems",
            description: "Outbound & inbound AI-driven calling integrated with CRM, qualification logic, and human escalation.",
            icon: <PhoneCall className="h-6 w-6 text-primary" />
        },
        {
            title: "Automation Architecture",
            description: "Process automation designed around enterprise needs — not templates.",
            icon: <ServerCog className="h-6 w-6 text-primary" />
        },
        {
            title: "Data Intelligence",
            description: "Structured reporting systems that enable better decisions, not just data visibility.",
            icon: <LineChart className="h-6 w-6 text-primary" />
        }
    ];

    const humanInLoop = [
        "Human escalation triggers",
        "Override capabilities",
        "Performance visibility",
        "Compliance guardrails"
    ];

    const implementationFramework = [
        { title: "Operational Analysis", icon: <BoxSelect className="h-5 w-5" /> },
        { title: "System Design", icon: <MonitorCog className="h-5 w-5" /> },
        { title: "Controlled Engineering", icon: <ServerCog className="h-5 w-5" /> },
        { title: "Integration & Testing", icon: <ShieldCheck className="h-5 w-5" /> },
        { title: "Performance Calibration", icon: <LineChart className="h-5 w-5" /> },
        { title: "Ongoing Optimization", icon: <DatabaseZap className="h-5 w-5" /> }
    ];

    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] border-b border-l border-primary/10"></div>
                <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary font-medium mb-6 backdrop-blur-sm">
                                <BrainCircuit className="h-4 w-4 mr-2" />
                                Intelligent Systems
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
                                Intelligent Systems Built Around <span className="text-primary">Your Operations.</span>
                            </h1>

                            <div className="space-y-4 text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                                <p className="font-semibold text-foreground border-l-4 border-accent pl-4">
                                    This is your visionary growth engine.
                                </p>
                                <p>
                                    Automation layered on top of chaos creates more chaos. At Rama Techworks, we engineer intelligent systems that integrate directly into your workflows — enhancing efficiency without disrupting operational stability.
                                </p>
                                <p className="text-foreground/90 font-medium pt-2">
                                    We don't implement tools. <span className="text-primary italic">We architect intelligence.</span>
                                </p>
                            </div>

                            <Button size="lg" className="h-14 px-8 text-base rounded-full shadow-lg gap-2">
                                Schedule a Strategic Call <ArrowRight className="h-5 w-5" />
                            </Button>
                        </motion.div>

                        {/* Visual Abstract */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl bg-muted overflow-hidden flex items-center justify-center p-8 group border border-border"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/5 z-0"></div>

                            {/* Abstract Graphic */}
                            <div className="relative z-10 w-full max-w-sm aspect-square bg-background rounded-full shadow-2xl border border-primary/20 flex flex-col items-center justify-center p-8 backdrop-blur-sm transition-transform duration-700 group-hover:rotate-12 group-hover:scale-105">
                                <div className="absolute inset-2 border-2 border-dashed border-primary/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                                <div className="absolute inset-8 border border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                                <BrainCircuit className="h-24 w-24 text-primary mb-4" />
                                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground text-center">
                                    Workflow-First.<br />Technology Second.
                                </h3>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Systems Thinking */}
            <section className="py-24 bg-muted/20 border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-sm"
                        >
                            <div className="space-y-4">
                                <div className="inline-flex items-center rounded-sm bg-accent/10 px-3 py-1 text-sm text-accent-foreground font-medium mb-4">
                                    Systems Thinking
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight">Before we introduce automation, we analyze:</h2>
                            </div>

                            <ul className="space-y-4 mt-8">
                                {analysisSteps.map((step, idx) => (
                                    <li key={idx} className="flex items-center text-foreground font-medium bg-muted/50 py-3 px-5 rounded-lg border border-border/50">
                                        <div className="w-8 h-8 rounded-md bg-accent/10 text-accent-foreground flex items-center justify-center mr-4 shrink-0 font-bold text-sm">
                                            {idx + 1}
                                        </div>
                                        {step}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-border">
                                <p className="text-lg font-semibold text-primary">
                                    Only then do we design the intelligence layer. Because intelligence must serve the system — not replace it blindly.
                                </p>
                            </div>
                        </motion.div>

                        {/* What We Build Cards */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What We Build</h2>
                                <p className="text-muted-foreground text-lg">
                                    Intelligent infrastructure engineered for strict business outcomes.
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {whatWeBuild.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Card className="h-full border-border/50 bg-background hover:shadow-md transition-shadow group">
                                            <CardHeader className="pb-3">
                                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                                                    {item.icon}
                                                </div>
                                                <CardTitle className="text-lg">{item.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-[14px] leading-relaxed">
                                                    {item.description}
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Human-in-the-Loop */}
            <section className="py-24 border-b border-border">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Human-in-the-Loop Intelligence</h2>
                        <p className="text-xl text-muted-foreground leading-relaxed pt-2">
                            AI is powerful. But enterprises require <span className="font-semibold text-foreground">control</span>.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {humanInLoop.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-muted/50 border border-border/50 p-6 rounded-2xl flex flex-col items-center text-center justify-center space-y-3"
                            >
                                <ShieldCheck className="h-8 w-8 text-primary/70 mb-2" />
                                <span className="font-medium text-sm md:text-base leading-tight">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-lg font-bold bg-primary/10 text-primary py-3 px-6 rounded-full inline-block">
                        This ensures automation enhances operations — not risks them.
                    </p>
                </div>
            </section>

            {/* Framework & Why Us */}
            <section className="py-24 bg-muted/20 border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Implementation Framework */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tight">Implementation Framework</h2>
                                <p className="text-muted-foreground text-lg">
                                    Our intelligent system deployment follows a rigorous path. Structured intelligence. Not experimental deployment.
                                </p>
                            </div>

                            <div className="relative border-l border-primary/20 ml-4 space-y-8 py-4">
                                {implementationFramework.map((step, index) => (
                                    <div key={index} className="flex flex-col relative pl-8">
                                        <div className="absolute left-[-16px] top-0.5 w-8 h-8 rounded-full bg-background border border-primary text-primary flex items-center justify-center">
                                            {step.icon}
                                        </div>
                                        <h3 className="font-semibold text-lg">{step.title}</h3>
                                        <p className="text-sm text-muted-foreground font-bold mt-1">PHASE 0{index + 1}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Why Rama Techworks */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border shadow-sm rounded-3xl p-8 md:p-12 flex flex-col justify-center gap-8"
                        >
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tight text-primary">Why Rama Techworks?</h2>
                                <p className="text-foreground text-lg mb-4">We actively combine:</p>
                                <ul className="space-y-4 border-l-2 border-primary/20 pl-4 py-2">
                                    <li className="font-medium text-lg text-muted-foreground">Infrastructure execution discipline</li>
                                    <li className="font-medium text-lg text-muted-foreground">AI engineering capability</li>
                                    <li className="font-medium text-lg text-muted-foreground">Workflow design expertise</li>
                                    <li className="font-medium text-lg text-muted-foreground">Enterprise mindset</li>
                                </ul>
                            </div>

                            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 mt-2">
                                <p className="text-xl font-bold text-foreground leading-relaxed">
                                    That unique combination creates intelligent systems that are <span className="text-primary">stable</span>, <span className="text-primary">scalable</span>, and <span className="text-primary">measurable</span>.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative overflow-hidden bg-foreground text-background text-center">
                <div className="absolute inset-0 bg-primary/10"></div>

                <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Ready to activate intelligent systems?
                    </h2>
                    <p className="text-xl text-background/80 mb-10 max-w-2xl mx-auto">
                        Integrate automation designed for precision execution.
                    </p>
                    <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-lg gap-2 cursor-pointer font-semibold">
                        Schedule a Strategic Call <ArrowRight className="h-5 w-5" />
                    </Button>
                </div>
            </section>
        </div>
    );
}

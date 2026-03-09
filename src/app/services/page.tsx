"use client";

import { motion, type Variants } from "framer-motion";
import { Cpu, Zap, ArrowRight, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesOverview() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 15 },
        },
    };

    return (
        <div className="flex flex-col min-h-screen pt-24 pb-16 bg-background">
            {/* Header */}
            <section className="py-16 text-center px-4 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground mb-6"
                >
                    Our <span className="text-primary">Capabilities</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground mx-auto"
                >
                    From foundational field engineering to advanced AI-driven automation, we build scalable systems tailored for enterprises and growing SMEs.
                </motion.p>
            </section>

            {/* Overview Cards */}
            <section className="py-12 px-4 max-w-6xl mx-auto w-full">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Engineering overview */}
                    <motion.div variants={itemVariants} className="h-full">
                        <Card className="flex flex-col h-full w-full border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
                            <CardHeader>
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                    <Settings className="h-7 w-7 text-primary" />
                                </div>
                                <CardTitle className="text-3xl font-bold">Engineering</CardTitle>
                                <CardDescription className="text-base mt-2">
                                    Enterprise-grade infrastructure deployment executed with precision.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span>Infrastructure Development & Smart Deployments</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span>Project Management & Supervision</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span>Field Operation Controls</span>
                                    </li>
                                </ul>
                            </CardContent>
                            <CardFooter className="pt-6">
                                <Button asChild className="w-full gap-2 group" variant="outline">
                                    <Link href="/services/engineering">
                                        View Engineering Details
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>

                    {/* Intelligent Systems overview */}
                    <motion.div variants={itemVariants} className="h-full">
                        <Card className="flex flex-col h-full w-full border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
                            <CardHeader>
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                    <Cpu className="h-7 w-7 text-primary" />
                                </div>
                                <CardTitle className="text-3xl font-bold">Intelligent Systems</CardTitle>
                                <CardDescription className="text-base mt-2">
                                    Automate workflows and eliminate operational inefficiencies with embedded AI.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span>AI Calling Agents & Voice Bots</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span>Workflow Automation & Dashboards</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span>Enterprise Software Customization</span>
                                    </li>
                                </ul>
                            </CardContent>
                            <CardFooter className="pt-6">
                                <Button asChild className="w-full gap-2 group" variant="outline">
                                    <Link href="/services/intelligent-systems">
                                        View Intelligent Systems
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                </motion.div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 mt-12 bg-muted/20 border-t border-border/50">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Not sure which service you need?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                        Talk to our experts. We&apos;ll analyze your business operations and recommend the best technical approach tailored to your specific goals.
                    </p>
                    <Button size="lg" className="rounded-full px-8 gap-2" asChild>
                        <Link href="/contact">Book a Consultation <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}

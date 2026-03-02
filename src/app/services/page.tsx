"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Cloud, Code, Database, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Services() {
    const engineeringServices = [
        {
            title: "Custom Software Development",
            description: "Tailored enterprise applications built with modern, scalable architectures to solve your unique business challenges.",
            icon: <Code className="h-6 w-6 text-primary" />,
        },
        {
            title: "Cloud Infrastructure",
            description: "Secure, highly available cloud environments optimized for performance and cost-efficiency.",
            icon: <Cloud className="h-6 w-6 text-primary" />,
        },
        {
            title: "Data Engineering",
            description: "Robust data pipelines and analytics platforms that turn raw information into actionable business intelligence.",
            icon: <Database className="h-6 w-6 text-primary" />,
        }
    ];

    const automationServices = [
        {
            title: "Workflow Automation",
            description: "Eliminate manual tasks and reduce errors by automating complex business processes across your organization.",
            icon: <Zap className="h-6 w-6 text-primary" />,
        },
        {
            title: "Intelligent Systems Integration",
            description: "Connect disparate software platforms to create a unified, intelligent operational ecosystem.",
            icon: <Cpu className="h-6 w-6 text-primary" />,
        },
        {
            title: "Security & Compliance Automation",
            description: "Automated security scanning and compliance reporting to keep your enterprise safe without slowing down development.",
            icon: <Lock className="h-6 w-6 text-primary" />,
        }
    ];

    const containerVariants: import("framer-motion").Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants: import("framer-motion").Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 15 },
        },
    };

    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)] pt-12">
            {/* Services Header */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-6"
                    >
                        Capabilities & <span className="text-primary">Expertise</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-3xl mx-auto"
                    >
                        Comprehensive technology solutions designed to elevate enterprise performance, from foundational engineering to advanced system automation.
                    </motion.p>
                </div>
            </section>

            {/* Engineering Section */}
            <section id="engineering" className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-3">
                            <Cpu className="h-8 w-8 text-primary" /> Engineering
                        </h2>
                        <p className="text-muted-foreground max-w-2xl text-lg">
                            We build resilient software foundations. Our engineering teams deliver high-performance, scalable solutions tailored for complex enterprise requirements.
                        </p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {engineeringServices.map((service, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="h-full border-border/50 hover:border-primary/50 transition-colors">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                            {service.icon}
                                        </div>
                                        <CardTitle className="text-xl">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base leading-relaxed">
                                            {service.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* System Automation Section */}
            <section id="system-automation" className="py-24 bg-muted/30 border-t border-border/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-3">
                            <Zap className="h-8 w-8 text-primary" /> System Automation
                        </h2>
                        <p className="text-muted-foreground max-w-2xl text-lg">
                            We eliminate friction. By automating core processes and integrating intelligent systems, we drastically reduce operational overhead.
                        </p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {automationServices.map((service, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="h-full border-border/50 hover:border-primary/50 transition-colors">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                            {service.icon}
                                        </div>
                                        <CardTitle className="text-xl">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base leading-relaxed">
                                            {service.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Need a custom solution?</h2>
                    <Button size="lg" className="rounded-full px-8">Discuss Your Project</Button>
                </div>
            </section>
        </div>
    );
}

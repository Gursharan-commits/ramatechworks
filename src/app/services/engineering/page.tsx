"use client";

import { motion } from "framer-motion";
import { ArrowRight, Drill, ListChecks, Map, MapPin, Network, Activity, Crosshair, BarChart, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function EngineeringService() {
    const infrastructureExpertise = [
        "Smart electricity meter installations",
        "Multi-zone deployment operations",
        "Field team coordination & supervision",
        "Structured project management",
        "On-ground operational control systems"
    ];

    const operationalDiscipline = [
        "Structured deployment workflows",
        "Field reporting frameworks",
        "Escalation protocols",
        "Performance tracking systems",
        "Accountability checkpoints"
    ];

    const executionMethodology = [
        { title: "Site Assessment", icon: <MapPin className="h-5 w-5" /> },
        { title: "Deployment Planning", icon: <Map className="h-5 w-5" /> },
        { title: "Resource Allocation", icon: <Users className="h-5 w-5" /> },
        { title: "Controlled Rollout", icon: <Settings className="h-5 w-5" /> },
        { title: "Monitoring", icon: <Activity className="h-5 w-5" /> },
        { title: "Performance Validation", icon: <ListChecks className="h-5 w-5" /> }
    ];

    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border">
                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary font-medium mb-6">
                                <Network className="h-4 w-4 mr-2" />
                                Engineering
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
                                Engineering That Executes With <span className="text-primary">Precision</span>
                            </h1>

                            <div className="space-y-4 text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                                <p>
                                    Infrastructure is not theory. It is discipline, coordination, and accountability.
                                </p>
                                <p>
                                    At Rama Techworks, our engineering division delivers structured, multi-layered execution — ensuring that infrastructure is deployed with clarity, control, and measurable oversight.
                                </p>
                            </div>

                            <p className="text-foreground font-semibold text-xl mb-10 border-l-4 border-primary pl-4">
                                We don't just install. We engineer environments that operate reliably at scale.
                            </p>

                            <Button size="lg" className="h-14 px-8 text-base rounded-full shadow-lg gap-2">
                                Discuss Your Project <ArrowRight className="h-5 w-5" />
                            </Button>
                        </motion.div>

                        {/* Image Graphic */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative aspect-square lg:aspect-[4/3] rounded-3xl bg-muted border border-border overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1541888086925-920a232fba62?auto=format&fit=crop&q=80"
                                alt="Engineering Infrastructure"
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Overlay Card */}
                            <div className="absolute bottom-6 left-6 right-6 z-20 bg-background/90 backdrop-blur-md p-6 rounded-2xl border border-border/50 shadow-xl">
                                <div className="flex items-center space-x-4 mb-2">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Crosshair className="h-5 w-5 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-lg">Execution Precision</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">Every deployment follows a defined methodology</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Expertise & Discipline (Split Layout) */}
            <section className="py-24 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Expertise */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tight">Enterprise-Grade Infrastructure Deployment</h2>
                                <p className="text-muted-foreground text-lg">
                                    From planning to field execution, every deployment follows a defined methodology — not ad-hoc management.
                                </p>
                            </div>

                            <Card className="border-border/50 bg-background shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl flex items-center text-primary">
                                        <Drill className="mr-3 h-6 w-6" /> Our capabilities include:
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4">
                                        {infrastructureExpertise.map((item, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <div className="mr-3 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                                    <span className="text-primary text-xs font-bold">{idx + 1}</span>
                                                </div>
                                                <span className="text-[15px] font-medium leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Discipline */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tight">Engineering Is a System — Not an Event.</h2>
                                <p className="text-muted-foreground text-lg">
                                    Execution failures rarely come from technical limitations. They come from poor coordination and weak process design.
                                </p>
                            </div>

                            <Card className="border-border/50 bg-background shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl flex items-center text-primary">
                                        <BarChart className="mr-3 h-6 w-6" /> We implement:
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <ul className="space-y-4">
                                        {operationalDiscipline.map((item, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <div className="mr-3 h-2 w-2 rounded-full bg-primary shrink-0 mt-2"></div>
                                                <span className="text-[15px] font-medium leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-primary/5 p-4 rounded-xl border border-primary/20">
                                        <p className="text-sm font-semibold text-foreground">
                                            This ensures operational stability — even in large-scale or geographically distributed environments.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Methodology Timeline */}
            <section className="py-24 border-y border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How We Execute</h2>
                        <p className="text-lg text-muted-foreground">
                            Engineering without structure leads to inefficiency. We build structure into every stage.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[28px] left-12 right-12 h-0.5 bg-border/80"></div>

                        {executionMethodology.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative flex flex-col items-center group"
                            >
                                <div className="w-14 h-14 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center relative z-10 mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-sm">
                                    {step.icon}
                                </div>
                                <h3 className="font-semibold text-sm md:text-base">{step.title}</h3>
                                <div className="mt-2 text-xs font-bold text-muted-foreground">STAGE 0{index + 1}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why It Matters / CTA */}
            <section className="py-24 relative overflow-hidden bg-foreground text-background">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent mix-blend-overlay"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Dual Capability</h2>
                            <p className="text-lg text-background/80 leading-relaxed max-w-xl">
                                Our infrastructure work complements our intelligent systems division. We understand on-ground operational realities, resource constraints, human workflows, and execution bottlenecks.
                            </p>
                            <div className="pt-4 border-t border-background/20 max-w-xl">
                                <p className="text-xl font-semibold">
                                    This dual capability allows us to design systems that work — both digitally and physically.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-background/10 backdrop-blur-md border border-background/20 rounded-3xl p-8 md:p-12 text-center"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-6">
                                Ready to deploy infrastructure with discipline?
                            </h3>
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto h-14 px-10 text-lg rounded-full shadow-lg gap-2 cursor-pointer font-semibold">
                                Begin the Conversation <ArrowRight className="h-5 w-5" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

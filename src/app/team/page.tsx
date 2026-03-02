"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Team() {
    interface TeamMember {
        name: string;
        role: string;
        bio: string;
        image: string;
        socials: {
            linkedin?: string;
            twitter?: string;
            github?: string;
        };
    }

    const teamMembers: TeamMember[] = [
        {
            name: "Gursharan Singh",
            role: "Founder · CEO & CTO",
            bio: "Gursharan Singh is a systems-focused engineer leading Rama Techworks at the intersection of infrastructure and intelligent automation. With experience spanning on-ground engineering execution and AI-driven workflow architecture, he brings a structured, enterprise-first approach to building scalable systems. His philosophy is simple: Design with clarity. Engineer with discipline. Scale with intelligence.",
            image: "", // Placeholder for Gursharan's image
            socials: { linkedin: "#", twitter: "#" }
        },
        {
            name: "Team Member 2",
            role: "Role / Position",
            bio: "Biography and introduction will be added here. They will help drive the operations and engineering goals of Rama Techworks forward.",
            image: "", // Placeholder
            socials: { linkedin: "#" }
        },
        {
            name: "Team Member 3",
            role: "Role / Position",
            bio: "Biography and introduction will be added here. Providing crucial support in systems design and field execution workflows.",
            image: "", // Placeholder
            socials: { linkedin: "#" }
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
            {/* Header Section */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary font-medium mb-6"
                    >
                        Our People
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-6"
                    >
                        Meet the <span className="text-primary">Team</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-3xl mx-auto"
                    >
                        Rama Techworks is evolving into an enterprise transformation firm — integrating operational precision with embedded AI.
                    </motion.p>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
                    >
                        {teamMembers.map((member, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="h-full overflow-hidden border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                                    <div className="relative h-72 w-full overflow-hidden bg-muted flex flex-col items-center justify-center border-b border-border/50">
                                        {member.image ? (
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                            />
                                        ) : (
                                            /* Image Placeholder UI */
                                            <div className="flex flex-col items-center text-muted-foreground/50">
                                                <ImageIcon className="h-12 w-12 mb-2" />
                                                <span className="text-sm font-medium">Image Placeholder</span>
                                            </div>
                                        )}

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                                            <div className="flex space-x-4">
                                                {member.socials.linkedin && (
                                                    <a href={member.socials.linkedin} className="text-white hover:text-primary transition-colors">
                                                        <Linkedin className="h-5 w-5" />
                                                    </a>
                                                )}
                                                {member.socials.twitter && (
                                                    <a href={member.socials.twitter} className="text-white hover:text-primary transition-colors">
                                                        <Twitter className="h-5 w-5" />
                                                    </a>
                                                )}
                                                {member.socials.github && (
                                                    <a href={member.socials.github} className="text-white hover:text-primary transition-colors">
                                                        <Github className="h-5 w-5" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="text-2xl font-bold tracking-tight mb-1 text-foreground">{member.name}</h3>
                                        <p className="text-primary font-semibold text-sm mb-4 tracking-wide uppercase">{member.role}</p>
                                        <p className="text-muted-foreground text-[15px] leading-relaxed">
                                            {member.bio}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

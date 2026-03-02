"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)] pt-12">
            {/* Header Section */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-6"
                    >
                        Get in <span className="text-primary">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Whether you have a specific operational challenge or are looking for a strategic technology partner, our team is ready to assist.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground">Contact Information</h2>
                                <p className="text-muted-foreground text-lg mb-8">
                                    Reach out to us using any of the methods below, and a Rama Techworks representative will be in touch within 24 hours.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-primary/10 p-3 rounded-xl mr-4 mt-1">
                                            <MapPin className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground text-lg">Global Headquarters</h3>
                                            <p className="text-muted-foreground">
                                                5/97 Subhash Nagar<br />
                                                New Delhi, India - 110027
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="bg-primary/10 p-3 rounded-xl mr-4">
                                            <Phone className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground text-lg">Phone</h3>
                                            <p className="text-muted-foreground">+91-98185 96442</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="bg-primary/10 p-3 rounded-xl mr-4">
                                            <Mail className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground text-lg">Email</h3>
                                            <p className="text-muted-foreground">hello@ramatechworks.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Card className="border-border shadow-xl shadow-primary/5">
                                <CardContent className="p-8">
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="firstName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">First Name</label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                                    placeholder="John"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="lastName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Last Name</label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Work Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                                placeholder="john.doe@enterprise.com"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="company" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Company</label>
                                            <input
                                                type="text"
                                                id="company"
                                                className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                                placeholder="Company Name"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">How can we help?</label>
                                            <textarea
                                                id="message"
                                                className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                                                placeholder="Please briefly describe your project or operational challenge..."
                                            ></textarea>
                                        </div>

                                        <Button type="button" className="w-full h-12 text-base gap-2" onClick={(e) => e.preventDefault()}>
                                            Send Message <Send className="h-4 w-4" />
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
        name: "Services",
        href: "/services",
        subLinks: [
            { name: "Engineering", href: "/services/engineering" },
            { name: "Intelligent Systems", href: "/services/intelligent-systems" },
        ]
    },
    { name: "Team", href: "/team" },
    { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/rtw_logo.png"
                                alt="Rama Techworks Logo"
                                width={240}
                                height={60}
                                className="h-10 sm:h-12 w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
                                >
                                    {link.name}
                                </Link>
                                {/* Simple dropdown for Services on hover */}
                                {link.subLinks && (
                                    <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out transform -translate-y-2 group-hover:translate-y-0">
                                        <div className="bg-card shadow-lg rounded-xl border border-border p-2 flex flex-col gap-1">
                                            {link.subLinks.map(sub => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    className="px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-muted rounded-md transition-colors"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        <Button size="sm" className="gap-2 rounded-full" asChild>
                            <Link href="/contact">
                                Get Started <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground hover:text-primary transition-colors"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-border bg-background"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-foreground hover:bg-muted hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.subLinks && (
                                        <div className="pl-6 space-y-1 mt-1 border-l-2 border-border ml-3">
                                            {link.subLinks.map(sub => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    className="text-muted-foreground hover:text-primary block px-3 py-2 text-sm font-medium transition-colors"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 px-3">
                                <Button className="w-full justify-center gap-2 rounded-full" asChild>
                                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                                        Get Started <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

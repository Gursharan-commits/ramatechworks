import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-foreground text-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    {/* Brand Info */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="inline-block p-1 bg-white/10 rounded-lg">
                                <Image
                                    src="/rtw_logo.png"
                                    alt="Rama Techworks Logo"
                                    width={32}
                                    height={32}
                                    className="h-8 w-auto object-contain brightness-0 invert"
                                />
                            </div>
                            <h3 className="text-2xl font-bold tracking-tighter">
                                Rama<span className="text-primary">Techworks</span>
                            </h3>
                        </Link>
                        <p className="text-background/80 text-sm leading-relaxed max-w-xs">
                            Engineering intelligent systems improving operational efficiency for SMEs.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-background/60 hover:text-primary transition-colors">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-background/60 hover:text-primary transition-colors">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-background/60 hover:text-primary transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold tracking-tight">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-background/80">
                            <li>
                                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                            </li>
                            <li>
                                <Link href="/team" className="hover:text-primary transition-colors">Our Team</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold tracking-tight">Capabilities</h4>
                        <ul className="space-y-2 text-sm text-background/80">
                            <li>
                                <Link href="/services/engineering" className="hover:text-primary transition-colors">Intelligent System Architecture</Link>
                            </li>
                            <li>
                                <Link href="/services/intelligent-systems" className="hover:text-primary transition-colors">Agentic AI & Automation Engineering</Link>
                            </li>
                            <li>
                                <Link href="/services/engineering" className="hover:text-primary transition-colors">Enterprise Infrastructure Execution</Link>
                            </li>
                            <li>
                                <Link href="/services/intelligent-systems" className="hover:text-primary transition-colors">Data & Workflow Integration</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold tracking-tight">Contact Us</h4>
                        <ul className="space-y-3 text-sm text-background/80">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>5/97 Subhash Nagar<br />New Delhi, India 110027</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <span>+91-9818596442</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <a href="mailto:contact@ramatechworks.com" className="hover:text-primary transition-colors">
                                    hello@ramatechworks.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-background/60">
                        &copy; {currentYear} Rama Techworks. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-background/60">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

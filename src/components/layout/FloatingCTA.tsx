"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingCTA() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                asChild
                size="lg"
                className="rounded-full shadow-xl shadow-primary/20 h-14 px-6 flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
                <Link href="/#contact">
                    <MessageCircle className="h-5 w-5" />
                    <span>Get Started</span>
                </Link>
            </Button>
        </div>
    );
}

"use client";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="font-heading font-bold text-xl md:text-2xl text-brand-navy tracking-tight">
                    N.A. LOGISTICS
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 items-center">
                    {siteConfig.mainNav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <a href={`tel:${siteConfig.hotline}`} className="flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-amber transition-colors">
                        <Phone className="h-4 w-4" />
                        <span>{siteConfig.hotline}</span>
                    </a>
                    <Button asChild variant="cta" className="shadow-lg hover:shadow-xl transition-all">
                        <Link href="/contact">Request a Quote</Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t bg-background p-4 absolute w-full shadow-lg h-[calc(100vh-4rem)] flex flex-col gap-6">
                    <nav className="flex flex-col gap-4">
                        {siteConfig.mainNav.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex flex-col gap-3 mt-auto mb-8">
                        <Button asChild variant="outline" className="w-full justify-start gap-2 h-12">
                            <a href={`tel:${siteConfig.hotline}`}>
                                <Phone className="h-4 w-4" /> Call Hotline
                            </a>
                        </Button>
                        <Button asChild variant="cta" className="w-full h-12">
                            <Link href="/contact" onClick={() => setIsOpen(false)}>Request a Quote</Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}

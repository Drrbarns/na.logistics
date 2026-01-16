"use client";
import { siteConfig } from "@/lib/site-config";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function MobileStickyBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-2 md:hidden pb-safe">
            <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" className="flex flex-col items-center justify-center h-16 gap-1 border-none hover:bg-slate-50 shadow-none rounded-none" asChild>
                    <a href={`tel:${siteConfig.hotline}`}>
                        <Phone className="h-5 w-5 text-brand-navy" />
                        <span className="text-[10px] uppercase font-bold text-brand-navy">Call</span>
                    </a>
                </Button>
                <Button variant="outline" className="flex flex-col items-center justify-center h-16 gap-1 border-none hover:bg-slate-50 shadow-none rounded-none" asChild>
                    <a href={`https://wa.me/233${siteConfig.phones.whatsapp.substring(1)}`} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-5 w-5 text-green-600" />
                        <span className="text-[10px] uppercase font-bold text-brand-navy">WhatsApp</span>
                    </a>
                </Button>
                <Button className="flex flex-col items-center justify-center h-16 gap-1 bg-brand-navy hover:bg-brand-navy/90 rounded-lg mx-1 my-1" asChild>
                    <Link href="/contact">
                        <span className="text-xs font-bold text-white text-center leading-tight">Request<br />Quote</span>
                    </Link>
                </Button>
            </div>
        </div>
    );
}

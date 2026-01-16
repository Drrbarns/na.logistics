import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-brand-navy text-white pt-16 pb-8">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {/* Brand */}
                <div>
                    <h3 className="font-heading text-xl font-bold mb-4 text-white">N.A. LOGISTICS</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        Total transport management consultants providing efficient services on the road transport system in Ghana.
                    </p>
                    <div className="flex flex-col gap-2">
                        <a href={`tel:${siteConfig.phones.primary}`} className="text-amber-400 hover:text-amber-300 font-bold text-lg">
                            {siteConfig.phones.primary}
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-bold mb-4 text-slate-100">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                        {siteConfig.mainNav.map(item => (
                            <li key={item.href}>
                                <Link href={item.href} className="hover:text-amber-400 transition-colors">{item.title}</Link>
                            </li>
                        ))}
                        <li><Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="font-bold mb-4 text-slate-100">Services</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li>Corporate Shuttles</li>
                        <li>Logistics Coordination</li>
                        <li>Fleet Support</li>
                        <li>Event Transportation</li>
                        <li>Freight Delivery</li>
                    </ul>
                </div>

                {/* Contact info */}
                <div>
                    <h4 className="font-bold mb-4 text-slate-100">Contact Us</h4>
                    <ul className="space-y-4 text-sm text-slate-300">
                        <li className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-amber-500 shrink-0" />
                            <span>{siteConfig.address.postal}</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-amber-500 shrink-0" />
                            <span>Mon - Fri: 8am - 5pm</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-amber-500 shrink-0" />
                            <span>info@nalogistics.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container border-t border-slate-700/50 pt-8 text-center text-sm text-slate-400">
                <p>&copy; {new Date().getFullYear()} N.A. Logistics and Bus Services. All rights reserved.</p>
                <p className="mt-2 text-xs opacity-50">Designed with excellence.</p>
            </div>
        </footer>
    );
}

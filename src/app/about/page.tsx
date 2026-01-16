import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about N.A. Logistics - Trusted transport planning and bus services in Ghana.',
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-50 py-20">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-navy mb-6">About N.A. Logistics</h1>
                    <div className="grid lg:grid-cols-2 gap-12 text-lg text-slate-600 leading-relaxed">
                        <div>
                            <p className="mb-6">
                                N.A. Logistics and Bus Services is a premier transport management consultancy operating out of Accra, Ghana. We are dedicated to providing efficient, reliable, and safe services on the road transport system.
                            </p>
                            <p>
                                Our specialized approach allows us to tailor our services to suit both individuals and large corporate institutions. Whether it's managing a complex fleet or ensuring staff get to work on time, we bring professionalism to every mile.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-brand-navy mb-4">Company Details</h3>
                            <ul className="space-y-4 text-sm">
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium">Company Name</span>
                                    <span className="text-right">N.A. LOGISTICS AND BUS SERVICES</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium">Postal Address</span>
                                    <span className="text-right">{siteConfig.address.postal}</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium">Hotline</span>
                                    <span className="text-right font-bold text-brand-navy">{siteConfig.hotline}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl font-heading font-bold text-brand-navy mb-12 text-center">Our Core Values</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Reliability", desc: "We show up. On time, every time." },
                            { title: "Safety", desc: "Rigorous standards for vehicles and drivers." },
                            { title: "Professionalism", desc: "Corporate-ready conduct and ethics." },
                            { title: "Efficiency", desc: "Optimised routes to save time and money." }
                        ].map((val, i) => (
                            <div key={i} className="text-center p-6 border rounded-lg bg-white hover:border-brand-amber/50 transition-colors">
                                <h3 className="text-xl font-bold text-brand-navy mb-3">{val.title}</h3>
                                <p className="text-slate-600">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-brand-navy text-white text-center py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-6">Serving All of Ghana</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                        From our base in Accra, we coordinate transport logistics across the entire country.
                    </p>
                    <Button size="lg" className="bg-brand-amber text-brand-navy hover:bg-brand-amber/90 font-bold" asChild>
                        <Link href="/contact">Work With Us</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}

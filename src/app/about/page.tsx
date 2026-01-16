import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { Award, Clock, Heart, Shield, Users } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about N.A. Logistics, our mission, values, and commitment to revolutionizing transport services in Ghana.',
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* HERO SECTION */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/about_hero.png"
                        alt="N.A. Logistics Depot Team"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply" />
                </div>

                <div className="container relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        About N.A. Logistics
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
                        More than just transport. We are your partners in motion, dedicated to safety, efficiency, and excellence.
                    </p>
                </div>
            </section>

            {/* OUR STORY / MISSION */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-brand-amber font-bold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-8 leading-tight">
                            Providing total transport management capabilities to corporate bodies and individuals since day one.
                        </h2>
                        <div className="prose prose-lg text-slate-600 mb-12">
                            <p>
                                N.A. Logistics & Bus Services was founded with a clear mission: to solve the chaotic and unreliable transport challenges faced by businesses in Ghana. We recognized that time is money, and safe, punctual movement of people and goods is the backbone of any successful operation.
                            </p>
                            <p>
                                Today, we are a leading consultancy and fleet operator, trusted by major institutions for our unwavering commitment to professionalism. We don't just drive; we manage, optimize, and deliver results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE VALUES */}
            <section className="py-24 bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">Our Core Values</h2>
                        <p className="text-slate-600">The principles that drive every decision we make.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: "Safety",
                                desc: "Zero compromise on safety. Human lives are our most precious cargo."
                            },
                            {
                                icon: Clock,
                                title: "Professionalism",
                                desc: "Punctuality, neatness, and courtesy are non-negotiable standards for our team."
                            },
                            {
                                icon: Award,
                                title: "Excellence",
                                desc: "We constantly upgrade our fleet and training to stay consistent with global standards."
                            }
                        ].map((value, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all text-center group">
                                <div className="h-16 w-16 mx-auto bg-blue-50 text-brand-navy rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-brand-amber transition-colors">
                                    <value.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-navy mb-4">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STATS / TRUST SECTION */}
            <section className="py-20 bg-brand-navy text-white">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                        {[
                            { label: "Active Vehicles", value: "50+" },
                            { label: "Corporate Clients", value: "20+" },
                            { label: "Years Experience", value: "5+" },
                            { label: "Safety Rating", value: "100%" },
                        ].map((stat, i) => (
                            <div key={i} className="px-4">
                                <div className="text-4xl md:text-5xl font-bold text-brand-amber mb-2">{stat.value}</div>
                                <div className="text-blue-100 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white text-center">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">Join the Family</h2>
                    <p className="text-lg text-slate-600 mb-10">
                        Whether you are a driver looking to join our team or a client needing a reliable partner, we welcome you.
                    </p>
                    <Button size="lg" className="bg-brand-navy text-white hover:bg-brand-navy/90 h-12 px-8" asChild>
                        <Link href="/contact">Contact Us Today</Link>
                    </Button>
                </div>
            </section>

        </div>
    );
}

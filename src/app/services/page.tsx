import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";
import { Briefcase, Bus, Truck, Settings, Users, Calendar, Package, BadgeCheck, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Comprehensive transport management and logistics services in Ghana. Staff shuttles, fleet support, and consultancy.',
};

const services = [
    {
        title: "Transport Management Consulting",
        description: "Strategic advice for navigating Ghana's transport ecosystem. We help businesses optimize fleets, reduce costs, and improve operational efficiency.",
        icon: Briefcase,
    },
    {
        title: "Corporate Staff Shuttle",
        description: "Reliable daily transport for your employees. We ensure punctuality and comfort, boosting productivity and staff satisfaction.",
        icon: Bus,
    },
    {
        title: "Logistics Coordination",
        description: "End-to-end route planning and execution. We manage the complexities of moving goods/people so you can focus on core business.",
        icon: Truck,
    },
    {
        title: "Fleet Support & Operations",
        description: "Technical and operational oversight for your vehicles. Maintenance tracking, driver training, and compliance management.",
        icon: Settings,
    },
    {
        title: "Contract Transport",
        description: "Long-term partnership solutions for schools, NGOs, and institutions requiring dedicated transport resources.",
        icon: Users,
    },
    {
        title: "Event & Group Transportation",
        description: "Seamless logistics for corporate events, church programs, and large group movements across Ghana.",
        icon: Calendar,
    },
    {
        title: "Delivery Coordination",
        description: "Efficient local delivery management within Ghana. We ensure your goods reach their destination safely and on time.",
        icon: Package,
    },
    {
        title: "Safety & Compliance",
        description: "Ensuring all operations meet national road safety standards. We prioritize passenger safety above all else.",
        icon: BadgeCheck,
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* NEW VISUAL HERO SECTION */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/services_hero.png"
                        alt="Logistics Fleet on Ghana Highway"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-90" />
                </div>

                {/* Content */}
                <div className="container relative z-10 text-center px-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-amber text-brand-navy font-bold text-sm mb-6 tracking-wide uppercase">
                        Our Expertise
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                        Driving Efficiency <br /> <span className="text-brand-amber">Across Ghana.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
                        From daily staff commutes to complex logistics operations, we provide the professional transport solutions your business needs to move forward.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-brand-amber text-brand-navy hover:bg-brand-amber/90 font-bold h-14 px-8 text-lg" asChild>
                            <a href={`tel:${siteConfig.hotline}`}>Call {siteConfig.hotline}</a>
                        </Button>
                        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 h-14 px-8 text-lg bg-transparent" asChild>
                            <Link href="/contact">Get a Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID REDESIGNED */}
            <section className="py-24 bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">Comprehensive Solutions</h2>
                        <p className="text-slate-600">
                            We don't just provide vehicles; we provide peace of mind. delivering tailored strategies for every transport challenge.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-16 -mt-16 transition-colors group-hover:bg-brand-amber/10"></div>

                                <div className="relative z-10">
                                    <div className="h-14 w-14 rounded-xl bg-blue-50 text-brand-navy flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-brand-amber transition-colors shadow-sm">
                                        <service.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-amber transition-colors">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center text-sm font-bold text-brand-navy opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CORPORATE SOLUTIONS SECTION */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="container">
                    <div className="bg-brand-navy rounded-3xl overflow-hidden shadow-2xl relative">
                        {/* Abstract Background */}
                        <div className="absolute inset-0 opacity-10">
                            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                            </svg>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 relative z-10 p-8 md:p-16 items-center">
                            <div className="text-white space-y-6">
                                <div className="inline-flex items-center gap-2 text-brand-amber font-bold tracking-wider text-sm uppercase">
                                    <BadgeCheck className="h-5 w-5" />
                                    Corporate Priority
                                </div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
                                    Transport for Institutions & Large Organizations
                                </h2>
                                <p className="text-blue-100 text-lg leading-relaxed">
                                    Managing a fleet or staff transport shouldn't be your headache. We offer dedicated account management, reporting, and 100% compliance for corporate partners.
                                </p>
                                <ul className="space-y-3">
                                    {["Monthly Reporting", "Dedicated Account Manager", "Priority Support Line", "Flexible Billing"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-blue-50">
                                            <CheckCircle2 className="h-5 w-5 text-brand-amber" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4">
                                    <Button size="lg" className="bg-white text-brand-navy hover:bg-slate-100 font-bold h-12 px-8" asChild>
                                        <Link href="/corporate">Explore Corporate Plans</Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Simple Visual Element instead of image to keep it clean/generated */}
                            <div className="relative hidden lg:block h-full min-h-[300px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 p-8 flex flex-col justify-center">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                                            <span className="text-white font-medium">Daily Shuttle</span>
                                            <span className="text-green-400 font-bold">Active</span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                                            <span className="text-white font-medium">Fleet Maintenance</span>
                                            <span className="text-brand-amber font-bold">Scheduled</span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                                            <span className="text-white font-medium">Driver Safety Score</span>
                                            <span className="text-white font-bold">98%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DEDICATED CTA / "FOOTER-LIKE" ENDING */}
            <section className="py-24 bg-slate-50">
                <div className="container max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-6">Ready to move?</h2>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        Whether it's a single bus for an event or a yearly contract for your company, we are ready to serve.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border hover:border-brand-amber transition-colors flex-1 max-w-sm mx-auto w-full">
                            <Phone className="h-10 w-10 text-brand-navy mx-auto mb-4" />
                            <h3 className="font-bold text-lg text-brand-navy mb-2">Call Us Directly</h3>
                            <p className="text-slate-500 mb-6">Immediate response during working hours.</p>
                            <Button className="w-full bg-brand-navy hover:bg-brand-navy/90" asChild>
                                <a href={`tel:${siteConfig.hotline}`}>Call {siteConfig.hotline}</a>
                            </Button>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border hover:border-brand-amber transition-colors flex-1 max-w-sm mx-auto w-full">
                            <Calendar className="h-10 w-10 text-brand-navy mx-auto mb-4" />
                            <h3 className="font-bold text-lg text-brand-navy mb-2">Book Online</h3>
                            <p className="text-slate-500 mb-6">Request a detailed quote for your project.</p>
                            <Button variant="outline" className="w-full border-brand-navy text-brand-navy hover:bg-blue-50" asChild>
                                <Link href="/contact">Get a Quote</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

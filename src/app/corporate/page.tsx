import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { BadgeCheck, Briefcase, Building2, CheckCircle2, FileText, LayoutDashboard, Phone, PieChart, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Corporate Solutions',
    description: 'We partner with institutions, schools, and businesses to provide reliable transport management, staff shuttles, and fleet efficiency.',
};

export default function CorporatePage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* HERO SECTION */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/corporate_hero.png"
                        alt="Corporate Transport Fleet at Office Building"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80" />
                </div>

                <div className="container relative z-10 text-center px-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-amber text-brand-navy font-bold text-sm mb-6 tracking-wide uppercase">
                        For Business & Institutions
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                        Reliable Transport <br /> <span className="text-brand-amber">For Your Workforce.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Streamline your operations with our dedicated fleet management, staff shuttle services, and comprehensive logistics consulting.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-brand-amber text-brand-navy hover:bg-brand-amber/90 font-bold h-14 px-8 text-lg" asChild>
                            <Link href="/contact">Request Proposal</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* PARTNER VALUE PROPOSITION */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">
                                Why partner with us?
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Managing transport internally is costly and distracting. We take over the heavy lifting so you can focus on your core business goals.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                                {[
                                    { icon: ShieldCheck, title: "Risk Mitigation", desc: "Full insurance coverage and compliant vehicles reduce your liability." },
                                    { icon: PieChart, title: "Cost Efficiency", desc: "Optimized routes and preventative maintenance lower operational costs." },
                                    { icon: Users, title: "Staff Satisfaction", desc: "Comfortable, punctual commutes impove employee retention and morale." },
                                    { icon: LayoutDashboard, title: "Full Transparency", desc: "Monthly reports on mileage, fuel usage, and driver performance." },
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="h-12 w-12 rounded-lg bg-blue-50 text-brand-navy flex items-center justify-center mb-4">
                                            <item.icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="font-bold text-brand-navy text-lg mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-amber rounded-3xl transform rotate-3 translate-x-2 translate-y-2 opacity-20"></div>
                            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl relative z-10 shadow-xl">
                                <h3 className="text-xl font-bold text-brand-navy mb-6">Our Corporate Standards</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Professional, Uniformed Drivers",
                                        "24/7 Support Hotline",
                                        "Replacement Vehicle Guarantee",
                                        "GPS Tracking Installed",
                                        "Regular Safety Audits",
                                        "Custom Billing Cycles"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                                            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                            <span className="font-medium text-brand-navy">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT WE NEED CHECKLIST */}
            <section className="py-24 bg-slate-50">
                <div className="container max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">How to Get Started</h2>
                    <p className="text-slate-600">To provide an accurate quote, we'll need a few details about your requirements.</p>
                </div>

                <div className="container">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Users,
                                title: "Capacity Needs",
                                desc: "How many staff members need moving daily? Or what is the volume of goods?"
                            },
                            {
                                icon: Building2,
                                title: "Route Details",
                                desc: "Pick-up points, destinations, and estimated daily mileage."
                            },
                            {
                                icon: FileText,
                                title: "Contract Duration",
                                desc: "Is this a one-time event, monthly retainer, or annual contract?"
                            }
                        ].map((step, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center relative overflow-hidden group hover:border-brand-amber transition-colors">
                                <div className="absolute top-0 left-0 w-full h-1 bg-brand-navy group-hover:bg-brand-amber transition-colors"></div>
                                <div className="h-16 w-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-brand-navy mb-6 group-hover:scale-110 transition-transform">
                                    <step.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
                                <p className="text-slate-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 bg-brand-navy overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/50 transform -skew-x-12 translate-x-32"></div>
                <div className="container relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Let's Discuss Your Solutions</h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                        Contact our corporate team today. We can arrange a site visit or a virtual consultation to assess your needs.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-brand-amber text-brand-navy hover:bg-brand-amber/90 font-bold h-14 px-8 text-lg min-w-[200px]" asChild>
                            <a href={`tel:${siteConfig.hotline}`}>Call Corporate Team</a>
                        </Button>
                        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 h-14 px-8 text-lg min-w-[200px] bg-transparent" asChild>
                            <Link href="/contact">Fill Quote Form</Link>
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
}

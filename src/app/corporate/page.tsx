import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";
import { CheckCircle2, FileCheck, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Corporate Solutions',
    description: 'Specialized transport solutions for institutions, NGOs, and companies in Ghana.',
};

export default function CorporatePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-brand-navy text-white py-20 relative overflow-hidden">
                <div className="container relative z-10">
                    <span className="text-brand-amber font-bold tracking-wider text-sm uppercase mb-4 block">For Institutions</span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Corporate Transport <br /> Solutions</h1>
                    <p className="text-blue-100 text-lg max-w-2xl mb-8">
                        Reliable, scalable, and professional transport management for businesses, NGOs, and government institutions.
                    </p>
                    <Button size="lg" className="bg-brand-amber text-brand-navy hover:bg-brand-amber/90 font-bold" asChild>
                        <Link href="/contact">Request Corporate Proposal</Link>
                    </Button>
                </div>
                {/* Background elements */}
                <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-12 hidden lg:block"></div>
            </section>

            <section className="py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-brand-navy mb-6">Why Partner With Us?</h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Managing your own fleet or coordinating transport can be a drain on resources. We step in as your strategic partner, ensuring your staff and operations move smoothly.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Dedicated account management",
                                    "Regular maintenance and safety audits",
                                    "Professional, uniformed drivers",
                                    "Cost-effective route optimization",
                                    "Transparent monthly reporting"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-navy font-medium">
                                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <Card className="bg-slate-50 border-none shadow-sm">
                                <CardHeader>
                                    <Users className="h-8 w-8 text-brand-navy mb-2" />
                                    <CardTitle>Staff Shuttles</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-slate-600">
                                    Daily pick-up and drop-off services designed to improve punctuality and employee welfare.
                                </CardContent>
                            </Card>
                            <Card className="bg-slate-50 border-none shadow-sm">
                                <CardHeader>
                                    <TrendingUp className="h-8 w-8 text-brand-navy mb-2" />
                                    <CardTitle>Efficiency</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-slate-600">
                                    Route planning that minimizes fuel usage and time on the road.
                                </CardContent>
                            </Card>
                            <Card className="bg-slate-50 border-none shadow-sm">
                                <CardHeader>
                                    <FileCheck className="h-8 w-8 text-brand-navy mb-2" />
                                    <CardTitle>Compliance</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-slate-600">
                                    Full adherence to DVLA regulations and insurance requirements.
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-20">
                <div className="container max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-brand-navy mb-4">What We Need From You</h2>
                        <p className="text-slate-600">To provide an accurate quote, prepare the following details:</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
                                    <span className="bg-brand-amber text-brand-navy h-6 w-6 rounded-full flex items-center justify-center text-xs">1</span>
                                    Requirements
                                </h3>
                                <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
                                    <li>Number of passengers/staff</li>
                                    <li>Frequency (Daily, Weekly, Ad-hoc)</li>
                                    <li>Type of vehicle preference (Bus, Van, SUV)</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
                                    <span className="bg-brand-amber text-brand-navy h-6 w-6 rounded-full flex items-center justify-center text-xs">2</span>
                                    Logistics
                                </h3>
                                <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
                                    <li>Pick-up and drop-off locations</li>
                                    <li>Shift timings (if applicable)</li>
                                    <li>Contract duration expected</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-6">
                            <p className="text-sm text-muted-foreground italic">
                                Ready to discuss? Our consultants are standing by.
                            </p>
                            <Button size="lg" asChild>
                                <Link href="/contact">Request Corporate Quote</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

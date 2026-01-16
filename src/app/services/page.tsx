import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";
import { Briefcase, Bus, Truck, Settings, Users, Calendar, Package, BadgeCheck } from "lucide-react";
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

            {/* Header Section */}
            <section className="bg-slate-50 py-16 md:py-24 border-b">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-navy mb-6">Our Services</h1>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        Total transport management solutions tailored for the unique challenges of the Ghanaian road network.
                        From consultancy to daily operations, we deliver excellence.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="border-border/50 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                                <CardHeader>
                                    <div className="h-12 w-12 rounded-lg bg-blue-50 text-brand-navy flex items-center justify-center mb-4">
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-xl text-brand-navy">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-slate-600">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Corporate Packages Callout */}
            <section className="bg-brand-navy text-white py-20">
                <div className="container md:flex items-center justify-between gap-12">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-3xl font-heading font-bold mb-4">Corporate Transport Packages</h2>
                        <p className="text-blue-100 max-w-xl text-lg">
                            Looking for a dedicated solution for your organization? We create bespoke packages including daily shuttles, fleet management, and reporting.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 min-w-max">
                        <Button size="lg" className="bg-brand-amber text-brand-navy hover:bg-brand-amber/90 font-bold" asChild>
                            <Link href="/corporate">View Corporate Solutions</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl font-heading font-bold text-brand-navy mb-8 text-center">Common Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg border shadow-sm">
                            <h3 className="font-bold text-brand-navy mb-2">Do you provide vehicles specific to our needs?</h3>
                            <p className="text-slate-600">Yes, we assess your specific requirements (capacity, comfort, terrain) to recommend and provide the right vehicles.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border shadow-sm">
                            <h3 className="font-bold text-brand-navy mb-2">Can we hire for a one-off event?</h3>
                            <p className="text-slate-600">Absolutely. We handle ad-hoc requests for events, excursions, and group travel with the same professionalism as long-term contracts.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border shadow-sm">
                            <h3 className="font-bold text-brand-navy mb-2">How do you ensured safety?</h3>
                            <p className="text-slate-600">Safety is our primary value. All vehicles undergo regular checks, and our drivers are professionally trained and vetted.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Sidebar/Footer area on mobile, or just rely on main footer CTA */}
            <div className="container py-12 text-center md:text-left">
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-bold text-brand-navy mb-2">Need a custom quote?</h3>
                        <p className="text-slate-600">Call our hotline now for immediate assistance.</p>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="default" size="lg" asChild>
                            <a href={`tel:${siteConfig.hotline}`}>Call {siteConfig.hotline}</a>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );
}

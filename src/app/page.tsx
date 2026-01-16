"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight, CheckCircle2, Truck, ShieldCheck, Bus, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

// Components
// Header and Footer are now in RootLayout

const features = [
  "Reliable Planning",
  "Safety First",
  "On-Time Delivery",
  "Corporate Ready"
];

const services = [
  {
    title: "Transport Management Consulting",
    description: "Expert advice on optimizing your transport operations for efficiency and cost reduction.",
    icon: Briefcase
  },
  {
    title: "Corporate Staff Shuttle",
    description: "Safe, punctual, and comfortable daily transportation for your workforce.",
    icon: Bus
  },
  {
    title: "Logistics Coordination",
    description: "End-to-end route planning and fleet management for seamless delivery.",
    icon: Truck
  },
  {
    title: "Contract Transport",
    description: "Long-term transport partnerships for institutions, schools, and NGOs.",
    icon: ShieldCheck
  }
];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-slate-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#0A192F 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>
        {/* Route Line Motif */}
        <svg className="absolute top-0 right-0 h-full w-1/2 text-brand-amber/10 pointer-events-none hidden lg:block" fill="none" viewBox="0 0 400 800">
          <path d="M50 0 C 100 200, 300 200, 350 400 S 100 600, 150 800" stroke="currentColor" strokeWidth="100" />
        </svg>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-brand-navy">
              <span className="flex h-2 w-2 rounded-full bg-brand-amber mr-2"></span>
              Premium Transport Solutions in Ghana
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-navy leading-tight">
              Transport Management & <br />
              <span className="text-brand-amber">
                Road Logistics Done Right.
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl">
              Total transport management consultants providing efficient services tailored to suit both individuals and corporate institutions across Ghana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg h-14 px-8 bg-brand-navy hover:bg-brand-navy/90 text-white shadow-xl hover:translate-y-[-2px] transition-all" asChild>
                <a href={`tel:${siteConfig.hotline}`}>Call {siteConfig.hotline}</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-brand-navy text-brand-navy hover:bg-blue-50" asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>

            <div className="pt-8 flex flex-wrap gap-4 text-sm font-medium text-slate-500">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Visual Placeholder for Transport Image */}
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-200 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero_bus_transport_ghana.png"
              alt="N.A. Logistics Bus Fleet"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-navy/10"></div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">Our Services</h2>
            <p className="text-slate-600">Tailored transport solutions for corporate bodies and individual clients.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-brand-navy group-hover:bg-brand-amber group-hover:text-white transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-brand-navy">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="link" size="lg" asChild className="text-brand-navy font-semibold">
              <Link href="/services" className="gap-2">View All Services <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">Why Choose N.A. Logistics?</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We understand that in transport, reliability is everything. Our operations are built on a foundation of safety, punctuality, and professional conduct.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Safety First Mindset", desc: "Rigorous vehicle maintenance and driver vetting processes." },
                  { title: "Ghana Road Expertise", desc: "Deep knowledge of local routes to avoid delays and ensure safety." },
                  { title: "Corporate Professionalism", desc: "Uniformed drivers and detailed reporting for valid business needs." },
                  { title: "Tailored Solutions", desc: "We don't do one-size-fits-all. We build the plan around you." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-10 w-10 min-w-[2.5rem] rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy text-lg">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center justify-center h-48">
                <span className="text-4xl font-bold text-brand-amber mb-2">100%</span>
                <span className="text-brand-navy font-medium">Reliability</span>
              </div>
              <div className="bg-brand-navy p-6 rounded-xl shadow-sm flex flex-col items-center text-center justify-center h-48 text-white mt-8">
                <ShieldCheck className="h-12 w-12 mb-2 text-brand-amber" />
                <span className="font-medium">Fully Insured</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center justify-center h-48 -mt-8">
                <span className="text-4xl font-bold text-brand-amber mb-2">24/7</span>
                <span className="text-brand-navy font-medium">Support</span>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl shadow-sm flex flex-col items-center text-center justify-center h-48">
                <Truck className="h-12 w-12 mb-2 text-brand-navy" />
                <span className="text-brand-navy font-medium">Modern Fleet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS / INDUSTRIES */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">Our Process</h2>
            <p className="text-slate-600">Simple steps to get your transport sorted.</p>
          </div>

          <div className="relative grid md:grid-cols-4 gap-8">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-8 left-0 w-full h-0.5 bg-slate-100 hidden md:block -z-10 transform translate-y-4"></div>

            {[
              { step: "01", title: "Contact Us", desc: "Call our hotline or request a quote online." },
              { step: "02", title: "Analysis", desc: "We assess your specific route and vehicle needs." },
              { step: "03", title: "Proposal", desc: "We provide a tailored plan and transparent pricing." },
              { step: "04", title: "Execution", desc: "Our team delivers reliable service from day one." }
            ].map((item, i) => (
              <div key={i} className="bg-white pt-4 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy text-white text-xl font-bold border-4 border-white shadow-lg mb-6 relative z-10">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-brand-navy text-white relative overflow-hidden">
        {/* Abstract Lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container relative z-10 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Ready to optimise your transport?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact our hotline for immediate assistance or request a corporate quote today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-brand-amber text-brand-navy hover:bg-brand-amber/90 font-bold" asChild>
              <a href={`tel:${siteConfig.hotline}`}>Call {siteConfig.hotline}</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}


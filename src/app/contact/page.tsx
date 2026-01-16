import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/lib/site-config";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with N.A. Logistics for quotes, enquiries, and support. Visit our office in Accra or call our hotline.',
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* HERO SECTION */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/contact_hero.png"
                        alt="Customer Support Team"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply" />
                </div>
                <div className="container relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Contact Us</h1>
                    <p className="text-lg text-slate-200 max-w-xl mx-auto">
                        Have a question or need a quote? We are here to help 24/7.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container">

                    {/* INFO GRID */}
                    <div className="grid md:grid-cols-3 gap-8 -mt-32 mb-16 relative z-20">
                        {/* Card 1: Phone */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-brand-amber text-center">
                            <div className="h-14 w-14 mx-auto bg-blue-50 text-brand-navy rounded-full flex items-center justify-center mb-4">
                                <Phone className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-xl text-brand-navy mb-2">Call Us</h3>
                            <p className="text-slate-600 mb-4">Mon-Fri from 8am to 5pm</p>
                            <a href={`tel:${siteConfig.hotline}`} className="text-brand-amber font-bold text-lg hover:underline block mb-1">{siteConfig.hotline}</a>
                            <a href={`tel:${siteConfig.phones.secondary}`} className="text-brand-navy font-bold text-lg hover:underline block">{siteConfig.phones.secondary}</a>
                        </div>

                        {/* Card 2: Email */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-brand-navy text-center">
                            <div className="h-14 w-14 mx-auto bg-blue-50 text-brand-navy rounded-full flex items-center justify-center mb-4">
                                <Mail className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-xl text-brand-navy mb-2">Email Us</h3>
                            <p className="text-slate-600 mb-4">We reply within 24 hours</p>
                            <a href={`mailto:${siteConfig.email}`} className="text-brand-navy font-bold text-lg hover:underline block break-all">{siteConfig.email}</a>
                        </div>

                        {/* Card 3: Visit */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-brand-amber text-center">
                            <div className="h-14 w-14 mx-auto bg-blue-50 text-brand-navy rounded-full flex items-center justify-center mb-4">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-xl text-brand-navy mb-2">Visit Us</h3>
                            <p className="text-slate-600 mb-4">Come say hello at our office</p>
                            <p className="text-brand-navy font-medium text-lg leading-relaxed">
                                {siteConfig.address.street}<br />
                                {siteConfig.address.city}, {siteConfig.address.country}
                            </p>
                        </div>
                    </div>


                    {/* FORM & MAP */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Form Section */}
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100">
                            <div className="mb-8">
                                <h2 className="text-3xl font-heading font-bold text-brand-navy mb-2">Send us a message</h2>
                                <p className="text-slate-600">Fill out the form below and we'll get back to you immediately.</p>
                            </div>
                            <ContactForm />
                        </div>

                        {/* Map Section */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100 h-[400px] lg:h-[500px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254238.64756853762!2d-0.287841!3d5.590924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2c7e09b%3A0xe5f9b18361b9b188!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, borderRadius: '1.2rem' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            {/* Working Hours */}
                            <div className="bg-brand-navy rounded-2xl p-8 text-white relative overflow-hidden">
                                <div className="absolute right-0 top-0 opacity-10 transform translate-x-8 -translate-y-8">
                                    <Clock className="h-32 w-32" />
                                </div>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-brand-amber" /> Working Hours
                                </h3>
                                <div className="space-y-3 relative z-10">
                                    {siteConfig.workingHours.map((item, i) => (
                                        <div key={i} className="flex justify-between border-b border-white/10 pb-2 last:border-0 last:pb-0">
                                            <span className="text-blue-100">{item.day}</span>
                                            <span className="font-bold text-white">{item.hours}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

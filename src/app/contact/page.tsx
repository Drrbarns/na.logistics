import { siteConfig } from "@/lib/site-config";
import { ContactForm } from "@/components/sections/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with N.A. Logistics for quotes, consulting, and transport services.',
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="container text-center max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-navy mb-6">Get in Touch</h1>
                    <p className="text-lg text-slate-600">
                        Have a question or need a quote? We are here to help. Reach out to us via phone, email, or visit our office.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

                        {/* Contact Details */}
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-2xl font-bold text-brand-navy mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 min-w-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-navy">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-brand-navy">Phone Lines</h3>
                                            <p className="text-slate-600 mb-1">Hotline: <a href={`tel:${siteConfig.hotline}`} className="text-brand-amber font-semibold hover:underline">{siteConfig.hotline}</a></p>
                                            <p className="text-slate-600">Office: <a href={`tel:${siteConfig.phones.secondary}`} className="hover:underline">{siteConfig.phones.secondary}</a></p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 min-w-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-navy">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-brand-navy">Location</h3>
                                            <p className="text-slate-600">{siteConfig.address.postal}</p>
                                            <p className="text-slate-600">{siteConfig.address.street}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 min-w-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-navy">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-brand-navy">Digital</h3>
                                            <p className="text-slate-600">Email: {siteConfig.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="rounded-xl overflow-hidden h-[300px] w-full bg-slate-200 border relative shadow-inner">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254130.605481308!2d-0.219803!3d5.590822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1689772800000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                    className="absolute inset-0 grayscale contrast-[0.9] opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                ></iframe>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100">
                            <h2 className="text-2xl font-bold text-brand-navy mb-2">Send us a Message</h2>
                            <p className="text-slate-600 mb-6">Fill out the form below and we will get back to you shortly.</p>
                            <ContactForm />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
// Note: We'll use a simple native select for speed/reliability instead of heavy Select component unless needed, 
// but given "shadcn/ui components" request, I will use a native select styled like shadcn input for simplicity to avoid missing components.

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    phone: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
    organization: z.string().optional(),
    service: z.string().min(1, {
        message: "Please select a service.",
    }),
    date: z.string().optional(),
    message: z.string().min(5, {
        message: "Message must be at least 5 characters.",
    }),
})

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            organization: "",
            service: "",
            date: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        try {
            const response = await fetch("/contact/submit", { // Changing route to /contact/submit to avoid conflict with page
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            })

            if (response.ok) {
                setIsSuccess(true)
                form.reset()
            } else {
                console.error("Submission failed")
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSuccess) {
        return (
            <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                <h3 className="font-bold text-lg mb-2">Message Sent!</h3>
                <p>Thank you for contacting N.A. Logistics. We will get back to you shortly.</p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
                    Send Another Message
                </Button>
            </div>
        )
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="024..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Organization (Optional)</FormLabel>
                            <FormControl>
                                <Input placeholder="Company Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Service Needed</FormLabel>
                                <FormControl>
                                    <select
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        {...field}
                                    >
                                        <option value="">Select a service...</option>
                                        <option value="Consulting">Transport Consulting</option>
                                        <option value="Staff Shuttle">Corporate Staff Shuttle</option>
                                        <option value="Logistics">Logistics Coordination</option>
                                        <option value="Contract">Contract Transport</option>
                                        <option value="Event">Event/Group Transport</option>
                                        <option value="Delivery">Delivery Services</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Preferred Date (Optional)</FormLabel>
                                <FormControl>
                                    <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Tell us about your transport needs..." className="min-h-[120px]" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" size="lg" className="w-full bg-brand-navy hover:bg-brand-navy/90" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </Form>
    )
}

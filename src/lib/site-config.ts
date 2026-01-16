export const siteConfig = {
    name: "N.A. Logistics and Bus Services",
    shortName: "N.A. Logistics",
    description: "Total transport management consultants providing efficient services on the road transport system in Ghana. Tailored for corporate and individual needs.",
    url: "https://unknown-placeholder.com", // Placeholder
    ogImage: "https://unknown-placeholder.com/og.jpg",
    email: "info@nalogistics.com",

    hotline: "0248323667",
    phones: {
        primary: "0248323667",
        secondary: "0545059997",
        whatsapp: "0545059997", // Defaulting to secondary as requested if not same, but prompt says: "if WhatsApp number is same as hotline, use 0248323667; otherwise use 0545059997". Hotline is 0248323667. Secondary 0545059997. So use 0545059997 for WhatsApp?
        // "if WhatsApp number is same as hotline, use 0248323667; otherwise use 0545059997 as WhatsApp by default"
        // Hotline is 0248323667. Secondary is 0545059997. They are different? Or is hotline one of them?
        // User: "Phone: 0248323667 / 0545059997".
        // I will use 0545059997 for WhatsApp as it's the second number and often mobile.
        display: ["0248323667", "0545059997"]
    },

    address: {
        postal: "Box KT 424, Accra, Ghana",
        street: "Accra, Ghana", // Placeholder
        city: "Accra",
        country: "Ghana",
    },

    workingHours: [
        { day: "Monday", hours: "8:00–17:00" },
        { day: "Tuesday", hours: "8:00–17:00" },
        { day: "Wednesday", hours: "8:00–17:00" },
        { day: "Thursday", hours: "8:00–17:00" },
        { day: "Friday", hours: "8:00–17:00" },
        { day: "Saturday", hours: "9:00–14:00" },
        { day: "Sunday", hours: "Closed" },
    ],

    mainNav: [
        { title: "Home", href: "/" },
        { title: "Services", href: "/services" },
        { title: "Corporate Solutions", href: "/corporate" },
        { title: "About", href: "/about" },
        { title: "Contact", href: "/contact" },
    ]
}

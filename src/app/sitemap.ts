import { Metadata, Route } from 'next';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): any {
    const routes = [
        '',
        '/services',
        '/corporate',
        '/about',
        '/contact',
    ].map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}

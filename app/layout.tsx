import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://andrewflores-23.github.io/Noili-s-Windows/'),
  title: { default: "Noily's Window Treatment & More | Diseño de interiores", template: "%s · Noily's" },
  description: 'Diseño interior, mobiliario y tratamientos de ventanas a medida en Guanacaste, Costa Rica.',
  openGraph: {
    title: "Noily's Window Treatment & More",
    description: 'Diseño interior, mobiliario y tratamientos de ventanas a medida en Guanacaste, Costa Rica.',
    type: 'website',
    locale: 'es_CR',
    images: [{ url: 'https://andrewflores-23.github.io/Noili-s-Windows/og.jpg', width: 1200, height: 630, alt: "Noily's Window Treatment & More" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Noily's Window Treatment & More",
    description: 'Diseño interior, mobiliario y tratamientos de ventanas a medida en Guanacaste, Costa Rica.',
    images: ['https://andrewflores-23.github.io/Noili-s-Windows/og.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}

import ClientProviders from '@/components/ui/ClientProviders';
import type { Metadata } from 'next';
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'Hari Om — AI Systems Engineer · Distributed Infrastructure',
  description:
    'Portfolio of Hari Om. Building a 100k+/day email dispatch engine and AI orchestration agent for a London startup. Open to senior backend and AI engineering roles at US/UK startups.',
  keywords: ['Hari Om', 'AI Systems Engineer', 'Distributed Infrastructure', 'NestJS', 'Redis', 'BullMQ', 'IMAP', 'LLM', 'Agent Orchestration'],
  authors: [{ name: 'Hari Om' }],
  icons: {
    icon: '/images/avatar-circular.png',
    apple: '/images/avatar-circular.png',
  },
  openGraph: {
    title: 'Hari Om — AI Systems Engineer',
    description: 'Building distributed infrastructure and AI agents at production scale.',
    type: 'website',
    locale: 'en_US',
    images: ['/images/avatar-circular.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${bebasNeue.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}

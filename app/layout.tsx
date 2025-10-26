import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Hari Om - Full-Stack Developer & AI Engineer',
  description:
    'Portfolio of Hari Om, a Full-Stack Developer and AI Engineer specializing in React, Next.js, Node.js, and AI/ML technologies. Currently working at NxtJob.ai in Bengaluru.',
  keywords: ['Hari Om', 'Full-Stack Developer', 'AI Engineer', 'React', 'Next.js', 'Node.js', 'NxtJob.ai', 'Portfolio'],
  authors: [{ name: 'Hari Om' }],
  openGraph: {
    title: 'Hari Om - Full-Stack Developer & AI Engineer',
    description: 'Portfolio showcasing projects in web development, AI/ML, and software engineering',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}

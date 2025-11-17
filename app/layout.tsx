import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './components/theme-provider';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Danilo Vilhena',
    template: '%s | Danilo Vilhena',
  },
  description: 'Full-stack developer with 5+ years of experience, focused on performance, user experience and rigorous testing.',
  keywords: [
    'Danilo Vilhena',
    'Full Stack Developer',
    'Software Engineer',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'Portfolio',
    'Frontend Developer',
    'Backend Developer',
  ],
  authors: [{ name: 'Danilo Vilhena' }],
  creator: 'Danilo Vilhena',
  publisher: 'Danilo Vilhena',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://danilovilhena.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Danilo Vilhena',
    title: 'Danilo Vilhena - Full Stack Engineer',
    description: 'Full-stack developer with 5+ years of experience, focused on performance, user experience and rigorous testing.',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 1200,
        alt: 'Danilo Vilhena',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Danilo Vilhena - Full Stack Engineer',
    description: 'Full-stack developer with 5+ years of experience, focused on performance, user experience and rigorous testing.',
    images: ['/icon.png'],
    creator: '@danilovilhena_',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <body className={`${inter.variable} antialiased bg-[#F7F7F4] dark:bg-[#222]`}>
          {children}
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  );
}

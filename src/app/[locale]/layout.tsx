import { Onest } from 'next/font/google';
import localFont from 'next/font/local';

//import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';

import { cn } from '@/shared/lib/helpers/styles';

import '@/shared/lib/styles/null.scss';
import '@/shared/lib/styles/base.scss';

const onest = Onest({
  variable: '--font-onest',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const switzer = localFont({
  src: [
    {
      path: '../fonts/Switzer-Thin.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-ThinItalic.woff',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../fonts/Switzer-Extralight.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-ExtralightItalic.woff',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../fonts/Switzer-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-LightItalic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/Switzer-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-Italic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/Switzer-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-MediumItalic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/Switzer-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-SemiboldItalic.woff',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../fonts/Switzer-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-BoldItalic.woff',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../fonts/Switzer-Extrabold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-ExtraboldItalic.woff',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../fonts/Switzer-Black.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-BlackItalic.woff',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-switzer',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Marketing Consulting & Campaign Planning | Antonio Blefari',
  description: 'Independent marketing consulting, campaign planning, and marketing planning services. Structured decision-making, clear priorities, and documented strategies. Based in Australia.',
  openGraph: {
    title: 'Marketing Consulting & Campaign Planning | Antonio Blefari',
    description: 'Independent marketing consulting, campaign planning, and marketing planning services. Structured decision-making, clear priorities, and documented strategies. Based in Australia.',
    images: 'https://blefariconsult.com/meta.png',
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      {/* <GoogleAnalytics gaId="G-7YSW5B6JKV" /> */}
      <body className={cn(onest.variable, switzer.variable)}>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

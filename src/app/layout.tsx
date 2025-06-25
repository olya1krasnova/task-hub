import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { APP_NAME } from '@/constants';

import './globals.css';
import Providers from '@/app/Providers';

const font = Poppins({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  icons: {
    icon: '/images/favicon.svg',
    shortcut: '/images/favicon.svg',
  },
  title: {
    absolute: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: 'Task hub',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

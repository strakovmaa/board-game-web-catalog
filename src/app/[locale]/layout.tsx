import { ThemeRegistry } from '@/theme/ThemeRegistry';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

// TODO: https://github.com/vercel/next.js/issues/49408
// export function generateStaticParams() {
//   return [{ locale: 'cs' }, { locale: 'en' }];
// }

export const metadata = {
  title: 'Next App with MUI5',
  description: 'next app with mui5',
};

type Props = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

export default async function RootLayout({ children, params: { locale } }: Props) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeRegistry>{children}</ThemeRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

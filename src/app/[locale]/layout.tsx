import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

export function generateStaticParams() {
  return [{ locale: 'cs' }, { locale: 'en' }];
}

export const metadata = {
  title: 'Webový katalog deskových her',
  icons: {
    icon: '/Logo.png',
  },
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
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

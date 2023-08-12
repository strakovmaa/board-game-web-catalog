import { ThemeRegistry } from '@/theme/ThemeRegistry';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Next App with MUI5',
  description: 'next app with mui5',
};

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}

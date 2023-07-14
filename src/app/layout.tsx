import { ThemeRegistry } from '@/theme/ThemeRegistry';

export const metadata = {
  title: 'Next App with MUI5',
  description: 'next app with mui5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}

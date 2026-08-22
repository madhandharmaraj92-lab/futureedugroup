import type { Metadata } from 'next';
import '../vendor/bootstrap/css/bootstrap.min.css';

export const metadata: Metadata = {
  title: 'Future Edu Group | Empowering Education. Enabling Careers. Building Futures.',
  description: 'Future Edu Group provides tourism and hospitality training, higher education guidance, and K-12 learning solutions.',
  icons: {
    icon: '/assets/images/logos/logo.jpg',
    shortcut: '/assets/images/logos/logo.jpg',
    apple: '/assets/images/logos/logo.jpg',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/assets/images/logos/logo.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700,800&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="/assets/css/templatemo-eduwell-style.css" />
        <link rel="stylesheet" href="/assets/css/owl.css" />
        <link rel="stylesheet" href="/assets/css/lightbox.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}

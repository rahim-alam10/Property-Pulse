import React from 'react';
import '@/assets/styles/global.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'PropertyPulse',
  description: 'Your property management solution',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
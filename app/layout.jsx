import React from 'react';
import '@/assets/styles/global.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'

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
        <Footer/>
      </body>
    </html>
  );
}
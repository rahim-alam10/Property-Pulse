import React from 'react';
import '@/assets/styles/global.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '../components/AuthProvider';

export const metadata = {
  title: 'PropertyPulse',
  description: 'Your property management solution',
};

export default function MainLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
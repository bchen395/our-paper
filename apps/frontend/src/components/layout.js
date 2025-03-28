import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Layout({ children, title = 'Friend Newspaper' }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Friend Newspaper - Collaborative Weekly Newspaper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Friend Newspaper</p>
      </footer>
    </div>
  );
}
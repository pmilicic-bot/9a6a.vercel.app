import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
export const metadata: Metadata = {
  title: { default: '9A6A | Amateur Radio Journal', template: '%s | 9A6A' },
  description: 'Digitalna arhiva Petra Miličića, 9A6A — radioamaterizam, DX, contesting, radio tehnika, znanost i putovanja.',
  metadataBase: new URL('https://9a6a.vercel.app'),
  openGraph: { title: '9A6A | Amateur Radio Journal', description: 'DX · Contest · Radio Technology · Travel', type: 'website' },
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="hr"><body><Header/><main>{children}</main><Footer/></body></html>; }

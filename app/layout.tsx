import './globals.css'
import Navbar from './components/Navbar'
import { Metadata } from 'next'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Value 4 Vector Artwork',
  description: 'v4vector.com offers a vast collection of high-quality vector artwork, following a unique value-for-value business model. Discover captivating designs and illustrations crafted by talented artists, ready to enhance your creative projects. With our value-for-value approach, you have the freedom to contribute in a way that feels right for you. Explore the world of vector art and unlock your creative potential at v4vector.com.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <main className='mx-auto'>
        {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}

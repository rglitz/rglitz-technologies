import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { PhoneCall, Mail, MapPin } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RGlitz - Digital Marketing Agency in Hyderabad',
  description: 'Leading digital marketing agency in Hyderabad offering web development, mobile apps, SEO, and digital marketing services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <header className="border-b">
            <div className="container mx-auto px-6 py-2">
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <PhoneCall className="h-4 w-4 mr-2" />
                    <a href="tel:+917670832977">+91 76708 32977</a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href="mailto:info@rglitz.com">info@rglitz.com</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </div>
          </header>
          
          <nav className="py-4 border-b bg-background">
            <div className="container mx-auto px-6">
              <div className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">RGlitz</Link>
                <div className="space-x-6">
                  <Link href="/" className="hover:text-primary">Home</Link>
                  <Link href="/services" className="hover:text-primary">Services</Link>
                  <Link href="/about" className="hover:text-primary">About</Link>
                  <Link href="/contact" className="hover:text-primary">Contact</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {children}

        <footer className="bg-primary text-white">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">RGlitz</h3>
                <p className="text-white/80">Your trusted digital marketing partner in Hyderabad.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/terms">Terms & Conditions</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li>Website Development</li>
                  <li>Mobile Apps</li>
                  <li>Digital Marketing</li>
                  <li>SEO Services</li>
                  <li>Content Creation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <PhoneCall className="h-4 w-4 mr-2" />
                    +91 76708 32977
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    info@rglitz.com
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Hyderabad, India
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
              <p>© {new Date().getFullYear()} RGlitz. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
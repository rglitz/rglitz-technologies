'use client';

import { ArrowRight, Code, Layout, Smartphone, Megaphone, PenTool } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {
  const services = [
    {
      icon: <Layout className="h-8 w-8 text-primary" />,
      title: "Website Design & Development",
      description: "Custom-built, responsive websites that reflect your brand and drive results."
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Web Applications",
      description: "Scalable web applications tailored to your business needs."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "IOS & Android Apps",
      description: "Native mobile applications that provide seamless user experiences."
    },
    {
      icon: <Megaphone className="h-8 w-8 text-primary" />,
      title: "SEO & SMM",
      description: "Data-driven digital marketing strategies to boost your online presence."
    },
    {
      icon: <PenTool className="h-8 w-8 text-primary" />,
      title: "Content Creation",
      description: "Engaging content that tells your story and connects with your audience."
    }
  ];

  const testimonials = [
    {
      name: "Priya Reddy",
      company: "TechStart Solutions",
      content: "RGlitz transformed our online presence completely. Their team's expertise in web development and digital marketing helped us achieve remarkable growth.",
      location: "Hyderabad"
    },
    {
      name: "Rahul Sharma",
      company: "Foodie Express",
      content: "The mobile app developed by RGlitz exceeded our expectations. Their attention to detail and commitment to quality is outstanding.",
      location: "Jubilee Hills"
    },
    {
      name: "Anita Desai",
      company: "StyleHub Boutique",
      content: "Our website traffic increased by 200% after implementing RGlitz's SEO strategies. They truly understand the local market.",
      location: "Banjara Hills"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-primary min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Digital Presence with RGlitz
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Leading Digital Marketing Agency in Hyderabad delivering innovative solutions for your business growth
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4">
                  <p className="text-lg italic">"{testimonial.content}"</p>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 text-white/90">Let's discuss how we can help you achieve your digital goals</p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
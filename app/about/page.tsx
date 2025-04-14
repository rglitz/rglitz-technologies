import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Users, Target, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Support" },
  ];

  const values = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Client-Focused",
      description: "We prioritize our clients' success and satisfaction in everything we do.",
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Result-Driven",
      description: "Our strategies are designed to deliver measurable business outcomes.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Innovation",
      description: "We stay ahead of digital trends to provide cutting-edge solutions.",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Excellence",
      description: "We maintain the highest standards in our work and deliverables.",
    },
  ];

  return (
    <main className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About RGlitz</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We are a leading digital marketing agency in Hyderabad, helping businesses
          transform their digital presence and achieve sustainable growth.
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">{stat.number}</h3>
            <p className="text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </section>

      {/* Story Section */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Founded in 2019, RGlitz has grown from a small web development studio
            to a full-service digital marketing agency. Our journey has been driven
            by a passion for creating exceptional digital experiences and helping
            businesses succeed in the digital age.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Based in Hyderabad, we've had the privilege of working with clients
            across various industries, from startups to established enterprises.
            Our team of experts brings together diverse skills and experiences
            to deliver comprehensive digital solutions.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-6">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Let's discuss how we can help you achieve your digital goals.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </section>
    </main>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Shield, Code, Rocket } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Maintenance & Support",
      description: "24/7 system monitoring and maintenance to keep your applications running smoothly",
      icon: Wrench
    },
    {
      title: "Security Solutions",
      description: "Advanced security measures to protect your digital assets and data",
      icon: Shield
    },
    {
      title: "Custom Development",
      description: "Tailored software solutions designed to meet your specific business needs",
      icon: Code
    },
    {
      title: "Performance Optimization",
      description: "Enhance your application's speed and efficiency for better user experience",
      icon: Rocket
    }
  ]

  return (
    <main className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We offer comprehensive solutions to help your business thrive in the digital world
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
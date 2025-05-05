import type React from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Check } from 'lucide-react'

interface ServiceProps {
  service: {
    id: number
    title: string
    description: string
    features: string[]
    icon: React.ReactNode
    color: string
  }
}

export function ServiceCard({ service }: ServiceProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-lg">
      <CardHeader
        className={`${service.color} flex flex-row items-center gap-4 p-6`}
      >
        <div className="rounded-full bg-white p-2">{service.icon}</div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-6 pt-4">
        <CardDescription className="mb-4 text-base text-gray-600">
          {service.description}
        </CardDescription>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full">Solicitar Servicio</Button>
      </CardFooter>
    </Card>
  )
}

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EquipmentShowcase: React.FC = () => {
  const equipment = [
    {
      title: "LED Walls",
      description: "High-resolution LED displays for stunning visual impact",
      features: ["4K Resolution", "Indoor/Outdoor", "Custom Sizes", "Professional Setup"],
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "Audio Systems",
      description: "Crystal-clear sound systems for any venue size",
      features: ["Line Array", "Wireless Mics", "Mixing Consoles", "Monitor Systems"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Lighting",
      description: "Professional lighting to set the perfect mood",
      features: ["LED Fixtures", "Moving Heads", "Haze Machines", "DMX Control"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Staging",
      description: "Modular staging solutions for any event",
      features: ["Modular Decks", "Risers", "Barriers", "Custom Builds"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Expert Labor",
      description: "Skilled technicians for flawless execution",
      features: ["Setup/Breakdown", "Technical Support", "Show Operation", "Emergency Support"],
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Premium Equipment Rental
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to make your event unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className={`w-full h-2 bg-gradient-to-r ${item.gradient} rounded-t-lg mb-4`} />
                <CardTitle className="text-white text-xl">{item.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="bg-gray-700 text-gray-200">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentShowcase;
// PackageDetailsClient.tsx
"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock, Star, Users } from "lucide-react";
import Image from "next/image";

export default function PackageDetailsClient({ packages } : any) {
  const { id } = useParams();
  const selectedPackage = packages.find((p : any) => p.id === parseInt(id as string));

  if (!selectedPackage) {
    return <div>Package not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative h-[400px] mb-6 rounded-lg overflow-hidden">
            <Image
              src={selectedPackage.image}
              alt={selectedPackage.name}
              fill
              className="object-cover"
            />
          </div>
          
          <Tabs defaultValue="overview">
            <TabsList className="w-full">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <h2 className="text-2xl font-bold">{selectedPackage.name}</h2>
              <p className="text-gray-600">{selectedPackage.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="p-4">
                  <Clock className="h-5 w-5 mb-2" />
                  <p className="text-sm font-medium">Duration</p>
                  <p className="text-lg">8 Days</p>
                </Card>
                <Card className="p-4">
                  <MapPin className="h-5 w-5 mb-2" />
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-lg">{selectedPackage.type}</p>
                </Card>
                <Card className="p-4">
                  <Star className="h-5 w-5 mb-2" />
                  <p className="text-sm font-medium">Rating</p>
                  <p className="text-lg">{selectedPackage.rating}/5</p>
                </Card>
                <Card className="p-4">
                  <Users className="h-5 w-5 mb-2" />
                  <p className="text-sm font-medium">Group Size</p>
                  <p className="text-lg">Max 12</p>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="itinerary" className="space-y-4">
              <div className="space-y-6">
                <div className="border-l-2 border-blue-500 pl-4">
                  <h3 className="font-bold">Day 1</h3>
                  <p className="text-gray-600">Arrival and Welcome Dinner</p>
                </div>
                <div className="border-l-2 border-blue-500 pl-4">
                  <h3 className="font-bold">Day 2</h3>
                  <p className="text-gray-600">City Tour and Local Experiences</p>
                </div>
                <div className="border-l-2 border-blue-500 pl-4">
                  <h3 className="font-bold">Day 3</h3>
                  <p className="text-gray-600">Adventure Activities</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-4">
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <Card key={i} className="p-4">
                    <div className="flex items-center mb-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="ml-2">5.0</span>
                    </div>
                    <p className="text-gray-600">Amazing experience! Would definitely recommend.</p>
                    <p className="text-sm text-gray-500 mt-2">John D. - March 2024</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">${selectedPackage.price}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-md border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Number of Travelers
                </label>
                <input
                  type="number"
                  min="1"
                  defaultValue="2"
                  className="w-full rounded-md border border-gray-300 p-2"
                />
              </div>
              <Button className="w-full">Book Now</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { MessageCircle, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function TourPackages() {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedType, setSelectedType] = useState("all");

  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch = pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = pkg.price >= priceRange[0] && pkg.price <= priceRange[1];
    const matchesType = selectedType === "all" || pkg.type === selectedType;
    return matchesSearch && matchesPrice && matchesType;
  });

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="md:w-1/3"
          />
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="md:w-1/4">
              <SelectValue placeholder="Package Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Packages</SelectItem>
              <SelectItem value="domestic">Domestic</SelectItem>
              <SelectItem value="international">International</SelectItem>
            </SelectContent>
          </Select>
          <div className="md:w-1/3 space-y-2">
            <p className="text-sm">Price Range: ${priceRange[0]} - ${priceRange[1]}</p>
            <Slider
              min={0}
              max={5000}
              step={100}
              value={priceRange}
              onValueChange={setPriceRange}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.map((pkg) => (
          <Card key={pkg.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={pkg.image}
                alt={pkg.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{pkg.name}</h3>
                <span className="flex items-center text-sm">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  {pkg.rating} ({pkg.reviews})
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${pkg.price}</span>
                <div className="space-x-2">
                  <Link href={`/packages/${pkg.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Chat
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Chat with Travel Agent</DialogTitle>
                      </DialogHeader>
                      <div className="h-[400px] overflow-y-auto p-4 border rounded-lg">
                        <p className="text-center text-gray-500">
                          Start chatting with our travel agent about {pkg.name}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

const packages = [
  {
    id: 1,
    name: "Bali Paradise Tour",
    type: "international",
    description: "8 days of tropical paradise exploration with luxury accommodations",
    price: 1299,
    rating: 4.8,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  },
  {
    id: 2,
    name: "Greek Islands Cruise",
    type: "international",
    description: "10-day Mediterranean cruise visiting multiple Greek islands",
    price: 2499,
    rating: 4.9,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
  },
  {
    id: 3,
    name: "Rocky Mountain Adventure",
    type: "domestic",
    description: "5-day hiking and camping experience in the Rockies",
    price: 799,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1542259009477-d625272157b7",
  },
];
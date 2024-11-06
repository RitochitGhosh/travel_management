"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

interface TripItineraryProps {
  packageId: number;
}

export default function TripItinerary({ packageId }: TripItineraryProps) {
  // In a real app, fetch itinerary based on packageId
  const itinerary = [
    {
      day: 1,
      title: "Arrival and Welcome",
      activities: [
        "Airport pickup and transfer to hotel",
        "Welcome dinner at local restaurant",
        "Brief orientation about the trip",
      ],
    },
    {
      day: 2,
      title: "City Exploration",
      activities: [
        "Visit to historical landmarks",
        "Local market tour",
        "Traditional cooking class",
      ],
    },
    {
      day: 3,
      title: "Nature Adventure",
      activities: [
        "Hiking in national park",
        "Picnic lunch",
        "Wildlife spotting",
      ],
    },
    // Add more days as needed
  ];

  return (
    <Card className="p-6">
      <h3 className="mb-4 text-xl font-semibold">Trip Itinerary</h3>
      <Accordion type="single" collapsible className="w-full">
        {itinerary.map((day) => (
          <AccordionItem key={day.day} value={`day-${day.day}`}>
            <AccordionTrigger>
              <div className="flex items-center">
                <span className="mr-4 rounded-full bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Day {day.day}
                </span>
                {day.title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="ml-4 list-inside list-disc space-y-2">
                {day.activities.map((activity, index) => (
                  <li key={index} className="text-muted-foreground">
                    {activity}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
}
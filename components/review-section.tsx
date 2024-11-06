"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewSectionProps {
  packageId: number;
}

export default function ReviewSection({ packageId }: ReviewSectionProps) {
  // In a real app, fetch reviews based on packageId
  const reviews = [
    {
      id: 1,
      user: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        initials: "SJ",
      },
      rating: 5,
      date: "2024-03-15",
      comment:
        "Amazing experience! The tour was well organized and our guide was very knowledgeable. Would definitely recommend!",
    },
    {
      id: 2,
      user: {
        name: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
        initials: "MC",
      },
      rating: 4,
      date: "2024-03-10",
      comment:
        "Great tour package with beautiful locations. The accommodations were comfortable and the food was excellent.",
    },
    {
      id: 3,
      user: {
        name: "Emma Wilson",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
        initials: "EW",
      },
      rating: 5,
      date: "2024-03-05",
      comment:
        "Unforgettable experience! Every detail was perfectly planned. The local guides were fantastic and very helpful.",
    },
  ];

  return (
    <Card className="p-6">
      <h3 className="mb-6 text-xl font-semibold">Customer Reviews</h3>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-0">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={review.user.avatar} />
                  <AvatarFallback>{review.user.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{review.user.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-muted-foreground">{review.comment}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
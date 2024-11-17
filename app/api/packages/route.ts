import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export const packages = [
  {
    id: 1,
    name: "Bali Paradise Tour",
    place: "Bali",
    type: "international",
    description:
      "8 days of tropical paradise exploration with luxury accommodations",
    price: 1299,
    rating: 4.8,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  },
  {
    id: 2,
    name: "Swiss Alps Adventure",
    place: "Switzerland",
    type: "international",
    description:
      "7 days of mountain hiking and scenic train rides through Switzerland",
    price: 2499,
    rating: 4.9,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1531795040376-41e181dc2537",
  },
  {
    id: 3,
    name: "Grand Canyon Explorer",
    place: "Arizona",
    type: "domestic",
    description: "5 days experiencing the natural wonders of Arizona",
    price: 899,
    rating: 4.6,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722",
  },
  {
    id: 4,
    name: "Tokyo Cultural Journey",
    place: "Tokyo",
    type: "international",
    description: "10 days immersing in Japanese culture and modern city life",
    price: 1899,
    rating: 4.7,
    reviews: 278,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
  },
  {
    id: 5,
    name: "Hawaii Beach Retreat",
    place: "Hawaii",
    type: "domestic",
    description: "6 days of island hopping and beach relaxation",
    price: 1599,
    rating: 4.5,
    reviews: 423,
    image: "https://images.unsplash.com/photo-1542259009477-d625272157b7",
  },
  {
    id: 6,
    name: "Yellowstone Wildlife Tour",
    place: "America",
    type: "domestic",
    description: "4 days exploring America's most famous national park",
    price: 699,
    rating: 4.4,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1533423996375-f914df98bcd2",
  },
  {
    id: 7,
    name: "Bali Tour",
    place: "Bali",
    type: "international",
    description:
      "8 days of tropical paradise exploration",
    price: 899,
    rating: 4.6,
    reviews: 248,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  },
];

export async function POST(request: NextRequest) {
  const { destination, priceRange, selectedType } = await request.json();
  
  try {
    const filtered_packages = packages.filter((pkg) => {
      const matchesSearch =
        pkg.name.toLowerCase().includes(destination.toLowerCase()) ||
        pkg.description.toLowerCase().includes(destination.toLowerCase());
      const matchesPrice =
        pkg.price >= priceRange[0] && pkg.price <= priceRange[1];
      const matchesType = selectedType === "all" || pkg.type === selectedType;
      return matchesSearch && matchesPrice && matchesType;
    });
    
    if (filtered_packages.length == 0) {
      return NextResponse.json(
        { msg: "no such packages found" },
        { status: 400 }
      );
    }
    console.log(filtered_packages);
    
    return NextResponse.json({ packages: filtered_packages }, { status: 200 });
  } catch (error) {
    console.log("error occured while filtering packages");
    return NextResponse.json(
      { msg: "error while filtering pakages" },
      { status: 400 }
    );
  }
}

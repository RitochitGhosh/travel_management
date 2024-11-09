// page.tsx

import PackageDetailsClient from "../../../components/package-details-client";


// Sample data
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
  // ... other packages
];

// Server-side component to pass `packages` data to the client component
export default function PackageDetailsPage() {
  return <PackageDetailsClient packages={packages} />;
}

// generateStaticParams function
export async function generateStaticParams() {
  // Create an array of id values to pre-render
  return packages.map((pkg) => ({ id: pkg.id.toString() }));
}

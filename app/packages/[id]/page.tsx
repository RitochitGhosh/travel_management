// page.tsx

import PackageDetailsClient from "../../../components/package-details-client";
import { packages } from "@/app/api/packages/route";

// Server-side component to pass `packages` data to the client component
export default function PackageDetailsPage() {
  return <PackageDetailsClient packages={packages} />;
}

// generateStaticParams function
export async function generateStaticParams() {
  // Create an array of id values to pre-render
  return packages.map((pkg) => ({ id: pkg.id.toString() }));
}

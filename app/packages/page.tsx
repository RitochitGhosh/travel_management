"use client";
import ChoosedPackages from "@/components/choosed-packages";
import PackageDetailsClient from "..//../components/package-details-client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Server-side component to pass `packages` data to the client component
export default function PackageDetailsPage() {
  const searchParams = useSearchParams();
  const [packageData, setPackageData] = useState([]);

  useEffect(() => {
    const data = searchParams.get("data");
    if (data) {
      const parsedData = JSON.parse(decodeURIComponent(data));
      setPackageData(parsedData);
      console.log("parsed query:", parsedData);
    }
  }, [searchParams]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {packageData.map((pkg: any) => (
        <ChoosedPackages key={pkg?.id} pkg={pkg} />
      ))}
    </div>
  );
}

// generateStaticParams function
// export async function generateStaticParams() {
//   // Create an array of id values to pre-render
//   return packages.map((pkg:any) => ({ id: pkg?.id.toString() }));
// }

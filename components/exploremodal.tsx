"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { log } from "node:console";

export default function ExploreModal() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [selectedType, setSelectedType] = useState("all");
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-2xl font-semibold px-8">
            Explore
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Fill in your choice</DialogTitle>
          </DialogHeader>
          <div className="h-[400px] overflow-y-auto p-4 border rounded-lg">
            <label htmlFor="">Enter your Destination:</label>
            <Input
              id="destination"
              placeholder="Search destinations..."
              className=" my-4"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
            />
            <label htmlFor="">Select your type of package:</label>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="md:w-1/2 my-4">
                <SelectValue placeholder="Package Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Packages</SelectItem>
                <SelectItem value="domestic">Domestic</SelectItem>
                <SelectItem value="international">International</SelectItem>
              </SelectContent>
            </Select>
            <label htmlFor="">Select your price range:</label>
            <Select
              value={priceRange.join(",")}
              onValueChange={(value: string) =>
                setPriceRange(value.split(",").map(Number) as [number, number])
              }
            >
              <SelectTrigger className="md:w-1/2 my-4">
                <SelectValue placeholder="Price range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="200,300">$200 -$300</SelectItem>
                <SelectItem value="300,400">$300 -$400</SelectItem>
                <SelectItem value="400,500">$400 -$500</SelectItem>
                <SelectItem value="500,100000000000000000">
                  $500 or above
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="flex justify-center">
              <Button
                id="explore"
                className="p-4 w-1/3 text-md my-4 "
                onClick={async () => {
                  try {
                    const response = await axios.post("/api/packages", {
                      destination,
                      priceRange,
                      selectedType,
                    });
                    console.log("request sent");
                    console.log(response);
                    const query = await encodeURIComponent(
                      JSON.stringify(response.data.packages)
                    );
                    console.log("query created");
                    router.push(`/packages?data=${query}`);
                  } catch (error) {
                    alert("No such packages exists");
                    console.log("error while sending request");
                    throw error;
                  }
                }}
              >
                Explore
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

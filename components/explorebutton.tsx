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
export default function Explorebutton() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-sky-100 text-black hover:bg-sky-400 text-lg font-bold">
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
            />
            <label htmlFor="">Select your type of package:</label>
            <Select>
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
            <Select>
              <SelectTrigger className="md:w-1/2 my-4">
                <SelectValue placeholder="Price range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="$200 -$300">$200 -$300</SelectItem>
                <SelectItem value="$300 -$400">$300 -$400</SelectItem>
                <SelectItem value="$400 -$500">$400 -$500</SelectItem>
                <SelectItem value="$500 or above">$500 or above</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex justify-center">
              <Button className="p-4 w-1/3 text-md my-4 ">Explore</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

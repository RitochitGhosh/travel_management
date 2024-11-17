import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { AnimatedModalDemo } from "./animatedpackagesmodal";

export default function ChoosedPackages({pkg}: any){
    console.log('inside function choosepackages:', pkg?.name);
    
    return(
        <Card key={pkg?.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={pkg?.image}
                alt={pkg?.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{pkg?.name}</h3>
                <span className="flex items-center text-sm">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  {pkg?.rating} ({pkg?.reviews})
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{pkg?.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${pkg?.price}</span>
                <div className="space-x-2 flex ">
                  <AnimatedModalDemo pkg = {pkg}/>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button id="chat">
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
                          Start chatting with our travel agent about {pkg?.name}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </Card>
        )}
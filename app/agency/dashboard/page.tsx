"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Package, Users, Star, MessageCircle } from "lucide-react";
import Link from "next/link";
import AddPackageForm from "@/components/add-package-form";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function AgencyDashboard() {
  const [isAddPackageOpen, setIsAddPackageOpen] = useState(false);

  const stats = [
    {
      title: "Active Packages",
      value: "12",
      icon: Package,
    },
    {
      title: "Total Bookings",
      value: "48",
      icon: Users,
    },
    {
      title: "Average Rating",
      value: "4.8",
      icon: Star,
    },
    {
      title: "New Messages",
      value: "5",
      icon: MessageCircle,
    },
  ];

  const recentBookings = [
    {
      id: 1,
      package: "Bali Paradise Tour",
      customer: "John Doe",
      date: "2024-03-20",
      status: "Confirmed",
      amount: "$1,299",
    },
    {
      id: 2,
      package: "Greek Islands Cruise",
      customer: "Sarah Johnson",
      date: "2024-03-18",
      status: "Pending",
      amount: "$2,499",
    },
    {
      id: 3,
      package: "Tokyo Explorer",
      customer: "Michael Chen",
      date: "2024-03-15",
      status: "Confirmed",
      amount: "$1,899",
    },
  ];

  return (
    <main className="container py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Agency Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your tour packages and bookings
          </p>
        </div>
        <Dialog open={isAddPackageOpen} onOpenChange={setIsAddPackageOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add New Package
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Tour Package</DialogTitle>
            </DialogHeader>
            <AddPackageForm onSuccess={() => setIsAddPackageOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Grid */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center space-x-4">
                <Icon className="h-6 w-6 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Recent Bookings */}
      <Card className="mb-8">
        <div className="p-6">
          <h2 className="text-xl font-semibold">Recent Bookings</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Package</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">{booking.package}</TableCell>
                <TableCell>{booking.customer}</TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      booking.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">{booking.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </main>
  );
}
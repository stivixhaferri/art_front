
"use client"
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function Bookings() {
  const [selectedBooking, setSelectedBooking] = useState(null)
  return (
    <>
      <div className="grid gap-6">
        <Card clas>
          <CardHeader className="">
            <CardTitle>Bookings</CardTitle>
            <CardDescription>Listimet e meparshme</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Card
                  onClick={() =>
                    setSelectedBooking({
                      date: "2023-06-01",
                      customer: {
                        name: "John Doe",
                        email: "john@example.com",
                      },
                      service: "Haircut",
                     
                    })
                  }
                  className="cursor-pointer hover:bg-muted"
                >
                  <CardContent className="grid gap-2">
                    <div className="font-medium pt-5">2023-06-01</div>
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-muted-foreground">Haircut</div>
                   
                  </CardContent>
                </Card>
                
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {selectedBooking && (
        <Dialog open={!!selectedBooking} onOpenChange={setSelectedBooking}>
          <DialogContent className="sm:max-w-[425px] p-[2%]">
            <DialogHeader>
              <DialogTitle>Booking Details</DialogTitle>
              <DialogDescription>View the details of the selected booking.</DialogDescription>
            </DialogHeader>
            <div className="">
                Date: 05/05/2024
                <br />
                Price: €240
                <br />
                Client: John Doe
                <br />
                Client Email: john@gmail.com  
                <br />
                Phone Number: 0412342343
            </div>
            <DialogFooter>
             
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
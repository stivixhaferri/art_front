'use client'
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"


const Cal = () => {


    const [date, setDate] = useState(new Date())
    return (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md mx-auto  w-[80%] mx-auto justify-center object-contain"
        />
      )
}

export default Cal
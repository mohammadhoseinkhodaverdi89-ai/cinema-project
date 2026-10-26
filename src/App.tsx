import { useState } from "react";
import { Armchair } from "lucide-react";
interface Chair {
  id : number;
  row: string;
  seatNumber: number;
  status: "available" | "selected" | "reserved";
  price: number;
}

const seats: Chair[] = [
  { id: 1, row: "A", seatNumber: 1, status: "available", price: 10 },
  { id: 2, row: "A", seatNumber: 2, status: "available", price: 10 },
  { id: 3, row: "A", seatNumber: 3, status: "available", price: 10 },
  { id: 4, row: "A", seatNumber: 4, status: "available", price: 10 },

  { id: 5, row: "B", seatNumber: 1, status: "available", price: 10 },
  { id: 6, row: "B", seatNumber: 2, status: "available", price: 10 },
  { id: 7, row: "B", seatNumber: 3, status: "available", price: 10 },
  { id: 8, row: "B", seatNumber: 4, status: "available", price: 10 },

  { id: 9, row: "C", seatNumber: 1, status: "available", price: 10 },
  { id: 10, row: "C", seatNumber: 2, status: "available", price: 10 },
  { id: 11, row: "C", seatNumber: 3, status: "available", price: 10 },
  { id: 12, row: "C", seatNumber: 4, status: "available", price: 10 }
];


function App() {
  const [chair,setChair] = useState<Chair[]>(seats)
  const isSelected = (id : number) => {
    setChair((prev) => (
      prev.map((item) => (
        item.id === id ? item.status === "reserved" ? item : {...item,status : item.status === "available" ? "selected" : "available"} : item
      ))
    ))
  }
  const isBooking = () => (
    setChair((prev) => (
      prev.map((item) => (
        {...item,status : item.status === "selected" ? "reserved" : item.status}
      ))
    ))
  )
  return (
    <div className="w-full h-screen flex justify-center items-center">
    <div className="grid grid-cols-4 gap-0.5 w-1/2 h-1/3 border border-gray-700 rounded-2xl rounded-2xl">
      {chair.map((item) => (
        <div key={item.id} className="w-full h-full flex justify-center items-center">
          <h2 className={`bg-gray-900/10 p-2 rounded-2xl border-2 border-gray-900/20 ${item.status === "selected" ? "border-green-600/30" : "border-gray-900/20"} ${item.status === "reserved" && "border-rose-600/30"}`} onClick={(() => isSelected(item.id))}><Armchair size={36} className={`text-gray-500 ${item.status === "selected" ? "text-green-600" : "text-gray-500"} ${item.status === "reserved" && "text-red-600"}`}/></h2>
        </div>
      ))}
    </div>
         <button onClick={isBooking}>buy</button>
    </div>
  )
}
export default App
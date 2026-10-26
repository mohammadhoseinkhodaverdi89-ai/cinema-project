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

import { useState } from "react";
function App() {
  const [chair,setChair] = useState("available")
  
  return (
    <div className="flex gap-10">
      {seats.map((item) => (
        <div key={item.id}>
          <h2 className={`p-2 mt-10 rounded-2xl text-white ${item.status === "selected" ? "bg-green-600" : "bg-black"}`} onClick={(() => getSeatsExceptId(item.id))}>{item.seatNumber}</h2>
          <span>{item.status}</span>
        </div>
      ))}
    </div>
  )
}
export default App
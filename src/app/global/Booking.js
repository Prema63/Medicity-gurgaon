'use client';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const Booking = () => {
  const [arrivalDate, setArrivalDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [nightsDifference, setNightsDifference] = useState(1);

  const checkoutRef = useRef(null);
  const arrivalRef = useRef(null);

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  useEffect(() => {
    setArrivalDate(getTodayDate());
    setCheckoutDate(getTomorrowDate());
    setNightsDifference(1);
  }, []);

  const handleCheckInChange = (e) => {
    const newArrivalDate = e.target.value;
    if (newArrivalDate >= getTodayDate()) {
      setArrivalDate(newArrivalDate);
      const nextDay = new Date(newArrivalDate);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckoutDate(nextDay.toISOString().split("T")[0]);
      calculateNights(newArrivalDate, checkoutDate);
    }
  };

  const handleCheckoutChange = (e) => {
    const newCheckoutDate = e.target.value;
    if (newCheckoutDate > arrivalDate) {
      setCheckoutDate(newCheckoutDate);
      calculateNights(arrivalDate, newCheckoutDate);
    }
  };

  const calculateNights = (arrival, checkout) => {
    if (arrival && checkout) {
      const nightDifference = (new Date(checkout) - new Date(arrival)) / (1000 * 3600 * 24);
      setNightsDifference(nightDifference >= 1 ? nightDifference : 1);
    } else {
      setNightsDifference(1);
    }
  };

  const openDatePicker = (ref) => {
    ref.current?.showPicker();
  };

  return (
    <div className="flex justify-center items-center pb-3 bg-white">
      <div className="flex flex-wrap md:flex-row items-center gap-3 bg-[#4d555b] p-3 md:ml-14 rounded border border-gray-300 min-w-fit">
        <div className=" flex-col mr-2 space-x-3 text-white text-sm font-bold">
          <label>Check-in</label>
          <input
            type="date"
            ref={arrivalRef}
            value={arrivalDate}
            min={getTodayDate()}
            onChange={handleCheckInChange}
            onClick={() => openDatePicker(arrivalRef)}
            className="px-2 text-xs py-2 text-black border border-black rounded bg-white text-center"
          />
        </div>
        <div className=" flex-col text-white space-x-3 text-sm font-bold">
          <label>Check-out</label>
          <input
            type="date"
            ref={checkoutRef}
            value={checkoutDate}
            min={getTomorrowDate()}
            onChange={handleCheckoutChange}
            onClick={() => openDatePicker(checkoutRef)}
            className="px-2 text-xs py-2 text-black border border-black rounded bg-white text-center"
          />
        </div>
        <span className="text-white text-sm font-bold px-2 py-1.5  border border-white rounded">
          Nights: {nightsDifference}
        </span>
        <Link
          href="https://live.ipms247.com/booking/book-rooms-BluoKolkata"
          className="bg-[#0099ff] hover:bg-[#007acc] text-white font-bold text-sm px-4 py-2 rounded"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Booking;

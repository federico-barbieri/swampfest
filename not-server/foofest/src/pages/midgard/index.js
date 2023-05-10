import SecondaryTitle from '@/components/SecondaryTitle'
import MainTitle from '@/components/MainTitle'
import React from 'react'
import { useEffect, useState } from 'react';
import CalendarTable from '@/components/CalendarTable';

function Midgard() {

 // DISPLAYING SCHEDULE


 const [calendar, setCalendar] = useState([]);

 useEffect(() => {
   const apiMidgard = `http://localhost:8080/schedule`;


 let fetchRes = fetch(apiMidgard);
 fetchRes
   .then((res) => res.json())
   .then((info) => {
    
   setCalendar(info.Midgard);

   })
   .catch((err) => {
     console.error(err);
   });
 }, [])

// store only what happens on monday in Midgard
// and pass it as a prop

 const monday = calendar.mon;

  return (
    <>
    
    <MainTitle
    mainTitle="LINE UP"
    />

    <SecondaryTitle
    secondaryTitle="Midgard"
    />

    <CalendarTable
    monday={monday}
    
    
    />
    
    </>

  )
}

export default Midgard
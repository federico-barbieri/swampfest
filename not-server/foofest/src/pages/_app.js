import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { TicketsContext } from "../context/ticketsContext";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  // which camp did you click on?
  const [selectedCamp, setSelectedCamp] = useState("");

  // how many tickets were purchased?
  const [howManyTickets, setHowManyTickets] = useState(0);

  // how much do the tickets cost?
  const [costOfTickets, setCostOfTickets] = useState(0);

  // how much do the tickets + the tents cost?
  const [ticketsPlusTents, setTicketsPlusTents] = useState(0);

  // how much does the camping cost?
  const [totalCampingCost, setTotalCampingCost] = useState(0);

  // make ticket holders' info available globaly
  const [globalFormName, setGlobalFormName] = useState([]);
  const [globalFormEmail, setGlobalFormEmail] = useState([]);

  // ticket holders' info combined
  const [globalNameAndEmail, setGlobalNameAndEmail] = useState([])

  // what's the overall VAT?
  const [globalVat, setGlobalVat] = useState(0);

  // global delivery object
  const [deliveryObject, setDeliveryObject] = useState()

  // Save reservation ID globally
  const [globalReservationId, setGlobalReservationId] = useState(null)

  // store timer
  const [globalTimer, setGlobalTimer] = useState(null);

  // display timer | do not display it 
  const [hideTimer, setHideTimer] = useState(false);

  // how much time is left
  const [timeLeft, setTimeLeft] = useState(null);

  // store full names 
  const [globalFullNames, setGlobalFullNames] = useState([]);

  return (
    <>
      <TicketsContext.Provider
        value={{
          howManyTickets,
          setHowManyTickets,
          costOfTickets,
          setCostOfTickets,
          ticketsPlusTents,
          setTicketsPlusTents,
          totalCampingCost,
          setTotalCampingCost,
          globalFormName,
          setGlobalFormName,
          globalFormEmail,
          setGlobalFormEmail,
          globalVat,
          setGlobalVat,
          selectedCamp,
          setSelectedCamp,
          deliveryObject, 
          setDeliveryObject,
          globalReservationId,
          setGlobalReservationId,
          hideTimer,
          setHideTimer,
          timeLeft,
          setTimeLeft,
          globalFullNames,
          setGlobalFullNames
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TicketsContext.Provider>
    </>
  );
}

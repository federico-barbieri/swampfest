import TicketHolderCard from "../../../components/TicketHolderCard/TicketHolderCard";
import React from "react";
import TicketsContext from "../../../context/ticketsContext";
import { useEffect, useState, useContext, useRef } from "react";
import law from "./ticketHolderInfo.module.css";

import ThirdTitle from "../../../components/ThirdTitle/ThirdTitle";
import Link from "next/link";

import { Bs3Circle, Bs4Circle, Bs5Circle, BsCheckCircle } from "react-icons/bs";

import BuyFlowLayout from "../../../components/BuyFlowLayout/BuyFlowLayout";

function ticketHolderInfo() {

  // create an empty array of refs
  const refs = useRef([]);

  const [storeNames, setStoreNames] = useState([])


  // grab local info of ticket holders

  const [formName, setFormName] = useState([]);
  const [formEmail, setFormEmail] = useState([]);

  // grab global number of tickets

  const globalTicketInfo = useContext(TicketsContext);

  const myArrayWithSlots = new Array();

  for (let i = 0; i < globalTicketInfo.howManyTickets; i++) {
    myArrayWithSlots.push(Math.random() * 10);
  }

  // store the cards as state

  const [cardStorage, setCardStorage] = useState([]);

  useEffect(() => {
    setCardStorage(myArrayWithSlots);
  }, []);

  // function to get the info of the holder from the form

  function retrieveHolderInfoName(num, name) {
    setFormName([...formName, { Person: num, name: name }]);
  }

  function retrieveHolderInfoEmail(num, email) {
    setFormEmail([...formEmail, { Person: num, email: email }]);
  }

  useEffect(() => {
    globalTicketInfo.setGlobalFormName(formName);
    globalTicketInfo.setGlobalFormEmail(formEmail);
  }, [formEmail, formName]);

  // cry

  // we create a function that maps through the empty array and creates a ref for each form
  // we create


  const renderInputs = () => {
    return myArrayWithSlots.map((item, index) => {
      const inputRef = useRef(null); // Create a new ref for each input
      refs.current[index] = inputRef; // Store the ref in the inputRefs array
  
      return (



        <form className={law.cardsContainer} key={myArrayWithSlots.indexOf(item) + 1}>

        <h3 className={law.h3}>Ticket no. {myArrayWithSlots.indexOf(item) + 1}</h3>

        <div className={law.inputContainer}>
          <div className={law.nameContainer}>
            <label className={law.fullNameLabel}>Full name</label>
            <input
              key={index}
              ref={inputRef}
              id="fullname"
              className={law.fullName}
              placeholder="Fiona Charming"
              required
              onChange={() => consoleMe(inputRef.current.value)}
            />
          </div>

  
        </div>

       
      </form>

      );
    });
  };

function consoleMe(value){
  console.log(value);
}


function storeFullNames(){

  const newStoreNames = refs.current.map((el) => ({
    Person: el.current.index,
    name: el.current.value
  }));

  setStoreNames((prevStoreNames) => [...prevStoreNames, ...newStoreNames]);


}


useEffect(() => {
  globalTicketInfo.setGlobalFullNames(storeNames);
}, [storeNames]);



  return (
    <BuyFlowLayout>
      <div className={law.contentAndBasket}>
        <div className={law.content}>
          <div className={law.campInfo}>
            <ThirdTitle thirdTitle="TICKET HOLDER INFO" />
            <p className={law.description}>
              “Are we there yet..?” <br /> Not quite, but it’s goddamn close!
              Just need some information on each of you before we can let you
              send your order into the Fairyland eather
            </p>
          </div>

          <div className={law.addContainer}>

              


          {renderInputs()}


          {/* 
            {cardStorage.map((el) => {
              return (
                <form className={law.cardsContainer} key={cardStorage.indexOf(el) + 1}>

                    <h3 className={law.h3}>Ticket no. {cardStorage.indexOf(el) + 1}</h3>

                    <div className={law.inputContainer}>
                      <div className={law.nameContainer}>
                        <label className={law.fullNameLabel}>Full name</label>
                        <input
                          
                          id="fullname"
                          className={law.fullName}
                          placeholder="Miss Fiona Charming"
                          required
                          onBlur={() => getName(num, nameInput.current.value)}
                        />
                      </div>

                      <div className={law.emailContainer}>
                        <label className={law.emailLabel}>Email</label>
                        <input
                          
                          id="email"
                          className={law.email}
                          placeholder="fiona@charming.com"
                          required
                          onBlur={() => getEmail(num, emailInput.current.value)}
                        />
                      </div>
                    </div>
                  </form>

              );
            })}
            */}

          </div>
        </div>
      </div>

      <div className={law.basketContainer}>
        <h3 className={law.orderTitle}>Order Summary</h3>

        <div className={law.ticketAmountContainer}>
          <span>Tickets:</span>
          <span className={law.ticketNum}>
            {globalTicketInfo.howManyTickets}
          </span>
        </div>

        <div className={law.ticketsContainer}>
          <span>Ticket(s)</span>
          <span className={law.ticketNum}>
            {globalTicketInfo.costOfTickets} kr.
          </span>
        </div>

        <div className={law.campingContainer}>
          <span>Camping</span>
          <span className={law.ticketNum}>
            {globalTicketInfo.totalCampingCost} kr.
          </span>
        </div>

        {/* <div className={law.vatContainer}>
          <span>VAT</span>
          <span className={law.vatNum}>{vat} kr.</span>
        </div> */}

        <div className={law.totalContainer}>
          <span>Total</span>
          <span className={law.totalNum}>
            {globalTicketInfo.ticketsPlusTents} kr.
          </span>
        </div>
      </div>

      <section className={law.details}></section>
      <div className={law.flowNav}>
        <div className={law.backNextButtons}>
          <Link href="/buyingStage/campingAddOns">
            <button className={law.backButton}>GO BACK</button>
          </Link>

          <Link href="/buyingStage/checkout">
            <button
              className={law.nextButton}
              disabled={
                 globalTicketInfo.timeLeft !== 0 ? false : true
              }
             onClick={storeFullNames} 
            >
              NEXT STEP
            </button>
          </Link>
        </div>
        <div className={law.stepNum}>
          <BsCheckCircle className={law.checkedStep} size={24} />
          <BsCheckCircle className={law.checkedStep} size={24} />
          <Bs3Circle className={law.currentStep} size={24} />
          <Bs4Circle className={law.lowOpacity} size={24} />
          <Bs5Circle className={law.lowOpacity} size={24} />
        </div>
      </div>
    </BuyFlowLayout>
  );
}

export default ticketHolderInfo;

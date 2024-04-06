import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper.js";

export default function Lottery(){
    let [ticket,setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket)===15;
    
    let buyTicket = () =>{
        setTicket(genTicket(3));
    };

    return(
        <div>
            <h2>Lottery Game!!</h2>
            <p>(Sum of digits should be 15.)</p>
            
            <div className="lotteryNo">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br></br>
            
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations,You Won!!"}</h3>
        </div>
    );
}
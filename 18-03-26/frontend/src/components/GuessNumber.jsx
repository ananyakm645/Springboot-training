import { useState } from "react";

function GuessNumber() {
    const num=8;
    const[guess,setGuess]=useState(0);
    const[res,setResult]=useState(0);

    const check=()=>{
        if(Number(guess)==num){
            setResult("Success");
        } else {
            setResult("Unsuccessfull");
        }
    }
    return (
    <>
    <div>Guessing Number</div>
    <input type="number"
    value={guess}
    onChange={(e)=>setGuess(e.target.value)}
    />
    <button onClick={check}>Verify</button>
    <h2>{res}</h2>
    </>
    );

}
export default GuessNumber;
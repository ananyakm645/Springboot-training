import { useState } from "react";

function PassFail() {
    const[marks,setMarks]=useState("");
    const[result,setResult]=useState("");
     
    const schema=z.number().min(0).max(100);

    function checkResult(){
        const parsedNumber=Number(marks);
        const validation=schema.safeParse(parsedNumber);

        if(!validation.success){
            setResult("Invalid marks");
            return;
        }
        if(parsedNumber>35){
            setResult("Pass");
        }else{
            setResult("Fail");
        }

    }
    return(
        <>
        <div>Enter the marks</div>
        <input type="number"
        value={marks}
        onChange={(e)=>setMarks(e.target.value)}
        />
        <button onClick={checkResult}>Check</button>
        <h1>{result}</h1>
        </>
    )
}
export default PassFail;
import {useState} from "react";

const MyState = () => {
    const [state, setState] = useState("What's happening hear?");

    const answer = () => {
        setState("Nothing");
    }
    return (
        <>
            <h2>{state}</h2>
            <button onClick={answer}>
                Answer
            </button>
        </>
    )
}

export default MyState;
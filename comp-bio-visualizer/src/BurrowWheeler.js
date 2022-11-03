import { useState } from "react";

const BurrowWheeler = () => {
    const [inputSequence, setInputSequence] = useState('');

    function burrowWheelerTransform(sequence) {
        let rotations = [];
        rotations.push(sequence);
        for (let i = 1; i < sequence.length; i++) {
            rotations.push(sequence.substring(i) + sequence.substring(0, i));
        }
        rotations.sort();
        let output = "";
        for (let i = 0; i < rotations.length; i++) {
            output += rotations[i].substring(sequence.length - 1);
        }
        return output;
    }


    return (
        <div className="burrow">
            <h2>Enter in your sequence</h2>
            <input
                type = "text"
                value = {inputSequence}
                onChange = {(event) => setInputSequence(event.target.value)}
            />
            <button> Transform </button>
            <h2>The transformed string is: </h2>
            <p>{ burrowWheelerTransform(inputSequence) }</p>
        </div>
    );
}
 
export default BurrowWheeler;
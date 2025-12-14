import { useState, useEffect } from "react";

export function TestPage(){

    const [words, setWords] = useState<string[]>([]);
    useEffect(() => {

        async function getWords() : Promise<void> {

            let words: string[] = [];
            const response = await fetch('http://localhost:8080/words');
            if (response.ok){
                words = await response.json();
                console.log(words);
            }
            setWords(words);
        }

        getWords();
    }, []);
    const [input, setInput] = useState("");


    return (
        <>
            <input type="text" placeholder="your word" onChange={(event) => setInput(event.target.value)}/>
            <ul>
                {words.map((word, index) => 
                    word.includes(input) && <li key={index}>{word}</li>
                )}
            </ul>
        </>
    );
}
import { useContext, useState, useEffect } from 'react'; 
import { ApiContext } from '../context/ApiContext';

export default function GameQuoteDisplay() {

    const {api} = useContext(ApiContext)

    const [quote, setQuote] = useState([])

    const [missingWord, setMissingWord] = useState("")

    const [input, setInput] = useState("")

    useEffect(() => {

        
        async function randomQuote() {
            // call random quote from API
            let response = await fetch(api + 'quotes/random')
            
            // convert to json
            let responseData = await response.json();

            // convert the quote to an array
            let splitString = responseData[0].content.split(' ')

            // Get a random index number based on the length of the string array.
            let randomWordToRemoveIndex = Math.floor(Math.random() * splitString.length)

            // Filter the random word from the string array
            let randomWordToRemove = splitString.filter(word => word == splitString[randomWordToRemoveIndex])

            // convert the splitString (array) into a String.
            let convertArrayToString = splitString.join(' ')

            // Replace the random word that was removed with a _______
            let replaceWordWithSpace = convertArrayToString.replace(randomWordToRemove.toString(), "___________")

            // set state
            setQuote(replaceWordWithSpace)
            setMissingWord(randomWordToRemove)
            
        }

        randomQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSubmit = (event) => {
        console.log(input);
        if (input == missingWord.toString()) {
            alert("your are correct")
        }
        else {
            alert("you are wrong, try again.")
        }
    }
    

    return (
        <div className="game-quote">
            <h1>Quote</h1>
            <h2>{quote}</h2>
            <label>Enter missing word here: </label>
            <input 
                type="text" 
                name="guessQuote" 
                id="guessQuote" 
                onChange={(event) => setInput(event.target.value)}/>
            <button onClick={handleSubmit} >Submit</button>
            
            
            
            
        </div>
    )
}
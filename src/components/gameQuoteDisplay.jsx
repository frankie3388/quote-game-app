import { useContext, useState, useEffect } from 'react'; 
import { ApiContext } from '../context/ApiContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function GameQuoteDisplay() {

    const {api} = useContext(ApiContext)

    const [quote, setQuote] = useState([])

    const [missingWord, setMissingWord] = useState("")

    const [input, setInput] = useState("")

    const [author, setAuthor] = useState("")

    const [generateQuote, setgenerateQuote] = useState(0)


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

            // Slice the random word from the string array
            let randomWordToRemove = splitString.slice(randomWordToRemoveIndex, randomWordToRemoveIndex + 1)

            // convert the splitString (array) into a String.
            let convertArrayToString = splitString.join(' ')

            // Replace the random word that was removed with a _______
            let replaceWordWithSpace = convertArrayToString.replace(randomWordToRemove.toString(), "___________")

            // set state
            setQuote(replaceWordWithSpace)
            setMissingWord(randomWordToRemove)
            setAuthor(responseData[0].author)
            
        }

        randomQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [generateQuote])

    // This function checks if you have entered the correct word in.
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
            <Button 
            onClick={() => setgenerateQuote(generateQuote + 1)} 
            variant="success"
            className="new-quote-button">
                Generate New Quote
            </Button>{' '}
            <Card className="game-quote-display">
                <Card.Header className="quote-header">Quote</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        {quote}{' '}
                    </p>
                    <footer className="blockquote-footer">
                        Author: <cite title="Source Title">{author}</cite>
                    </footer>
                    <label>Enter missing word here: </label>
                    <input 
                        type="text" 
                        name="guessQuote" 
                        id="guessQuote" 
                        onChange={(event) => setInput(event.target.value)}/>
                    <Button className="submit-quote-button" onClick={handleSubmit} variant="secondary">
                        Submit
                    </Button>{' '}
                    </blockquote>

                </Card.Body>
            </Card>
            
        </div>
    )
}
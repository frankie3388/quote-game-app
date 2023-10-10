import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../context/ApiContext';

export default function Homepage(){

    const {api} = useContext(ApiContext)

    const [apiResult, setApiResult] = useState([])

    useEffect(() => {
        async function randomQuote() {
            let response = await fetch(api + 'quotes/random')

            let responseData = await response.json();

            setApiResult(responseData[0])
            
        }

        randomQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    return (
        <div className="homepage">
            <div className="intro">
                <h1>Welcome to Finish the Quote Game</h1>
                <h2>"{apiResult.content}"</h2>
                <h3>Author: {apiResult.author}</h3>
            </div>
            <div>
                <h3>How to play the game</h3>
                <ul>
                    <li>Type in the words that you think make up the quote, then click on submit to check your answer.</li>
                </ul>
            </div>
            
            
        </div>

    )
}
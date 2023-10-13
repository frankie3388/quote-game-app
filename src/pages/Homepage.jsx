import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../context/ApiContext';
import { QuoteByAuthorContext } from '../context/QuoteByAuthorContext';

export default function Homepage(){

    const {api} = useContext(ApiContext)

    const {quoteData} = useContext(QuoteByAuthorContext)

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
            <h6 className="message">
                Search function only works in the homepage. 
                Also, if you want to search for a quote by a famous person, 
                the name must be all in lower case and a dash must be 
                used instead of a space. Example: bruce-lee
            </h6>
            <div className="intro">
                <h1>Welcome to Finish the Quote Game</h1>
                <h2>"
                    {
                    quoteData.toggleDisplay ? quoteData.quote : apiResult.content
                    }
                "</h2>
                {/* <h2>"{apiResult.content}"</h2> */}
                <h3>Author: 
                    {
                    quoteData.toggleDisplay ? quoteData.author : apiResult.author
                    }
                </h3>
            </div>
            <div>
                <h3>How to play the game</h3>
                <ul>
                    <li>Go to Game page.</li>
                    <li>Type in the words that you think make up the quote, then click on submit to check your answer.</li>
                </ul>
            </div>
            {/* <h1>{quoteData.quote}</h1> */}
            
            
        </div>

    )
}
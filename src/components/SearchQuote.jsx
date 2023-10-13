import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../context/ApiContext';
import { QuoteByAuthorContext } from '../context/QuoteByAuthorContext';


export default function SearchQuote() {

    const {api} = useContext(ApiContext)

    const {setQuoteData} = useContext(QuoteByAuthorContext)

    const [searchInput, setSearchInput] = useState("")

    const [authorOfQuote, setAuthorOfQuote] = useState("")

    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        async function searchQuote() {
            let response = await fetch(api + 'quotes?author=' + authorOfQuote)

            let responseData = await response.json();

            let quote = responseData.results[Math.floor(Math.random() * responseData.count)].content;

            let author = responseData.results[0].author;

            // toggle display for homepage (random quote or searched quote)
            let toggleDisplay = toggle

            setQuoteData({quote, author, toggleDisplay});

        }

        searchQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authorOfQuote])

    const handleSearch = (event) => {
        const isSearchValid = /^[a-z-]+$/.test(searchInput);

        if (isSearchValid) {
            setAuthorOfQuote(searchInput)
            setToggle(true)
        }
        else {
            alert("please enter name in correct format")
        }
        
    }

    return (
        <div className="search-bar">
            <label>Search Quote By Author: </label>
            <input 
            type="text" 
            name="searchQuote" 
            id="searchQuote" 
            onChange={(event) => setSearchInput(event.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
        
    )
}
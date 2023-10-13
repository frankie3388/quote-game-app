import { createContext, useState } from 'react';


export const QuoteByAuthorContext = createContext({
    quote: "",
    author: "",
    toggle: false,
})

export default function QuoteByAuthorProvider({children}){

    const [quoteData, setQuoteData] = useState({
        quote: "",
        author: "",
        toggle: false,
    })

    return (
        <QuoteByAuthorContext.Provider value={{quoteData, setQuoteData}}>
            {children}

        </QuoteByAuthorContext.Provider>
    )

}
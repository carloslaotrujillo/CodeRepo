import React, {useState, useEffect} from 'react';

const GITHUB_USER = 'https://api.github.com/users/carlostrujillo90';

function FetchingDataWithHooks() {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        fetch(GITHUB_USER)
        .then(response => response.json())
        .then(data => setQuote(data));      // or we can do ".then(setQuote)" as a shortcut
    }, []) // use an empty dependency array so fetch() only runs once and not on a infinite loop

    if(quote) {        
        return <div>User is {quote.login}</div>
    }

    return <div>User not available</div>;
}

export default FetchingDataWithHooks;

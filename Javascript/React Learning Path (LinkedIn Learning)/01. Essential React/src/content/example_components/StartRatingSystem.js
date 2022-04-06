import React, {useState} from 'react';
import { FaStar } from 'react-icons/fa';

const createArray = (length) => [
    ...Array(length)
]

function Star({ selected = false, onSelect }) {
    return <FaStar color={selected ? "blue" : "green"} onClick={onSelect} />    
}

function StartRating({ totalStars = 5 }) {//if totalStars aren't passed default = 5

    const [selectedStars, setSelectedStars] = useState(0);

    return createArray(totalStars).map((n, i) => (
        <Star key={i}  selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)}/>
    ))
}

function StartRatingSystem() {
  return <StartRating totalStars={5}/>
}

export default StartRatingSystem;
 
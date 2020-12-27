import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ totalStars = 5, selectedStars, setSelectedStarts }) {
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStarts(i + 1)}
                />
            ))}
        </>
    )
}

const createArray = length => [...Array(length)];

const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar
        color={selected ? "red" : "grey"}
        onClick={onSelect}
    />
);
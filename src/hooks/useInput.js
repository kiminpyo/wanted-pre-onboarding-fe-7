import React, { useState } from "react";

export function useInput(initialValue) {
    const [inputValue, setInputValue] = useState(initialValue);
    const onChange = (e) => {
        setInputValue(e.target.value);
    };

    return { inputValue, onChange, setInputValue };
}

import React, { useState } from 'react'

export const AddCategory = ({ setcategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSumit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setcategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSumit} >
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

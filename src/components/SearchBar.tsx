import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (username: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [input, setInput] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleSearch = () => {


        onSearch(input);
    }

    return (
        <div className="mb-3">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder={"Buscar usuario de GitHub"}
                    value={input}
                    onChange={handleInputChange}

                />
                <button className="btn btn-primary" onClick={handleSearch}>
                    Buscar
                </button>
            </div>
        </div>
    );
};

export default SearchBar;

import { memo, useState } from "react";

export const Search = memo(() => {
    const [value, setValue] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className='search'>
            <input
                type='text'
                required
                placeholder='Search'
                value={value}
                onChange={handleInputChange}
            />
        </div>
    );
});

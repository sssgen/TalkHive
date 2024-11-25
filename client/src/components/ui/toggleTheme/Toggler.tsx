import { memo } from "react";
import "./ToggleTheme.scss";
import { SunIcon, MoonIcon } from "lucide-react";

interface TogglerProps {
    value: boolean;
    onChange: () => void;
}

const Toggler: React.FC<TogglerProps> = ({ value, onChange }) => {
    return (
        <label className='switch' htmlFor='toggler'>
            <input
                id='toggler'
                type='checkbox'
                onClick={onChange}
                checked={value}
                readOnly
            />
            <span className='slider' />
            <span className='wave' />
            {value ? (
                <SunIcon className='sun' />
            ) : (
                <MoonIcon className='moon' />
            )}
        </label>
    );
};

export default memo(Toggler);

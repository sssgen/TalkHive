import { PersonStandingIcon } from "lucide-react";
import { memo } from "react";

export const ChatPreview = memo(() => {
    return (
        <div className='chatPreview'>
            <PersonStandingIcon className='image' />
            <div className='info'>
                <h3>Name</h3>
                <p>Last message...</p>
            </div>
            <div className='metadata'>
                <p className='time'>20.01.2024</p>
                <p className='unread'>2</p>
            </div>
        </div>
    );
});

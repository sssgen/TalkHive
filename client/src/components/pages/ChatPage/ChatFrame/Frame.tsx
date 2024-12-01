import { memo } from "react";

export const Frame = memo(() => {
    const activeChat = false;

    if (!activeChat)
        return <p className='noChat'>Select chat to start messaging</p>;

    return <></>;
});

import { memo } from "react";

import { Search } from "./Search";
import { ChatPreview } from "./ChatPreview";

export const Sidebar = memo(() => {
    const chatPreviews = Array.from({ length: 10 }, (_, index) => (
        <ChatPreview key={index} />
    ));

    return (
        <>
            <Search />
            {chatPreviews}
        </>
    );
});

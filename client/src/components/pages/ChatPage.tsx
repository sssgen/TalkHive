import { memo } from "react";
import { motion } from "framer-motion";

import "./_styles/ChatPage.scss";

const ChatPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className='chat'
        >
            chat
        </motion.div>
    );
};

export default memo(ChatPage);

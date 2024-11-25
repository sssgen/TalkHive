import { memo } from "react";
import { motion } from "framer-motion";

import "./_styles/SearchPage.scss";

const SearchPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className='chat'
        >
            search
        </motion.div>
    );
};

export default memo(SearchPage);

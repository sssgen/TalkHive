import { memo } from "react";
import { motion } from "framer-motion";

import "./_styles/SettingsPage.scss";

const SettingsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className='chat'
        >
            settings
        </motion.div>
    );
};

export default memo(SettingsPage);

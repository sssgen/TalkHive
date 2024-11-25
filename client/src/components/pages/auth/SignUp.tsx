import { memo } from "react";
import { motion } from "framer-motion";

import { TRANSITION_SECONDARY } from "../../../constants";

const SignUp = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={TRANSITION_SECONDARY}
            exit={{ opacity: 0 }}
            className='chat'
        >
            SignUp
        </motion.div>
    );
};

export default memo(SignUp);

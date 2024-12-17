import { memo, useState } from "react";
import { motion } from "framer-motion";

import "../_styles/auth/SignPage.scss";
import AnimatedBee from "../../ui/animatedBee/AnimatedBee";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const SignPage = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className='signWrapper'
        >
            <div className='signForm'>
                {isSignIn ? (
                    <SignInForm isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
                ) : (
                    <SignUpForm isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
                )}
            </div>
            <div className='signImage'>
                <AnimatedBee />
            </div>
        </motion.div>
    );
};

export default memo(SignPage);

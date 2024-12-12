import "../_styles/auth/SignPage.scss";
import { memo, useState } from "react";
import { motion } from "framer-motion";

import Button from "../../ui/button/Button";

import { auth } from "../../../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AnimatedBee from "../../ui/animatedBee/AnimatedBee";

const SignPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function onSignIn() {
        try {
            setIsLoading(true);
            await createUserWithEmailAndPassword(auth, email, password);
            setEmail("");
            setPassword("");
        } catch (e) {
            console.log("error:", e);
        } finally {
            setIsLoading(false);
        }
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (email.trim() !== "" && password.trim() !== "") {
            onSignIn();
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className='signWrapper'
        >
            <div className='signForm'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            placeholder='Email...'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            placeholder='Password...'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button title='Sign In' disabled={isLoading} />
                </form>
            </div>
            <div className='signImage'>
                <AnimatedBee />
            </div>
        </motion.div>
    );
};

export default memo(SignPage);

import "./_styles/MainPage.scss";
import { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRightCircleIcon } from "lucide-react";
import Button from "../ui/button/Button";

import { motion } from "framer-motion";
import { TRANSITION_MAIN } from "../../constants";

const MainPage = () => {
    return (
        <motion.main
            transition={TRANSITION_MAIN}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.7 } }}
            className='main'
        >
            <Hero />
        </motion.main>
    );
};

export default memo(MainPage);

const Hero = () => {
    return (
        <header className='hero'>
            <div className='hero__wrapper'>
                <Link to='/sign-in'>
                    <h1>
                        Talk<span>Hive</span>
                        <ArrowRightCircleIcon />
                    </h1>
                </Link>
                <h2 className='subtitle-font'>
                    Bzzz, do you want to
                    <br /> join some chat?
                </h2>

                <Link to='/sign-in' tabIndex={-1}>
                    <Button variant='default' title='Are you really asking?' />
                </Link>
            </div>
        </header>
    );
};

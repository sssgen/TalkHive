import { memo } from "react";
import Lottie from "react-lottie";
import Bee from "../../../../public/animatedBee.json";
import styles from "./AnimatedBee.module.scss";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Bee,
};

const AnimatedBee = () => {
    return (
        <div className={styles.flyingBee}>
            <Lottie options={defaultOptions} height={600} width={600} />
        </div>
    );
};

export default memo(AnimatedBee);

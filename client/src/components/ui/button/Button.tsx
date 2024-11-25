import { memo } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    className?: string;
    variant?: "default" | "secondary" | "destructive" | "loading" | "disabled";
}

const Button = ({
    title,
    className = "",
    variant = "default",
    ...rest
}: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${className}`}
            {...rest}
            tabIndex={0}
        >
            {title}
        </button>
    );
};

export default memo(Button);

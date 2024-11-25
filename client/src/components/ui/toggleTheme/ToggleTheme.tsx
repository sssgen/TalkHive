import Toggler from "./Toggler";
import { ThemeContext, themes } from "../../../contexts/ThemeContext";
import { memo } from "react";

const ToggleTheme = () => {
    return (
        <ThemeContext.Consumer>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {({ theme, setTheme }: any) => {
                if (!theme || !setTheme) return null;

                return (
                    <Toggler
                        onChange={() => {
                            setTheme(
                                theme === themes.light
                                    ? themes.dark
                                    : themes.light
                            );
                        }}
                        value={theme === themes.dark}
                    />
                );
            }}
        </ThemeContext.Consumer>
    );
};

export default memo(ToggleTheme);

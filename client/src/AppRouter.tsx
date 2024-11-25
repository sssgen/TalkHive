import { BrowserRouter } from "react-router-dom";
import { memo } from "react";

import AnimatedRoutesProvider from "./providers/AnimatedRoutesProvider";
import Navbar from "./components/navbar/Navbar";

const AppRouter = () => {
    return (
        <BrowserRouter
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
            <AnimatedRoutesProvider />
            <Navbar />
        </BrowserRouter>
    );
};

export default memo(AppRouter);

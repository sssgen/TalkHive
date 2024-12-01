import { Route, Routes, useLocation } from "react-router-dom";

import MainPage from "../components/pages/MainPage/MainPage";
import ChatPage from "../components/pages/ChatPage/ChatPage";
import SignIn from "../components/pages/auth/SignIn";
import SignUp from "../components/pages/auth/SignUp";
import SettingsPage from "../components/pages/SettingsPage/SettingsPage";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutesProvider = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<MainPage />} />
                <Route path='/chats' element={<ChatPage />} />
                <Route path='/settings' element={<SettingsPage />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutesProvider;

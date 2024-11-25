import { Route, Routes, useLocation } from "react-router-dom";

import MainPage from "../components/pages/MainPage";
import ChatPage from "../components/pages/ChatPage";
import SignIn from "../components/pages/auth/SignIn";
import SignUp from "../components/pages/auth/SignUp";
import SearchPage from "../components/pages/SearchPage";
import SettingsPage from "../components/pages/SettingsPage";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutesProvider = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<MainPage />} />
                <Route path='/chats' element={<ChatPage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/settings' element={<SettingsPage />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutesProvider;

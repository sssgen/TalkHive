import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MainPage from "../components/pages/MainPage/MainPage";
import ChatPage from "../components/pages/ChatPage/ChatPage";
import SettingsPage from "../components/pages/SettingsPage/SettingsPage";
import SignPage from "../components/pages/auth/SignPage";

const AnimatedRoutesProvider = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<MainPage />} />
                <Route path='/chats' element={<ChatPage />} />
                <Route path='/settings' element={<SettingsPage />} />
                <Route path='/sign' element={<SignPage />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutesProvider;

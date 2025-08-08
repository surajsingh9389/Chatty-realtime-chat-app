import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import { useAuthStore } from "./store/useAuthStore";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast"
import { useThemeStore } from "./store/useThemeStore";
import GetStartedPage from "./components/GetStartedPage";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers} = useAuthStore();
  const {theme} = useThemeStore();

  console.log("online", onlineUsers)

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <div data-theme={theme}>
        <Navbar />

      <Routes>
        <Route
          path="/"
          element={<GetStartedPage/>}
        />
        <Route
          path="/chat"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/chat" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/chat" />}
        />
        <Route path="/settings" element={<SettingsPage />} />
        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
        />
      </Routes>

      <Toaster/>
    </div>
  );
};

export default App;

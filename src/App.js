import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Landing from "./pages/Landing";
import ManInMiddlePage from "./pages/ManInMiddlePage";
import CreatePGPKeysPage from "./pages/CreatePGPKeysPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useAuth } from "./components/sections/useAuth";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import CompleteRegistrationPage from "./pages/CompleteRegistrationPage";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  const auth = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("isLoggedIn")));
  }, []);

  const requireAuth = (component) => {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

    return isLoggedIn ? component : <Navigate to="/login" />;
  };

  console.log(isLoggedIn + "neymiş");

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="create-public-private-key" element={<CreatePGPKeysPage />} />
          <Route path="login" element={isLoggedIn ? <Navigate to="/" /> : <LoginPage />} />
          <Route path="register" element={isLoggedIn ? <Navigate to="/" /> : <RegisterPage />} />
          <Route path="dashboard" element={requireAuth(<DashboardPage auth={auth} />)} />
          <Route path="/dashboard/courses" element={requireAuth(<DashboardPage auth={auth} />)} />
          <Route path="/dashboard/profile" element={requireAuth(<DashboardPage auth={auth} />)} />
          <Route path="/dashboard/manage-pgp-keys" element={requireAuth(<DashboardPage auth={auth} />)} />
          <Route path="/dashboard/notifications" element={requireAuth(<DashboardPage auth={auth} />)} />
          <Route path="/dashboard/support" element={requireAuth(<DashboardPage auth={auth} />)} />
          <Route path="complete-register" element={<CompleteRegistrationPage />} />
          <Route path="man-in-middle-attack" element={requireAuth(<ManInMiddlePage auth={auth} />)} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}


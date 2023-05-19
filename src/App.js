import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider, Flex } from '@chakra-ui/react'
import Landing from "./pages/Landing";
import ManInMiddlePage from "./pages/ManInMiddlePage";
import CreatePGPKeysPage from "./pages/CreatePGPKeysPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useAuth } from "./components/sections/useAuth";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import DashboardPage from "./pages/DashboardPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import { Spinner } from "@chakra-ui/react";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="create-public-private-key" element={<CreatePGPKeysPage />} />
          <Route path="login" element={<AuthWrapper> <LoginPage /> </AuthWrapper>} />
          <Route path="register" element={<AuthWrapper><RegisterPage/></AuthWrapper>} />
          <Route path="/register/complete-register" element={<AuthWrapper><RegisterPage/></AuthWrapper>} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/register/email-verification" element={<AuthWrapper><EmailVerificationPage /></AuthWrapper>} />
          <Route path="dashboard" element={<DashboardPageWrapper />} />
          <Route path="/dashboard/courses" element={<DashboardPageWrapper />} />
          <Route path="/dashboard/profile" element={<DashboardPageWrapper />} />
          <Route path="/dashboard/manage-pgp-keys" element={<DashboardPageWrapper />} />
          <Route path="/dashboard/messaging" element={<DashboardPageWrapper />} />
          <Route path="/dashboard/notifications" element={<DashboardPageWrapper />} />
          <Route path="/dashboard/support" element={<DashboardPageWrapper />} />
          <Route path="man-in-middle-attack" element={<ManInMiddlePage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );

  function DashboardPageWrapper() {
    const auth = useAuth({ loading, setLoading });

    if (auth.authLoading) {
      return <Flex justifyContent={"center"} alignItems={'center'} height={"100vh"}>
        <Spinner thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl' />
      </Flex>;
    }

    const requireAuth = (component) => {
      if (!auth.isLoggedIn || !auth.isEmailVerified) {
        return <Navigate to="/login" />;
      }
      return component;
    };

    return requireAuth(<DashboardPage auth={auth} />);
  }
  function AuthWrapper({ children }) {
    const auth = useAuth();

    if (auth.authLoading) {
      return <Flex justifyContent={"center"} alignItems={'center'} height={"100vh"}>
        <Spinner thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl' />
      </Flex>
    }

    if (auth.isLoggedIn) {
      return <Navigate to="/" />;
    }

    return children;
  }
}

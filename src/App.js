import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { useAuth } from "./components/sections/useAuth";
import { Spinner } from "@chakra-ui/react";
import Landing from "./pages/Landing";
import ManInMiddlePage from "./pages/ManInMiddlePage";
import CreatePGPKeysPage from "./pages/CreatePGPKeysPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import DashboardPage from "./pages/DashboardPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import PgPMainPage from "./pages/PgPMainPage";
import PgPAuthConfPage from "./pages/PgPAuthConfPage";
import PgPAuthenticationPage from "./pages/PgPAuthenticationPage";
import PgPConfidentialityPage from "./pages/PgPConfidentialityPage";
import SendMessagePage from "./pages/SendMessagePage";
import IPFSPage from "./pages/IPFSPage";
import X509Page from "./pages/X509Page";
import EncryptCheckFilesPage from "./pages/EncryptCheckFilesPage";
import AdminPanelPage from "./pages/AdminPanelPage";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import SupportPage from "./pages/SupportPage";


export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<AuthWrapper> <LoginPage /> </AuthWrapper>} />
          <Route path="register" element={<AuthWrapper><RegisterPage /></AuthWrapper>} />
          <Route path="/register/complete-register" element={<AuthWrapper><RegisterPage /></AuthWrapper>} />
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
          <Route path="/courses/create-public-private-key" element={<CreatePGPKeysPage />} />
          <Route path="/courses/x509" element={<AuthenticatedRoute element={<X509Page />} />} />
          <Route path="/courses/pgp-main" element={<AuthenticatedRoute element={<PgPMainPage />} />} />
          <Route path="/courses/pgp-authentication" element={<AuthenticatedRoute element={<PgPAuthenticationPage />} />} />
          <Route path="/courses/pgp-confidentiality" element={<AuthenticatedRoute element={<PgPConfidentialityPage />} />} />
          <Route path="/courses/pgp-auth-conf" element={<AuthenticatedRoute element={<PgPAuthConfPage />} />} />
          <Route path="/courses/send-message" element={<AuthenticatedRoute element={<SendMessagePage />} />} />
          <Route path="/courses/encrypt-and-check-files" element={<AuthenticatedRoute element={<EncryptCheckFilesPage />} />} />
          <Route path="/courses/ipfs" element={<AuthenticatedRoute element={<IPFSPage />} />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/adminpanel" element={<AdminRoute element={<AdminPanelPage />} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );

  function AuthenticatedRoute({ element }) {
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

    if (!auth.isLoggedIn || !auth.isEmailVerified) {
      return <Navigate to="/login" />;
    }

    return element;
  }

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
      if (window.location.pathname === "/register/complete-register") {
        return children;
      } else {
        return <Navigate to="/" />;
      }
    }

    return children;
  }

  function AdminRoute({ element }) {
    const auth = useAuth({ loading, setLoading });

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
      const loadAdminStatus = async () => {
        if (auth.currentUser) {
          await auth.currentUser.getIdToken(true);
          const tokenResult = await auth.currentUser.getIdTokenResult();
          setIsAdmin(tokenResult.claims.isAdmin);
        }
      };

      loadAdminStatus();
    }, [auth.currentUser]);

    if (auth.authLoading || !isAdmin) {
      return <Flex justifyContent={"center"} alignItems={'center'} height={"100vh"}>
        <Spinner thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl' />
      </Flex>;
    }

    if (!auth.isLoggedIn || !auth.isEmailVerified || !isAdmin) {
      return <Navigate to="/login" />;
    }

    return element;
  }
}

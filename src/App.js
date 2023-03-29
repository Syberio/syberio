import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Landing from "./pages/Landing";
import ManInMiddlePage from "./pages/ManInMiddlePage";
import CreatePGPKeysPage from "./pages/CreatePGPKeysPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useAuth } from "./components/sections/useAuth";


export default function App() {
  const { isLoggedIn} = useAuth();

  console.log(isLoggedIn);
  const requireAuth = (component) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    /*if(isLoggedIn){
      return <Navigate to="/syberio"/>
    }
    */
    return component;
  };
  return (
    <ChakraProvider>
      <Router basename="/syberio">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="create-public-private-key" element={<CreatePGPKeysPage />} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="register" element={<RegisterPage />} />
          <Route
            path="man-in-middle-attack"
            element={requireAuth(<ManInMiddlePage />)}
          />
        </Routes>
      </Router>
    </ChakraProvider>

  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

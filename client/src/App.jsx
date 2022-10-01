//external lib imports
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

//internal lib imports
import FullScreenLoader from "./components/Common/FullScreenLoader";
import LoginPage from "./pages/AuthPage/LoginPage";
import RegistrationPage from "./pages/AuthPage/RegistrationPage";
import RecoveryPasswordPage from "./pages/AccountRecoveryPage/RecoveryPasswordPage";
import SendOptPage from "./pages/AccountRecoveryPage/SendOptPage";
import VerifyOptPage from "./pages/AccountRecoveryPage/VerifyOptPage";
import VerifyAccountSentOtpPage from "./pages/AccountVerifyPage/VerifyAccountSentOtpPage";
import VerifyAccountVerifyOtpPage from "./pages/AccountVerifyPage/VerifyAccountVerifyOtpPage";

import DashboardPage from "./pages/DashboardPage/DashboardPage";
import ProfilePage from "./pages/UserPage/ProfilePage";
import SettingPage from "./pages/UserPage/ChangePasswordPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ChangePasswordPage from "./pages/UserPage/ChangePasswordPage";

const App = () => {
  const { accessToken } = useSelector((state) => state.Auth);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={accessToken ? <DashboardPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={accessToken ? <Navigate to="/dashboard" /> : <LoginPage />}
          />
          <Route
            path="/register"
            element={
              accessToken ? <Navigate to="/dashboard" /> : <RegistrationPage />
            }
          />
          <Route
            path="/send-otp"
            element={
              accessToken ? <Navigate to="/dashboard" /> : <SendOptPage />
            }
          />
          <Route
            path="/verify-otp"
            element={
              accessToken ? <Navigate to="/dashboard" /> : <VerifyOptPage />
            }
          />
          <Route
            path="/reset-password"
            element={
              accessToken ? (
                <Navigate to="/dashboard" />
              ) : (
                <RecoveryPasswordPage />
              )
            }
          />

          <Route
            path="/verify-account-sent-otp"
            element={
              accessToken ? (
                <Navigate to="/dashboard" />
              ) : (
                <VerifyAccountSentOtpPage />
              )
            }
          />

          <Route
            path="/verify-account-verify-otp/:email/:otp"
            element={
              accessToken ? (
                <Navigate to="/dashboard" />
              ) : (
                <VerifyAccountVerifyOtpPage />
              )
            }
          />

          <Route
            path="/dashboard"
            element={accessToken ? <DashboardPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={accessToken ? <ProfilePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/change-password"
            element={accessToken ? <ChangePasswordPage /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <FullScreenLoader />
    </>
  );
};

export default App;

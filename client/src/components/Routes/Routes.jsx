//External lib imports
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

//Internal lib imports
import LoginPage from "../../pages/AuthPage/LoginPage";
import RegistrationPage from "../../pages/AuthPage/RegistrationPage";
import SendOptPage from "../../pages/AccountRecoveryPage/SendOptPage";
import VerifyOptPage from "../../pages/AccountRecoveryPage/VerifyOptPage";
import RecoveryPasswordPage from "../../pages/AccountRecoveryPage/RecoveryPasswordPage";
import DashboardPage from "../../pages/DashboardPage/DashboardPage";
import ProfilePage from "../../pages/UserPage/ProfilePage";
import ChangePasswordPage from "../../pages/UserPage/ChangePasswordPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import CustomerCreateUpdatePage from "../../pages/CustomerPage/CustomerCreateUpdatePage";
import CustomerListPage from "../../pages/CustomerPage/CustomerListPage";

const AppRoutes = () => {
  const { accessToken } = useSelector((state) => state.Auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            accessToken ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/login" />
            )
          }
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
          element={accessToken ? <Navigate to="/dashboard" /> : <SendOptPage />}
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
          path="/dashboard"
          element={accessToken ? <DashboardPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={accessToken ? <ProfilePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/change-password"
          element={
            accessToken ? <ChangePasswordPage /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/customer-create-update"
          element={accessToken ? <CustomerCreateUpdatePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/customer-list"
          element={accessToken ? <CustomerListPage /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

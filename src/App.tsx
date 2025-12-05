import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import { ReactElement } from "react";
import ServicePage from "./pages/ServicePage/ServicePage";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import CompanyLayout from "./layouts/CompanyLayout";

const isAuthenticated = () => !!localStorage.getItem("accessToken");

function RequireAuth({ children }: { children: ReactElement }) {
  return <Navigate to="/auth/login" replace />;
}

function GuestOnly({ children }: { children: ReactElement }) {
  if (isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/auth/login"
            element={
              <GuestOnly>
                <LoginPage />
              </GuestOnly>
            }
          />

          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<ServicePage />} />

          <Route element={<CompanyLayout />}>
            <Route path="/company">
              <Route path="" element={<CompanyPage />} />
              <Route path="ceo" element={<CompanyPage />} />
            </Route>
          </Route>

          <Route
            element={
              <RequireAuth>
                <MainLayout />
              </RequireAuth>
            }
          >
            <Route path="/estimate" element={<HomePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

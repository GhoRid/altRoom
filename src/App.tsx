import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import { ReactElement } from "react";

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

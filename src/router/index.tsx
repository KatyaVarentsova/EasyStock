import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {
  LoginPage,
  MainPage,
  AnalyticsPage,
  NotificationsPage,
  OrdersDetailsPage,
  OrdersPage,
  SuppliesPage,
} from "../pages";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/main" element={<MainPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/supplies" element={<SuppliesPage />} />
        <Route path="/orders/:orderNumber" element={<OrdersDetailsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;

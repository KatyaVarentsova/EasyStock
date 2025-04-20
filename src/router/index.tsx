import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {
  LoginPage,
  MainPage,
  LinkPage,
  OrdersDetailsPage,
  SupplyDetailPage,
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
        <Route path="/link" element={<LinkPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/supplies" element={<SuppliesPage />} />
        <Route path="/orders/:recordID" element={<OrdersDetailsPage />} />
        <Route path="/supplies/:id" element={<SupplyDetailPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;

import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Pages/dashboard";
import CircularIndeterminate from "../Components/loading/index"
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/button" element={<CircularIndeterminate/>} />
    </Routes>
  );
};
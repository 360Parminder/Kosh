import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import SideBar from "../components/layout/SideBar";



const DashboardLayout = () => {
  return (
    <div className="flex flex-row">
        {/* Sidebar component for the dashboard */}
       <SideBar />
    <div className="flex-1 dashboard-main">
      {/* Header component for the dashboard */}
        <Header />
      <main className="dashboard-content">
        <Outlet />
      </main>
        </div>
    </div>
  );
};

export default DashboardLayout;
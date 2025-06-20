import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import SideBar from "../components/layout/SideBar";



const DashboardLayout = () => {
  return (
    <div className="flex flex-row">
        {/* Sidebar component for the dashboard */}
       <SideBar />
    <div className="flex-1 max-h-screen overflow-scroll dashboard-main p-2  dark:bg-[#171717] dark:text-white bg-white text-black">
      {/* Header component for the dashboard */}
        <Header />
      <main className="rounded-b-xl overflow-hidden dark:bg-black dark:text-white bg-white text-black ">
        <Outlet />
      </main>
        </div>
    </div>
  );
};

export default DashboardLayout;
import React from "react";
import RouteGuard from "helpers/RouteGuard";
import SideNav from "components/Navbar/SideNav/SideNav";
import Navbar from "components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

function MainLayout({ children }) {
  return (
    <RouteGuard>
      <div className="relative min-h-screen lg:flex ">
        <SideNav />
        <main className="flex-1  lg:ml-36 lg:mt-16 overflow-auto">
          <ToastContainer />
          <Navbar />
          {children}
        </main>
      </div>
    </RouteGuard>
  );
}

export default MainLayout;

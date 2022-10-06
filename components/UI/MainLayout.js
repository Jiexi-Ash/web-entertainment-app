import React from "react";
import Head from "next/head";
import RouteGuard from "helpers/RouteGuard";
import SideNav from "components/Navbar/SideNav/SideNav";
import Navbar from "components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

function MainLayout({ children }) {
  return (
    <RouteGuard>
      <Head>
        <title>Web Entertainment App</title>
        <meta name="description" content="Netflix Clone" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
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

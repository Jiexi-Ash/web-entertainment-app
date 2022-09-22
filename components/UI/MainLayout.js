import React from "react";
import RouteGuard from "helpers/RouteGuard";

function MainLayout({ children }) {
  return (
    <RouteGuard>
      <main>{children}</main>
    </RouteGuard>
  );
}

export default MainLayout;

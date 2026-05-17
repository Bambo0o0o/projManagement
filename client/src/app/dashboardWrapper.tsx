"use client";
import React from "react"
import Navbar from "@/app/(components)/Navbar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
        {/* Sidebar section */}
        Sidebar
        <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64}`}>
        
        {/* Navbar Section */}
        <Navbar/>
        {children}
      </main>
      </div>   
  );
};

export default DashboardWrapper;

// Complete Code
// "use client";

// import React, { useEffect } from "react";
// import Navbar from "@/components/Navbar";
// import Sidebar from "@/components/Sidebar";
// import AuthProvider from "./authProvider";
// import StoreProvider, { useAppSelector } from "./redux";

// const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
//   const isSidebarCollapsed = useAppSelector(
//     (state) => state.global.isSidebarCollapsed,
//   );
//   const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   });

//   return (
//     <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
//       <Sidebar />
//       <main
//         className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${
//           isSidebarCollapsed ? "" : "md:pl-64"
//         }`}
//       >
//         <Navbar />
//         {children}
//       </main>
//     </div>
//   );
// };

// const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <StoreProvider>
//       <AuthProvider>
//         <DashboardLayout>{children}</DashboardLayout>
//       </AuthProvider>
//     </StoreProvider>
//   );
// };

// export default DashboardWrapper;

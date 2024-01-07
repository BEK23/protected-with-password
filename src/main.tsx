import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GuardLayout from "./layout/GuardLayout.tsx";
import HomePage from "./pages/Home.tsx";
import AboutPage from "./pages/About.tsx";
import ContactsPage from "./pages/Contacts.tsx";
import Layout from "./layout/Layout.tsx";

const router = createBrowserRouter([
  {
    element: (
      <GuardLayout>
        <Layout />
      </GuardLayout>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

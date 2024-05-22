import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InventoryRequests } from "./screens/InventoryRequests";
import { RequestOrder } from "./screens/RequestOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InventoryRequests />,
  },
  {
    path: "/requestOrder",
    element: <RequestOrder />,
  },
]);

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

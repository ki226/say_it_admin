import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import NotFoundPage from "../pages/notFound/NotFound";
import { TermsPage } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      //   {
      //     index: true,
      //     element: <HomePage />,
      //   },
      { path: "/term", element: <TermsPage /> },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      {/* ToastContiner is used to show the toast message */}
      <ToastContainer />
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;

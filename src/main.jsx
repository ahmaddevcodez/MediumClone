import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import UserNameInfo from "./Components/UserName/UserNameInfo.jsx";
import AuthLayout from "./Pages/AuthLayout.jsx";
import Search from "./Components/Dashboard/Search/SearchBar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/UserNameInfo",
        element: (
          <AuthLayout authentication={true}>
            <UserNameInfo />
          </AuthLayout>
        ),
      },
      {
        path: "/Search",
        element: (
          <AuthLayout authentication={true}>
            <Search />
          </AuthLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

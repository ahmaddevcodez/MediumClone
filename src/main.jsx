import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import UserNameInfo from "./Components/UserName/UserNameInfo";
import AuthLayout from "./Pages/AuthLayout";
import Search from "./Components/Dashboard/Search/SearchBar";
import NewStory from "./Components/Dashboard/New-Story/New-Story";
import "react-quill/dist/quill.bubble.css";



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
      {
        path: "/NewStory",
        element: (
          <AuthLayout authentication={true}>
            <NewStory />
          </AuthLayout>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

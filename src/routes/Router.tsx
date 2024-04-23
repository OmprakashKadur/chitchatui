import React, { Suspense, lazy } from "react";
import LoadingScreen from "../components/LoadingScreen";
import { Navigate, useRoutes } from "react-router-dom";
import AuthLayout from "../layouts/auth/AuthLayout ";
import DashboardLayout from "../layouts/dashboard/DashboardLayout ";
import { DEFAULT_PATH } from "../config";
import Page404 from "../pages/Page404";
const Loadable = (Component) => (props) => {
	return (
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	);
};

export default function Router() {
	return useRoutes([
		{
			path: "/auth",
			element: <AuthLayout />,
			children: [
				{ path: "login", element: <LoginPage /> },
				{ path: "new-password", element: <NewPasswordPage /> },
			],
		},
		{
			path: "/",
			element: <DashboardLayout />,
			children: [
				{
					element: <Navigate to={DEFAULT_PATH} replace />,
					index: true,
				},
				{ path: "app", element: <GeneralApp /> },
				{ path: "chats", element: <Chats /> },
				{ path: "call", element: <CallPage /> },
				{ path: "404", element: <Page404 /> },
				{ path: "*", element: <Navigate to="/404" replace /> },
			],
		},
		{ path: "*", element: <Navigate to="/404" replace /> },
	]);
}

const LoginPage = Loadable(lazy(() => import("../pages/auth/Login")));
const NewPasswordPage = Loadable(
	lazy(() => import("../pages/auth/NewPassword"))
);
const Chats = Loadable(lazy(() => import("../pages/dashboard/Chats")));
const CallPage = Loadable(lazy(() => import("../pages/dashboard/Call")));
const GeneralApp = Loadable(
	lazy(() => import("../pages/dashboard/GeneralApp"))
);

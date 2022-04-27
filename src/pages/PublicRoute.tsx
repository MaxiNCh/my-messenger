import { Navigate, Outlet } from "react-router-dom";

interface PublicRouteProps {
  authed: boolean
}

function PublicRoute({ authed }: PublicRouteProps) {
  return authed ? <Navigate to="/" replace={true} /> : <Outlet />;
}

export default PublicRoute;

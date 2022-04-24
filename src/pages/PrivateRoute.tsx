import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  authed: boolean
}

function PrivateRoute({ authed }: PrivateRouteProps) {
  return authed ? <Outlet /> : <Navigate to="/auth" replace={true} />
}

export default PrivateRoute;

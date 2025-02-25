import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UseAuth = (Component, inRole) => {
  const AuthComponent = (props) => {
    const navigate = useNavigate();
    const { isConnected, user } = useSelector((state) => state.auth);
    useEffect(() => {
      if (!isConnected) {
        return navigate("/auth/SignIn");
      } else {
        if (
          !inRole ||
          (inRole && !inRole.some((role) => user.roles.includes(role)))
        ) {
          return navigate("/unauthorized");
        }
      }
    }, [navigate]);
    return <Component {...props} />;
  };
  return AuthComponent;
};

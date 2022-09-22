import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Loader from "components/UI/Loader";
import { autoSignIn } from "redux/reducers/authSlice";

function RouteGuard({ children }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        dispatch(autoSignIn({ router }))
          .unwrap()
          .then(() => {
            setLoading(false);
          });
      } else {
        router.push("/sign-up");
      }
    });
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-darkBlue">
        <Loader size="large" position="center" />;
      </div>
    );
  }

  return <>{children}</>;
}

export default RouteGuard;

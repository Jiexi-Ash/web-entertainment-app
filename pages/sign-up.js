import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "redux/reducers/authSlice";
import Loader from "components/UI/Loader";

function SignUp() {
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isSessionCheck, setIsSessionCheck] = useState(true);
  const [formError, setFormError] = useState({
    formError: {
      email: "",
      password: "",
      repeatPassword: "",
    },
  });
  const [form, setForm] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.push("/");
      } else {
        setIsSessionCheck(false);
      }
    });
  }, []);

  const handleRoute = () => {
    router.push("/login");
  };
  const handleEmailChange = (e) => {
    setForm({ ...form, email: e.target.value });

    setFormError({ ...formError, email: "" });
  };

  const handlePasswordChange = (e) => {
    setForm({ ...form, password: e.target.value });

    setFormError({ ...formError, password: "" });
  };
  const handleRepeatPasswordChange = (e) => {
    setForm({ ...form, repeatPassword: e.target.value });

    setFormError({ ...formError, repeatPassword: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email === "") {
      setFormError({
        ...formError,
        email: "Can't be empty",
      });

      return;
    }

    if (form.password === "") {
      setFormError({
        ...formError,
        password: "Can't be empty",
      });
      return;
    }

    if (form.repeatPassword === "") {
      setFormError({
        ...formError,
        repeatPassword: "Can't be empty",
      });
      return;
    }

    if (form.password !== form.repeatPassword) {
      setFormError({
        ...formError,
        repeatPassword: "Passwords don't match",
      });
      return;
    }

    const userData = {
      email: form.email,
      password: form.password,
    };
    dispatch(signUp({ userData, router }));

    setFormError({
      email: "",
      password: "",
      repeatPassword: "",
    });
  };
  return (
    <>
      {!isSessionCheck ? (
        <div className="flex flex-col   items-center w-full h-screen  bg-darkBlue">
          <div className="mt-12 mb-14 lg:mt-20 ">
            <svg width="33" height="27" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
                fill="#FC4747"
              />
            </svg>
          </div>
          <div className="w-full max-w-xs bg-semiDarkBlue shadow rounded-md p-6 md:max-w-[400px] transition-all duration-200">
            <h1 className="text-white text-[32px] tracking-tighter font-light">
              Sign Up
            </h1>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="relative flex flex-col mb-6">
                <input
                  type="email"
                  placeholder="Email address"
                  className=" bg-semiDarkBlue text-white p-3 outline-none border-b-grayishBlue border-t-0 border-l-0 border-r-0 focus:outline-none focus:ring-0 focus:border-b-white placeholder:text-[15px] "
                  value={form.email}
                  onChange={handleEmailChange}
                />
                {formError.email && (
                  <p className="absolute top-3 right-0 text-primaryRed text-bodyM font-light">
                    {formError.email}
                  </p>
                )}
              </div>
              <div className="relative flex flex-col mb-6">
                <input
                  type="password"
                  placeholder="Password"
                  className=" bg-semiDarkBlue text-white p-3 outline-none border-b-grayishBlue border-t-0 border-l-0 border-r-0 focus:outline-none focus:ring-0 focus:border-b-white placeholder:text-[15px]"
                  value={form.password}
                  onChange={handlePasswordChange}
                />
                {formError.password && (
                  <p className="absolute top-3 right-0 text-primaryRed text-bodyM font-light">
                    {formError.password}
                  </p>
                )}
              </div>
              <div className="relative flex flex-col mb-10">
                <input
                  type="password"
                  placeholder="Repeat Password"
                  className=" bg-semiDarkBlue text-white p-3 outline-none border-b-grayishBlue border-t-0 border-l-0 border-r-0 focus:outline-none focus:ring-0 focus:border-b-white placeholder:text-[15px]"
                  value={form.repeatPassword}
                  onChange={handleRepeatPasswordChange}
                />
                {formError.repeatPassword && (
                  <p className="absolute top-3 right-0 text-primaryRed text-bodyM font-light">
                    {formError.repeatPassword}
                  </p>
                )}
              </div>
              {error && (
                <p className="text-primaryRed text-bodyM font-light mb-6 italic">
                  {error}
                </p>
              )}
              <button className="btn disabled:bg-primaryRed disabled:cursor-not-allowed">
                {loading ? <Loader /> : "Create an account"}
              </button>
              <div className="mt-6" onClick={handleRoute}>
                <p className="text-bodyM text-white text-center  cursor-pointer">
                  {"Already have an account?"}
                  <span className="text-primaryRed ml-2">Login</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen bg-darkBlue">
          <Loader size="large" position="center" />;
        </div>
      )}
    </>
  );
}

export default SignUp;

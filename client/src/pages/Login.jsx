
import { Lock, Mail, User2Icon, LoaderCircleIcon } from "lucide-react";
import React from "react";
import api from "../configs/api";
import { useDispatch } from "react-redux";
import { login } from "../app/features/authSlice";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();

  const query = new URLSearchParams(window.location.search);
  const urlState = query.get("state");

  const [state, setState] = React.useState(urlState || "login");
  const [isLoading, setIsLoading] = React.useState(false);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await api.post(`/api/users/${state}`, formData);
      dispatch(login(data));
      localStorage.setItem("token", data.token);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <form
        onSubmit={handleSubmit}
        className="sm:w-[360px] w-full text-center border border-cyan-200 rounded-2xl px-8 bg-white shadow-md"
      >
        <h1 className="text-slate-900 text-3xl mt-10 font-semibold">
          {state === "login" ? "Login" : "Sign up"}
        </h1>

        <p className="text-slate-500 text-sm mt-2">
          Please {state === "login" ? "login" : "sign up"} to continue
        </p>

        {/* NAME (only for register) */}
        {state !== "login" && (
          <div className="flex items-center mt-6 w-full border border-cyan-200 h-12 rounded-full pl-6 gap-2">
            <User2Icon size={16} className="text-cyan-600" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="flex-1 bg-transparent border-none outline-none ring-0 text-sm"
            />
          </div>
        )}

        {/* EMAIL */}
        <div className="flex items-center w-full mt-4 border border-cyan-200 h-12 rounded-full pl-6 gap-2">
          <Mail size={14} className="text-cyan-600" />
          <input
            type="email"
            name="email"
            placeholder="Email id"
            value={formData.email}
            onChange={handleChange}
            required
            className="flex-1 bg-transparent border-none outline-none ring-0 text-sm"
          />
        </div>

        {/* PASSWORD */}
        <div className="flex items-center mt-4 w-full border border-cyan-200 h-12 rounded-full pl-6 gap-2">
          <Lock size={14} className="text-cyan-600" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="flex-1 bg-transparent border-none outline-none ring-0 text-sm"
          />
        </div>

        {/* FORGOT PASSWORD */}
        <div className="mt-4 text-left">
         <button
  type="button"
  onClick={() =>
    alert("OTP has been sent to your registered email")
  }
  className="mt-3 text-sm text-cyan-600 hover:text-cyan-700 hover:underline transition-colors"
>
  Forgot password?
</button>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={isLoading}
          className="mt-3 w-full h-11 rounded-full text-white bg-cyan-600 hover:bg-cyan-700 transition flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <LoaderCircleIcon className="animate-spin size-4 mr-2" />
              Please wait...
            </>
          ) : state === "login" ? (
            "Login"
          ) : (
            "Sign up"
          )}
        </button>

        {/* TOGGLE */}
        <p className="text-slate-500 text-sm mt-4 mb-11">
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span
            onClick={() =>
              setState((prev) => (prev === "login" ? "register" : "login"))
            }
            className="text-cyan-600 hover:underline cursor-pointer"
          >
            Click here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

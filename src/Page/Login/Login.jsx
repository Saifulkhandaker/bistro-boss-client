import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link } from "react-router-dom";
import img from "../../assets/others/authentication1.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa6";




const Login = () => {
  const [disabled, setDisabled] = useState(true);

  // authprovider
  const { googleSignIn, signIn } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // handle google sign in
  const handleGoogle = () => {
    googleSignIn()
    .then((result) => {
      Swal.fire({
        title: "Success!",
        text: "Successfully logged in",
        icon: "success",
        confirmButtonText: "Cool",
      });
      setTimeout(() => {
        navigate(location?.state?.from.pathname ? location?.state?.from.pathname : '/');
      }, 3000);
    })
  };
console.log(location);
   // handleLogin
   const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // user login function
    signIn(email, password)
    .then((res) => {
      const user = res.user;
      setError('');
      Swal.fire({
        title: 'Success!',text: 'Successfully logged in',icon: 'success',confirmButtonText: 'Cool' });
        setTimeout(() => {
          navigate(location?.state?.from.pathname ? location?.state?.from.pathname : '/');
        }, 3000);
    })
    .catch((err) => {
        setError("Invalid email or Password");
        Swal.fire({
            title: 'Error!',text: 'Invalid email or password',icon: 'error',confirmButtonText: 'Error' });
    })
  };


  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

 

  // handleCaptcha
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="mb-10 text-center items-center bg-login py-10">
        <div className="lg:flex lg:justify-center gap-32  lg:py-5 lg:px-5 lg:mx-10 border-4 shadow-2xl">
          <div>
            <img className="lg:py-28" src={img} alt="" />
          </div>
          <div>
            <div className="hero ">
              <div className="hero-content flex-col border border-[#AA8453] mt-10 px-5 ">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold text-black">Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm ">
                  <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <LoadCanvasTemplate />
                      </label>
                      <input
                        onBlur={handleValidateCaptcha}
                        type="text"
                        name="captcha"
                        placeholder="type the text above"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control mt-6">
                      <input
                        disabled={disabled}
                        className="btn text-white bg-[#AA8453]"
                        type="submit"
                        value="Login"
                      /> <br />
                      <p>
                        or sign with 
                        <div className="divider"></div>
                        <button
                          onClick={handleGoogle}
                          className="btn w-full text-white bg-[#AA8453]"
                        >
                          <FaGoogle></FaGoogle>
                        </button>
                      </p>
                    </div>
                  </form>
                  <p className="text-[#D1A054] font-bold">
                    New here? <Link to="/register">Create a New Account</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

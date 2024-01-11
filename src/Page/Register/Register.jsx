import { Link, useNavigate } from 'react-router-dom/dist';
import img from '../../assets/others/authentication1.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { FaGoogle } from 'react-icons/fa6';
import useAuth from '../../hooks/useAuth';



const Register = () => {
    const axiosPublic = useAxiosPublic();
    const {googleSignIn} = useAuth();
    const {createUser, handleUpdateProfile} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();


    // handle google SignUp
    const handleGoogleSignIn = () => {
      googleSignIn()
      .then(result => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName

        }
        axiosPublic.post('/users', userInfo)
        .then(res => {
          console.log(res.data);
          navigate('/')
        })
      })
    }

    // handle register
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const img = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
      
        if(!/^(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.{6,})[a-zA-Z0-9@#$%^&+=!]*$/.test(password)){
          setError(
            "Password must be at least eight characters long and contain at least one uppercase letter and one special character."
          )
          Swal.fire({
            title: 'error!',text: 'Password must be at least 6 characters long and contain at least one uppercase letter and one special character',icon: 'error',confirmButtonText: 'Eroor' });
         }
         else{
          setError('');
          if(email) {
            createUser(email, password)
            .then(result => {
              handleUpdateProfile(name, img)
              .then(() => {
                // create user entry in database
                const userInfo = {
                  name: name,
                  email: email
                }
                axiosPublic.post('/users', userInfo)
                .then(res => {
                  if(res.data.insertedId){
                    console.log('user added to the database');
                    Swal.fire({
                      title: 'Success!',text: 'Successfully registered',icon: 'success',confirmButtonText: 'Cool' });
                      setTimeout(() => {
                        navigate('/');
                      }, 3000);
                  }
                })
                
              })
            })
          }
         }
    }



    return (
       <>
       <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
        <div className="mb-10 text-center items-center bg-login py-10">
        <div className="lg:flex lg:justify-center gap-32  lg:py-5 lg:px-5 lg:mx-10 border-4 shadow-2xl">
          <div>
            <img className='lg:py-28' src={img} alt="" />
          </div>
          <div>
            <div className="hero ">
              <div className="hero-content flex-col border border-[#AA8453] mt-10 px-5 ">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold text-black">Sign Up</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm ">
                  <form onSubmit={handleRegister}  className="card-body">
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Name</span>
                        </label>
                        <input
                        type="text"
                        name="name"
                        placeholder="name"
                        className="input input-bordered"
                        required
                        />
                    </div>
                        <div className="form-control">
                        <label className="label">
                        <span className="label-text">Photo URL</span>
                        </label>
                        <input
                        type="text"
                        name="photo"
                        placeholder="url"
                        className="input input-bordered"
                        required
                        />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
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
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white bg-[#AA8453]">Register</button> <br />
                        <p>
                        or sign up
                        <div className="divider"></div>
                        <button
                          onClick={handleGoogleSignIn}
                          className="btn w-full text-white bg-[#AA8453]"
                        >
                          <FaGoogle></FaGoogle>
                        </button>
                      </p>
                    </div>
                  </form>
                  <p className="text-[#D1A054] font-bold " >Already registered? <Link to='/login'>Go to log in</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       </>
    );
};

export default Register;
import React from 'react';
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
const ForgetPassword = () => {
  return (
    <>
      <Meta title={"Forget Password"} />
      <BreadCrumb title="Forget Password" />
      <div className="login-wrapper homewrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Rest Your Password</h3>
                <p className='text-center mt-2 mb-3'> We will send you an email to rest your password </p>
                <form action="" className="d-flex flex-column gap-30">
                  <div>
                    <input
                      type="email"
                      placeholder="email"
                      className="form-control"
                    />
                  </div>
              
                
                  <div className="mt-3 d-flex  justify-content-center flex-column gap-15  align-items-center">
                    <button className="button border-0" type='submit'> Submit</button>
                    <Link to="/login">Cancel</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;

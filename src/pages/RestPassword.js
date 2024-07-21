import React from 'react';
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";

const RestPassword = () => {
  return (
    <>
      <Meta title={"Rest Password"} />
      <BreadCrumb title="Rest Password" />
      <div className="login-wrapper homewrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Rest Password</h3>
                <form action="" className="d-flex flex-column gap-30">
                
                  
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                        name="password"
                      placeholder="confirm password"
                      className="form-control"
                    />
                  </div>
                  
                  <div className="mt-3 d-flex  justify-content-center gap-15  align-items-center">
                    <button className="button border-0"> Ok</button>

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

export default RestPassword;

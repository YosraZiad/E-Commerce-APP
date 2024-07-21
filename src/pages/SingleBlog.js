import React from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta"
import {HiOutlineArrowLeft} from  'react-icons/hi'
import { Link } from "react-router-dom";
const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper homewrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10"><HiOutlineArrowLeft className="fs-4"/>Go back to Blogs</Link>
                <h3 className="title">
                   A Beautiful sunday Morning Renaissance
                </h3>
                <img src="images/blog-1.jpg" className='img-fluid w-100 my-4' alt="blog"/>
                <p>Lorem ipsum dolor 
                  sit amet consectetur adipisicing 
                  elit. Tempora at labore architecto 
                  necessitatibus nesciunt reprehenderit sunt
                   unde atque! Inventore iste hic ut tenetur 
                   perferendis impedit corporis
                   porro vel. Harum, sit?Lorem ipsum dolor 
                  sit amet consectetur adipisicing 
                  elit. Tempora at labore architecto 
                  necessitatibus nesciunt reprehenderit sunt
                   unde atque! Inventore iste hic ut tenetur 
                   perferendis impedit corporis
                   porro vel. Harum, sit?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;

import React from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome } from "react-icons/ai";
import  {BiPhoneCall} from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import  {BiInfoCircle} from "react-icons/bi";
const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper homewrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13973.539722419851!2d77.00743321384712!3d28.886907396371946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da5e51463d4c9%3A0xe5a485e2ac7c3d4a!2zTWFuZGF1cmEsINmH2KfYsdmK2KfZhtinIDEzMTEwM9iMINin2YTZh9mG2K8!5e0!3m2!1sar!2s!4v1721113500703!5m2!1sar!2s"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4"> Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div>
                      <input type="tel" className="form-control " placeholder="Mobile Number"/>
                    </div>
                    <div>
                      <textarea
                       name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"

                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>

                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4"> Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center"><AiOutlineHome className="fs-5"/>
                      <address className="mb-0 ">Hno:277 ,Near village chopal ,Mandaura ,Sonipat ,Haryan </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center"><BiPhoneCall className="fs-5"/>
                      <a  href=" tel:+92 8264954234">+92 8264954234</a></li>
                      <li className="mb-3 d-flex gap-15 align-items-center"><AiOutlineMail className="fs-5"/>
                      <a  href="mailto:navdeepdahiya753@gmail.com">navdeepdahiya753@gmail.com</a></li>
                      <li className="mb-3 d-flex gap-15 align-items-center"><BiInfoCircle className="fs-5"/>
                      <p className="mb-0 "> Monday -Friday 10 AM - 8PM</p></li>


                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

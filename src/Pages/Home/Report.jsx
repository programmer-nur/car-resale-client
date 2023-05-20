import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const Report = ({report}) => {
  const { user } = useContext(AuthContext);
  console.log(report)
  const handleSubmit = (event) =>{
    event.preventDefault()
    const form = event.target;
    const  text = form.message.value

    const reportItem={
      userName:user?.displayName,
      productName:report.name,
      price:report.resaleprice,
      email:user?.email,
      message:text,
      reportId:report._id
    }
    fetch('https://car-resale-server-nurmohammad83.vercel.app/report',{
      method:'post',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(reportItem)
    })
    .then(res=>res.json())
    .then(data=>{
      toast('Report Successfully')
      form.reset()
    })
  };

  return (
    <>
      <input type="checkbox" id="report-modal" className="modal-toggle " />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="report-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <section className="">
            <div className=" w-80 md:w-9/12  mx-auto">
              <div className="md:flex md:items-center p-4">
                <div className="md:mx-4">
                  <h2 className="mt-2 text-xl font-semibold">
                    Please Write Your message
                  </h2>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
              <div className="form-control w-full max-w-xs">
              <textarea
             name="message"
              className="textarea textarea-bordered" placeholder="Write Your Message" required></textarea>
             
            </div>
            <div className="modal-action">
                   <label ><input htmlFor="booking-modal"
                      className="btn btn-primary w-full rounded-full text-white max-w-xs block my-4"
                      type="submit"
                      value="Report"
                    /></label>
                   </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Report;

import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const Report = ({report}) => {
  const { user } = useContext(AuthContext);
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
    fetch(`${process.env.REACT_APP_SERVER}/report`,{
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
          <section>
            
              <div className="md:flex md:items-center p-4">
                <div className="md:mx-4">
                  <h2 className="mt-2 text-xl font-semibold">
                    Please Write Your message
                  </h2>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex justify-center flex-col items-center">
              <div className="form-control w-full max-w-xs">
              <textarea
             name="message"
              className="textarea textarea-bordered" placeholder="Write Your Message" required></textarea>
             
            </div>
            <div className="modal-action">
                   <label ><input htmlFor="booking-modal"
                      className="bg-blue-500 hover:bg-blue-700 px-5 py-2 cursor-pointer w-full rounded-md text-white max-w-xs block font-semibold mb-2"
                      type="submit"
                      value="Report"
                    /></label>
                   </div>
              </form>
            
          </section>
        </div>
      </div>
    </>
  );
};

export default Report;

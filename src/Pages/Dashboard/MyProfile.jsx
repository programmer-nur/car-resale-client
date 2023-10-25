import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyProfile = () => {
    const {user}=useContext(AuthContext)
    
    return (
        <section>
        <h2 className="text-3xl font-semibold font-poppins text-blue-500 my-4 ml-3">
          My Profile
        </h2>
        <div>
          <div className="flex justify-center items-center mb-20">
            <div className="card w-96 bg-base-100 shadow-xl px-4 lg:px-0">
              <figure className="px-10 pt-10">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-bluetext-blue-500 ring-offset-base-100 ring-offset-2">
                    <FontAwesomeIcon
                      className="pt-2 pl-4"
                      icon={faUser}
                      size="4x"
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </figure>
              <div className="lg:pl-4 py-8">
                <h2 className="card-title text-2xl uppercase">{user?.displayName}</h2>
                <hr className="border-2 my-6 border-accent mr-4" />
                <p className="my-3">
                  <span className="font-semibold">Email : <span>{user?.email}</span></span>
                </p>
                
                
              </div>
            </div>
          </div>
          
        </div>
      </section>
    );
};

export default MyProfile;
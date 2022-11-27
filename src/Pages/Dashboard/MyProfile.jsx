import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyProfile = () => {
    const {user}=useContext(AuthContext)
    
    return (
        <section>
        <h2 className="text-3xl font-semibold text-primary my-4 ml-3">
          My Profile
        </h2>
        <div>
          <div className="mt-6 mb-20">
            <div className="card max-w-sm bg-base-100 shadow-xl px-4 lg:px-0">
              <figure className="px-10 pt-10">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
                  <span className="font-semibold">Email :</span>
                </p>
                <p>{user?.email}</p>
                
              </div>
            </div>
          </div>
          
        </div>
      </section>
    );
};

export default MyProfile;
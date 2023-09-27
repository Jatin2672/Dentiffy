import React from "react";
import profile_one_img from "./images/Profile_images/male_profile_img.png";
import profile_two_img from "./images/Profile_images/female_profile_img.png";
import "./Profile.css";
const Profile = () => {
  const your_profile_details = [
    {
      id: 1,
      photo: profile_one_img,
      name: "Dr.Lovely Singh",
      occupation: "Dental Surgeon BDS",
      description:
        "Our cheif dental office Dr Lovely has completed her dentistry from Kalka Dental College and now available in the city to treat people suffering problems.",
    },
    {
      id: 2,
      photo: profile_two_img,
      name: "Dr.Subhankar Singh",
      occupation: "General Surgeon MBBS",
      description:
        "Dr Subhankar holds a MBBS degree from Mayo Institute Of Medical Sciences, Lucknow(UP) and he is also available for any other general problems.",
    },
  ];
  return (
    <>
      <div className="profile_section_container">
        <h2>
          <span>
            <i className="fa-solid fa-angles-right"></i>
          </span>
          Meet Our Teem
        </h2>
        <div className="p_info_container">
          {your_profile_details.map((e, index) => (
            <div className="profile_details" key={index}>
              <img src={e.photo} alt="profile_image" id="your_profile_image" />
              <div className="profile_info">
                <h3 className="profile_name">{e.name}</h3>
                <h4 className="profile_occupation">{e.occupation}</h4>
              </div>
              <p className="profile_description">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import useFetch from "../../components/hooks/useFetch";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./womenSalon.css";

export default function WomenSalon() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, loading, error, services, openingHours, contactUs } = useFetch(
    `/women/${id}`
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Header />

      {loading ? (
        "loading"
      ) : (
        <div className="salonContainer">
          <div className="salonWrapper">
            <h1 className="salonTitle">{data.name}</h1>
            <div className="about">
              <div className="aboutDetails">
                <h1>About us</h1>
                <span>{data.desc}</span>
                <p>Address: {data.address}</p>
              </div>
              <img src={data.photo} alt="" className="salonImg" />
            </div>

            <div className="contact">
              {contactUs.map((contact) => {
                return (
                  <div key={contact._id}>
                    <h1>Contact us</h1>
                    <p>email: {contact.email}</p>
                    <p>phone: {contact.phone}</p>
                    <div className="contact_a">
                      <a
                        href={contact.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="facebook"
                        />
                      </a>

                      <a
                        href={contact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faInstagram} className="insta" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="programSalon">
              <div className="programSalonTexts">
                <h1 className="programTitle">Opening Hours</h1>
                <div className="program_program">
                  {openingHours.map((opening) => {
                    return (
                      <div key={opening._id} className="program">
                        <p>{opening.day}</p>
                        <span
                          className={opening.hours.length < 6 ? "short" : ""}
                        >
                          {opening.hours}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="salonDetailsPrice ">
                <h1 className="titleService">Our Services:</h1>
                {services.map((service) => {
                  return (
                    <div key={service._id} className="serviceBoxM">
                      <p>{service.name}</p>
                      <span>{service.price}$</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      <MailList />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "./../../components/hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./menSalon.css";

export default function MenSalon() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, loading, error, services, openingHours, contactUs } = useFetch(
    `/msalon/${id}`
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
        <div className="salonContainerM">
          <div className="salonWrapperM">
            <h1 className="salonTitleM">{data.name}</h1>
            <div className="aboutM">
              <div className="aboutDetailsM">
                <h1>About us</h1>
                <span>{data.desc}</span>
                <p>Address: {data.address}</p>
              </div>
              <img src={data.photo} alt="" className="salonImgM" />
            </div>

            <div className="contactM">
              {contactUs.map((contact) => {
                return (
                  <div key={contact._id}>
                    <h1>Contact us</h1>
                    <p>email: {contact.email}</p>
                    <p>phone: {contact.phone}</p>
                    <div className="contact_aM">
                      <a
                        href={contact.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="facebookM"
                        />
                      </a>

                      <a
                        href={contact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="instaM"
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="programSalonM">
              <div className="programSalonTextsM">
                <h1 className="programTitleM">Opening Hours</h1>
                <div className="program_programM">
                  {openingHours.map((opening) => {
                    return (
                      <div key={opening._id} className="programM">
                        <p>{opening.day}</p>
                        <span
                          className={opening.hours.length < 6 ? "shortM" : ""}
                        >
                          {opening.hours}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="salonDetailsPriceM ">
                <h1 className="titleServiceM">Our Services:</h1>
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

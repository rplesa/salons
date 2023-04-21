import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import useFetch from "../../components/hooks/useFetch";
import Navbar from "../../components/navbar/Navbar";
import SearchItemMen from "../../components/searchItemMen/SearchItemM";
import MailList from "./../../components/mailList/MailList";

import "./menList.css";


function Spinner() {
  return <div className="spinner"></div>;
}


export default function MenList() {
  const [city, setCity] = useState("");

  const { data, loading, error, reFetch } = useFetch(
    `/msalon?city=${city}`
  );

  const handleClick = () => {
    reFetch();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <div className="MlistContainer">
        <div className="MlistWrapper">
          <div className="MdescriptionSearch">
            <h1>Ready to explore the best beauty salons?</h1>
            <p>
              Find salons in your favorite city, and discover detailed
              information on each salon
            </p>
          </div>
          <div className="MlistSearch">
            <h1 className="MlsTitle"></h1>
            <div className="MlsItem">
              <label></label>
              <input
                type="text"
                placeholder="Choose from your country"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
        </div>

        <div className="MlistResult">
          {loading ? (
             <Spinner />
          ) : (
            <>
              {data.length === 0 ? (
                <div className="MlistResultError">No results found.</div>
              ) : (
                <>
                  {data.map((item) => (
                    <SearchItemMen item={item} key={item._id} />
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </div>
      <MailList />
    </div>
  );
}

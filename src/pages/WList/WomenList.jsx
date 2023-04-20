import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import useFetch from "../../components/hooks/useFetch";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItemWomen/SearchItem";
import MailList from "./../../components/mailList/MailList";
import "./womenList.css";

function Spinner() {
  return <div className="spinner"></div>;
}

export default function WomenList() {
  const [city, setCity] = useState("");

  const { data, loading, error, reFetch } = useFetch(`/women/?city=${city}`);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="descriptionSearch">
            <h1>Ready to explore the best beauty salons?</h1>
            <p>
              Find salons in your favorite city, and discover detailed
              information on each salon
            </p>
          </div>
          <div className="listSearch">
            <h1 className="lsTitle"></h1>
            <div className="lsItem">
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

        <div className="listResult">
          {loading ? (
            <Spinner />
          ) : (
            <>
              {data.length === 0 ? (
                <div className="MlistResultError">No results found.</div>
              ) : (
                <>
                  {data.map((item) => (
                    <SearchItem item={item} key={item._id} />
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

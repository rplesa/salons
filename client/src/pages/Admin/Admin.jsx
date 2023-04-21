import axios from "axios";
import React, { useState } from "react";
import "./admin.css";

export default function Admin() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [services, setServices] = useState("");
  const [price, setPrice] = useState("");
  const [startPrice, setStartPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const [desc, setDesc] = useState("");
  const [gender, setGender] = useState("women");
  const [openingHours, setOpeningHours] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [facebook, setFacebook] = useState("");
  const [insta, setInsta] = useState("");
  const [message, setMessage] = useState("");

 
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const pricesArray = price.split(",").map((price) => {
      return price.trim();
    });

    const servicesArray = services.split(",").map((service, index) => {
      return {
        name: service.trim(),
        price: pricesArray[index],
      };
    });

    const openingHoursArray = openingHours.map((openingHour) => {
      const [day, hours] = openingHour.trim().split(":");
      return { day: day.trim(), hours };
    });

    const formData = new FormData();
    if (photo) {
      formData.append("photo", photo);
    }
    
    try {
      const res = await axios.post(
        "http://localhost:8080/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const newSalon = {
        name,
        services: servicesArray,
        city,
        price: pricesArray,
        startPrice,
        address,
        photo: res.data.photo,
        desc,
        openingHours: openingHoursArray,
        contactUs: {
          email,
          phone,
          facebook,
          insta,
        },
      };

      const salonRes = await axios.post(
        `http://localhost:8080/api/${gender}`,
        newSalon
      );
      

      setMessage("Salon added successfully!");

      setTimeout(() => {
        window.location.href = "/";
        setMessage("");
      }, 5000);
    } catch (err) {
      console.log(err);
      setMessage("Error adding salon");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className="admin-container">
      <h1>Add a new salon</h1>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Central Salon"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="123 Main Street"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Los Angeles"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="services">Services</label>
          <input
            type="text"
            id="services"
            name="services"
            placeholder="Haircut, Color, Hair extensions"
            value={services}
            onChange={(event) => setServices(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Prices </label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="80, 100, 170"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="startPrice">Starting Price</label>
          <input
            type="number"
            id="startPrice"
            name="startPrice"
            placeholder="80"
            value={startPrice}
            onChange={(event) => setStartPrice(event.target.value)}
          />
        </div>

        <div className="form-group-description">
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            name="desc"
            placeholder="Add the description of your salon"
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="openingHours">Opening Hours</label>
          <input
            type="text"
            id="openingHours"
            name="openingHours"
            placeholder=" Mon-Fri: 9-22, Saturday: 10-15, Sunday: close"
            value={openingHours}
            onChange={(event) => setOpeningHours(event.target.value.split(","))}
          />
        </div>
        <div className="form-group">
          <div className="photo">
            <label htmlFor="photo">Main Photo</label>
            <p className="fileSupport">Files supported: JPG, JPEG, PNG</p>
            <input
              type="file"
              id="photo"
              name="photo"
              accept=".jpg, .jpeg, .png"
              onChange={(event) => {
                setPhoto(event.target.files[0]);
                document.getElementById("photo-name").textContent =
                  event.target.files[0].name;
              }}
            />
            <button
              type="button"
              onClick={() => document.getElementById("photo").click()}
            >
              Browse files
            </button>
            <p className="photoName" id="photo-name"></p>
          </div>
        </div>

        <div className="contact-info">
          <h2>Contact</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="facebook">Facebook Link</label>
            <input
              type="url"
              id="facebook"
              name="facebook"
              value={facebook}
              onChange={(event) => setFacebook(event.target.value)}
              placeholder="https://www.facebook.com/username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="insta">Instagram Link</label>
            <input
              type="url"
              id="insta"
              name="insta"
              value={insta}
              onChange={(event) => setInsta(event.target.value)}
              placeholder="https://www.instagram.com/username"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="gender">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="women">Women</option>
              <option value="msalon">Men</option>
            </select>
          </div>
        </div>
        <button className="buttonAdd" type="submit">
          Add New Salon
        </button>
      </form>
    </div>
  );
}

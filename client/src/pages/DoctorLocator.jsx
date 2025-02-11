import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FaSearchLocation, FaHospital, FaUserMd } from "react-icons/fa";
import { hospitals, available_doctors } from "../assets/assets";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 5.6037, 
  lng: -0.1870,
};


const DoctorLocator = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        console.log("Location access denied.");
      }
    );
  }, []);

  const filteredDoctors = available_doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(search.toLowerCase()) ||
    doctor.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-12">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-900 text-center mb-6 flex items-center justify-center gap-2">
          <FaSearchLocation /> Find Nearby Health Centers & Doctors
        </h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for doctors or health centers..."
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

  
        <LoadScript >
          <GoogleMap mapContainerStyle={containerStyle} center={userLocation || center} zoom={14}>
       
            {userLocation && (
              <Marker position={userLocation} icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png" />
            )}

        
            {hospitals.map((hospital) => (
              <Marker key={hospital.id} position={{ lat: hospital.lat, lng: hospital.lng }} />
            ))}
          </GoogleMap>
        </LoadScript>

   
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <FaUserMd className="text-blue-600" /> Available Doctors
          </h2>
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="p-4 border rounded-lg mb-3 bg-gray-50">
                <h3 className="text-lg font-semibold">{doctor.name}</h3>
                <p className="text-sm text-gray-600">{doctor.specialty}</p>
                <p className="text-sm text-gray-500">{doctor.location}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No doctors found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorLocator;

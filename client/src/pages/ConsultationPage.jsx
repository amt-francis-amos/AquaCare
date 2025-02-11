import React, { useState } from "react";
import { FaUserMd, FaCalendarAlt, FaCommentMedical } from "react-icons/fa";
import {doctors} from '../assets/assets'
import SymptomChecker from "../components/SymptomChecker";


const ConsultationPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointmentDetails, setAppointmentDetails] = useState({
    name: "",
    email: "",
    date: "",
  });

  const [question, setQuestion] = useState("");
  const [questionsList, setQuestionsList] = useState([]);

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    if (selectedDoctor && appointmentDetails.name && appointmentDetails.email && appointmentDetails.date) {
      alert(`Appointment booked with ${selectedDoctor} on ${appointmentDetails.date}`);
      setAppointmentDetails({ name: "", email: "", date: "" });
      setSelectedDoctor("");
    }
  };

  const handleQuestionSubmit = () => {
    if (question.trim() !== "") {
      setQuestionsList([...questionsList, { user: "You", text: question }]);
      setQuestion("");
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen py-10 px-4 md:px-12">

        <SymptomChecker />
      
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">Consult a Specialist</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Choose a Doctor</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className={`border p-4 rounded-lg cursor-pointer transition ${
                  selectedDoctor === doctor.name ? "border-blue-500 bg-blue-50" : "border-gray-300"
                }`}
                onClick={() => setSelectedDoctor(doctor.name)}
              >
                <div className="flex items-center gap-3">
                  <FaUserMd className="text-2xl text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold">{doctor.name}</h3>
                    <p className="text-sm text-gray-600">{doctor.specialty}</p>
                    <p className="text-sm text-gray-500">{doctor.available}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
        {selectedDoctor && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Book an Appointment</h2>
            <form onSubmit={handleAppointmentSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={appointmentDetails.name}
                onChange={(e) => setAppointmentDetails({ ...appointmentDetails, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={appointmentDetails.email}
                onChange={(e) => setAppointmentDetails({ ...appointmentDetails, email: e.target.value })}
                required
              />
              <input
                type="date"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={appointmentDetails.date}
                onChange={(e) => setAppointmentDetails({ ...appointmentDetails, date: e.target.value })}
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Book Appointment
              </button>
            </form>
          </div>
        )}

  
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <FaCommentMedical className="text-blue-600" /> Ask a Health Question
          </h2>
          <textarea
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="Type your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
          <button
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={handleQuestionSubmit}
          >
            Post Question
          </button>

    
          <div className="mt-4">
            {questionsList.length > 0 ? (
              questionsList.map((q, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg mb-3">
                  <p className="font-medium text-gray-800">{q.user}</p>
                  <p className="text-gray-700">{q.text}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No questions asked yet.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationPage;

import React, { useState } from "react";
import { FaHeartbeat, FaStethoscope } from "react-icons/fa";
import {symptomDatabase} from '../assets/assets'



const SymptomChecker = () => {
  const [symptom, setSymptom] = useState("");
  const [result, setResult] = useState(null);

  const handleCheckSymptom = () => {
    const formattedSymptom = symptom.toLowerCase().replace(/\s+/g, "_");
    if (symptomDatabase[formattedSymptom]) {
      setResult(symptomDatabase[formattedSymptom]);
    } else {
      setResult({
        condition: "Unknown Condition",
        advice: "We recommend consulting a doctor for proper diagnosis.",
      });
    }
  };

  return (
    <div className="bg-white w-full  md:w-1/2 mx-auto p-6 mb-20 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
        <FaHeartbeat className="text-red-500" /> Symptom Checker
      </h2>
      <p className="text-gray-600">Enter your symptoms to receive first-aid advice.</p>

      <input
        type="text"
        className="w-full p-3 border mt-3 rounded-lg focus:ring-2 focus:ring-blue-500"
        placeholder="e.g., headache, fever, stomach pain..."
        value={symptom}
        onChange={(e) => setSymptom(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mt-3"
        onClick={handleCheckSymptom}
      >
        Check Symptoms
      </button>

      {result && (
        <div className="mt-4 bg-gray-50 p-4 rounded-lg border">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <FaStethoscope className="text-green-500" /> Possible Condition: {result.condition}
          </h3>
          <p className="text-gray-700">{result.advice}</p>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;

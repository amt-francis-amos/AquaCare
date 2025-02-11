import React from 'react';

const PreventionSection = () => {
  return (
    <section className="py-12 px-6 bg-gray-100 text-gray-900">
      <div className="container mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold">Prevention of Bilharzia</h2>
        <ul className="mt-4 text-lg list-disc list-inside">
          <li>Avoid swimming in contaminated water</li>
          <li>Drink clean, treated water</li>
          <li>Use proper sanitation facilities</li>
          <li>Wear protective clothing when in high-risk areas</li>
          <li>Take prescribed medication if exposed</li>
        </ul>
      </div>
    </section>
  );
};

export default PreventionSection;

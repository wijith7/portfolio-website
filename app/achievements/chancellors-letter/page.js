import React from "react";

const BestProjectAchievement = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Best Project Award - Finalist</h1>
      <p className="mt-4 text-lg">
        Recognized among the top 3 finalists for my outstanding research project
        in Mathematics & Data Science at Flinders University.
      </p>

      <h2 className="mt-6 text-2xl font-semibold">Project Highlights</h2>
      <ul className="list-disc list-inside mt-3">
        <li>Applied graph theory and data science techniques in healthcare analysis.</li>
        <li>Developed network models to optimize emergency department workflows.</li>
        <li>Presented findings to university faculty and industry experts.</li>
      </ul>

      <h2 className="mt-6 text-2xl font-semibold">Technologies Used</h2>
      <p className="mt-2">Python, NetworkX, Gephi, Machine Learning, Data Visualization</p>
    </div>
  );
};

export default BestProjectAchievement;

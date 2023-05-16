import React from "react";

const JobCard = ({ job }) => {
  const {
    title,
    salary,
    deadline,
    description,
    category,
    status,
    image,
    skills,
    vacancy,
  } = job || {};

  return (
    <div>
      <h1>Job Card</h1>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>{salary}</p>
          <p>{status}</p>

          <p>Category: {category}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

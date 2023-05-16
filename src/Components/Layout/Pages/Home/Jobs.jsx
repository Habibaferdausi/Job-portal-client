import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [activeTab, setActiveTab] = useState([]);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    fetch(`http://localhost:4000/allJobs/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setJobs(result);
      });
  }, [activeTab]);
  return (
    <div>
      <h1 className="text-center  mt-10 text-3xl text-red-500">
        Available Job's
      </h1>
      <div className="flex  justify-center items-center m-5">
        <div
          onClick={() => handleTabClick("remote")}
          className={`tab  tab2 remote ${
            activeTab == "remote" ? " bg-red-600 text-white" : ""
          }`}
        >
          Remote
        </div>
        <div
          onClick={() => handleTabClick("offline")}
          className={`tab  tab2 Offline ${
            activeTab == "offline" ? " bg-red-500 text-white" : ""
          }`}
        >
          Offline
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default Jobs;

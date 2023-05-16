import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const PostJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:4000/postJobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    data.skills = selectedOption;
    console.log(data);
  };

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
  ];

  return (
    <div className="  ">
      <div className=" grid grid-cols-1 lg:grid-cols-2 ">
        <div className="mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-4">
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              className="text-input mb-4"
              {...register("title")}
              placeholder="title"
              defaultValue="Web developer"
            />

            <input
              className="text-input mb-4"
              {...register("salary", { required: true })}
              placeholder="salary"
              defaultValue="30k"
            />
            <input
              className="text-input mb-4"
              {...register("vacancy", { required: true })}
              placeholder="vacancy"
              type="number"
            />
            <select className="text-input mb-4" {...register("category")}>
              <option value="Engineering">engineering</option>
              <option value="Editor">Editor</option>
              <option value="writer">Writer</option>
              <option value="Developer">Developer</option>
            </select>
            <select className="text-input mb-4" {...register("status")}>
              <option value="remote">Remote</option>
              <option value="offline">Offline</option>
            </select>
            <input
              className="text-input mb-4"
              {...register("image")}
              placeholder="image link"
              type="url"
              defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <input
              className="text-input mb-4"
              {...register("deadline")}
              placeholder="deadline"
              type="date"
            />
            <input
              className="text-input mb-4"
              {...register("postedBy")}
              placeholder="your email"
              type="email"
            />
            <CreatableSelect
              className="w-75"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
            />
            <input
              className="text-input mb-4"
              {...register("description")}
              placeholder="description"
            />
            <input
              className="btn btn-primary mb-4"
              value="Post Job"
              type="submit"
            />
          </form>
        </div>
        <div className=" ">
          <img
            className="w-100"
            src="https://i.ibb.co/rthZ75K/pngtree-job-vacancy-with-join-our-team-recruitment-vector-design-png-image-6419066-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PostJob;

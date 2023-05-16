import React, { useState } from "react";

const PostJob = () => {
  const handlePostJobs = (event) => {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const salary = form.salary.value;
    const vacancy = form.vacancy.value;
    const category = form.category.value;
    const statues = form.statues.value;
    const deadline = form.deadline.value;
    const postedBy = from.postedBy.value;
    const description = form.description.value;
    const options = from.options.value;
    const image = form.image.value;

    const posted = {
      title,
      salary,
      vacancy,

      category,
      statues,
      deadline,
      postedBy,
      description,
      image,
      options,
    };
    console.log(newChocolate);
  };

  return (
    <div className="bg-orange-100 mt-5 p-24">
      <h2 className="text-3xl font-extrabold">Upload Your Jobs</h2>
      <form onSubmit={handlePostJobs}>
        {/* form name and quantity row */}
        <div className=" mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg font-medium">Post Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="title"
                placeholder="Jobs Title"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mt-5  ">
            <label className="label">
              <span className="label-text text-lg font-medium">Salary</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="salary"
                placeholder=" Enter Salary"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mt-5  ">
            <label className="label">
              <span className="label-text text-lg font-medium">Vacancy</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="vacancy"
                placeholder=" Enter SNumber of vacancy"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg font-medium">Category</span>
            </label>
            <div className="input-group">
              <select className="select w-full select-bordered" name="category">
                <option>Engineering</option>
                <option>Editor</option>
                <option>Writer</option>
                <option>Developer</option>
              </select>
            </div>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg font-medium">Status</span>
            </label>
            <div className="input-group">
              <select className="select w-full select-bordered" name="statues">
                <option value="remote">Remote</option>
                <option value="offline">Offline</option>
              </select>
            </div>
          </div>
        </div>

        {/* form Photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control md:w-1/2 mt-5  ">
          <label className="label">
            <span className="label-text text-lg font-medium">Dead Line</span>
          </label>
          <label className="input-group">
            <input
              type="date"
              name="deadline"
              placeholder=" Enter your deadline"
              className="input input-bordered w-full"
            />
          </label>
          <div className="form-control md:w-1/2 mt-5  ">
            <label className="label">
              <span className="label-text text-lg font-medium">Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="postedBy"
                placeholder=" Enter your mail"
                className="input input-bordered w-full"
                value={user?.email}
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg font-medium"></span>
            </label>
            <div className="input-group">
              <select className="select w-full select-bordered" name="options">
                <option>JavaScript</option>
                <option>HTML</option>
                <option>CSS</option>
                <option>Node</option>
              </select>
            </div>
          </div>
        </div>
        <label className="input-group">
          <input
            type="text"
            name="description"
            placeholder=" Enter Description about this job"
            className="input input-bordered w-full"
          />
        </label>
        <input
          type="submit"
          value="Post Job"
          className="btn btn-block bg-orange-800"
        />
      </form>
    </div>
  );
};

export default PostJob;

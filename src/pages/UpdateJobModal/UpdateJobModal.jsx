/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

const UpdateJobModal = (props) => {
  const {register, handleSubmit, formState: {errors},} =useForm() 
  const {handleJobUpdate} = props;

  return<>
  <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Update Job
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={handleSubmit(handleJobUpdate)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              className="text-input"
              {...register("title")}
              placeholder="title"
              defaultValue={props?.job?.title}
            />
                 <input
            className="text-input d-none"
            {...register("_id")}
            value={props?.job?._id}
          />
            <input
              className="text-input"
              {...register("salary", { required: true })}
              placeholder="salary"
             defaultValue={props?.job?.salary} 
            />
            <input
              className="text-input"
              {...register("vacancy", { required: true })}
              defaultValue={props?.job?.vacancy}
              placeholder="vacancy"
         
            />
            <select className="text-input" {...register("category")} defaultValue={props?.job?.category}>
              <option value="Engineering">engineering</option>
              <option value="Editor">Editor</option>
              <option value="writer">Writer</option>
              <option value="Developer">Developer</option>
            </select>

            <select className="text-input" {...register("status")}>
              <option value="remote">Remote</option>
              <option value="offline">Offline</option>
            </select>
            <input
              className="text-input"
              {...register("image")}
              placeholder="image link"
              type="url"
              defaultValue={props?.job?.image} 
            />
            <input
              className="text-input"
              {...register("deadline")}
              placeholder="deadline"
              type="date"
              defaultValue={props?.job?.deadline} 
            />
        
            <input className="submit-btn" value="Update Job" type="submit" />
          </form>
      </Modal.Body>
     
    </Modal>
  </>;
};

export default UpdateJobModal;

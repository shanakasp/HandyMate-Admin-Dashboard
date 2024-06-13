import React from "react";
import { useParams } from "react-router-dom";

const ViewTask = () => {
  let { id } = useParams();

  return (
    <div>
      <h2>View task</h2>
      <p>Task Id : {id}</p>
    </div>
  );
};

export default ViewTask;

import React from "react";

const page = ({ params, searchParams }) => {
  console.log(params, searchParams);
  return (
    <div>
      <h3>Id related blog = {params.blogId} </h3>
    </div>
  );
};

export default page;

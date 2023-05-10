import React from "react";

const App = () => {
  let count = 1;
  return (
    <>
   <h1>My Weekly Journal </h1>
    <div className="bodyDiv">
      <div className="list-1">Monday</div>
      <div className="list-2">Tuesday</div>
      <div className="list-3">Wednesday</div>
      <div className="list-4">Thursday</div>
      <div className="list-5">Friday</div>
      <div className="list-6">Saturday</div>
      <div className="list-7">Sunday</div>
    </div>
    </>
  );
};

export default App;

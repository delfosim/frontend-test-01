import React from "react";
import { ToastContainer } from "react-toastify";
import { Router } from "./Router/routes";

function App() {
  return (
    <div className="App">

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
      <Router/>
        </div>
  );
}

export default App;

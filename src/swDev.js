import React from "react";

const swDev = () => {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(swUrl).then((response) => {
    console.log("response", response);
  });
};

export default swDev;

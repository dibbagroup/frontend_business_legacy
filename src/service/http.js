import axios from "axios";

const checkVariables = (...variables) => {
  variables.forEach((v) => {
    // if (!url) return Error("url cannot be empty");
    if (!v) {
      console.log(v, "is emptyy");
    }
  });
};

const defaultConfig = {
  headers: {
    Authorization: "",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    Accept: "application/json",
  },
};

export const doPost = (url, body, config) => {
  checkVariables();

  config = {
    ...config,
    defaultConfig,
  };

  axios
    .post(url, body, config ? config : null)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const doGet = (url, config) => {};

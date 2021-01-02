import axios from "axios";

const baseUrl = `http://localhost:5555`;

/*
=====this is a function to get all users=====
export const signUpNewUser = (obj) => {
  axios
    .get(`${baseUrl}/users`, obj)
    .then(function (response) {
      console.log("response.data", response.data);
    })
    .catch(function (error) {});
};
*/

export const loginUser = async (loginObject) => {
  let result;
  await axios
    .post(`${baseUrl}/users/login`, loginObject)
    .then(function (response) {
      result = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  return result;
};

export const signUpNewUser = async (obj) => {
  let result;
  await axios
    .post(`${baseUrl}/users`, obj)
    .then(function (response) {
      result = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  return result;
};

export const getAllPets = async () => {
  try {
    const response = await axios.get(`${baseUrl}/pets`);
    let petsArray = response.data;
    return petsArray;
  } catch (error) {
    console.error(error);
  }
};

export const getPetsByType = async (type) => {
  try {
    const response = await axios.get(`${baseUrl}/pets/${type}`);
    let petsArray = response.data;
    return petsArray;
  } catch (error) {
    console.error(error);
  }
};

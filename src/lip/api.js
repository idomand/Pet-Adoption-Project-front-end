import axios from "axios";

const baseUrl = `http://localhost:5555`;

export const editPet = async (petObject) => {
  try {
    const response = await axios.put(
      `${baseUrl}/pets/${petObject._id}`,
      petObject
    );
    const petAfterUpdate = response.data;
    return petAfterUpdate;
  } catch (error) {
    console.error(error);
  }
};
export const addNewPet = async (obj) => {
  let result;
  let myVar = await axios
    .post(`${baseUrl}/pets`, obj)
    .then(function (response) {
      result = response.data;
      return result;
    })
    .catch(function (error) {
      console.error(error);
    });
  return result;
};

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
    .then(async function (response) {
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

export const searchPetsByParameters = async (parameters) => {
  if (typeof parameters === "object") {
    const parametersString = JSON.stringify(parameters);
    try {
      const response = await axios.get(`${baseUrl}/pets/${parametersString}`);
      let petsArray = response.data;
      return petsArray;
    } catch (error) {
      console.error(error);
    }
  }
  try {
    const response = await axios.get(`${baseUrl}/pets/${parameters}`);
    let petsArray = response.data;
    return petsArray;
  } catch (error) {
    console.error(error);
  }
};

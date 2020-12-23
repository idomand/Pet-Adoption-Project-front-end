import axios from "axios";

const baseUrl = `http://localhost:5555/pet`;

export function testFunc() {
  return axios.get(`${baseUrl}`);
}

export function sentTweet(tweet) {
  try {
    // throw new Error();
    return axios.post(`${baseUrl}tweet`, tweet);
  } catch (error) {
    console.log("error", error);

    return error;
  }
}

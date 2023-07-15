import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d8e2234fcc3741429894679b935c10a3",
  },
});

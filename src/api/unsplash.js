import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 4t3dIqnT_td2qILw4apXbWHGEQALdG-jc-z7g2XujUc",
  },
});

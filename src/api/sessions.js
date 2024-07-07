import axios from "axios";

export default axios.create({
baseURL: "http://localhost:3500/",
});

// this file handles api calls related to the session
import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "hi", gl: "IN" },
    headers: {
        "X-RapidAPI-Key":
            process.env.REACT_APP_YOUTUBE_API_KEY || "b90871db4bmsh0c883ea02f7f4cap16efb9jsn468abf6377d9",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};

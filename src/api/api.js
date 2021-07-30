import axios from "axios";

//Api KeY take from numverify
const key = "a6fbeae89bd91f9578790969bdad9d9a";

export const checkNumber = (number) => {
    return axios.get(
        `http://apilayer.net/api/validate?access_key=${key}&number=${number}`
    ).then(res => res.data)
};

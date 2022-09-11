import axios from "axios";

export function getAdvices() {
    return new Promise((resolve) => {
        axios
        .get("https://api.adviceslip.com/advice")
        .then((res) => {
          return res;
        })
        .then(resolve)
        .catch((err) => console.log(err));
    })
  
}

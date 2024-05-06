//Getting the elements by using the className

const image = document.getElementsByClassName("image")[0]; //Used index Because of HTML collection Array
const button = document.getElementsByClassName("btn")[0];

//Getting the api address in a variable and fetching the data

const api = "https://api.thecatapi.com/v1/images/search";
const res = fetch(api);
res
  .then((data) => data.json())
  .then((result) => {
    try {
      image.src = result[0].url;
      //Adding event listener for the button logic
      button.addEventListener("click", () => {
        location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  });

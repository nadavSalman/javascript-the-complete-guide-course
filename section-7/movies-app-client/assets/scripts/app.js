const addMiveModuleBtmElement = document.getElementById("add-modal");
const startAddMovieModalElement = document.querySelector("header button");
const backdropElement = document.getElementById("backdrop");
const cancelAddMovieButton =
  addMiveModuleBtmElement.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = document.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");

const movies = []


const UpdateUI = () =>{
    if(movies.length === 0){
        entryTextSection.style.display = 'block';
    }else{
        entryTextSection.style.display = 'none';
    }
}

const renderNewMoviElement = (title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-elemen'
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src"${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">

        </div>
    `;
}

setBackdropBackground = () => {
  backdropElement.classList.toggle("visible");
};

toggleMovieModule = () => {
  addMiveModuleBtmElement.classList.toggle("visible");
  setBackdropBackground();
};

addMovieHandler = () => {
  console.log("addMovieHandler");
  const userInputObj = {
    movieTitle: userInputs[0].value.trim(),
    imageUrl: userInputs[1].value,
    rating: userInputs[2].value,
  };
  console.log(userInputObj);
  if (
    userInputObj.movieTitle.trim() === "" ||
    userInputObj.imageUrl.trim() === "" ||
    userInputObj.rating.trim() === "" ||
    +userInputObj.rating < 1 ||
    +userInputObj.rating > 5
  ) {
     alert('Place enter valid values (rating between 1 and 5)')
     return;
  }
  movies.push(userInputObj);
  console.log(movies);
  clearMovieInput();
  UpdateUI();
};

const cancelAddMovie = () => {
  toggleMovieModule();
  clearMovieInput();
};

const clearMovieInput = () =>{
    for(const userInput of userInputs){
        userInput.value = ''
    }
}

startAddMovieModalElement.addEventListener("click", toggleMovieModule);
backdropElement.addEventListener("click", cancelAddMovie);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
confirmAddMovieButton.addEventListener("click", addMovieHandler);

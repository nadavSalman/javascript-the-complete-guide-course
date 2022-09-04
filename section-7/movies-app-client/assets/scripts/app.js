const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
// const userInputs = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};


const deleteMovie(movieId) => {
  let movieIndex = 0;
  for(const move of movies){
    if(move.id === movieId)
      break;
    movieIndex++;
  }
  movies.slice(movieIndex,1)
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();

}

const closeMovieModule = () =>{
  addMovieModal.classList.toggle('visible');
}

const deleteMovieHeandler = (movieId) => {
  deletMovieModule = document.getElementById('delete-modal)');
  deletMovieModule.classLis.add('visible');
  toggleBackdrop();
  //deleteMovie(movieId);

}

const renderNewMovieElement = (id,title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener('click',deleteMovieHeandler.bind(null,id))
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.remove('visible');
};

const showMovieModule = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModule();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  }

  let newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  newMovie.image = "/Users/nsalman/dev-me/javascript-the-complete-guide-course/section-7/movies-app-client/assets/images/one.png"

  movies.push(newMovie);
  console.log(movies);
  showMovieModule();
  clearMovieInput();
  renderNewMovieElement(newMovie.id,newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};

const backdropClickHandler = () => {
  showMovieModule();
};

startAddMovieButton.addEventListener('click', showMovieModule);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);

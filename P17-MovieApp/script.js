document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const searchValue = document.getElementById("search").value;
  if (searchValue.trim()) {
    fetchMovies(searchValue);
  }
});

async function fetchInitialMovies() {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "NO",
      "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const fetchPromises = [];
  for (let page = 1; page <= 7; page++) {
    const url = `https://moviesdatabase.p.rapidapi.com/titles?startYear=2020&endYear=2022&page=${page}&limit=10`;
    fetchPromises.push(fetch(url, options).then((response) => response.json()));
  }

  try {
    const results = await Promise.all(fetchPromises);
    results.forEach((data) => {
      if (data && data.results) {
        updateDOM(data.results);
      }
    });
  } catch (error) {
    console.error("Failed to fetch movies:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchInitialMovies);

async function fetchMovies(searchQuery) {
  const url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${searchQuery}?exact=true&titleType=movie&limit=10`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "NO",
      "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const main = document.getElementById("main");
    main.innerHTML = "";
    updateDOM(data.results);
  } catch (error) {
    console.error("Failed to fetch movies:", error);
  }
}

function updateDOM(movies) {
  const main = document.getElementById("main");

  movies
    .filter((movie) => movie.releaseDate && movie.releaseDate.year)
    .forEach((movie) => {
      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");
      const imageUrl =
        movie.primaryImage && isValidUrl(movie.primaryImage.url)
          ? movie.primaryImage.url
          : "assets/image.png";

      const movieTitle = movie.titleText
        ? movie.titleText.text
        : "No title available";

      movieEl.innerHTML = `
                    <img src="${imageUrl}" alt="${movieTitle}" onerror="handleImageError(this)"/>
                    <div class="movie-info">
                        <h3>${movieTitle}</h3>
                        <span>${movie.releaseDate.year}</span>
                    </div>
                    <div class="overview">
                        <h3>Overview</h3>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                        quia modi error velit quam nihil beatae assumenda sunt architecto vero
                        rerum fugiat repellendus cumque veniam quo, ullam voluptates similique
                        officia! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Rerum eum, corporis obcaecati laudantium quas voluptatum beatae
                        tempore consequatur reprehenderit. Nostrum quo esse mollitia, delectus
                        unde eaque dicta recusandae! Omnis, saepe.
                    </div>
                `;

      main.appendChild(movieEl);
    });
}

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (e) {
    return false;
  }
}

function handleImageError(imageElement) {
  imageElement.src = "assets/image.png";
}

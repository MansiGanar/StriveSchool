window.onload = async () => {
  await fetchMusic();
  await addSongs();
};

let response;

const fetchMusic = async (val = "akon") => {
  try {
    response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${val}`
    )
      .then((response) => response.json())
      .then((data) => data);
  } catch (error) {
    console.log(error);
  }
};

const addSongs = async () => {
  let newdata = await response.data;

  for (i = 0; i < 4; i++) {
    let newInnerHtml = ` <div class="card music-card2">
    <img
      class="img-fluid align-self-center mt-3 pl-3 pr-3"
      src=${newdata[i].artist["picture"]}
      alt="Card image cap"
    />
    <div class="card-body">
      <h6>${newdata[i].title}</h6>
      <p class="card-text">${newdata[i].artist["name"]}</p>
    </div>
    </div>`;

    document.getElementById("theThingToChange").innerHTML += newInnerHtml;
  }
};

const handleChange = async (val) => {
  await fetchMusic(val);
  document.getElementById("theThingToChange").innerHTML = "";
  await addSongs();
};

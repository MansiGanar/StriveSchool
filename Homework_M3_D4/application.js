window.onload = async () => {
  await getBooks();
};
const getBooks = async () => {
  await fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let books = data;
      const booksdata = document.getElementById("photos");
      booksdata.innerHTML = "";
      books.forEach((element) => {
        console.log(data);
        let newInnerHtml = `
        
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src="${element.img}">
          
            <p class="card-text">
              "${element.title}"
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
            <p class="card-text">
              " The price is: ${element.price}"
            </p>
          <button class="btn btn-primary hide-btn">
           hide
          </button>
              </div>
              <button class="btn btn-primary my-2 additemtocartbtn" onclick="addItemToCart">
            Add to cart
          </button>
            
          </div>
        </div>
      </div>`;
        booksdata.innerHTML += newInnerHtml;
      });
    });
};
const handleChange = async () => {
  await getBooks();
  document.getElementById("theThingToChange").innerHTML = "";
  // await addSongs();
};

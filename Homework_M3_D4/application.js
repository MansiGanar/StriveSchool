window.onload = async () => {
  await getBooks();
};

let shoppingCart = [];
const getBooks = async () => {
  await fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let books = data;
      console.log(typeof data);
      const booksdata = document.getElementById("photos");
      booksdata.innerHTML = "";
      books.forEach((element) => {
        console.log(data);
        let newInnerHtml = `
        
        <div class="col-md-4 booksToShow" >
        <div class="card mb-4 shadow-sm" >
          <img src="${element.img}" style="width: 200px " > 
          
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
              <button class="btn btn-primary my-2 additemtocartbtn" onclick="addItemToCart(${element.asin})">
            Add to cart
          </button>
            
          </div>
        </div>
      </div>`;
        booksdata.innerHTML += newInnerHtml;
      });
    });
};

function addItemToCart(asin) {
  console.log(asin);
}
const findBooks = (elem) => {
  const terms = $("input").val();
  console.log(terms); //verify user input
};

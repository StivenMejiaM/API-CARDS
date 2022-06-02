const container = document.getElementById("contenedor");
const URL = "https://the-dune-api.herokuapp.com/books/12";


//uso esta para pasar lo que recibo a un json y poder usarlo como data
const fetchData = async(api)=>{
    const res = await fetch(api);
    const data = await res.json();
    return data;
}


//cuando carga la pagina ejecuta la funcion getCharacter recorriendo
//el array que llega de la api y enviandole la data a la funcion
window.addEventListener('load', async()=>{
    const data = await fetchData(URL);
    const book=data;
    //uso esto por que la api me llega como array
    book.map(book=> getCharacter(book));
});


//esta funcion crea las targets y reibe la data(book) de la api por medio de la promesa
function getCharacter(book){
    const cart = document.createElement('div');
    const titulo = document.createElement('h2');
    const autor = document.createElement('p');
    const link = document.createElement('a');
    const año = document.createElement('p');


    titulo.textContent=book.title;
    autor.textContent=book.author;
    link.setAttribute('href',book.wiki_url);
    año.textContent="Year: "+book.year;
    link.setAttribute('target',"_blank");
    cart.setAttribute('class',"cart");

    cart.appendChild(titulo);
    cart.appendChild(autor);
    cart.appendChild(año);
    cart.appendChild(link);


    //agrega cada cart al contenedor padre creado en el archivo html
    container.appendChild(cart);
};
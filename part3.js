test
let list = [
  {
    price: 0.2,
    element: "baguette",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIDrM63wkrZnT3L1Ogg1KgNgrltj9SIUOmGKGoXcXnyvb7vMIEXswfa2ceOhJQtTBkl8&usqp=CAU",
  },
  {
    price: 1.2,
    element: "pain chocolat",
    image:
      "https://atablelepiceriefine.com/wp-content/uploads/2023/01/a-table-epicerie-fine-pain-au-chocolat.png",
  },
  {
    price: 1,
    element: "croissant",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqpaK9YVC_4jQjdm5EIIZxTq_9E9yZHrIsiP5zefntAVpB4BA_k2Ku1yQNCSghuLksTk&usqp=CAU",
  },
  {
    price: 1.2,
    element: "paté",
    image:
      "https://www.cuisinetunisienne.tn/wp-content/uploads/2020/04/Recette-P%C3%A2t%C3%A9-Tunisienne.jpeg",
  },
];

function showList() {
  for (let i = 0; i < list.length; i++) {
    $("#container").append(
      
    <div>
        <h1>
         ${list[i].element} 
        </h1>
        <p>${list[i].price}</p>
        <img class = "image" src= "${list[i].image}"/>

        <button class = "order" onClick = "add(${i})" > order </button>
    </div>
    );
  }
}
showList();

var command = 0;

function add(index) {
  command += list[index].price;
  console.log(command);
  $("#total").empty();
  $("#total").append(<p> your total price is ${command} </p>);
}

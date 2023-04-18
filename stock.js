


//You manage a grocery store and need to keep track of the inventory of various items. You will use arrays to store the data and various functions to manipulate and analyze the data. 
//Create an array containing the names of all items in the inventory maximum of 10.
const stockarray=["apples","bananas","Avocados","onions","mangoes","onions","cucumbers","chillies"]
//Create a separate array with the corresponding stock quantities of each item maximum of 10.
let stockquantity=[10,60,30,80,150,40,50,200,200]
//Write a function to add a new item to the inventory, updating both arrays.
function add(array,quantity){
    if(stockarray.length >=10){
        console.log("no stock")
    }
    else{
       stockarray.push(array) 
       stockquantity.push(quantity)
       console.log(`I have added ${array} with ${quantity}`)
    }
    // let a= array.push("pumkin")
    // console.log(array)
    // let b = quantity.push(50)
    // console.log(quantity)
}
add("strawberries",300)
console.log(stockquantity)
console.log(stockarray)


//Write a function to update the stock quantity of an existing item.
function update(stock,quantity){
    stockquantity[5]=80
    // console.log(`${stock} has been updated to ${quantity}`)
    console.log(stockquantity)
}
update("onions",80)
//Write a function to calculate the total number of items in the inventory.
function addall(quantity){
    let sum=0;
    stockquantity.forEach(element => {
        sum+=element
    });
    console.log(sum);
}




// Function to find the item with the lowest stock quantity
function findLowestStock() {
  let lowestStock = stockQuantities[0];
  let lowestIndex = 0;
  for (let i = 1; i < StockQuantities.length; i++) {
    if (stockQuantities[i] < lowestStock) {
      lowestStock = StockQuantities[i];
      lowestIndex = i;
    }
  }
  return inventoryItems[lowestIndex];
}
console.log(findLowestStock());

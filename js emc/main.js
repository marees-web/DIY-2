var input = document.getElementById("input")
var output = document.getElementById("two")




function save(){
    var listedData = document.createElement("tr")
    listedData.innerHTML= input.value + "<button onclick='deleteItem(event)'>Delete</button>" 
    output.append(listedData)
}
function deleteItem(event){
    event.target.parentElement.remove()
}
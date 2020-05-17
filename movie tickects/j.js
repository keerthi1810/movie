function printPrice() {
var movie = document.getElementById("movie").value;
var name = document.getElementById("textbox").value;
var price = document.getElementById("tickets").value;
var quantity = document.getElementById("quantity").value;
var sentence = " ";
for (var i = 1; i<=quantity; i++) {
sentence += name + " purchased ticket ";
sentence += movie + " for $";
sentence += price;
sentence += "\n";
}
document.getElementById("insert").value=sentence;
}
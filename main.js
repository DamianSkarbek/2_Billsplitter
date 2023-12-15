//pobieranie z dokumentu
const $price = document.querySelector("#price");
const $people = document.querySelector("#people");
const $tip = document.querySelector("#tip");
const $btn = document.querySelector(".count");
const $error = document.querySelector(".error");
const $costInfo = document.querySelector(".cost-info");
const $cost = document.querySelector(".cost");
//funkcja
function insertChecker() {
  if ($price.value != '' && $people.value != '' && $tip.value != '') {
    let tip = parseFloat($tip.value);
    let price = parseFloat($price.value);
    let people = parseInt($people.value);
    const result = (price + price * tip) / people;
    $cost.innerText = `${result.toFixed(2)}`;
    $error.innerText = "";
  } else {
    $error.innerText = "Uzupełnij wszystkie pola.";
  }
}
//nasłuchiwanie
$btn.addEventListener("click", insertChecker);

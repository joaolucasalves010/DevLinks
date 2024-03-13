const switchButton = document.querySelector("#switch button")
const htmlElement = document.querySelector("html")

function toggleMode() {
  // if (htmlElement.classList.contains("light")) {
  //   htmlElement.classList.remove("light")
  // } else {
  //   htmlElement.classList.add("light")
  // }

  htmlElement.classList.toggle("light") // Vai fazer toda a função de remover a adicionar a class
}

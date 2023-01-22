const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)

form.addEventListener("change", save)

function add() {
  //Definir a data de hoje
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  //Descobrir se a data já foi registrada ou não
  const dayExists = nlwSetup.dayExists(today)

  //Se o dia já foi registrado, encerra a função
  if (dayExists) {
    alert("Dia já incluso 🔴")
    return
  }
  alert("Adicionado com sucesso ✔️")

  //Se o dia não foi registrado, adicionar dia
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup")) || {}
nlwSetup.setData(data)
nlwSetup.load()

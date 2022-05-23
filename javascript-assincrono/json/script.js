fetch('./dados.json')
.then(res => res.json())
.then(res => {
  res.forEach(dado => {
    console.log(dado.aula)
  })
})

const config = {
  "player": "Vimeo",
  "duracao": "15.0",
  "aula": "JavaScript"
}

localStorage.config = JSON.stringify(config);

const pegarConfig = JSON.parse(localStorage.config)

console.log(pegarConfig)
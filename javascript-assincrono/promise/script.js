const promesa = new Promise((resolve, reject) => {
  const condicao = true;
  if (condicao) {
    setTimeout(() => {
      resolve({nome: 'lucas', idade: 23});
    }, 2000)
  } else {
    reject(Error("Um erro ocorreu."));
  }
});

promesa.then((resposta) => {
  console.log(resposta)
})

// console.log(promesa);

// async function puxarDados() {
//   const dados = await fetch('./dados.json');
//   const jsonDados = await dados.json()

//   console.log(jsonDados[0].aula)
// }

// puxarDados()


async function asyncSemPromise() {
  // Console não irá esperar.
  await setTimeout(() => console.log('Depois de 1s'), 1000);
  console.log('acabou');
}
asyncSemPromise();

async function iniciarAsync() {
  await new Promise(resolve => {
    setTimeout(() => {
      console.log('Ababou')
      resolve() 
    }, 1000)
  });
  console.log('Depois de 1s');
}
iniciarAsync();

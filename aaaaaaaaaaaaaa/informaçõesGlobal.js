const url ="https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function vizualizarInformaçõesGlobais() {
const res = await fetch(uri)
const dados  = await res.json()
console.log(dados);
}
vizualizarInformaçõesGlobais();






































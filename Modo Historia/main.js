const fasesConcluidas = localStorage.getItem("fasesConcluidas")
const modo = localStorage.setItem("modoJogo", "historia")
const mapa = document.querySelector("#notebook")

mapa.addEventListener("click", ()=>{
    window.location.href = "../Mapas/MapaHistoria/mapaHistoria.html"
})

if(fasesConcluidas == null){
    localStorage.setItem("fasesConcluidas", JSON.stringify([]))
}
const modo = localStorage.setItem("modoJogo", "explorar")
const mapa = document.querySelector("#notebook")

mapa.addEventListener("click", ()=>{
    window.location.href = "../Mapas/MapaExplorar/mapaExplorar.html"
})
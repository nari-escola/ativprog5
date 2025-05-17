// Troca de imagem ao clicar
const foto = document.getElementById("foto");
let isFoto1 = true;

foto.addEventListener("click", () => {
    if (isFoto1) {
        foto.src = "images/chika.png";
    } else{
        foto.src = "images/avatar";
    }
    isFoto1 = !isFoto1; // alterna o estado
})

// Mostrar/esconder contéudo dos subtítulos
const subtitulos = document.querySelectorAll("h2")

subtitulos.forEach(subtitulo => {
    //clique único: oculta o elemento seguinte
    subtitulo.addEventListener("click", () => {
        const conteudoSeguinte = subtitulo.nextElementSibling;
        if (conteudoSeguinte) {
            conteudoSeguinte.style.display = "none";
        }
    });

    // clique duplo: mostra o elemento seguinte
    subtitulo.addEventListener("dblclick", () => {
        const conteudoSeguinte = subtitulo.nextElementSibling;
        if (conteudoSeguinte) {
            conteudoSeguinte.style.display = "block";
        }
    });
})

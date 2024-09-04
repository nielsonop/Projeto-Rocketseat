function toggleMode(){
  const html = document.documentElement
  //mudar de modo claro pra modo escuro
  html.classList.toggle("light")

  //substituir a imagem
  const img = document.querySelector("#profile img")

  
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar 2.png')
  } else {
    //se tiver sem lightr mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar 1.png')
  }
}
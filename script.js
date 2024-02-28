function toggleLightMode() {
  /* variáveis com as informações para serem utilizadas no script */
  const seLightMode = "lightmode"
  const imgLightMode = "./assets/avatar-light.png"
  const imgNoLightMode = "./assets/avatar.png"

  /* transfere para a variável html todo o conteúdo do elemento html*/
  const html = document.documentElement

  /* usando o método toggle para uma ação binária direta 
      que irá fazer o controle que quando existir o texto "lightmode* na classe
      irá remover e quando não existir, irá adicionar o texto "lightmode" na classe */
  html.classList.toggle(seLightMode)

  /* obtém informações de img conforme o seletor  pesquisado */
  const img = document.querySelector("#profile img")

  /* atribui a imagem correspondente do profile qdo for light e qdo não for light*/
  if (html.classList.contains(seLightMode)) {
    img.setAttribute("src", imgLightMode)
  } else {
    img.setAttribute("src", imgNoLightMode)
  }
}

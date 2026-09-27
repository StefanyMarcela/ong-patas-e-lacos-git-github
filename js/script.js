const botaoMenu = document.querySelector(".menu-hamburguer");
const menuLinks = document.querySelector(".menu-links");

if (botaoMenu && menuLinks) {

    botaoMenu.addEventListener("click", function () {
        const menuAberto = menuLinks.classList.toggle("ativo");

        botaoMenu.setAttribute("aria-expanded", menuAberto);
        botaoMenu.setAttribute(
            "aria-label",
            menuAberto ? "Fechar menu" : "Abrir menu"
        );
    });

/* Fecha o menu quando clica em um link no celular */
    menuLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {
            menuLinks.classList.remove("ativo");
            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.setAttribute("aria-label", "Abrir menu");
        });

    });

}
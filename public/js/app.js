/*Função para abrir o menu mobile*/
function abrirMenuMobile(){

    const menuMobile = document.getElementById('id-menu-mobile');
    
    menuMobile.classList.add('menu-ativo');
    
}

function fecharMenuMobile(){

    const menuMobile = document.getElementById('id-menu-mobile');
    
    menuMobile.classList.remove('menu-ativo');

}
/*Função para abrir o menu mobile*/
function abrirMenuMobile(){

    const menuMobile = document.getElementById('id-menu-mobile');
    
    menuMobile.classList.add('menu-ativo');
    
}

function fecharMenuMobile(){

    const menuMobile = document.getElementById('id-menu-mobile');
    
    menuMobile.classList.remove('menu-ativo');

}

function menuPagina(){
    document.getElementById('cabecalho').innerHTML = '<nav id="menu">'+
                '<div id="itens-desktop">'+
                    '<a id="logo-site" href="index.html"><img id="logo" src="../img/logo_all_universo.png" alt="log al universo"></a>'+
                    '<div id="lista-menu-desktop">'+
                        '<ul id="menu-desktop">'+
                            '<li class="itens-lista-desktop">'+
                                '<a class="paginas" href="categorias.html">CATEGORIAS</a>'+
                            '</li>'+
                            '<li class="itens-lista-desktop">'+
                                '<a class="paginas" href="sobre.html">SOBRE</a>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
                '<div id="itens-mobile">'+
                    '<img onclick="abrirMenuMobile()" id="open-menu-lista" src="../img/icon_menu.png" alt="icone de menu">'+
                    '<ul class="menu-mobile" id="id-menu-mobile" >'+
                        '<li onclick="fecharMenuMobile()" id="close-menu-lista">'+
                            '<img id="img-close-menu" src="../img/icon_x.png" alt="icone de menu">'+
                        '</li>'+
                        '<li class="itens-lista-mobile">'+
                            '<a class="paginas" href="categorias.html">CATEGORIAS</a>'+
                        '</li>'+
                        '<li class="itens-lista-mobile">'+
                            '<a class="paginas" href="sobre.html">SOBRE123</a>'+
                        '</li>'+
                    '</ul>'+
                '</div>'+
            '</nav>';

}
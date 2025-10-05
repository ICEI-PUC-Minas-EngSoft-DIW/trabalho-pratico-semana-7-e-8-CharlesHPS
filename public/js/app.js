/*Dados a serem usados*/

let conteudo = [
    {"id": 1, "titulo": "Antes do Universo", "resumo": "Antes de entender como tudo começou, entenda como era antes! Viaje no universo de prótons, nêutrons, entre outras partículas!"},
    {"id": 2, "titulo": "O Big Bang", "resumo": "Não foi uma explosão, mas o nascimento do tempo. Descubra o que realmente aconteceu no primeiro microssegundo e como a expansão do cosmos moldou tudo o que você vê. O início de tudo é mais estranho do que parece."},
    {"id": 3, "titulo": "Buraco Negro", "resumo": "Eles são os devoradores silenciosos do cosmos. O que acontece com a matéria que cruza o ponto sem retorno? Desvende o enigma da gravidade extrema e dos segredos que a luz não pode revelar."},
    {"id": 4, "titulo": "Via Láctea", "resumo": "Nossa casa é um caos organizado de 200 bilhões de estrelas, mas você conhece o gigante no centro? Explore a majestade da nossa galáxia e o buraco negro que comanda sua dança."},
    {"id": 5, "titulo": "Estrelas", "resumo": "São as fornalhas que criaram todos os elementos do seu corpo. Como elas nascem, vivem e morrem de formas espetaculares? Entenda por que somos, literalmente, poeira estelar."}
]


/*Função para abrir o menu mobile*/
function abrirMenuMobile(){

    const menuMobile = document.getElementById('id-menu-mobile');
    
    menuMobile.classList.add('menu-ativo');
    
}

/*Função para fechar o menu mobile*/
function fecharMenuMobile(){

    const menuMobile = document.getElementById('id-menu-mobile');
    
    menuMobile.classList.remove('menu-ativo');

}
/*Função para exibir o cabeçalho em todas as paginas e reutilizar o codigo*/

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
                        '<li id="close-menu-lista">'+
                            '<img onclick="fecharMenuMobile()" id="img-close-menu" src="../img/icon_x.png" alt="icone de menu">'+
                        '</li>'+
                        '<li class="itens-lista-mobile">'+
                            '<a class="paginas" href="categorias.html">CATEGORIAS</a>'+
                        '</li>'+
                        '<li class="itens-lista-mobile">'+
                            '<a class="paginas" href="sobre.html">SOBRE</a>'+
                        '</li>'+
                    '</ul>'+
                '</div>'+
            '</nav>';

}

/*Função para exibir conteudo de acordo com o item que foi clicado*/ 
function exibirConteudo(paginaAtual){

    window.location.href = 'conteudo.html';

    if (paginaAtual == conte1){

    } else if (paginaAtual == conte2) {

    } else if (paginaAtual == conte3) {

    } else if (paginaAtual == conte4) {

    } else if (paginaAtual == conte5) {

    } else {

        error

    }

}
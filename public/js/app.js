/*Dados a serem usados*/

let resumo = [
    {"id": 1, "titulo": "Antes do Universo", "imagem": "../img/img_antes_universo.png", "resumo": "Antes de entender como tudo começou, entenda como era antes! Viaje no universo de prótons, nêutrons, entre outras partículas!"},
    {"id": 2, "titulo": "O Big Bang", "imagem": "../img/img_big_bang.png", "resumo": "Não foi uma explosão, mas o nascimento do tempo. Descubra o que realmente aconteceu no primeiro microssegundo e como a expansão do cosmos moldou tudo o que você vê. O início de tudo é mais estranho do que parece."},
    {"id": 3, "titulo": "Buraco Negro", "imagem": "../img/img_buraco_negro.png", "resumo": "Eles são os devoradores silenciosos do cosmos. O que acontece com a matéria que cruza o ponto sem retorno? Desvende o enigma da gravidade extrema e dos segredos que a luz não pode revelar."},
    {"id": 4, "titulo": "Via Láctea", "imagem": "../img/img_via_lactea.png", "resumo": "Nossa casa é um caos organizado de 200 bilhões de estrelas, mas você conhece o gigante no centro? Explore a majestade da nossa galáxia e o buraco negro que comanda sua dança."},
    {"id": 5, "titulo": "Estrelas", "imagem": "../img/img_estrela.png", "resumo": "São as fornalhas que criaram todos os elementos do seu corpo. Como elas nascem, vivem e morrem de formas espetaculares? Entenda por que somos, literalmente, poeira estelar."}
]

let conteudo = [
    {"id": 1, "titulo": "Antes do Universo", "conteudo1": "", "conteudo2": "", "conteudo3": "", "conteudo4": ""},
    {"id": 2, "titulo": "O Big Bang", "conteudo1": "", "conteudo2": "", "conteudo3": "", "conteudo4": ""},
    {"id": 3, "titulo": "Buraco Negro", "conteudo1": "", "conteudo2": "", "conteudo3": "", "conteudo4": ""},
    {"id": 4, "titulo": "Via Láctea", "conteudo1": "", "conteudo2": "", "conteudo3": "", "conteudo4": ""},
    {"id": 5, "titulo": "Estrelas", "conteudo1": "", "conteudo2": "", "conteudo3": "", "conteudo4": ""}
]

/* Função para imprimir dados na tela inicial/index */
function carregarDadosIndex(){
    let assuntos = document.getElementById('assuntos');
    let dadosAssuntos = ''; 

    for(let i = 0; i < resumo.length; i++){
        let titulo = resumo[i]; 
        let idCarregar = titulo.id;
        let imagemCarregar = titulo.imagem;
        let tituloCarregar = titulo.titulo;
        let resumoCarregar = titulo.resumo;
        dadosAssuntos +=  '<div class="itens-assuntos">'+
                    '<img class="img-assuntos" src="'+ imagemCarregar+'" alt="imagem representativa do inicio do universo">'+
                    '<h2 class="titulo-assuntos cor-branco">'+                       
                        tituloCarregar +
                    '</h2>'+
                    '<p class="texto-assuntos cor-branco">'+
                        resumoCarregar +
                    '</p>'+
                    '<button onclick="exibirConteudo('+ idCarregar +')" class="botao-assuntos">'+
                        'Ler mais'+
                    '</button>'+
                '</div>';   
    }

    assuntos.innerHTML = dadosAssuntos;
}

/*Função para exibir conteudo de acordo com o item que foi clicado*/ 
function exibirConteudo(paginaAtual){
    /* redireciona para a pagina solicitada */
    window.location.href = 'conteudo.html';

    let assuntos = document.getElementById('');
    let dadosEnviar = '';


    for(let i = 0; i < conteudo.length; i++){
        let dadoConteudo = conteudo[i];
        let idCarregar = dadoConteudo.id;
        let tituloCarregar = dadoConteudo.titulo;
        let conteudo1Carregar = dadoConteudo.conteudo1;
        let conteudo2Carregar = dadoConteudo.conteudo2;
        let conteudo3Carregar = dadoConteudo.conteudo3;
        let conteudo4Carregar = dadoConteudo.conteudo4;
        
        if (paginaAtual == conte1){

        } 
    }


}

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


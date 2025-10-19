/*Dados a serem usados*/

let resumo = [
    {
        "id": 0, 
        "titulo": "Antes do Universo", 
        "imagem": "../img/img_antes_universo.png", 
        "resumo": `Antes de entender como tudo começou, entenda como era antes! Viaje no universo de prótons, nêutrons, entre outras partículas!`
    },
    {
        "id": 1, 
        "titulo": "O Big Bang", 
        "imagem": "../img/img_big_bang.png", 
        "resumo": `Não foi uma explosão, mas o nascimento do tempo. Descubra o que realmente aconteceu no primeiro microssegundo e como a expansão 
        "do cosmos moldou tudo o que você vê. O início de tudo é mais estranho do que parece.`
    },
    {
        "id": 2, 
        "titulo": "Buraco Negro", 
        "imagem": "../img/img_buraco_negro.png", 
        "resumo": `Eles são os devoradores silenciosos do cosmos. O que acontece com a matéria que cruza o ponto sem retorno? Desvende o enigma da 
        "gravidade extrema e dos segredos que a luz não pode revelar.`
    },
    {
        "id": 3, 
        "titulo": "Via Láctea", 
        "imagem": "../img/img_via_lactea.png", 
        "resumo": `Nossa casa é um caos organizado de 200 bilhões de estrelas, mas você conhece o gigante no centro? Explore a majestade da nossa 
        "galáxia e o buraco negro que comanda sua dança.`
    },
    {
        "id": 4, 
        "titulo": "Estrelas", 
        "imagem": "../img/img_estrela.png", 
        "resumo": `São as fornalhas que criaram todos os elementos do seu corpo. Como elas nascem, vivem e morrem de formas espetaculares? Entenda 
        "por que somos, literalmente, poeira estelar.`
    }
]

let conteudo = [
    {
        "id": 0, 
        "titulo": "Antes do Universo", 
        "tituloConteudo1": "O Big Bounce (Grande Salto)",
        "conteudo1": `O modelo do Big Bounce propõe uma alternativa fascinante à singularidade do Big Bang,
            sugerindo que o nosso universo não é o primeiro, mas sim o resultado do colapso e do renascimento 
            de um universo anterior. Sob essa teoria cíclica, o universo passa por fases intermináveis de expansão 
            e contração. Em vez de terminar em uma singularidade destrutiva, as forças da Gravidade Quântica em Loop 
            (LQG) impediriam o colapso total, revertendo-o em um novo Big Bang – o 'salto'. Essa ideia resolve 
            elegantemente o problema do que havia 'antes', pois o universo que nos precedeu seria o universo anterior 
            em colapso. O Big Bounce implica que a história cósmica é eterna e sem começo nem fim, apenas ciclos de 
            nascimento e morte. Os cientistas procuram evidências desse universo anterior através de 'cicatrizes' ou 
            padrões que poderiam ter sido impressos na Radiação Cósmica de Fundo (CMB) no momento do salto.`, 
        "tituloConteudo2": "O Vazio Quântico e a Criação",
        "conteudo2": `A Cosmologia Quântica oferece uma explicação para o surgimento do universo a partir de um estado 
            conhecido como vazio quântico. Este não é o 'nada' que imaginamos, mas sim um estado de potencial extremo, 
            regido pela mecânica quântica, onde partículas virtuais surgem e desaparecem em flutuações constantes. 
            O nascimento do nosso universo, ou o Big Bang, teria sido o resultado de uma dessas flutuações que, por 
            algum motivo desconhecido, adquiriu energia suficiente para iniciar a vasta expansão que criou nosso cosmos. 
            Essa flutuação representa a própria origem do espaço e do tempo a partir de um estado atemporal. O vazio quântico 
            sugere que o universo poderia ter surgido espontaneamente, sem uma causa externa tradicional, seguindo as leis da 
            probabilidade quântica. É um conceito que coloca a fundação da realidade no reino da incerteza, propondo que nosso 
            universo é apenas uma manifestação, entre infinitas possibilidades, de um estado fundamentalmente caótico.`
    },
    {
        "id": 1, 
        "titulo": "O Big Bang", 
        "tituloConteudo1": "A Inflação Cósmica",
        "conteudo1": `A Inflação Cósmica é uma fase de expansão ultra-rápida do universo que ocorreu em uma fração de segundo 
            logo após o Big Bang. Essa expansão exponencial resolve problemas cruciais da teoria padrão, como a uniformidade da 
            Radiação Cósmica de Fundo (CMB) e a planicidade do universo. Durante a Inflação, o espaço se esticou muito mais rápido 
            que a velocidade da luz, homogeneizando o universo antes que as flutuações de temperatura pudessem se estabelecer. 
            O mecanismo por trás da Inflação é um campo de energia hipotético chamado campo de inflatão. Quando este campo atingiu 
            um estado de energia mínimo, ele liberou toda essa energia, superaquecendo o universo e dando início à fase de expansão 
            mais lenta que observamos hoje. As minúsculas flutuações quânticas que existiam durante essa época inflacionária foram 
            esticadas para o tamanho de galáxias, tornando-se as sementes que, através da gravidade, formaram toda a estrutura cósmica 
            atual.`, 
        "tituloConteudo2": "A Radiação Cósmica de Fundo (CMB)",
        "conteudo2": `A Radiação Cósmica de Fundo (CMB) é a evidência mais robusta do Big Bang, sendo o brilho remanescente da primeira 
            luz liberada no universo, cerca de 380.000 anos após o seu início. Neste ponto, o universo tinha esfriado o suficiente para que os 
            elétrons se combinassem com os prótons e nêutrons, formando os primeiros átomos neutros. Este evento, conhecido como recombinação, 
            tornou o cosmos transparente, e a luz liberada naquele momento pode ser detectada hoje como um ruído de micro-ondas em todas as direções. 
            A CMB é notavelmente uniforme, mas contém variações de temperatura minúsculas (medidas em milionésimos de grau) que representam as regiões 
            ligeiramente mais densas e menos densas do universo primordial. Essas variações minúsculas são os pontos de partida das grandes estruturas 
            cósmicas: as regiões mais densas eventualmente agiram como sementes gravitacionais para formar as primeiras galáxias e os aglomerados de galáxias.`
    },
    {
        "id": 2, 
        "titulo": "Buraco Negro", 
        "tituloConteudo1": "O Horizonte de Eventos e a Singularidade",
        "conteudo1": `O Horizonte de Eventos é a fronteira crucial de um buraco negro e o ponto de não retorno. É a região onde a velocidade 
            de escape excede a velocidade da luz. Qualquer matéria, radiação ou até mesmo a luz que cruze esse limite está irremediavelmente 
            destinada a cair na singularidade. Para um observador externo, o tempo de um objeto que se aproxima do horizonte parecerá desacelerar 
            infinitamente devido à extrema distorção do espaço-tempo. No centro do buraco negro está a singularidade, um ponto de densidade e gravidade 
            infinitas. Este é o local onde, de acordo com a Relatividade Geral, toda a massa do objeto colapsado se concentra. A singularidade representa 
            um limite para o nosso conhecimento, pois as leis conhecidas da física se rompem nesse ponto. A física moderna busca uma teoria da Gravidade 
            Quântica para descrever o que realmente acontece nesse núcleo de densidade extrema.`, 
        "tituloConteudo2": "Buracos Negros Supermassivos (BSM)",
        "conteudo2": `Os Buracos Negros Supermassivos (BSMs) são a força motriz no coração das grandes galáxias, possuindo massas que variam de milhões a 
            bilhões de vezes a massa do Sol. Acredita-se que praticamente todas as galáxias, incluindo a nossa Via Láctea com seu BSM, Sagittarius A*, abriguem 
            um desses gigantes. A origem desses BSMs ainda é um mistério, mas eles desempenham um papel fundamental na evolução galáctica, controlando a formação 
            de estrelas e a distribuição de matéria em toda a galáxia. Quando um BSM está ativamente consumindo matéria, ele forma um disco de acreção brilhante e 
            pode ejetar jatos de energia a velocidades próximas à da luz, classificando a galáxia como um Quasar ou um Núcleo Galáctico Ativo (AGN). A relação entre 
            a massa do BSM e a massa da sua galáxia hospedeira é surpreendentemente proporcional, sugerindo que o buraco negro e a galáxia evoluíram em conjunto, em 
            um complexo e ainda pouco compreendido balé cósmico.`
    },
    {
        "id": 3, 
        "titulo": "Via Láctea", 
        "tituloConteudo1": "A Estrutura e os Braços Espirais",
        "conteudo1": `A Via Láctea é classificada como uma galáxia espiral barrada, o que significa que seu núcleo é atravessado por uma grande estrutura em 
            forma de barra de estrelas, gás e poeira, da qual se estendem os braços espirais. Esses braços (como Persus e Sagitário) não são estruturas estáticas, 
            mas sim ondas de densidade que se movem ao redor do centro. À medida que o gás e a poeira cósmica entram nessas ondas, a compressão do material desencadeia 
            a formação de novas estrelas. O nosso Sistema Solar reside no Braço de Órion, uma região menor e intermediária entre os braços principais. O mapeamento 
            preciso da Via Láctea é notoriamente difícil porque estamos inseridos nela, e grande parte do disco galáctico está obscurecido pela poeira e pelo gás 
            interestelar. A estrutura da barra central da Via Láctea é crucial para canalizar gás para o núcleo, alimentando a formação de estrelas e, ocasionalmente, 
            o buraco negro central.`, 
        "tituloConteudo2": "O Destino Galáctico: Andrômeda e o Milkomeda",
        "conteudo2": `A Via Láctea não está sozinha; ela é o segundo maior membro do nosso Grupo Local de galáxias. No entanto, o seu destino final não é a solidão, 
            mas sim uma colisão inevitável com a maior galáxia vizinha, Andrômeda. As duas galáxias estão atualmente se aproximando a uma velocidade de cerca de 110 
            quilômetros por segundo, e a colisão está prevista para ocorrer daqui a aproximadamente 4,5 bilhões de anos. O resultado não será uma destruição, mas sim 
            uma fusão galáctica monumental. Estrelas são separadas por vastas distâncias, o que significa que as colisões estelares diretas serão raras. Em vez disso, 
            as duas galáxias se entrelaçarão, e os seus buracos negros supermassivos centrais se unirão, formando uma nova e gigante galáxia elíptica que já ganhou o 
            apelido popular de Milkomeda. Este evento dramático reconfigurará completamente a nossa vizinhança cósmica.`
    },
    {
        "id": 4, 
        "titulo": "Estrelas", 
        "tituloConteudo1":"A Formação e as Nebulosas",
        "conteudo1": `As estrelas nascem em vastas e frias nuvens de gás e poeira conhecidas como nebulosas. Essas regiões, como a famosa Nebulosa de Órion, 
            são os berçários estelares do universo. Dentro dessas nuvens, a gravidade começa a puxar aglomerados de material, causando o colapso do gás sob seu 
            próprio peso. À medida que o gás colapsa, ele se aquece intensamente, formando um estágio preliminar conhecido como protoestrela. Se a massa da protoestrela 
            for suficiente, a pressão e a temperatura em seu núcleo atingirão o ponto crítico para iniciar a fusão nuclear do hidrogênio em hélio. Neste momento, a estrela 
            'acende', entrando na fase da Sequência Principal, onde passa a maior parte de sua vida em um equilíbrio estável entre a força da gravidade que tenta colapsá-la e 
            a pressão da radiação interna que tenta expandi-la.`, 
        "tituloConteudo2": "As Supernovas e a Reciclagem de Elementos",
        "conteudo2": `As Supernovas representam o fim espetacular e violento da vida das estrelas mais massivas, sendo o evento mais energético do universo. Quando uma 
            estrela massiva esgota seu combustível de fusão nuclear, ela não consegue mais sustentar sua estrutura contra a gravidade. Seu núcleo colapsa em uma fração de 
            segundo, ricocheteando e explodindo as camadas externas da estrela em uma explosão de luz que pode ofuscar galáxias inteiras por um breve período. Essas explosões 
            são cruciais para a existência da vida, pois são o motor de reciclagem cósmica. As supernovas dispersam por todo o espaço interestelar todos os elementos pesados 
            forjados dentro da estrela – incluindo carbono, oxigênio, silício e ferro. Esses elementos se misturam ao gás e à poeira, tornando-se os ingredientes essenciais 
            para a formação de novas gerações de estrelas, planetas rochosos e, o mais importante, dos compostos que nos formam.`
    }
]

//variaveis globais
let pagClicada = 0;

let count = 1;

/* Função para imprimir dados na tela inicial/index */
function carregarDadosIndex(){
    let assunto = document.getElementById('assuntos');
    let dadosAssuntos = ''; 

    for(let i = 0; i < resumo.length; i++){
        let titulo = resumo[i]; 
        let idCarregar = titulo.id;
        let imagemCarregar = titulo.imagem;
        let tituloCarregar = titulo.titulo;
        let resumoCarregar = titulo.resumo;

        dadosAssuntos += `
            <div class="itens-assuntos">
                <img class="img-assuntos" src="${imagemCarregar}" alt="imagem representativa do inicio do universo">
                <h2 class="titulo-assuntos cor-branco">                   
                    ${tituloCarregar}
                </h2>
                <p class="texto-assuntos cor-branco">
                    ${resumoCarregar} 
                </p>
                <button onclick="exibirConteudo(${idCarregar})" class="botao-assuntos">
                    Ler mais
                </button>
            </div>`;   
    }

    assunto.innerHTML = dadosAssuntos;
}

/*Função para exibir conteudo de acordo com o item que foi clicado*/ 
function exibirConteudo(pagClicada) {
    console.log("Página clicada:", pagClicada);

    // Acesso aos dados 
    // Guardando o json de conteudo em dadoConteudo
    let dadoConteudo = conteudo[pagClicada];
    let dadoResumo = resumo[pagClicada];
    
    // Verificação de segurança: Se os dados não existirem mostra erro.
    if (!dadoConteudo) {
        console.error("Conteúdo não encontrado para a chave:", pagClicada);
        return; 
    }
    let imgCarregar = dadoResumo.imagem;
    let resumoCarregar = dadoResumo.resumo;
    let tituloCarregar = dadoConteudo.titulo;
    let tituloConteudo1Carregar = dadoConteudo.tituloConteudo1;
    let conteudo1Carregar = dadoConteudo.conteudo1;
    let tituloConteudo2Carregar = dadoConteudo.tituloConteudo2;
    let conteudo2Carregar = dadoConteudo.conteudo2;

    // Geração da string HTML (dadosEnviar)
    let dadosEnviar = `
        <div id="apresentacao">
            <img id="img-inicio" src="${imgCarregar}" alt="Imagem de ${tituloCarregar}">
            <div id="container-resumo-conteudo">
                <h1 id="titulo-inicio-conteudo" class="titulo-inicio-conteudo cor-branco">${tituloCarregar}</h1>
                <p id="resumo-conteudo" class="cor-branco"> ${resumoCarregar} </p>
            </div>
        </div>
        
        <div id="temas">
            <div class="divisao-paragrafos">
                <div id="conteudo-1" class="conteudo-1">
                    <h2 id="titulo-temas-1" class="titulo-paragrafos cor-azul-claro">${tituloConteudo1Carregar}</h2>
                    <p id="paragrafo-1" class="paragrafo cor-branco">${conteudo1Carregar}</p>
                </div>
            </div>
            <div class="divisao-paragrafos">
                <div id="conteudo-2" class="conteudo-2">
                    <h2 id="titulo-temas-2" class="titulo-paragrafos cor-azul-claro">${tituloConteudo2Carregar}</h2>
                    <p id="paragrafo-2" class="paragrafo cor-branco">${conteudo2Carregar}</p>
                </div>
            </div>
        </div>`;

    // ARMAZENAR NO localStorage antes do redirecionamento
    // A chave 'conteudoParaExibir' será usada para recuperar os dados em conteudo.html
    localStorage.setItem('conteudoParaExibir', dadosEnviar);

    // Redirecionamento para a página de conteúdo
    window.location.href = 'conteudo.html';
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
    document.getElementById('cabecalho').innerHTML = `
        <nav id="menu">
            <div id="itens-desktop">
                <a id="logo-site" href="index.html"><img id="logo" src="../img/logo_all_universo.png" alt="log al universo"></a>
                <div id="lista-menu-desktop">
                    <ul id="menu-desktop">
                        <li class="itens-lista-desktop">
                            <a class="paginas" href="sobre.html">SOBRE</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="itens-mobile">
                <img onclick="abrirMenuMobile()" id="open-menu-lista" src="../img/icon_menu.png" alt="icone de menu">
                <ul class="menu-mobile" id="id-menu-mobile" >
                    <li id="close-menu-lista">
                        <img onclick="fecharMenuMobile()" id="img-close-menu" src="../img/icon_x.png" alt="icone de menu">
                    </li>
                    <li class="itens-lista-mobile">
                        <a class="paginas" href="sobre.html">SOBRE</a>
                    </li>
                </ul>
            </div>
        </nav>`;

}

// função que muda altomaticamente os slides da pagina index
function proximaimg(){
    count++;
    if(count>5){
        count = 1;
    }

    document.getElementById("radio-"+ count).checked = true;
}

setInterval( function(){
    proximaimg();
}, 4000);

document.addEventListener('DOMContentLoaded', (event) => {
    // 1. Tenta recuperar o conteúdo armazenado
    const conteudoHTML = localStorage.getItem('conteudoParaExibir');
    const mainConteudo = document.getElementById('conteudo-pag');

    if (conteudoHTML && mainConteudo) {
        // 2. Injeta o HTML recuperado no elemento principal
        mainConteudo.innerHTML = conteudoHTML;

        // 3. Opcional: Limpa o localStorage para que o conteúdo não persista em outras navegações
        localStorage.removeItem('conteudoParaExibir');
    } else if (mainConteudo) {
        // Exibe uma mensagem de erro ou redireciona de volta se o conteúdo não for encontrado
        mainConteudo.innerHTML = '<h1>Erro: Conteúdo não carregado.</h1>';
        console.error('Conteúdo não encontrado no localStorage ou elemento main-conteudo ausente.');
    }
});

window.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('slide-1').addEventListener('click', function(){
        exibirConteudo(0);
    });

    document.getElementById('slide-2').addEventListener('click', function(){
        exibirConteudo(1);
    });

    document.getElementById('slide-3').addEventListener('click', function(){
        exibirConteudo(2);
    });

    document.getElementById('slide-4').addEventListener('click', function(){
        exibirConteudo(3);
    });

    document.getElementById('slide-5').addEventListener('click', function(){
        exibirConteudo(4);
    });

});

document.getElementById("radio-1").checked = true;

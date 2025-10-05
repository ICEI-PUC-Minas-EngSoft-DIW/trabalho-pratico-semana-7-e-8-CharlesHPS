# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Charles Henrique de Paula Santos
- Matricula: 901364
- Proposta de projeto escolhida: Blog sobre universo
- Breve descrição sobre seu projeto: Criação de um blog com informaçoes e cuiriosidades sobre o universo.

## Print da Home-Page

![imagem da pagina principal](/public/img/home-page.PNG)

## Print da página de detalhes do item

<<  COLOQUE A IMAGEM AQUI >>

## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
let resumo = [
    {"id": 1, "titulo": "Antes do Universo", "imagem": "../img/img_antes_universo.png", "resumo": "Antes de entender como tudo começou, entenda como era antes! Viaje no universo de prótons, nêutrons, entre outras partículas!"},
    {"id": 2, "titulo": "O Big Bang", "imagem": "../img/img_big_bang.png", "resumo": "Não foi uma explosão, mas o nascimento do tempo. Descubra o que realmente aconteceu no primeiro microssegundo e como a expansão do cosmos moldou tudo o que você vê. O início de tudo é mais estranho do que parece."},
    {"id": 3, "titulo": "Buraco Negro", "imagem": "../img/img_buraco_negro.png", "resumo": "Eles são os devoradores silenciosos do cosmos. O que acontece com a matéria que cruza o ponto sem retorno? Desvende o enigma da gravidade extrema e dos segredos que a luz não pode revelar."},
    {"id": 4, "titulo": "Via Láctea", "imagem": "../img/img_via_lactea.png", "resumo": "Nossa casa é um caos organizado de 200 bilhões de estrelas, mas você conhece o gigante no centro? Explore a majestade da nossa galáxia e o buraco negro que comanda sua dança."},
    {"id": 5, "titulo": "Estrelas", "imagem": "../img/img_estrela.png", "resumo": "São as fornalhas que criaram todos os elementos do seu corpo. Como elas nascem, vivem e morrem de formas espetaculares? Entenda por que somos, literalmente, poeira estelar."}
]
```
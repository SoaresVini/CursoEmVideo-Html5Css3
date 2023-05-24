==================Inicio do CSS=====================

CSS - Cascading Style Sheet, ou Folha de Estilo em Cascatas

Css linguagem de estilização

Estilo inline - na mesma linha do HTMl - não é muito utlizado por nãoser pratico e dificultar a manutenção

Estilo Internos - no mesmo documento, porem é declarado na teg Style dentro do head e fica separado das tags HTML - mais pratico - melhor manutenção

Ter que repitir em outras telas, caso tenha q usar o mesmo estilo, as informações ficam no final do documento e vc é obrigado a passar por toda a CSS até chegar nele.

Estilos externos - Arquivo separado no HTML - e possui as Mesmas qualidades do Interno e corrigi seus "problemas" 

Posso usar mais de um arquivo Css no mesmo projeto

Muito mais versátil



Aula 01 
-------Psicologia das Cores---------

A cor influencia do tempo o qual o usuario vai utilzar o site 

se vai voltar a usar ou não

Cores passam emoções 

As pessoas sem pensar decidem se algo é bonito ou não,  e normalmente isso é por conta das cores

Empresas de tecnologia normalmente usam o Azul(Cor mais aceita do mundo/menor taxa de rejeição)

Exemplos de sites que usam um padrão de cores para fazer o cliente gostar e se sentir bem 

Intel 
HP
Facebook 
com o Azul que remete Copetencia, sabedoria, calma, frio

Ifood e o m

Com o vermelho que remete a comida e o amarelo a felicidade


Verde é menor utilizado 

MonoCromatico - tons da mesma cor 


Aula 02

------por cores-----

Representação por nome das cores é muito limitada 

decimal - 0 1 2 3 4 5 6 7 8 9
Representação Hexadecimal - 0 1 2 3 4 5 6 7 8 9 A B C D E F 

6 digitos 

cada cor tem um codido de 0 a 255

RGB 
(r,g,b)

RGBA - adiciona transparencia 

A - Alpha

HSLA - hue, sturation, luminosity
Matriz, saturação e luminosidade 

HSLA - adiciona transparencia 

A questão da qualidade, muda dependendo do tipo ultilzado ?

Aula 03

Círculo cromatico 

12 cores principais 

Harmonização

Cores primarias - secndafria e terciarias

Cores quentes se combinam entre si e as frias tambem 

palheta tem de 3 a 5 cores - sme contar preto e branco 

palheta baseada na cor primaria da logo 

cores complementares - cor que fica do outro lado do circulo cromatico 

Cores analogas - sem contraste - as vizinhas 


juntar as duas - forma uma palheta 


Cores analogas relacionadas - uma cor do lado da outra e depois pula uma 

Cores intercaladas - uma cor principal - pula uma - pega a cor - pula uma - pega cor 


Cores triádicas - cor principal - pula três - pega cor - pula três - pega cor

Cores em Quadrado - cor principal - pula duas - pega cor - pula duas - pega cor - pula duas - pega cor

cores tetradicas - duas principais e o contrario do circulo 

formar as palhetas dessa forma 


Aula 4

background-image: Gradiente - adiciona a direção com o numero+ deg ou to + direção + color 

Após a cor, pode ser adicionado uma porcentagem de quanto aquela cor vai representar no espaço a qual foi estipulada


CSS 

Declarações - propiedades e valores

background-attachment: fixed; - não permite o site desser na barra de rolagem

background-color: color ; difine a cor de fundo, seja do site ou de um box

color : color ; define a cor de um texto

border-radius: 10px; arredonda a borda de um elemento

border: px solid color ; espessura tipo e cor da borda de um item

bordar com IMAGENS:

border: 20px solid transparent;
border-image-source: url(/Img/borda.png); - Link da imagens
border-image-slice: 60; - Tamanho
border-image-repeat:repeat ; 

border-image-source: url(/Img/borda.png) 60 repeat;

box-shadow: 5px 5px 15px rgba(67, 36, 92, 0.637); De os px direita ou esquerda + para baixo e o espalhamento + alcanse+color para difinição de uma sobra 

se adicionar o inset,  a sobre fica interna

padding: 10px; - distancia para a borda da box 

margin: auto; - margin entre os componentes 
auto centraliza

width - heigth - tamanho

Tag HTML

main - div especial que fala que esse é meu codigo principal


Tipografia-----------------

monges copistas que escreviam livros

Gutenberg - prensa mecanica de tipos moveis - desenhos das letras 

Estudo de escrever coisas em telas/papeis

desenho de letras 

Letras passam sentimentos igual as cores 

Aula 6 - Tipografia - PULEI

Fontes ----------------------

font-family: - font do Site

Vai tentar aplicar umas das 3 fontes passadas no CSS

Se deixar só serif vai aplicar um a fonte aleatoria com serifa 

e deixar só sans-serif vai aplicar uma fonte aleatoria sans-serif

Medidas Absolutas de fontes:
cm, mm, in, px, pt, pc

Medidas Relativas:
em, ex, rem, vw, vh, %

px, em - são as recomendadas

16px - tamanho padrão = 1em

Usar "em" é melhor 

Algumas fontes não possuem isso 

font-weight: ; peso das fontes : tem numeração de 100 a 900 lighetr normal bold bolder 

font-Style ; italic ou normal 

font-decoraction - tira algum fru fru da tag ou adiciona, tipo o traço por baixo do link 

shorthand font
    
font-style: font-weight: font-size: font-family:

Impor de fontes diferente sdireto pelo Google, usando o Google fonts

O import e feito logo no começo do style e não pode estar em um seletor

usar entre 3 á 4 fontes

 @font-face {
            font-family: ;
            src: url("Filxgirl.TTF") format(truetype);
        }

importador por fora do google fontes tem que fazer o donwload e tem varios tipos

opentype - otf
truetype - ttf
embedded-opentype
truetype-aat(Apple Advanced Typography)
svg

tem como pegar fontes por imagens caso eu precise

font-family: - font do Site

Vai tentar aplicar umas das 3 fontes passadas no CSS

text-shadow: rgba(131, 88, 19, 0.698); - sombra d eum texto

text-align: center; alinhamento de texto 

text-indent: 20px; - espaço antes de começar o texto

------------------
seletores 

* seletor Global 

HTML Tag - CSS Tag
HTML Class - CSS .   (sobrepõe tag)
HTML id - CSS #      (sobrepõe class/Tag)


Diferença entre id e Class

id eu só posso usar em uma tag d documento, se dor em mais eu uso um class

Ordem :
Tag 
Class
Id

Pseudo Classes  : 

Estado da tag

ex. hover - passa o mouse por cima
ex. visited - modo como o link vai ficra após ser visitado
ex.  active - quando a um click

> pai de outra tag 

Pseudo elementos ::

mexe no conteudo dos elementos

before - antes do elemneto 

after - depois do elemneto 


____________procura mais depois_____________

Ajudinha:

tag+*quantas vc precisar + .(Class) ou #(id) + >  outra tag que fique por dentro + {Conteudo}


Modelo de Caixas

Os elementos HTMl são varias caixas e essas caixas podem ter outras dentro - aninhamento 

Elementos da caixa : 

height - altura 
Width  - largura
border - borda 
padding  - espaço que afasta a borda do conteudo - preenchimento acolchoamento
margin - espaço entre conteudos 
outline - traçado ao redor da borda

Caixas do tipo Box 

Sempre uma linha nova
largura total da tela 


Caixas do tipo Inline 

- span

vai ir para o lado 
não quebra linha 
usa o espaço que precisa
e continua do lado, não importa onde a linha esteja


CSS

border px forma color 

pontilhada, solida e dupla

padding: top rigth botton left 

da o espaço em todos os lados ou deixar para um ou outro caso for melhro

margin: top rigth botton left 

da o espaço em todos os lados entre os conteudos

Quando botar dois valores o primeiro é de cima/baixo e o segundo para direita/esquerda

margin: auto - centraliza

outline - px forma color 
borda da borda

__________Groupin Tags________

div - caixo do tipo box level 

Span - inline level

Divs semanticas

Sem ordem expecifica, posso usar qualquer tag dentro de outra sempre q eu precisar



header - cabeçalho
    nav - links

main - Conteudo

section - seçoes - partes de um documento 

article - artigos - conteudo que não precisa de outro para fazer sentido

aside - superficial relacionado ao conteudo do seu entorno, ma spoderia ser considerado sperado do conteudo

usado em explicações laterais, como a definição de um glossário; conteúdo vagamente relacionado, como avisos; a biografia do autor; ou, em aplicações web, informações de perfil ou links de blogs relacionados.


footer - Rodapé




















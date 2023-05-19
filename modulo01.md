
Vídeo introdutório do módulo 01


5 Primeiras aulas - O que vai ser passado no curso e como vai funcionar as aulas


6- Surgimento da internet


- Guerra fria


DARPA - Agência de inovação tecnológica militar


DARPA - Desenvolve a ARPANET - com 4 Computadores - Computadores de marcas diferentes nao se comunicavam


- Protocolo NCP , uma linguagem para que os 4 computadores podessem conversar


- Rede começou a crescer e foi criado o TCP/IP


- Comunicação e identificação


- ARPANET se dividiu em 3 - Milnet, NSFNET, Comercial


- para se comunicar foi criado o INTERNETWORKING para os 3 se comunicarem


- abreviado para Internet


Internet = Conjunto de redes de computadores mundial


Uma solicitação de uma imagem é quebrada pelo protocolo TCP em pacotes e envia para o PC que solicitou, sendo identificado por IP, o TCP do seu PC reformula os pacotes para ficarem corretos


Como a internet era e como ela está hoje


Antigamente todo por terminal por textos


protocolo http


World Wide Web rede dentro da Internet focado em HTTP


7- Como a Internet funciona ?

Transmições de rede feitas pela internet, ainda são em sua maioria por cabos submarinos

O computador funciona em :

Binário = bit - 0 sem sinal e 1 com sinal - onda quadrada
byte - 8 bits - sequência mínima para representar uma determinada informação

Múltiplos de Byte
   1024 Bytes - 1 KB
   1024 KB - 1MB
   1024 MB -  GB
   1024 GB - 1 TB
   .........


maiúsculo - Megabytes - armazenamento
minúsculo - Megabits - Transmissão


Cliente - Rede telefônica ou antena - Modem - Internet - servidor


DNS - cliente solicita uma aplicação e ele devolve o IP do servidor que o cliente solicitou .

Segue a rota mais rápida e menos congestionada e cada parte do pacote pode ir por um caminho diferente

Cliente servidor

8- O que é domínio e hospedagem ?

Quando está hospedado em um servidor hospedado na internet todos os computadores podem acessá-lo


se não, somente quem tem acesso a maquina conseguem


Domínio - Nome do site


Hospedagem - Local onde fica armazenado os arquivos


Partes de uma URL


GitHub - Domínio
TLD


.Alguma - GTLD
.br - CTLD


www - sub domínio principal


/..... - caminho

9- Diferenreça entre HTML, CSS, JS

    HTML - Linguame de marcaçao
    CSS - linguagem de estilo 
    JS - Linguagem de programaçao 


==================Inicio de HTML=====================

Aula 1

    Divisao do documento 

    head - cabeçalho - title - e algumas infos de config

    body - corpo - informaçoes do site

    <h1> T1
    <p> paragrafo
    <hr> Linha

Aula 2

    <br> Pula linha

Entidades/ Codigos

&lt;        &gt; 
Less tahn / Greater Than

Comentario: <!---->

Aula 3

    Existem codigos/entidades para alguns simbolos como: setas,Delta, entre outros.

    Existem codigos para os emojis.
    https://emojipedia.org/pt/pessoas/

Aula 4

    Imagens Gratuitas:
    https://unsplash.com/pt-br
    https://www.pexels.com/pt-br/
    https://br.freepik.com/

    PNG - PERMITE TRANSPARENTE - menor distroçao
    PNG - Portable Network Graphic

    JPEG - COMPACTAÇAO - maior distorçao ao aproximar
    JPEG - Joint Photographic Experts Group

    Cuidar com o tamnho do arquivo 

Aula 5

    - Tamanho de uma imagem 
    
    72  de resoluçao no maximo
    1500 - largura no maximo 
    1000 - altura no maximo

    Quanto menor for a imagem mais leve o site fica, entao cuidar com imagens muito grandes.

Aula 6

    Redimencionando imagens 
    Adicionando o arquivo com <img>

Aula 7

    Favicon - Icone Favorito
    Imagem que aparece do lado do Titulo do site 

    Eu posso usar um .PNG como favicon, mas o melhor e usar o .ico
    
Aula 8 

    Hierarquia de Títulos
    h1 a h6

Aula 9

   Em HTML5 Semantica (Significado)e mais importante que a forma 
   Em CSS vai focar na forma do Site

Aula 10,11,12

    i - italico em forma 
    en - enfase semantica

    b - negrito em forma 
    
    strong - destacar sememantica 
-----------------------------------------------
    mark - marcador amarelo - sem estilização

    Big - N tem significado - pois se precisar mudar o tamanho vai pelo CSS(Obsoleto)

    Small - pode ser usada em contratos que possuem letras, mas no css é melhor

    del - marcado como deletado 
    ins - marcado como inserido

    code - as letras ficam com o mesmo tamanho, e é bom para escrever codigos dentro do HTML

    pre - deixa o texto conforme a identação do texto, bom para usar em codigos tambem ou quando precisa deicar algum textod e uma forma expecifica.

    q - aspas - dando sintido a uma sitação. - sitação simples

    abbr - Da o significado a uma abreviação

    bdo - inverte um texto

Aula 14

    ol - lista ordenada
        type = a,A,1,i,I
   
    ul i lista naõ ordenada
        type = disc,circle,square

    li - linha da lista 

    start - Começo da lista 

    dl - lista de definição
        dt - Termo
        dd - desc
    


    Lista podem ficar dentro de listas 

Aula 15


    link interno/externo - a hrfe

    + download= "nome do arquivo" + type=""

    usar target="" - abrir em outra aba
    _self - no mesmo site
    _blank - abre uam nova janela 

    rel="" - 
    
    next - proxima parte do doc atual
    
    prev - parte anterior do doc atual
    
    author - site do mesmo autor do site atual

    external - link para um site externo

    nofollow - eu nao dou um aval para esse conteudo 

aula 16

    Baixar arquivo

    download="nome do arquivo" 
    type="mida type conforme o arquivo"

aula 17 
   inútil picture - usado para mudar o tamanho da imagem conforme o tamanho da pg - melhor usar CSS

aula 18

    surce - vai pegando os videos que estão no HTML conforme a ordem, para que qualque navegador conseiga acessa-lo

    audio - src 

    preload - auto - só vai carregar depois de ser finalizado

    metada - só informações

    autoplay : auto
    controls

    loop 

    MP3 WAV OGG
        Posso colocar esses 
        outros tipos de surces

   


    Arquivos com qualidades muito boas devem ser deixadas para download, não para navegação

aula 19

Tipos de video:
 MP4
 M4v
 webm
 ogv

 mesmas coisas das imagens + posters qe permite adicionar uma imagem antes do começo do video

 usando a tag Videos - o sistema fica pesado e pode dar ruim por ficar muito caro
 Não é a melhor opção

 Ficar de olho para os navegadores, e adicinar de todos os tipos dierentes de Imagens

 Usar videos externos - Como Youtube, pq assim o video não consome dados do Servidor, mas sim do youtube

 Quando o video é livre da para usar o Youtube, se precisar ser privado tem que hospedar o video em outro local

 Vimeo é o mais completo paar usar nesses casos 


 maior buscador do mundo: Google - Youtube

==================Inicio do CSS=====================

Css linguagem de estilização

Estilo inline - na mesma linha do HTMl - não é muito utlizado por nãoser pratico e dificultar a manutenção

Estilo Internos - no mesmo documento, porem é declarado na teg Style dentro do head e fica separado das tags HTML - mais pratico - melhor manutenção

Ter que repitir em outras telas, caso tenha q usar o mesmo estilo, as informações ficam no final do documento e vc é obrigado a passar por toda a CSS até chegar nele.

Estilos externos - Arquivo separado no HTML - e possui as Mesmas qualidades do Interno e corrigi seus "problemas" 

Posso usar mais de um arquivo Css no mesmo projeto

Muito mais versátil



CSS - Cascading Style Sheet, ou Folha de Estilo em Cascatas



Criador do TCP/IP - Robert Kahn e Vint Cerf
https://www.youtube.com/watch?v=TNQsmPf24go
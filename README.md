# Jogo_da_Forca
<h2>Diagrama de Classes</h2>
<img src="imgs/classe.png" height="600px" width="800px">
<h3>Classe <code>JogoDaForca</code></h3>
<p>A classe <code>JogoDaForca</code> é responsável por gerenciar o estado global do jogo e controlar o progresso. Ela possui os seguintes atributos e métodos:</p>
<ul>
    <li><code>gerarPalavra</code>: Gera uma palavra aleatoria.</li>
    <li><code>letrasUsadas</code>: Armazena todas as palavras usadas pelo jogador.</li>
    <li><code>tentativasRestantes</code>: Armazena quantas partes do boneca ainda tem para desenhar.</li>
    <li><code>maxTentativas</code>: Mostra o maximo de tentativas que o jogador tem.</li>
    <li><code>numeroPalavra</code>: Mostra quantas letras há na palavra.</li>
</ul>
<p>Métodos:</p>
<ul>
    <li><code>iniciarJogo(gerarPalavra)</code>: Inicia o jogo e automaticamente gera uma palavra aleatoria.</li>
    <li><code>tentarLetra()</code>: O jogador chuta uma letra.</li>
    <li><code>verificarLetra()</code>: Verifica se a letra chutada pelo jogador está correta ou errada.</li>
    <li><code>desenharParteBoneco()</code>: Se a letra for errada, irá ser desenhado uma parte de o boneco.</li>
</ul>
<br>
<h3>Classe <code>InterfaceForca</code></h3>
<p>A classe <code>bonecoForca</code> é responsável por controlar o progresso do boneco. Ela possui os seguintes atributos e métodos:</p>
<ul>
    <li><code>partesBoneco</code>: O total de partes que o boneco tem, como o braço, a perna ou a cabeça.</li>
    <li><code>partesIncorretas</code>: Armazena todas as partes que o jogador errou.</li>
    <li><code>coordenadasIncorretas</code>: As coordenadas de desenho do boneco.</li>
</ul>
<p>Métodos:</p>
<ul>
    <li><code>adicionarParteIncorreta</code>: Desenha a parte do boneco após dele ter errado.</li>
    <li><code>desenharCabeça()</code>: Desenha a cabeça do boneco.</li>
    <li><code>desenhaTronco()</code>: Desenha tronco do boneco.</li>
    <li><code>desenharBraçoE()</code>: Desenha braço esquerdo do boneco.</li>
    <li><code>desenharBraçoD()</code>: Desenha braço direito do boneco.</li>
    <li><code>desenharPernaE()</code>: Desenha perna esquerda do boneco.</li>
    <li><code>desenharPernaD()</code>: Desenha perna direita do boneco.</li>
</ul>
<br>
<h3>Classe <code>InterfaceForca</code></h3>
<p>A classe <code>InterfaceForca</code> é responsável por gerenciar o estado do jogo e controlar se o jogo irá reiniciar. Ela possui os seguintes atributos e métodos:</p>
<p>Métodos:</p>
<ul>
    <li><code>atualizarInterface</code>: Atualiza a interface e reinicia o jogo.</li>
</ul>


<br>
<h2>Diagrama de Atividade</h2>
<img src="imgs/atividade.png" height="706px" width="512px">
<h3>Classe <code>JogoDaForca</code></h3>
    <li><code>gerar uma palavra aleatoria</code>: O jogo gera uma palavra aleatoria.</li>
    <li><code>chutar letra</code>: O jogador chuta uma letra.</li>
    <li><code>acrescenta a letra na palavra</code>:Se a letra for correta, é acrescentado a letra na palavra.</li>

<h3>Classe <code>BonecoForca</code></h3>
<ul>
    <li><code>desenhar uma parte do boneco</code>:Se a letra for incorreta, é desenhado uma parte do boneco.</li>
</ul>

<br>
<h2>Diagrama de Casos de Uso</h2>
<img src="imgs/uso.png" height="600px" width="800px">
<p><strong>Nome do caso de uso: </strong>Jogo da Forca;<br>
   <strong>Caso de uso geral: </strong>Adivinhar palavra;<br>
   <strong>Ator principal: </strong>Jogador;<br>
   <strong>Ator secundário: </strong>JComputador;<br>
   <strong>Resumo: </strong>O jogador tem como objetivo acertar a palavra antes de competir o boneco(desenho);<br>
   <strong>Pré-condições: </strong>Se a palavra for completada antes do boneco ser completado, o jogador ganha e o jogo acaba;<br>
   <strong>Pré-condições: </strong>Se o boneco for completada antes do boneco ser completado, o jogador perde e o jogo acaba;<br>
   <strong>Ações do ator: </strong>Ações do sistema do jogo da forca.<br>
</p>

<h2> Ações</h2>
<ol>
  <li>O jogador inicia o jogo;</li>
  <li>O jogo gera uma palavra aleatória;</li>
  <li>O jogador escolhe uma letra aleatória;</li>
  <li>O computador verifica se a letra faz parte da palavra;</li>
  <li>Se sim, o jogador continua o jogo e é registrado a letra na palavra;</li>
  <li>Se não, é desenhado uma parte do boneco e é registrado a letra como usada;</li>
  <li>Se o boneco for completado antes da palavra ser formada, o jogador perde;</li>
  <li>Se a palavra for formada antes do boneco ser completado, o jogador ganha;</li>
  <li>O computador irá verificar as duas alternativas anteriores;</li>
  <li>O jogo acaba.</li>
</ol>
<h3> Restrições</h3>
<ol>
  <li>Para perder o jogo, o jogador deve completar o boneco todo;</li>
  <li>Para ganhar é preciso acertar a palavra antes do boneco ser completado;</li>
  <li>Não vale utilizar numeros ou outros que não sejam letras do alfabeto.</li>
</ol>

<h2>Ordem</h2>
<h3>Ações do Jogador: </h3>
<p>1,2.</p>
<h3>Ações do Jogo: </h3>
<p>3,4,5,6,7,8,9.</p>
</body>




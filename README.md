# 🎵 Spotify Fake Natty 🎵

## 📒 Descrição

O projeto desenvolvido foi um modelo que simula um *Spotify* simplificado, onde foram inseridas músicas criadas por IA. A playlist é pequena e serve apenas para mostrar o potencial que a IA tem no auxílio do desenvolvimento, tanto de recursos criativos, quanto de recursos técnicos. 

## 🤖 Tecnologias Utilizadas

* Chat GPT-4o para criar a página HTML, o .CSS e o arquivo .js.
* DALL-E 3 para criar as imagens das capas.
* Os sites [Suno.ai](https://suno.ai) e [Udio.com](https://udio.com) foram usados.
 para criar as músicas da playlist.

## 🧐 Processo de Criação

Primeiramente, foi pedido ao chat GPT-4o para que criasse um código que gerasse um clone da interface do spotify com 7 músicas e uma playlist. O projeto foi desenvolvido utilizando HTML, CSS e JavaScript. Houveram algumas versões criadas até chegar ao ponto "quase ideal" do que se esperava.
Após isso, as músicas foram criadas usando os sites Suno.ai e Udio.com e logo após a criação, os links das músicas foram inseridos no HTML para que fosse possível reproduzi-los.
Por último, foram feitos ajustes manuais para melhorar substancialmente detalhes ligados a posição de elementos, inserção de palavras, símbolos, imagens e links úteis.

## 🚀 Resultados

Ao final, foi obtida uma interface de usuário com uma playlist de 7 músicas, de diferentes estilos, geradas por IA.

**Estrutura do projeto:**

```
Spotify Fake Natty/
│
├── index.html
├── styles/
│   └── style.css
├── scripts/
│   └── app.js
├── images/
│   ├── cover1.jpg
│   ├── cover2.jpg
│   ├── cover3.jpg
│   ├── cover4.jpg
│   ├── cover5.jpg
│   ├── cover6.jpg
│   ├── cover7.jpg
│   └── profile.jpg
└── README.md
```

## 💭 Reflexão 

Comente sobre o desafio de criar algo 'natty' com IA.
Alguns do principais problemas estavam relacionados a melhora do já tinha sido feito, mesmo apontando qual tinha sido o erro que gerava distorção no layout e em certas ações, o chat GPT gerava mais soluções inválidas. Esses erros precisaram ser corrigidos manualmente para que o projeto ficasse minimamente viável.
Várias tentativas foram necessárias para que as músicas e as imagens também chegassem perto de um resultado viável e compatível com o projeto.
Resumidamente, todas os sites e ferramentas de IA ajudaram bastante e aceleraram o processo de criação, mas o ideal é ter alguma noção do que se está fazendo para que não haja tempo perdido em prompts que serão feitos várias vezes. Às vezes, saber o básico de front já é o suficiente para resolver tudo que se precisa em um projeto assim. 
De todas as formas, criar músicas com IA e poder disponibilizar tudo isso publicamente foi um dos projetos mais divertidos que já fiz, até então. 


## 💡 Futuros desafios para desenvolver o projeto ainda mais:

 ### ⭐ Básico: 

 * No CSS, várias informações estão em px, alterar valores para % pode ajudar na responsividade; 
 * Criar uma forma de organizar as músicas pelo cabeçalho;
 * Adicionar botões e funções para repetir música, playlist e aleatorizar a ordem;
 * Corrigir erros menores que passaram despercebidos.

 ### ⭐⭐ Intermediário:  

 * Criar uma automação para adicionar uma nova música na lista atual, assim que inserida de alguma forma; 
 * Poder criar playlists seria um recurso interessante (precisaria criar o acesso a essas playlists no HTML e CSS).
 
 ### ⭐⭐⭐ Avançado: 

 * Criar um banco de dados para armazenamento das músicas; 
 * Usar uma API para se comunicar com o banco de dados, onde as músicas serão armazenadas;
 * Informações das músicas são estáticas e precisam ser declaradas no arquivo HTML, seria interessante colocar alguma função que acesse diretamente os metadados dos arquivos de música e resgate as informações sobre artista, album e afins.
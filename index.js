//Boas Vindas 
alert(`Bem vindos às eleições de 2022 \nVote com conciência, pois só há uma chance para votar!!`);

//dados do usuário
var nome = prompt("Digite seu nome completo: ");
var cpf = "Digite seu cpf: ";

//variáveis contadoras dos candidatos
var bolsonaro = 0;
var lula = 0;
var marina = 0;
var ciro = 0;
//validar cpf (para aceitar somente números)

    function validarcpf(tenteNovamente){    //função de um parâmetro
        //enquanto for verdadeiro
        while (true){
            var ret = parseInt(prompt(cpf));    //variável que recebe o cpf
            if(!isNaN(ret)){    //condição que verifica se o cpf é um número ou não
                return ret;     //se for um número, retorne o próprio cpf
            }
            cpf = tenteNovamente;   //se não, exiba a mensagem de erro
        }
    }
    //que será produzida aqui
    //colocando o parâmetro na nossa função, que será a mensagem
    var erro = validarcpf("Error!! \n Por favor, digite número e tente novamente")


    //botões números
    function valores(num){  //função insere número no input
        
        var insert = document.getElementById('input').innerHTML;    //variável que pega o conteúdo do input
        document.getElementById('input').innerHTML = insert + num;  //concatenando com novos números ao apertar novos botões
    }

    function limpar(){
        document.getElementById('input').innerHTML = '';
        document.getElementById('images').innerHTML = '';
        document.getElementById('aviso').innerHTML = '';
        document.getElementById('btn').innerHTML = '';
    }

    //votar
    function votar(){
        var div = document.querySelector('#images');
        var aviso = document.querySelector('#aviso');
        var botoes = document.querySelector('#btn');
        var candidato = document.getElementById('input').innerHTML;
        
    //verificação dos candidatos
        if(candidato == 17){
            var img = new Image(200, 200);  //criando a imagem
            img.src = "img/bolsonaro-campos-do-jordao.jpg";
            
            //criando os botões e seus valores
            var btnConf = document.createElement('button');
            var btnCancel = document.createElement('button');
            var valueConf = document.createTextNode('Confirmar');
            var valueCancel = document.createTextNode('Cancelar');

            //atribuindo eventos aos botões
            btnConf.setAttribute("onclick", "confirmar()");
            btnCancel.setAttribute("onclick", "cancelar()");

            //atribuindo os valores dos botões
            btnConf.appendChild(valueConf);
            btnCancel.appendChild(valueCancel);

            //adicionando o título dos botões
            btnConf.title = 'Confirmar';
            btnCancel.title = 'Cancelar';

            //atribuindo o elemento filho ao pai
            aviso.textContent = 'Tem certeza que esta é sua escolha?'
            div.appendChild(img);
            botoes.appendChild(btnConf);
            botoes.appendChild(btnCancel);
        }
        else if(candidato == 13){
            var img = new Image(200, 200);
            img.src = "img/lula.jpg";

            //criando os botões e seus valores
            var btnConf = document.createElement('button');
            var btnCancel = document.createElement('button');
            var valueConf = document.createTextNode('Confirmar');
            var valueCancel = document.createTextNode('Cancelar');

            //atribuindo eventos aos botões
            btnConf.setAttribute("onclick", "confirmar()");
            btnCancel.setAttribute("onclick", "cancelar()");

            //atribuindo os valores dos botões
            btnConf.appendChild(valueConf);
            btnCancel.appendChild(valueCancel);

            //adicionando o título dos botões
            btnConf.title = 'Confirmar';
            btnCancel.title = 'Cancelar';

            //atribuindo o elemento filho ao pai
            aviso.textContent = 'Tem certeza que esta é sua escolha?'
            div.appendChild(img);
            botoes.appendChild(btnConf);
            botoes.appendChild(btnCancel);
        }
        else if(candidato == 22){
            var img = new Image(200, 200);
            img.src = "img/marina.jpg";

            //criando os botões e seus valores
            var btnConf = document.createElement('button');
            var btnCancel = document.createElement('button');
            var valueConf = document.createTextNode('Confirmar');
            var valueCancel = document.createTextNode('Cancelar');

            //atribuindo eventos aos botões
            btnConf.setAttribute("onclick", "confirmar()");
            btnCancel.setAttribute("onclick", "cancelar()");

            //atribuindo os valores dos botões
            btnConf.appendChild(valueConf);
            btnCancel.appendChild(valueCancel);

            //adicionando o título dos botões
            btnConf.title = 'Confirmar';
            btnCancel.title = 'Cancelar';

            //atribuindo o elemento filho ao pai
            aviso.textContent = 'Tem certeza que esta é sua escolha?'
            div.appendChild(img);
            botoes.appendChild(btnConf);
            botoes.appendChild(btnCancel);
            }
        else if(candidato == 35){
            var img = new Image(200, 200);
            img.src = "img/ciro.png";

            //criando os botões e seus valores
            var btnConf = document.createElement('button');
            var btnCancel = document.createElement('button');
            var valueConf = document.createTextNode('Confirmar');
            var valueCancel = document.createTextNode('Cancelar');

            //atribuindo eventos aos botões
            btnConf.setAttribute("onclick", "confirmar()");
            btnCancel.setAttribute("onclick", "cancelar()");

            //atribuindo os valores dos botões
            btnConf.appendChild(valueConf);
            btnCancel.appendChild(valueCancel);

            //adicionando o título dos botões
            btnConf.title = 'Confirmar';
            btnCancel.title = 'Cancelar';

            //atribuindo o elemento filho ao pai
            aviso.textContent = 'Tem certeza que esta é sua escolha?'
            div.appendChild(img);
            botoes.appendChild(btnConf);
            botoes.appendChild(btnCancel);
        }
    }
    
    //função do botão confirmar voto
    function confirmar(){   
        var num = document.getElementById('input').innerHTML;

        //validação da escolha do usuário
            if(num == 17){
                bolsonaro++;    //contador adicionando quantidade de votos pra este candidato
                alert('Voto computado com sucesso!!');
                limpar();   // reutilizando a função que limpa a tela após o usuário votar
            }
            if(num == 13){
                lula++; //contador adicionando quantidade de votos pra este candidato
                alert('Voto computado com sucesso!!');
                limpar();   // reutilizando a função que limpa a tela após o usuário votar
            }
            if(num == 22){
                marina++;   //contador adicionando quantidade de votos pra este candidato
                alert('Voto computado com sucesso!!');
                limpar();   // reutilizando a função que limpa a tela após o usuário votar
            }
            if(num == 35){
                ciro++; //contador adicionando quantidade de votos pra este candidato
                alert('Voto computado com sucesso!!');
                limpar();   // reutilizando a função que limpa a tela após o usuário votar
            }
    }
/* -----------------------------VARIAVEIS GLOBAIS------------------------------- */

var background = document.querySelector('.background-home'); 
var tela_de_login = document.querySelector('.tela-de-login');
var tela_de_cadatro = document.querySelector('.tela-de-cadastro');
var login_email = document.querySelector('input#email');
var login_password = document.querySelector('input#password');
var email_cadastro = document.getElementById('email-cadastro');
var password_cadastro = document.getElementById('password-cadastro');
var password_confirmar = document.getElementById('password-confirmar');
var name_id = document.getElementById('name-id');
var tela_alert = document.querySelector('.fundo-tela-de-alert');
var texto_alert = document.querySelector('p.texto-alert');
var background_duvidas = document.querySelector('.background-duvidas');
var background_redes = document.querySelector('.background-redes');
var alterar_senha = document.querySelector('.alterar-senha');
var alert_senha = document.querySelector('.alert-senha');
var box_alterar = document.querySelector('.box-alterar-senha');
var confirmar_para_alterar = document.querySelector('input#confirmar-para-alterar');
var nova_senha = document.querySelector('input#nova-senha');
var confirmar_nova_senha = document.querySelector('input#confirmar-nova-senha');
var alert_atencao = document.querySelector('img.alert-atencao');
var alert_verificado = document.querySelector('img.alert-verificado');
var titulo_alert = document.querySelector('h2.titulo-alert');
var background_conteudo_materias = document.querySelector('.background-conteudo-materias');
var tela_conteudo = document.querySelector('.tela-conteudo');
var titulo = document.querySelector('input#titulo');
var sinopse = document.querySelector('input#sinopse');
var cont = document.querySelector('textarea#cont');


/* -----------------------------ARRAYS------------------------------- */

var dados_login_professor = []; // armazena os dados de login de professor, email[0] senha[1]  tipo[2] id name[3]
var dados_login_aluno = []; // armazena os dados de login de aluno, email[0] senha[1]  
var dados_mestre = ['emailteste@gmail.com', 'senhateste']; // armazena os dados de login mestre, email[0] senha[1]  
var dados = []; // recebe os dados referentes aos inputs de login para tratar e definir uma ação
var sit = []; //  verifica se é aluno ou professor [0] e se entrou na area de aluno ou professor [1], para poder ou nao criar conteudo
var login = []; // verifica se o individuo esta logado [0]
var materias = []; // identificar qual a materia
var verificar_selecionado = [0] // verificar se esta selecionado aluno ou professor na parte do cadastro
var texto = [];
var resp = [];
var perguntas = [];
var quant = [resp.length, 0];
/* -----------------------------arrays materias------------------------------- */

// variaveis de titulo, sinopse e conteúdo das matérias

var titulosp = []; var sinopsesp = []; var contp = [];  // portugues     
var titulosm = []; var sinopsesm = []; var contm = [];  // matematica
var titulosb = [];  var sinopsesb = []; var contb = []; // biologia
var titulosf = [];  var sinopsesf = []; var contf = []; // fisica
var titulosq = []; var sinopsesq = []; var contq = []; // quimica
var titulosfilo = []; var sinopsesfilo = []; var contfilo = []; // filosofia
var titulosi = []; var sinopsesi = []; var conti = []; // ingles
var titulose = []; var sinopsese = []; var conte = []; // espanhol
var titulosg = []; var sinopsesg = []; var contg = []; // geografia
var titulosh = []; var sinopsesh = []; var conth = []; // historia
var tituloss = []; var sinopsess = []; var conts = []; // sociologia
var titulosed = []; var sinopsesed = []; var conted = []; // ed-fisica
var titulosa = []; var sinopsesa = []; var conta = []; // artes
var titulosl = []; var sinopsesl = []; var contl = []; // literatura
var titulosprog = []; var sinopsesprog = []; var contprog = []; // programação
var titulosph = []; var sinopsesph = []; var contph = []; // photoshop
var titulosma = []; var sinopsesma = []; var contma = []; // meio ambiente
var titulosedf = []; var sinopsesedf = []; var contedf = []; // ed-financeira
var titulosr = []; var sinopsesr = []; var contr = []; // redação
var titulosenem = []; var sinopsesenem = []; var contenem = []; // enem

/* -----------------------------FUNÇÕES------------------------------- */

function sair_manual(){
    document.querySelector('.back-tela-funcionamento').style.display = 'none';
}
function entrar_manual(){
    document.querySelector('.back-tela-funcionamento').style.display = 'flex';
}


/* -------TELAS DE LOGIN, CADASTRO E HOME--------- */
function logar(){
    background.style.display = 'none';
    tela_de_login.style.display = 'flex';
    tela_de_cadatro.style.display = 'none';
    email_cadastro.value = '';
    password_cadastro.value = '';
    password_confirmar.value = '';
    name_id.value = '';
}
function cadastrar(){
    background.style.display = 'none';
    tela_de_login.style.display = 'none';
    tela_de_cadatro.style.display = 'flex';
    login_email.value = '';
    login_password.value = '';
    login_email.focus();
}
function voltar(){
    background.style.display = 'block';
    tela_de_login.style.display = 'none';
    tela_de_cadatro.style.display = 'none';
    document.querySelector('.opcoes-perfil').style.display = 'none';
    document.querySelector('.background-materia').style.display = 'none';
    background_duvidas.style.display = 'none';
    background_redes.style.display = 'none';
    alterar_senha.style.display = 'none';
    confirmar_para_alterar.style.background = "transparent";
    nova_senha.style.background = "transparent";
    confirmar_nova_senha.style.background = "transparent";
    email_cadastro.value = '';
    password_cadastro.value = '';
    password_confirmar.value = '';
    name_id.value = '';
    login_email.value = '';
    login_password.value = '';
    confirmar_nova_senha.value = '';
    confirmar_para_alterar.value = '';
    nova_senha.value = '';
}
/* -------TELAS DE LOGIN, CADASTRO E HOME--------- */

function alert(){ 
    tela_alert.style.display = 'none';
    texto_alert.innerText = ``;
    alert_atencao.style.display = 'block';
    alert_verificado.style.display = 'none';
    titulo_alert.innerText = 'Oops...';
}

/* -------REALIZAR LOGIN--------- */

function enviar_login(){
    dados[0] = login_email.value     // recebe os dados de login dos inputs
    dados[1] = login_password.value
    if(confirmar_mestre() || confirmar_login_professor() || confirmar_login_aluno()){ //chama a função e verifica se é mestre, aluno ou professor, se for algum, executa as próximas ações
        login[0] = 'logado';
        background.style.display = 'block';
        tela_de_login.style.display = 'none';
        tela_de_cadatro.style.display = 'none';
        document.querySelector('.perfil').style.display = 'flex';
        document.querySelector('.login').style.display = 'none';
        if(confirmar_login_professor()){ // recebe o nome colocado no cadastro no perfil
            document.querySelector('button.nome-perfil').innerText = dados_login_professor[3];
        }
        if(confirmar_login_aluno()){ // recebe o nome colocado no cadastro no perfil
            document.querySelector('button.nome-perfil').innerText = dados_login_aluno[3];
        }
        if(confirmar_mestre()){ // recebe o nome mestre no perfil
            document.querySelector('button.nome-perfil').innerText = 'Mestre';
        }
        login_email.value = ''; //limpa os inputs
        login_password.value = '';
        login_email.focus();
        
    }else{ // se os dados estiverem errados
        tela_alert.style.display = 'block';
        texto_alert.innerText = `Dados inválidos ou incorretos`;

        if(login_email.value.length <= 0){login_email.style.background = "#fa7e7e65";
        }else{login_email.style.background = "transparent";}

        if(login_password.value.length <= 0){login_password.style.background = "#fa7e7e65";
        }else{login_password.style.background = "transparent";}
    }
}
/* -------REALIZAR LOGIN--------- */

/* -------REALIZAR CADASTRO--------- */
function enviar_cadastro() {
    let tipo = verificartipo() // verifica se é aluno ou professor
    if(email_cadastro.value.length == 0 || password_cadastro.value.length == 0 || password_confirmar.value.length == 0 || name_id.value.length == 0){ //se estiver faltando algum dado de cadastro, verifica qual é e mostra pro usuário
        tela_alert.style.display = 'block';
        texto_alert.innerText = `Todos os dados devem ser preenchidos corretamente!`;
        if(email_cadastro.value.length == 0){email_cadastro.style.background = "#fa7e7e65"}else{email_cadastro.style.background = "transparent";}
        if(password_cadastro.value.length == 0){password_cadastro.style.background = "#fa7e7e65"}else{password_cadastro.style.background = "transparent";}
        if(password_confirmar.value.length == 0){password_confirmar.style.background = "#fa7e7e65"}else{password_confirmar.style.background = "transparent";}
        if(name_id.value.length == 0){name_id.style.background = "#fa7e7e65"}else{name_id.style.background = "transparent";}
    }else{
        if(verificar_selecionado[0] == 0){ // se não estiver selecionado os inputs radios
            tela_alert.style.display = 'block';
            texto_alert.innerText = `Você deve selecionar se é Aluno ou Professor!`;
        }else{ // se estiver selecionado os inputs radios
            if(email_cadastro.value.indexOf('@gmail.com'.toLowerCase()) !== -1){ //verifica se tem @gmail.com no email fornecido
                if(tipo == 'professor'){
                    if(email_cadastro.value == dados_login_professor[0] || email_cadastro.value == dados_login_aluno[0] || email_cadastro.value == dados_mestre[0]){  //verifica se o email ja esta cadastrado
                        tela_alert.style.display = 'block';
                        texto_alert.innerText = `Email já cadastrado`;
                        background.style.display = 'none';
                        tela_de_login.style.display = 'flex';
                        tela_de_cadatro.style.display = 'none';
                    }else{  //se o email nao estiver cadastrado
                        if(password_cadastro.value.length < 8){  //verifica se a senha tem mais de 8 dígitos
                            tela_alert.style.display = 'block';
                            texto_alert.innerText = `A senha fornecida deve ter no mínimo 8 caracteres!`;
                        }else{    
                            if(password_cadastro.value == password_confirmar.value){ // verifica se a confirmação da senha esta correta, se sim, os dados de professor recebem os dados fornecidos
                                dados_login_professor[0] = email_cadastro.value;
                                dados_login_professor[1] = password_cadastro.value;
                                dados_login_professor[2] = tipo;
                                dados_login_professor[3] = name_id.value;
                                background.style.display = 'none';
                                tela_de_login.style.display = 'flex';
                                tela_de_cadatro.style.display = 'none';
                                login_email.value = email_cadastro.value; // o inputs de login recebe o email cadastrado para facilitar para o usuário
                                login_password.focus()
                                email_cadastro.value = '';
                                password_cadastro.value = '';
                                password_confirmar.value = '';
                                name_id.value = '';
                                verificar_selecionado[0] = 0;
                            }else{
                                tela_alert.style.display = 'block';
                                texto_alert.innerText = `As senhas fornecidas estão incorretas`;
                            }
                        }
                    }
                }
                if(tipo == 'aluno'){
                    if(email_cadastro.value == dados_login_professor[0] || email_cadastro.value == dados_login_aluno[0] || email_cadastro.value == dados_mestre[0]){
                        tela_alert.style.display = 'block';
                        texto_alert.innerText = `Email já cadastrado`;
                        background.style.display = 'none';
                        tela_de_login.style.display = 'flex';
                        tela_de_cadatro.style.display = 'none';
                    }else{
                        if(password_cadastro.value.length < 8){
                            tela_alert.style.display = 'block';
                            texto_alert.innerText = `A senha fornecida deve ter no mínimo 8 caracteres!`;
                        }else{    
                            if(password_cadastro.value == password_confirmar.value){
                                // verifica se a confirmação da senha esta correta, se sim, os dados de aluno recebem os dados fornecidos
                                dados_login_aluno[0] = email_cadastro.value;
                                dados_login_aluno[1] = password_cadastro.value;
                                dados_login_aluno[2] = tipo;
                                dados_login_aluno[3] = name_id.value;
                                background.style.display = 'none';
                                tela_de_login.style.display = 'flex';
                                tela_de_cadatro.style.display = 'none';
                                login_email.value = email_cadastro.value; // o inputs de login recebe o email cadastrado para facilitar para o usuário
                                login_password.focus()
                                email_cadastro.value = '';
                                password_cadastro.value = '';
                                password_confirmar.value = '';
                                name_id.value = '';
                                verificar_selecionado[0] = 0;
                            }else{
                                tela_alert.style.display = 'block';
                                texto_alert.innerText = `As senhas fornecidas estão incorretas`;
                            }
                        }
                    }
                }
            }else{
                tela_alert.style.display = 'block';
                texto_alert.innerText = `Você deve inserir @gmail.com no seu email!`;
            }
        }
    }
}
/* -------REALIZAR CADASTRO--------- */


/* -------CONFIRMAR SE EXISTE CADASTRO DE MESTRE, ALUNO OU PROFESSOR--------- */

// verifica se os dados fornecidos no login são iguais a algum dado fornecido no cadastro

function confirmar_mestre(){
    if(dados[0] == 'emailteste@gmail.com' && dados[1] == 'senhateste'){
        sit[0] = 'mestre';
        return true
    }else{
        return false
    }
}
function confirmar_login_professor(){
    if(dados[0] == dados_login_professor[0] && dados[1] == dados_login_professor[1] && dados_login_professor[2] == 'professor'){
        sit[0] = 'professor';
        return true
    }
    else{
        return false
    }
}
function confirmar_login_aluno(){
    if(dados[0] == dados_login_aluno[0] && dados[1] == dados_login_aluno[1] && dados_login_aluno[2] == 'aluno'){
        sit[0] = 'aluno';
        return true
    }
    else{
        return false
    }
}
/* -------CONFIRMAR SE EXISTE CADASTRO DE MESTRE, ALUNO OU PROFESSOR--------- */



/* -------VERIFICAR SE É MESTRE, ALUNO OU PROFESSOR--------- */
function verificartipo(){ // verifica os inputs radios para saber se é aluno ou professor
    var botoes = document.getElementsByName("alunoprofessor");
    var i = 0
    for (i in botoes) {
        if (botoes[i].checked){
            verificar_selecionado[0] = 1
            return botoes[i].value;           
        }          
    }
}

/* -------VERIFICAR SE É MESTRE, ALUNO OU PROFESSOR--------- */

/* -------SEÇÃO HOME - PROFESSOR, ALUNO, DUVIDAS FREQUENTES OU REDES SOCIAIS--------- */
function professor(){
    if(login[0] == 'logado'){
        if(sit[0] == 'professor' || sit[0]  == 'mestre'){
            document.querySelector('.background-materia').style.display = 'block';
            background.style.display = 'none';
            document.querySelector('.header-materias h2').innerText = 'Escolha a matéria para adicionar conteúdo';
            document.querySelector('button.criars').style.display = 'block';
            sit[1] = 1;
        }else{
            tela_alert.style.display = 'block';
            texto_alert.innerText = `Sua conta é de aluno, não possui permissão para acessar este espaço!`;
        }
    }else{
        background.style.display = 'none';
        tela_de_login.style.display = 'flex';
        tela_de_cadatro.style.display = 'none';
    }
}
function aluno(){
    if(login[0] == 'logado'){
        document.querySelector('.background-materia').style.display = 'block';
        background.style.display = 'none';
        document.querySelector('.header-materias h2').innerText = 'Matérias';
        document.querySelector('button.criars').style.display = 'none';
        sit[1] = 0;
    }else{
        background.style.display = 'none';
        tela_de_login.style.display = 'flex';
        tela_de_cadatro.style.display = 'none';
    }
}
function duvidas(){
    background.style.display = 'none';
    background_duvidas.style.display = 'block';
    if(sit[0] == 'mestre'){
        if(quant[1] > quant[0]){
            document.querySelector('.responder_pergunta').style.display = 'block';
            document.querySelector('.criar_pergunta').style.display = 'none';
        }
    }
}
function redes(){
    background.style.display = 'none';
    background_redes.style.display = 'flex';
}



for(let a = 0; a < quant[0]; a++){
    document.querySelector('.back-duvidas').innerHTML += `<div class="container-duvidas"><button class="perguntas">${texto[a]}</button><div class="respostas">${resp[a]}</div></div>`
}
load1()
function criar_perguntas(){
    document.querySelector('.back-alert-duvidas').style.display = 'flex';
    document.querySelector('.alert-pergunta').style.display = 'inline-block';
    document.querySelector('.alert-resposta').style.display = 'none';
}
function confirmar_alert_duvida(){
    texto.push(document.querySelector('#pergunta_duvida').value);
    if(document.querySelector('#pergunta_duvida').value.length <= 0){
        document.querySelector('#pergunta_duvida').style.border = '2px solid red';
    }else{
        perguntas.push(texto[texto.length - 1])
        quant[1] = texto.length;
        if(sit[0] == 'mestre'){
            if(quant[1] > quant[0]){
                document.querySelector('.responder_pergunta').style.display = 'block';
                document.querySelector('.criar_pergunta').style.display = 'none';
            }
        }
        document.querySelector('#pergunta_duvida').value = '';
        document.querySelector('.back-alert-duvidas').style.display = 'none';
        document.querySelector('#pergunta_duvida').style.border = '1px solid gray';
    }
}
function cancelar_alert_duvida(){
    document.querySelector('.back-alert-duvidas').style.display = 'none';
    document.querySelector('#pergunta_duvida').value = '';
    document.querySelector('#pergunta_duvida').style.border = '1px solid gray';
    document.querySelector('#resposta_duvida').value = '';
    document.querySelector('#resposta_duvida').style.border = '1px solid gray';
    document.querySelector('.pergunta-de-duvida').style.display = 'none';
}
function confirmar_alert_duvida_resposta(){
    if(document.querySelector('#resposta_duvida').value.length <= 0){
        document.querySelector('#resposta_duvida').style.border = '2px solid red';
    }else{
        let i = quant[1] - quant[0]
        resp.push(document.querySelector('#resposta_duvida').value);
        perguntas.shift()
        quant[0] = resp.length;
        if(quant[1] <= quant[0]){
            document.querySelector('.responder_pergunta').style.display = 'none';
            document.querySelector('.criar_pergunta').style.display = 'block';
        }
        load();
        load1();
        document.querySelector('#resposta_duvida').value = '';
        document.querySelector('.back-alert-duvidas').style.display = 'none';
        document.querySelector('#resposta_duvida').style.border = '1px solid gray';
        document.querySelector('.pergunta-de-duvida').style.display = 'none';
        document.querySelector('#resposta_duvida').style.display = 'none';
        document.querySelector('#pergunta_duvida').style.display = 'block';
    }
}
function responder_perguntas(){
    document.querySelector('.back-alert-duvidas').style.display = 'flex';
    document.querySelector('#resposta_duvida').style.display = 'block';
    document.querySelector('#pergunta_duvida').style.display = 'none';
    document.querySelector('.pergunta-de-duvida').style.display = 'block';
    document.querySelector('.pergunta-de-duvida').innerText = perguntas[0];
    document.querySelector('.alert-pergunta').style.display = 'none';
    document.querySelector('.alert-resposta').style.display = 'inline-block';
}
function load(){
    for(let a = quant[0] - 1; a < quant[0]; a++){
        document.querySelector('.back-duvidas').innerHTML += `<div class="container-duvidas"><button class="perguntas">${texto[a]}</button><div class="respostas">${resp[a]}</div></div>`
    }
}
function load1(){
    let cont_duvidas = document.querySelectorAll('.container-duvidas');
    let perguntas = document.querySelectorAll('.perguntas');
    let respostas = document.querySelectorAll('.respostas');

    for(let l = 0; l < cont_duvidas.length; l++){
        cont_duvidas[l].addEventListener('click', function(){
            if(respostas[l].style.display == 'block'){
                respostas[l].style.display = 'none';
            }else{
                respostas[l].style.display = 'block';
            }
        })
    }

}
/* -------SEÇÃO HOME - PROFESSOR, ALUNO, DUVIDAS FREQUENTES OU REDES SOCIAIS--------- */

//-----------------------------PERFIL-------------------------------------

function perfil(){
    document.querySelector('.opcoes-perfil').style.display = 'flex';
}
function sair_perfil(){
    dados[0] = '';
    dados[1] = '';
    login[0] = '';
    sit[0] = '';
    document.querySelector('.login').style.display = 'flex';
    document.querySelector('.opcoes-perfil').style.display = 'none';
    document.querySelector('.perfil').style.display = 'none';
    document.querySelector('.responder_pergunta').style.display = 'none';
}
function senha_perfil(){
    alterar_senha.style.display = 'flex';
    alert_senha.style.display = 'flex';
    box_alterar.style.display = 'none';
}
function cancelar_alert(){
    alterar_senha.style.display = 'none';
    document.querySelector('.opcoes-perfil').style.display = 'none';
}
function confirmar_alert(){
    alterar_senha.style.display = 'flex';
    alert_senha.style.display = 'none';
    box_alterar.style.display = 'flex';
    document.querySelector('.opcoes-perfil').style.display = 'none';
}
function confirmar_alterar(){
    if(confirmar_para_alterar.value.length == 0 || nova_senha.value.length == 0 || confirmar_nova_senha.value.length == 0){

        if(confirmar_para_alterar.value.length == 0){confirmar_para_alterar.style.background = "#fa7e7e65"}else{confirmar_para_alterar.style.background = "transparent";}

        if(nova_senha.value.length == 0){nova_senha.style.background = "#fa7e7e65"}else{nova_senha.style.background = "transparent";}

        if(confirmar_nova_senha.value.length == 0){confirmar_nova_senha.style.background = "#fa7e7e65"}else{confirmar_nova_senha.style.background = "transparent";}
    }
    let tipo = verificartipo()
    if(tipo == 'professor'){ 
        if(confirmar_para_alterar.value !== dados_login_professor[1] ){
            tela_alert.style.display = 'block';
            texto_alert.innerText = `Sua senha esta incorreta`;
            confirmar_para_alterar.style.background = "#fa7e7e65";         
        }else{
            confirmar_para_alterar.style.background = "trasparent"
            if(nova_senha.value.length < 8){
                tela_alert.style.display = 'block';
                texto_alert.innerText = `A senha fornecida deve ter no mínimo 8 caracteres!`;
            }else{    
                if(nova_senha.value == confirmar_nova_senha.value){
                    if(nova_senha.value == dados_login_professor[1]){
                        tela_alert.style.display = 'block';
                        texto_alert.innerText = `A senha fornecida não pode ser igual a senha anterior!`;
                    }else{
                        dados_login_professor[1] = nova_senha.value;
                        alterar_senha.style.display = 'none';
                        nova_senha.style.background = "transparent";
                        confirmar_nova_senha.style.background = "transparent";
                        confirmar_nova_senha.value = '';
                        confirmar_para_alterar.value = '';
                        nova_senha.value = '';
                        tela_alert.style.display = 'block';
                        alert_atencao.style.display = 'none';
                        alert_verificado.style.display = 'block';
                        titulo_alert.innerText = 'PARABÉNS!';
                        texto_alert.innerText = `Sua senha foi alterada com sucesso!`;

                    }
                }else{
                    tela_alert.style.display = 'block';
                    texto_alert.innerText = `As senhas fornecidas estão incorretas`;
                    nova_senha.style.background = "#fa7e7e65";
                    confirmar_nova_senha.style.background = "#fa7e7e65";
                }
            }
        }
    }
    if(tipo == 'aluno'){
        if(confirmar_para_alterar.value !== dados_login_aluno[1] ){
            tela_alert.style.display = 'block';
            texto_alert.innerText = `Sua senha esta incorreta`;
            confirmar_para_alterar.style.background = "#fa7e7e65";         
        }else{
            confirmar_para_alterar.style.background = "trasparent";
            if(nova_senha.value.length < 8){
                tela_alert.style.display = 'block';
                texto_alert.innerText = `A senha fornecida deve ter no mínimo 8 caracteres!`;
            }else{    
                if(nova_senha.value == confirmar_nova_senha.value){
                    if(nova_senha.value == dados_login_aluno[1]){
                        tela_alert.style.display = 'block';
                        texto_alert.innerText = `A senha fornecida não pode ser igual a senha anterior!`;
                    }else{
                        dados_login_aluno[1] = nova_senha.value;
                        alterar_senha.style.display = 'none';
                        nova_senha.style.background = "transparent";
                        confirmar_nova_senha.style.background = "transparent";
                        confirmar_nova_senha.value = '';
                        confirmar_para_alterar.value = '';
                        nova_senha.value = '';
                        tela_alert.style.display = 'block';
                        alert_atencao.style.display = 'none';
                        alert_verificado.style.display = 'block';
                        titulo_alert.innerText = 'PARABÉNS!';
                        texto_alert.innerText = `Sua senha foi alterada com sucesso!`;
                    }
                }else{
                    tela_alert.style.display = 'block';
                    texto_alert.innerText = `As senhas fornecidas estão incorretas`;
                    nova_senha.style.background = "#fa7e7e65";
                    confirmar_nova_senha.style.background = "#fa7e7e65";
                }
            }
        }
    }
}

//-----------------------------materias-------------------------------------


let cont_materia = document.querySelectorAll('.container-materia');
var tituloMateria = '';
var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
var conteudo_tela = document.querySelector('p.texto-tela-conteudo');

for(let l = 0; l < cont_materia.length; l++){
    cont_materia[l].addEventListener('click', function(){
        document.querySelector('.background-conteudo-materias').style.display = 'flex';
        document.querySelector('.background-materia').style.display = 'none';
        var matPor = document.querySelectorAll('.materia_portugues');
        var matMat = document.querySelectorAll('.materia_matematica');
        var matBio = document.querySelectorAll('.materia_biologia');
        var matFis = document.querySelectorAll('.materia_fisica');
        var matQui = document.querySelectorAll('.materia_quimica');
        var matFilo = document.querySelectorAll('.materia_filosofia');
        var matIng = document.querySelectorAll('.materia_ingles');
        var matEsp = document.querySelectorAll('.materia_espanhol');
        var matGeo = document.querySelectorAll('.materia_geografia');
        var matHis = document.querySelectorAll('.materia_historia');
        var matSoc = document.querySelectorAll('.materia_sociologia');
        var matEdFis = document.querySelectorAll('.materia_edFisica');
        var matArt = document.querySelectorAll('.materia_artes');
        var matLit = document.querySelectorAll('.materia_literatura');
        var matPro = document.querySelectorAll('.materia_programacao');
        var matPho = document.querySelectorAll('.materia_photoshop');
        var matMei = document.querySelectorAll('.materia_meioAmbiente');
        var matEdFin = document.querySelectorAll('.materia_edFinanceira');
        var matRed = document.querySelectorAll('.materia_redacao');
        var matEne = document.querySelectorAll('.materia_enem');

        switch (l){
            case 0: 
                tituloMateria = 'PORTUGUÊS'; 
                materias[0] = 1;
                for(let i=0; i < matPor.length; i++){
                    matPor[i].style.display = 'inline-block';
                    matPor[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = titulosp[i];
                        sinopse_tela.innerText = sinopsesp[i];
                        conteudo_tela.innerText = contp[i];
                    })
                }
                break;
            case 1: 
                tituloMateria = 'MATEMÁTICA'; 
                materias[0] =2; 
                for(let i=0; i < matMat.length; i++){
                    matMat[i].style.display = 'inline-block';
                    matMat[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = titulosm[i];
                        sinopse_tela.innerText = sinopsesm[i];
                        conteudo_tela.innerText = contm[i];
                    })
                }
                break;
            case 2: 
                tituloMateria = 'BIOLOGIA';
                materias[0] =3;
                for(let i=0; i < matBio.length; i++){
                    matBio[i].style.display = 'inline-block';
                    matBio[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = titulosb[i];
                        sinopse_tela.innerText = sinopsesb[i];
                        conteudo_tela.innerText = contb[i];
                    })
                }
                break;
            case 3: 
                tituloMateria = 'FÍSICA'; 
                materias[0] =4; 
                for(let i=0; i < matFis.length; i++){
                    matFis[i].style.display = 'inline-block';
                    matFis[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = titulosf[i];
                        sinopse_tela.innerText = sinopsesf[i];
                        conteudo_tela.innerText = contf[i];
                    })
                }
                break;
            case 4: 
                tituloMateria = 'QUÍMICA'; 
                materias[0] =5; 
                for(let i=0; i < matQui.length; i++){
                    matQui[i].style.display = 'inline-block';
                    matQui[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = titulosq[i];
                        sinopse_tela.innerText = sinopsesq[i];
                        conteudo_tela.innerText = contq[i];
                    })
                }
                break;
            case 5: 
                tituloMateria = 'FILOSOFIA'; 
                materias[0] =6; 
                for(let i=0; i < matFilo.length; i++){
                    matFilo[i].style.display = 'inline-block';
                    matFilo[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = titulosfilo[i];
                        sinopse_tela.innerText = sinopsesfilo[i];
                        conteudo_tela.innerText = contfilo[i];
                    })
                }
                break;
            case 6: 
                tituloMateria = 'INGLÊS'; 
                materias[0] =7; 
                for(let i=0; i < matIng.length; i++){
                    matIng[i].style.display = 'inline-block';
                    matIng[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = titulosi[i];
                        sinopse_tela.innerText = sinopsesi[i];
                        conteudo_tela.innerText = conti[i];
                    })
                }
                break;
            case 7: 
                tituloMateria = 'ESPANHOL'; 
                materias[0] =8;
                for(let i=0; i < matEsp.length; i++){
                    matEsp[i].style.display = 'inline-block';
                    matEsp[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = titulose[i];
                        sinopse_tela.innerText = sinopsese[i];
                        conteudo_tela.innerText = conte[i];
                    })
                } 
                break;
            case 8: 
                tituloMateria = 'GEOGRAFIA'; 
                materias[0] =9; 
                for(let i=0; i < matGeo.length; i++){
                    matGeo[i].style.display = 'inline-block';
                    matGeo[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = titulosg[i];
                        sinopse_tela.innerText = sinopsesg[i];
                        conteudo_tela.innerText = contg[i];
                    })
                }
                break;
            case 9: 
                tituloMateria = 'HISTÓRIA'; 
                materias[0] =10; 
                for(let i=0; i < matHis.length; i++){
                    matHis[i].style.display = 'inline-block';
                    matHis[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = titulosh[i];
                        sinopse_tela.innerText = sinopsesh[i];
                        conteudo_tela.innerText = conth[i];
                    })
                }
                break;
            case 10: 
                tituloMateria = 'SOCIOLOGIA'; 
                materias[0] =11; 
                for(let i=0; i < matSoc.length; i++){
                    matSoc[i].style.display = 'inline-block';
                    matSoc[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = tituloss[i];
                        sinopse_tela.innerText = sinopsess[i];
                        conteudo_tela.innerText = conts[i];
                    })
                }
                break;
            case 11: 
                tituloMateria = 'ED. FÍSICA'; 
                materias[0] =12;
                for(let i=0; i < matEdFis.length; i++){
                    matEdFis[i].style.display = 'inline-block';
                    matEdFis[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = titulosed[i];
                        sinopse_tela.innerText = sinopsesed[i];
                        conteudo_tela.innerText = conted[i];
                    })
                }
                break;
            case 12: 
                tituloMateria = 'ARTES'; 
                materias[0] =13; 
                for(let i=0; i < matArt.length; i++){
                    matArt[i].style.display = 'inline-block';
                    matArt[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = titulosa[i];
                        sinopse_tela.innerText = sinopsesa[i];
                        conteudo_tela.innerText = conta[i];
                    })
                }
                break;
            case 13: 
                tituloMateria = 'LITERATURA'; 
                materias[0] =14; 
                for(let i=0; i < matLit.length; i++){
                    matLit[i].style.display = 'inline-block';
                    matLit[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = titulosl[i];
                        sinopse_tela.innerText = sinopsesl[i];
                        conteudo_tela.innerText = contl[i];
                    })
                }
                break;
            case 14: 
                tituloMateria = 'PROGRAMAÇÃO'; 
                materias[0] =15; 
                for(let i=0; i < matPro.length; i++){
                    matPro[i].style.display = 'inline-block';
                    matPro[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = titulosprog[i];
                        sinopse_tela.innerText = sinopsesprog[i];
                        conteudo_tela.innerText = contprog[i];
                    })
                }
                break;
            case 15: 
                tituloMateria = 'PHOTOSHOP'; 
                materias[0] =16; 
                for(let i=0; i < matPho.length; i++){
                    matPho[i].style.display = 'inline-block';
                    matPho[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = titulosph[i];
                        sinopse_tela.innerText = sinopsesph[i];
                        conteudo_tela.innerText = contph[i];
                    })
                }
                break;
            case 16: 
                tituloMateria = 'MEIO AMBIENTE'; 
                materias[0] =17;
                for(let i=0; i < matMei.length; i++){
                    matMei[i].style.display = 'inline-block';
                    matMei[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = titulosma[i];
                        sinopse_tela.innerText = sinopsesma[i];
                        conteudo_tela.innerText = contma[i];
                    })
                } 
                break;
            case 17: 
                tituloMateria = 'ED. FINANCEIRA'; 
                materias[0] =18; 
                for(let i=0; i < matEdFin.length; i++){
                    matEdFin[i].style.display = 'inline-block';
                    matEdFin[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = titulosedf[i];
                        sinopse_tela.innerText = sinopsesedf[i];
                        conteudo_tela.innerText = contedf[i];
                    })
                }
                break;
            case 18: 
                tituloMateria = 'REDAÇÃO'; 
                materias[0] =19; 
                for(let i=0; i < matRed.length; i++){
                    matRed[i].style.display = 'inline-block';
                    matRed[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = titulosr[i];
                        sinopse_tela.innerText = sinopsesr[i];
                        conteudo_tela.innerText = contr[i];
                    })
                }
                break;
            case 19: 
                tituloMateria = 'ENEM'; 
                materias[0] =20; 
                for(let i=0; i < matEne.length; i++){
                    matEne[i].style.display = 'inline-block';
                    matEne[i].addEventListener('click', function(){
                        background_conteudo_materias.style.display = 'none';
                        tela_conteudo.style.display = 'block';
                        titulo_tela.innerText = titulosenem[i];
                        sinopse_tela.innerText = sinopsesenem[i];
                        conteudo_tela.innerText = contenem[i];
                        })
                }
                break; 
        }
        document.querySelector('h2.titulo-background-conteudo-materias').innerText = tituloMateria;
    })
}
function voltar_materias(){
    document.querySelector('.background-materia').style.display = 'block';
    document.querySelector('.background-conteudo-materias').style.display = 'none';
    materias[0] = 0;
    let materiaGeral = document.querySelectorAll('.card-conteudo');
    for(let i=0; i < materiaGeral.length; i++){
        materiaGeral[i].style.display = 'none';
    }
}

//-----------------------------conteudos-------------------------------------

function criar(){
    document.querySelector('.adicionar-conteudo').style.display = 'flex';
    document.querySelector('button.criars').style.display = 'none';
}
function voltar_conteudo(){
    document.querySelector('.adicionar-conteudo').style.display = 'none';
    document.querySelector('.tela-conteudo').style.display = 'none';
    document.querySelector('.background-conteudo-materias').style.display = 'flex';
    titulo.value = '';
    sinopse.value = '';
    cont.value = '';
    if(sit[1] == 1){
        document.querySelector('button.criars').style.display = 'block';
        
    }else{
        document.querySelector('button.criars').style.display = 'none';
    }
}
function adicionar(){
    let matSelec = '';

    switch (materias[0]){
        case 1: 
            titulosp.push(titulo.value);  
            sinopsesp.push(sinopse.value);
            contp.push(cont.value);
            matSelec = 'materia_portugues';
            break;
        case 2: 
            titulosm.push(titulo.value);  
            sinopsesm.push(sinopse.value);
            contm.push(cont.value);
            matSelec = 'materia_matematica';
            break;
        case 3: 
            titulosb.push(titulo.value);  
            sinopsesb.push(sinopse.value);
            contb.push(cont.value);
            matSelec = 'materia_biologia';
            break;
        case 4: 
            titulosf.push(titulo.value);  
            sinopsesf.push(sinopse.value);
            contf.push(cont.value);
            matSelec = 'materia_fisica';
            break;
        case 5: 
            titulosq.push(titulo.value);  
            sinopsesq.push(sinopse.value);
            contq.push(cont.value);
            matSelec = 'materia_quimica';
            break;
        case 6: 
            titulosfilo.push(titulo.value);  
            sinopsesfilo.push(sinopse.value);
            contfilo.push(cont.value);
            matSelec = 'materia_filosofia';
            break;
        case 7: 
            titulosi.push(titulo.value);  
            sinopsesi.push(sinopse.value);
            conti.push(cont.value);
            matSelec = 'materia_ingles';
            break;
        case 8: 
            titulose.push(titulo.value);  
            sinopsese.push(sinopse.value);
            conte.push(cont.value);
            matSelec = 'materia_espanhol';
            break;
        case 9: 
            titulosg.push(titulo.value);  
            sinopsesg.push(sinopse.value);
            contg.push(cont.value);
            matSelec = 'materia_geografia';
            break;
        case 10: 
            titulosh.push(titulo.value);  
            sinopsesh.push(sinopse.value);
            conth.push(cont.value);
            matSelec = 'materia_historia';
            break;
        case 11: 
            tituloss.push(titulo.value);  
            sinopsess.push(sinopse.value);
            conts.push(cont.value);
            matSelec = 'materia_sociologia';
            break;
        case 12: 
            titulosed.push(titulo.value);  
            sinopsesed.push(sinopse.value);
            conted.push(cont.value);
            matSelec = 'materia_edFisica';
            break;
        case 13: 
            titulosa.push(titulo.value);  
            sinopsesa.push(sinopse.value);
            conta.push(cont.value);
            matSelec = 'materia_artes';
            break;
        case 14: 
            titulosl.push(titulo.value);  
            sinopsesl.push(sinopse.value);
            contl.push(cont.value);
            matSelec = 'materia_literatura';
            break;
        case 15: 
            titulosprog.push(titulo.value);  
            sinopsesprog.push(sinopse.value);
            contprog.push(cont.value);
            matSelec = 'materia_programacao';
            break;
        case 16: 
            titulosph.push(titulo.value);  
            sinopsesph.push(sinopse.value);
            contph.push(cont.value);
            matSelec = 'materia_photoshop';
            break;
        case 17: 
            titulosma.push(titulo.value);  
            sinopsesma.push(sinopse.value);
            contma.push(cont.value);
            matSelec = 'materia_meioAmbiente';
            break;
        case 18: 
            titulosedf.push(titulo.value);  
            sinopsesedf.push(sinopse.value);
            contedf.push(cont.value);
            matSelec = 'materia_edFinanceira';
            break;
        case 19: 
            titulosr.push(titulo.value);  
            sinopsesr.push(sinopse.value);
            contr.push(cont.value);
            matSelec = 'materia_redacao';
            break; 
        case 20: 
            titulosenem.push(titulo.value);  
            sinopsesenem.push(sinopse.value);
            contenem.push(cont.value);
            matSelec = 'materia_enem';
            break;
    }
    document.querySelector(`.background-conteudo-materia`).innerHTML += `<div class="card-conteudo ${matSelec}"><button class="container-conteudo-materia "><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p>${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button></div>`;

    var matPor = document.querySelectorAll('.materia_portugues');
    var matMat = document.querySelectorAll('.materia_matematica');
    var matBio = document.querySelectorAll('.materia_biologia');
    var matFis = document.querySelectorAll('.materia_fisica');
    var matQui = document.querySelectorAll('.materia_quimica');
    var matFilo = document.querySelectorAll('.materia_filosofia');
    var matIng = document.querySelectorAll('.materia_ingles');
    var matEsp = document.querySelectorAll('.materia_espanhol');
    var matGeo = document.querySelectorAll('.materia_geografia');
    var matHis = document.querySelectorAll('.materia_historia');
    var matSoc = document.querySelectorAll('.materia_sociologia');
    var matEdFis = document.querySelectorAll('.materia_edFisica');
    var matArt = document.querySelectorAll('.materia_artes');
    var matLit = document.querySelectorAll('.materia_literatura');
    var matPro = document.querySelectorAll('.materia_programacao');
    var matPho = document.querySelectorAll('.materia_photoshop');
    var matMei = document.querySelectorAll('.materia_meioAmbiente');
    var matEdFin = document.querySelectorAll('.materia_edFinanceira');
    var matRed = document.querySelectorAll('.materia_redacao');
    var matEne = document.querySelectorAll('.materia_enem');

    switch (materias[0]){
        case 1: 
            for(let i=0; i < matPor.length; i++){
                matPor[i].style.display = 'inline-block';
                matPor[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = titulosp[i];
                    sinopse_tela.innerText = sinopsesp[i];
                    conteudo_tela.innerText = contp[i];
                })
            }
            break;
        case 2: 
            for(let i=0; i < matMat.length; i++){
                matMat[i].style.display = 'inline-block';
                matMat[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = titulosm[i];
                    sinopse_tela.innerText = sinopsesm[i];
                    conteudo_tela.innerText = contm[i];
                })
            }
            break;
        case 3: 
            for(let i=0; i < matBio.length; i++){
                matBio[i].style.display = 'inline-block';
                matBio[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = titulosb[i];
                    sinopse_tela.innerText = sinopsesb[i];
                    conteudo_tela.innerText = contb[i];
                })
            }
            break;
        case 4: 
            for(let i=0; i < matFis.length; i++){
                matFis[i].style.display = 'inline-block';
                matFis[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = titulosf[i];
                    sinopse_tela.innerText = sinopsesf[i];
                    conteudo_tela.innerText = contf[i];
                })
            }
            break;
        case 5: 
            for(let i=0; i < matQui.length; i++){
                matQui[i].style.display = 'inline-block';
                matQui[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = titulosq[i];
                    sinopse_tela.innerText = sinopsesq[i];
                    conteudo_tela.innerText = contq[i];
                })
            }
            break;
        case 6: 
            for(let i=0; i < matFilo.length; i++){
                matFilo[i].style.display = 'inline-block';
                matFilo[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = titulosfilo[i];
                    sinopse_tela.innerText = sinopsesfilo[i];
                    conteudo_tela.innerText = contfilo[i];
                })
            }
            break;
        case 7: 
            for(let i=0; i < matIng.length; i++){
                matIng[i].style.display = 'inline-block';
                matIng[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = titulosi[i];
                    sinopse_tela.innerText = sinopsesi[i];
                    conteudo_tela.innerText = conti[i];
                })
            }
            break;
        case 8: 
            for(let i=0; i < matEsp.length; i++){
                matEsp[i].style.display = 'inline-block';
                matEsp[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = titulose[i];
                    sinopse_tela.innerText = sinopsese[i];
                    conteudo_tela.innerText = conte[i];
                })
            } 
            break;
        case 9: 
            for(let i=0; i < matGeo.length; i++){
                matGeo[i].style.display = 'inline-block';
                matGeo[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = titulosg[i];
                    sinopse_tela.innerText = sinopsesg[i];
                    conteudo_tela.innerText = contg[i];
                })
            }
            break;
        case 10: 
            for(let i=0; i < matHis.length; i++){
                matHis[i].style.display = 'inline-block';
                matHis[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = titulosh[i];
                    sinopse_tela.innerText = sinopsesh[i];
                    conteudo_tela.innerText = conth[i];
                })
            }
            break;
        case 11: 
            for(let i=0; i < matSoc.length; i++){
                matSoc[i].style.display = 'inline-block';
                matSoc[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = tituloss[i];
                    sinopse_tela.innerText = sinopsess[i];
                    conteudo_tela.innerText = conts[i];
                })
            }
            break;
        case 12: 
            for(let i=0; i < matEdFis.length; i++){
                matEdFis[i].style.display = 'inline-block';
                matEdFis[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = titulosed[i];
                    sinopse_tela.innerText = sinopsesed[i];
                    conteudo_tela.innerText = conted[i];
                })
            }
            break;
        case 13: 
            for(let i=0; i < matArt.length; i++){
                matArt[i].style.display = 'inline-block';
                matArt[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = titulosa[i];
                    sinopse_tela.innerText = sinopsesa[i];
                    conteudo_tela.innerText = conta[i];
                })
            }
            break;
        case 14: 
            for(let i=0; i < matLit.length; i++){
                matLit[i].style.display = 'inline-block';
                matLit[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = titulosl[i];
                    sinopse_tela.innerText = sinopsesl[i];
                    conteudo_tela.innerText = contl[i];
                })
            }
            break;
        case 15: 
            for(let i=0; i < matPro.length; i++){
                matPro[i].style.display = 'inline-block';
                matPro[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = titulosprog[i];
                    sinopse_tela.innerText = sinopsesprog[i];
                    conteudo_tela.innerText = contprog[i];
                })
            }
            break;
        case 16: 
            for(let i=0; i < matPho.length; i++){
                matPho[i].style.display = 'inline-block';
                matPho[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = titulosph[i];
                    sinopse_tela.innerText = sinopsesph[i];
                    conteudo_tela.innerText = contph[i];
                })
            }
            break;
        case 17: 
            for(let i=0; i < matMei.length; i++){
                matMei[i].style.display = 'inline-block';
                matMei[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = titulosma[i];
                    sinopse_tela.innerText = sinopsesma[i];
                    conteudo_tela.innerText = contma[i];
                })
            } 
            break;
        case 18: 
            for(let i=0; i < matEdFin.length; i++){
                matEdFin[i].style.display = 'inline-block';
                matEdFin[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = titulosedf[i];
                    sinopse_tela.innerText = sinopsesedf[i];
                    conteudo_tela.innerText = contedf[i];
                })
            }
            break;
        case 19: 
            for(let i=0; i < matRed.length; i++){
                matRed[i].style.display = 'inline-block';
                matRed[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = titulosr[i];
                    sinopse_tela.innerText = sinopsesr[i];
                    conteudo_tela.innerText = contr[i];
                })
            }
            break;
        case 20: 
            for(let i=0; i < matEne.length; i++){
                matEne[i].style.display = 'inline-block';
                matEne[i].addEventListener('click', function(){
                    background_conteudo_materias.style.display = 'none';
                    tela_conteudo.style.display = 'block';
                    titulo_tela.innerText = titulosenem[i];
                    sinopse_tela.innerText = sinopsesenem[i];
                    conteudo_tela.innerText = contenem[i];
                })
            }
            break;    
    }
    voltar_conteudo()
}

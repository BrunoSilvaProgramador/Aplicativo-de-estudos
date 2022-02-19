/* -----------------------------VARIAVEIS GLOBAIS------------------------------- */

var background = document.querySelector('div.background-home'); 
var tela_de_login = document.querySelector('div.tela-de-login');
var tela_de_cadatro = document.querySelector('div.tela-de-cadastro');
var login_email = document.querySelector('input#email');
var login_password = document.querySelector('input#password');
var nome_cadastro = document.getElementById('nome');
var email_cadastro = document.getElementById('email-cadastro');
var password_cadastro = document.getElementById('password-cadastro');
var password_confirmar = document.getElementById('password-confirmar');
var name_id = document.getElementById('name-id');
var tela_alert = document.querySelector('div.fundo-tela-de-alert');
var texto_alert = document.querySelector('p.texto-alert');
var background_duvidas = document.querySelector('div.background-duvidas');
var background_redes = document.querySelector('div.background-redes');
var alterar_senha = document.querySelector('div.alterar-senha');
var alert_senha = document.querySelector('div.alert-senha');
var box_alterar = document.querySelector('div.box-alterar-senha');
var confirmar_para_alterar = document.querySelector('input#confirmar-para-alterar');
var nova_senha = document.querySelector('input#nova-senha');
var confirmar_nova_senha = document.querySelector('input#confirmar-nova-senha');
var alert_atencao = document.querySelector('img.alert-atencao');
var alert_verificado = document.querySelector('img.alert-verificado');
var titulo_alert = document.querySelector('h2.titulo-alert');

var ap_perguntas0 = document.querySelector('button.ap_perguntas0');
var sa_perguntas0 = document.querySelector('button.sa_perguntas0');
var respostas0 = document.querySelector('div.resp0');

var ap_perguntas1 = document.querySelector('button.ap_perguntas1');
var sa_perguntas1 = document.querySelector('button.sa_perguntas1');
var respostas1 = document.querySelector('div.resp1');

var ap_perguntas2 = document.querySelector('button.ap_perguntas2');
var sa_perguntas2 = document.querySelector('button.sa_perguntas2');
var respostas2 = document.querySelector('div.resp2');

var ap_perguntas3 = document.querySelector('button.ap_perguntas3');
var sa_perguntas3 = document.querySelector('button.sa_perguntas3');
var respostas3 = document.querySelector('div.resp3');

/* -----------------------------ARRAYS------------------------------- */

var dados_login_professor = []; // armazena os dados de login de professor, email[0] senha[1]  tipo[2] id name[3]
var dados_login_aluno = []; // armazena os dados de login de aluno, email[0] senha[1]  
var dados_mestre = ['emailteste@gmail.com', 'senhateste10']; // armazena os dados de login mestre, email[0] senha[1]  
var dados = []; // recebe os dados referentes aos inputs de login para tratar e definir uma ação
var sit = []; //  verifica se é aluno ou professor [0] e se entrou na area de aluno ou professor [1], para poder ou nao criar conteudo
var login = []; // verifica se o individuo esta logado [0]
var materias = []; // identificar qual a materia
var verificar_selecionado = [0] // verificar se esta selecionado aluno ou professor na parte do cadastro
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


/* -------TELAS DE LOGIN, CADASTRO E HOME--------- */
function logar(){
    background.style.display = 'none';
    tela_de_login.style.display = 'flex';
    tela_de_cadatro.style.display = 'none';
    nome_cadastro.value = '';
    email_cadastro.value = '';
    password_cadastro.value = '';
    password_confirmar.value = '';
    name_id.value = '';
    nome_cadastro.focus();
    // login_email.value = '';
    // login_password.value = '';
}
function cadastrar(){
    background.style.display = 'none';
    tela_de_login.style.display = 'none';
    tela_de_cadatro.style.display = 'flex';
    login_email.value = '';
    login_password.value = '';
    login_email.focus();
    // nome_cadastro.value = '';
    // email_cadastro.value = '';
    // password_cadastro.value = '';
    // password_confirmar.value = '';
    // name_id.value = '';
}
function voltar(){
    background.style.display = 'block';
    tela_de_login.style.display = 'none';
    tela_de_cadatro.style.display = 'none';
    document.querySelector('div.opcoes-perfil').style.display = 'none';
    document.querySelector('div.background-materia').style.display = 'none';
    background_duvidas.style.display = 'none';
    background_redes.style.display = 'none';
    alterar_senha.style.display = 'none';
    confirmar_para_alterar.style.background = "transparent";
    nova_senha.style.background = "transparent";
    confirmar_nova_senha.style.background = "transparent";
    nome_cadastro.value = '';
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
        document.querySelector('div.perfil').style.display = 'flex';
        document.querySelector('div.login').style.display = 'none';
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
    if(nome_cadastro.value.length == 0 || email_cadastro.value.length == 0 || password_cadastro.value.length == 0 || password_confirmar.value.length == 0 || name_id.value.length == 0){ //se estiver faltando algum dado de cadastro, verifica qual é e mostra pro usuário
        tela_alert.style.display = 'block';
        texto_alert.innerText = `Todos os dados devem ser preenchidos corretamente!`;
        if(nome_cadastro.value.length == 0){nome_cadastro.style.background = "#fa7e7e65"}else{nome_cadastro.style.background = "transparent";}
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
                                nome_cadastro.value = ''; // os inputs de cadastro são limpos
                                email_cadastro.value = '';
                                password_cadastro.value = '';
                                password_confirmar.value = '';
                                name_id.value = '';
                                nome_cadastro.focus();
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
                                nome_cadastro.value = ''; // os inputs de cadastro são limpos
                                email_cadastro.value = '';
                                password_cadastro.value = '';
                                password_confirmar.value = '';
                                name_id.value = '';
                                nome_cadastro.focus();
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
    if(dados[0] == 'emailteste@gmail.com' && dados[1] == 'senhateste10'){
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
            document.querySelector('div.background-materia').style.display = 'block';
            background.style.display = 'none';
            document.querySelector('header.header-materias h2').innerText = 'Escolha a matéria para adicionar conteúdo';
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
        document.querySelector('div.background-materia').style.display = 'block';
        background.style.display = 'none';
        document.querySelector('header.header-materias h2').innerText = 'Matérias';
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
}
function redes(){
    background.style.display = 'none';
    background_redes.style.display = 'flex';
}

function aparecer_resposta0(){
    ap_perguntas0.style.display = 'none';
    sa_perguntas0.style.display = 'block';
    respostas0.style.display = 'block';
}
function sair_resposta0(){
    ap_perguntas0.style.display = 'block';
    sa_perguntas0.style.display = 'none';
    respostas0.style.display = 'none';
}

function aparecer_resposta1(){
    ap_perguntas1.style.display = 'none';
    sa_perguntas1.style.display = 'block';
    respostas1.style.display = 'block';
}
function sair_resposta1(){
    ap_perguntas1.style.display = 'block';
    sa_perguntas1.style.display = 'none';
    respostas1.style.display = 'none';
}

function aparecer_resposta2(){
    ap_perguntas2.style.display = 'none';
    sa_perguntas2.style.display = 'block';
    respostas2.style.display = 'block';
}
function sair_resposta2(){
    ap_perguntas2.style.display = 'block';
    sa_perguntas2.style.display = 'none';
    respostas2.style.display = 'none';
}

function aparecer_resposta3(){
    ap_perguntas3.style.display = 'none';
    sa_perguntas3.style.display = 'block';
    respostas3.style.display = 'block';
}
function sair_resposta3(){
    ap_perguntas3.style.display = 'block';
    sa_perguntas3.style.display = 'none';
    respostas3.style.display = 'none';
}

/* -------SEÇÃO HOME - PROFESSOR, ALUNO, DUVIDAS FREQUENTES OU REDES SOCIAIS--------- */

//-----------------------------PERFIL-------------------------------------

function perfil(){
    document.querySelector('div.opcoes-perfil').style.display = 'flex';
}

function sair_perfil(){
    dados[0] = '';
    dados[1] = '';
    login[0] = '';
    sit[0] = '';

    document.querySelector('div.login').style.display = 'flex';
    document.querySelector('div.opcoes-perfil').style.display = 'none';
    document.querySelector('div.perfil').style.display = 'none';
}

function senha_perfil(){
    alterar_senha.style.display = 'flex';
    alert_senha.style.display = 'flex';
    box_alterar.style.display = 'none';
}
function cancelar_alert(){
    alterar_senha.style.display = 'none';
}
function confirmar_alert(){
    alterar_senha.style.display = 'flex';
    alert_senha.style.display = 'none';
    box_alterar.style.display = 'flex';
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

function portugues(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.materia_portugues').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'PORTUGUÊS';
    materias[0] = 1
}
function matematica(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('div.materia_matematica').style.display = 'flex';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'MATEMÁTICA';
    materias[0] = 2
}
function biologia(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('div.materia_biologia').style.display = 'flex';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'BIOLOGIA';
    materias[0] = 3
}
function fisica(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('div.materia_fisica').style.display = 'flex';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'FÍSICA';
    materias[0] = 4
}
function quimica(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('div.materia_quimica').style.display = 'flex';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'QUÍMICA';
    materias[0] = 5
}
function filosofia(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('div.materia_filosofia').style.display = 'flex';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'FILOSOFIA';
    materias[0] = 6
}
function ingles(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('div.materia_ingles').style.display = 'flex';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'INGLÊS';
    materias[0] = 7
}
function espanhol(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('div.materia_espanhol').style.display = 'flex';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'ESPANHOL';
    materias[0] = 8
}
function geografia(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('div.materia_geografia').style.display = 'flex';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'GEOGRAFIA';
    materias[0] = 9
}
function historia(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('div.materia_historia').style.display = 'flex';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'HISTÓRIA';
    materias[0] = 10
}
function sociologia(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('div.materia_sociologia').style.display = 'flex';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'SOCIOLOGIA';
    materias[0] = 11
}
function ed_fisica(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('div.materia_ed_fisica').style.display = 'flex';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'EDUCAÇÃO FÍSICA';
    materias[0] = 12
}
function artes(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('div.materia_artes').style.display = 'flex';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'ARTES';
    materias[0] = 13
}
function literatura(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('div.materia_literatura').style.display = 'flex';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'LITERATURA';
    materias[0] = 14
}
function programacao(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('div.materia_programacao').style.display = 'flex';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'PROGRAMAÇÃO';
    materias[0] = 15
}
function photoshop(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('div.materia_photoshop').style.display = 'flex';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'PHOTOSHOP';
    materias[0] = 16
}
function meio_ambiente(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('div.materia_meio_ambiente').style.display = 'flex';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'MEIO AMBIENTE';
    materias[0] = 17
}
function ed_financeira(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('div.materia_ed_financeira').style.display = 'flex';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'EDUCAÇÃO FINANCEIRA';
    materias[0] = 18
}
function redacao(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('div.materia_redacao').style.display = 'flex';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'REDAÇÃO';
    materias[0] = 19
}
function enem(){
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    document.querySelector('div.background-materia').style.display = 'none';
    document.querySelector('div.materia_enem').style.display = 'flex';
    document.querySelector('h2.titulo-background-conteudo-materias').innerText = 'ENEM';
    materias[0] = 20
}


function voltar_materias(){
    document.querySelector('div.background-materia').style.display = 'block';
    document.querySelector('div.background-conteudo-materias').style.display = 'none';
    document.querySelector('div.materia_matematica').style.display = 'none'; 
    document.querySelector('div.materia_portugues').style.display = 'none';
    document.querySelector('div.materia_biologia').style.display = 'none';
    document.querySelector('div.materia_fisica').style.display = 'none';
    document.querySelector('div.materia_quimica').style.display = 'none';
    document.querySelector('div.materia_filosofia').style.display = 'none';
    document.querySelector('div.materia_ingles').style.display = 'none';
    document.querySelector('div.materia_espanhol').style.display = 'none';
    document.querySelector('div.materia_geografia').style.display = 'none';
    document.querySelector('div.materia_historia').style.display = 'none';
    document.querySelector('div.materia_sociologia').style.display = 'none';
    document.querySelector('div.materia_ed_fisica').style.display = 'none';
    document.querySelector('div.materia_artes').style.display = 'none';
    document.querySelector('div.materia_literatura').style.display = 'none';
    document.querySelector('div.materia_programacao').style.display = 'none';
    document.querySelector('div.materia_photoshop').style.display = 'none';
    document.querySelector('div.materia_meio_ambiente').style.display = 'none';
    document.querySelector('div.materia_ed_financeira').style.display = 'none';
    document.querySelector('div.materia_redacao').style.display = 'none';
    document.querySelector('div.materia_enem').style.display = 'none';

    materias[0] = 0
}

//-----------------------------conteudos-------------------------------------

function criar(){
    document.querySelector('div.adicionar-conteudo').style.display = 'flex';
    document.querySelector('button.criars').style.display = 'none';
}
function voltar_conteudo(){
    document.querySelector('div.adicionar-conteudo').style.display = 'none';
    document.querySelector('div.tela-conteudo').style.display = 'none';
    document.querySelector('div.background-conteudo-materias').style.display = 'flex';
    if(sit[1] == 1){
        document.querySelector('button.criars').style.display = 'block';
        
    }else{
        document.querySelector('button.criars').style.display = 'none';
    }
}


var j = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
function adicionar(){
    let titulo = document.querySelector('input#titulo');
    let sinopse = document.querySelector('input#sinopse');
    let cont = document.querySelector('textarea#cont');
    if(materias[0] == 1){
        j[0]++
        document.querySelector(`div.materia_portugues`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[0]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[0]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        titulosp.push(titulo.value);  
        sinopsesp.push(sinopse.value);
        contp.push(cont.value);
    }
    if(materias[0] == 2){
        j[1]++
        document.querySelector(`div.materia_matematica`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[1]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[1]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        titulosm.push(titulo.value);  
        sinopsesm.push(sinopse.value);
        contm.push(cont.value);
    }
    if(materias[0] == 3){
        j[2]++
        document.querySelector(`div.materia_biologia`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[2]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[2]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        titulosb.push(titulo.value);  
        sinopsesb.push(sinopse.value);
        contb.push(cont.value);
    }
    if(materias[0] == 4){
        j[3]++
        document.querySelector(`div.materia_fisica`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[3]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[3]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        titulosf.push(titulo.value);  
        sinopsesf.push(sinopse.value);
        contf.push(cont.value);
    }
    if(materias[0] == 5){
        j[4]++
        document.querySelector(`div.materia_quimica`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[4]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[4]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        titulosq.push(titulo.value);  
        sinopsesq.push(sinopse.value);
        contq.push(cont.value);
    }
    if(materias[0] == 6){
        j[5]++
        document.querySelector(`div.materia_filosofia`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[5]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[5]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        titulosfilo.push(titulo.value);  
        sinopsesfilo.push(sinopse.value);
        contfilo.push(cont.value);
    }
    if(materias[0] == 7){
        j[6]++
        document.querySelector(`div.materia_ingles`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[6]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[6]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        titulosi.push(titulo.value);  
        sinopsesi.push(sinopse.value);
        conti.push(cont.value);
    }
    if(materias[0] == 8){
        j[7]++
        document.querySelector(`div.materia_espanhol`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[7]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[7]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        titulose.push(titulo.value);  
        sinopsese.push(sinopse.value);
        conte.push(cont.value);
    }
    if(materias[0] == 9){
        j[8]++
        document.querySelector(`div.materia_geografia`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[8]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[8]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        titulosg.push(titulo.value);  
        sinopsesg.push(sinopse.value);
        contg.push(cont.value);
    }
    if(materias[0] == 10){
        j[9]++
        document.querySelector(`div.materia_historia`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[9]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[9]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        titulosh.push(titulo.value);  
        sinopsesh.push(sinopse.value);
        conth.push(cont.value);
    }
    if(materias[0] == 11){
        j[10]++
        document.querySelector(`div.materia_sociologia`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[10]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[10]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        tituloss.push(titulo.value);  
        sinopsess.push(sinopse.value);
        conts.push(cont.value);
    }
    if(materias[0] == 12){
        j[11]++
        document.querySelector(`div.materia_ed_fisica`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[11]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[11]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        titulosed.push(titulo.value);  
        sinopsesed.push(sinopse.value);
        conted.push(cont.value);
    }
    if(materias[0] == 13){
        j[12]++
        document.querySelector(`div.materia_artes`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[12]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[12]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        titulosa.push(titulo.value);  
        sinopsesa.push(sinopse.value);
        conta.push(cont.value);
    }
    if(materias[0] == 14){
        j[13]++
        document.querySelector(`div.materia_literatura`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[13]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[13]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        titulosl.push(titulo.value);  
        sinopsesl.push(sinopse.value);
        contl.push(cont.value);
    }
    if(materias[0] == 15){
        j[14]++
        document.querySelector(`div.materia_programacao`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[14]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[14]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        titulosprog.push(titulo.value);  
        sinopsesprog.push(sinopse.value);
        contprog.push(cont.value);
    }
    if(materias[0] == 16){
        j[15]++
        document.querySelector(`div.materia_photoshop`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[15]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[15]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        titulosph.push(titulo.value);  
        sinopsesph.push(sinopse.value);
        contph.push(cont.value);
    }
    if(materias[0] == 17){
        j[16]++
        document.querySelector(`div.materia_meio_ambiente`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[16]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[16]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        titulosma.push(titulo.value);  
        sinopsesma.push(sinopse.value);
        contma.push(cont.value);
    }
    if(materias[0] == 18){
        j[17]++
        document.querySelector(`div.materia_ed_financeira`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[17]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[17]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        titulosedf.push(titulo.value);  
        sinopsesedf.push(sinopse.value);
        contedf.push(cont.value);
    }
    if(materias[0] == 19){
        j[18]++
        document.querySelector(`div.materia_redacao`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[18]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[18]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        titulosr.push(titulo.value);  
        sinopsesr.push(sinopse.value);
        contr.push(cont.value);
    }
    if(materias[0] == 20){
        j[19]++;
        document.querySelector(`div.materia_enem`).innerHTML += `<button class="container-conteudo-materia" onclick="clicar_conteudo${j[19]}()"><div class="imagem-conteudo"></div><div class="texto-conteudo"><div class="titulo-texto-conteudo"><p class="p${j[19]}">${titulo.value}</p></div><div class="sinopse-texto-conteudo"><p>${sinopse.value}</p></div></div></button>`;
        titulosenem.push(titulo.value);  
        sinopsesenem.push(sinopse.value);
        contenem.push(cont.value);
    }
    voltar_conteudo()
    titulo.value = '';
    sinopse.value = '';
    cont.value = '';
}






function clicar_conteudo1(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 0
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
       
}
function clicar_conteudo2(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 1
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}
function clicar_conteudo3(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 2
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}

function clicar_conteudo4(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 3
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}

function clicar_conteudo5(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 4
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}

function clicar_conteudo6(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 5
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}

function clicar_conteudo7(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 6
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}

function clicar_conteudo8(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 7
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}

function clicar_conteudo9(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 8
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}

function clicar_conteudo10(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 9
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}
function clicar_conteudo11(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 10
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}
function clicar_conteudo12(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 11
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}
function clicar_conteudo13(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 12
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}
function clicar_conteudo14(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 13
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}
function clicar_conteudo15(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 14
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}
function clicar_conteudo16(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 15
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}
function clicar_conteudo17(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 16
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}
function clicar_conteudo18(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 17
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}
function clicar_conteudo19(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 18
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}
function clicar_conteudo20(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 19
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}
function clicar_conteudo21(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 20
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}
function clicar_conteudo22(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 21
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}
function clicar_conteudo23(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 22
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}
function clicar_conteudo24(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 23
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}
function clicar_conteudo25(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 24
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}
function clicar_conteudo26(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 25
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}
function clicar_conteudo27(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 26
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}
function clicar_conteudo28(){
    var titulo_tela = document.querySelector('h2.titulo-tela-conteudo');
    var sinopse_tela = document.querySelector('h4.sinopse-tela-conteudo');
    var conteudo_tela = document.querySelector('p.texto-tela-conteudo');
    var c = 27
    if(materias[0] == 1){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosp[c];sinopse_tela.innerText = sinopsesp[c];conteudo_tela.innerText = contp[c];
    }
    if(materias[0] == 2){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosm[c];sinopse_tela.innerText = sinopsesm[c];conteudo_tela.innerText = contm[c];
    } 
    if(materias[0] == 3){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosb[c];sinopse_tela.innerText = sinopsesb[c];conteudo_tela.innerText = contb[c];
    } 
    if(materias[0] == 4){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosf[c];sinopse_tela.innerText = sinopsesf[c];conteudo_tela.innerText = contf[c];
    } 
    if(materias[0] == 5){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosq[c];sinopse_tela.innerText = sinopsesq[c];conteudo_tela.innerText = contq[c];
    } 
    if(materias[0] == 6){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosfilo[c];sinopse_tela.innerText = sinopsesfilo[c];conteudo_tela.innerText = contfilo[c];
    } 
    if(materias[0] == 7){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosi[c];sinopse_tela.innerText = sinopsesi[c];conteudo_tela.innerText = conti[c];
    } 
    if(materias[0] == 8){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulose[c];sinopse_tela.innerText = sinopsese[c];conteudo_tela.innerText = conte[c];
    } 
    if(materias[0] == 9){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosg[c];sinopse_tela.innerText = sinopsesg[c];conteudo_tela.innerText = contg[c];
    } 
    if(materias[0] == 10){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosh[c];sinopse_tela.innerText = sinopsesh[c];conteudo_tela.innerText = conth[c];
    } 
    if(materias[0] == 11){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = tituloss[c];sinopse_tela.innerText = sinopsess[c];conteudo_tela.innerText = conts[c];
    } 
    if(materias[0] == 12){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosed[c];sinopse_tela.innerText = sinopsesed[c];conteudo_tela.innerText = conted[c];
    } 
    if(materias[0] == 13){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosa[c];sinopse_tela.innerText = sinopsesa[c];conteudo_tela.innerText = conta[c];
    } 
    if(materias[0] == 14){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosl[c];sinopse_tela.innerText = sinopsesl[c];conteudo_tela.innerText = contl[c];
    } 
    if(materias[0] == 15){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosprog[c];sinopse_tela.innerText = sinopsesprog[c];conteudo_tela.innerText = contprog[c];
    } 
    if(materias[0] == 16){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosph[c];sinopse_tela.innerText = sinopsesph[c];conteudo_tela.innerText = contph[c];
    } 
    if(materias[0] == 17){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosma[c];sinopse_tela.innerText = sinopsesma[c];conteudo_tela.innerText = contma[c];
    } 
    if(materias[0] == 18){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosedf[c];sinopse_tela.innerText = sinopsesedf[c];conteudo_tela.innerText = contedf[c];
    } 
    if(materias[0] == 19){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosr[c];sinopse_tela.innerText = sinopsesr[c];conteudo_tela.innerText = contr[c];
    } 
    if(materias[0] == 20){document.querySelector('div.background-conteudo-materias').style.display = 'none';document.querySelector('div.tela-conteudo').style.display = 'block';titulo_tela.innerText = titulosenem[c];sinopse_tela.innerText = sinopsesenem[c];conteudo_tela.innerText = contenem[c];
    }  
}


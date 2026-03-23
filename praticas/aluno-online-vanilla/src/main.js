import './style.css'

const matricula = document.querySelector('#matricula');
const senha     = document.querySelector('#senha');
const botao     = document.querySelector('button');

botao.addEventListener('click', function(e) {

    const matriculaErro = document.querySelector("#matriculaErro");
    const senhaErro     = document.querySelector("#senhaErro");

    matriculaErro.textContent = '';
    senhaErro.textContent = '';
    sucessoMatricula = false;
    sucessoSenha = false;

    if (matricula.value == '') {
        matriculaErro.textContent = "Matricula é obrigatória";
    }else{
        sucessoMatricula = true;
        console.log(sucessoMatricula)
    }

    if (parseInt(matricula.value) <= 0) {
        matriculaErro.textContent = "Matrícula inválida";
    }else{
        sucessoMatricula = true;
        console.log(sucessoMatricula)
    }

    if (senha.value == '') {
        senhaErro.textContent = "Senha é obrigatória";
        return;
    }

    if (senha.value.length < 8) {
        senhaErro.textContent = "Senha deve conter no mínimo 8 caracteres";
        return;
    }
});
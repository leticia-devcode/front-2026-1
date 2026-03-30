const matricula = document.querySelector('#matricula');
const senha     = document.querySelector('#senha');
const botao     = document.querySelector('button');


matricula.addEventListener('input', function() {
    if (matricula.value !== '' && matricula.value.length === 10) {
        matriculaErro.textContent = '';
    }
});

senha.addEventListener('input', function() {
    if (senha.value !== '' && senha.value.length >= 8) {
        senhaErro.textContent = '';
    }
});

botao.addEventListener('click', function() {

    const matriculaErro = document.querySelector("#matriculaErro");
    const senhaErro     = document.querySelector("#senhaErro");

    matriculaErro.textContent = '';
    senhaErro.textContent = '';
    let temErro = false;

    if (matricula.value == '') {
        matriculaErro.textContent = "Matricula é obrigatória";
        temErro = true;
    }

    if (parseInt(matricula.value) <= 0) {
        matriculaErro.textContent = "Matrícula inválida";
        temErro = true;
    }

    if (senha.value == '') {
        senhaErro.textContent = "Senha é obrigatória";
        temErro = true;
    }

    if (senha.value.length < 8) {
        senhaErro.textContent = "Senha deve conter no mínimo 8 caracteres";
        temErro = true;
    }


    if (!temErro) {
    window.location.href = "./home.html";
}
});
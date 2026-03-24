import './App.css';
import logo from './assets/learning.svg'
function App() {
  return (
    <div>
      {}
      <header>
        <img src={logo} alt="teste" />
        <h1>Aluno Online</h1>
      </header>
      <main>
        <label forLabel="matricula">Matricula</label>
        <input type="number" id="matricula" name="matricula" />
        <p id='matriculaErro'></p>
        <label forLabel="senha">Senha</label>
        <input type="password" id="senha" name="senha" />
        <p id='senhaErro'></p>
        <button type='submit'>Entrar</button>
      </main>
    </div>
  );
}

export default App;


/* 🚨NÃO ALTERAR A CLASSE 🚨 */

class Senai {
  constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
    this.codigo = codigo;
    this.cidade = cidade;
    this.anoConstrucao = anoConstrucao;
    this.qtdeCursos = qtdeCursos;

    this.idade = new Date().getFullYear() - anoConstrucao;
    this.statusFuncionamento = false;
  }

  abrirEscola() {
    this.statusFuncionamento = true;
  }

  fecharEscola() {
    this.statusFuncionamento = false;
  }
}

/* 🚨NÃO ALTERAR A CLASSE 🚨 */



/* SUGESTÃO DE LÓGICA PARA O DESENVOLVIMENTO */



/* ===== OBTER ELEMENTOS ===== */

const cidade = document.getElementById('cidade')
const coigo = document.getElementById('codigo')
const ano_construcao = document.getElementById('ano de construção')
const qtdeCursos = document.getElementById('quantidade de cursos');



/* ===== FUNÇÃO DE VALIDAÇÃO ===== */


/* ===== INSTANCIAR ESCOLA A ===== */

const escolaA = new Senai(603, 'Araraquara', 1968, 450);


/* ===== INSTANCIAR ESCOLA B ===== */

const escolaB = new Senai(13, 'Matão', 1700, 15);



/* ===== ABRIR ESCOLA ===== */

abrirEscola() 
  statusFuncionamento = true;
  console.log(`O SENAI ${this.cidade} está aberto.`);
  

/* ===== FECHAR ESCOLA ===== */

fecharEscola()
  statusFuncionamento = false;
  console.log(`O SENAI ${this.cidade} está fechado.`)
  


/* ===== RELATÓRIO DE COMPARAÇÃO ===== */


/* ===== NOVA CONSULTA ===== */



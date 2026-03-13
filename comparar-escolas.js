

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

const cidadeA = document.querySelector('.unidadeA__cidade')
const codigoA = document.querySelector('.unidadeA__codigo')
const ano_construcaoA = document.querySelector('.unidadeA__ano_de_construção')
const qtdeCursosA = document.querySelector('.unidadeA__quantidade_de_cursos')


const cidadeB = document.querySelector('.unidadeB__cidade')
const codigoB = document.querySelector('.unidadeB__codigo')
const ano_construcaoB = document.querySelector('.unidadeB__ano_de_construção')
const qtdeCursosB = document.querySelector('.unidadeB__quantidade_de_cursos')



const botao_intanciarA = document.querySelector('.unidadeA__instanciar')
const botao_intanciarB = document.querySelector('.unidadeB__instanciar')



if (cidadeA.value === "" || codigoA.value === "" || ano_construcaoA.value === "" || qtdeCursosA.value === "" )
    textContent = "Preencha o espaço"


 (cidadeB.value === "" || codigoB.value === "" || ano_construcaoB.value === "" || qtdeCursosB.value === "" )
  textContent = "Preencha o espaço"




/* ===== FUNÇÃO DE VALIDAÇÃO ===== */




/* ===== INSTANCIAR ESCOLA A ===== */

 escolaA = new Senai (
    cidadeA.value,
    codigoA.value,
    ano_construcaoA.value,
    qtdeCursosA.value
  
 );

/* ===== INSTANCIAR ESCOLA B ===== */
 escolaB = new Senai (
  cidadeB.value,
  codigoB.value,
  ano_construcaoB.value,
  qtdeCursosB.value

 );



/* ===== ABRIR ESCOLA ===== */

if (escolaA) {
  escolaA.abrirEscola()
return ("A escola está aberta")

}


if (escolaB) {
  escolaB.abrirEscola()
return ("A escola está aberta")

}

/* ===== FECHAR ESCOLA ===== */

if (escolaA) {
  escolaA.FecharEscola()
return ("A escola está fechada")

}


if (escolaB) {
  escolaB.fecharEscola()
return ("A escola está fechada")

}



  

/* ===== RELATÓRIO DE COMPARAÇÃO ===== */

const compararEscolas = (eA, eB) => {
  console.log(`> Comparando oferta de cursos: ${eA.cidade} vs ${eB.cidade}...`);

  if (eA.qtdeCursos > eB.qtdeCursos) {
      console.log(`Resultado: O SENAI ${eA.cidade} possui mais cursos`);
  } else if (eB.qtdeCursos > eA.qtdeCursos){
      console.log(`Resultado: O SENAI ${eB.cidade} possui mais cursos.`);
  } else {
      console.log(`Resultado: Ambas as unidades possuem a mesma quantidade de cursos.`);
  }
  console.log(`Status: ${eA.cidade} (${eA.qtdeCursos}) | ${eB.cidade} (${eB.qtdeCursos})\n`);
}


/* ===== NOVA CONSULTA ===== */

function limparCampos() {
  document.getElementById('').reset();
  document.getElementById('resultText').textContent = 'Preencha os campos".';
}



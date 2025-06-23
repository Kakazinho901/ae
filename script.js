const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você lida com novos desafios?",
        alternativas: [
            {
                texto: "Encaro de forma estratégica, criando um plano de ação para superar.",
                afirmacao: "Isso demonstra que você tem uma postura proativa frente aos desafios."
            },
            {
                texto: "Costumo ficar um pouco ansioso, mas tento resolver da melhor forma.",
                afirmacao: "Embora hesite, você tenta buscar soluções quando enfrenta dificuldades."
            }
        ]
    },
    {
        enunciado: "Quando você aprende algo novo, como você se sente?",
        alternativas: [
            {
                texto: "Sinto uma enorme satisfação e estou sempre em busca de novos aprendizados.",
                afirmacao: "Você é uma pessoa com grande motivação para aprender e evoluir constantemente."
            },
            {
                texto: "Me sinto um pouco perdido, mas tento absorver o máximo possível.",
                afirmacao: "Você tem uma boa disposição para aprender, mas pode sentir dificuldades no processo."
            }
        ]
    },
    {
        enunciado: "Você já usou alguma ferramenta de IA no seu dia a dia?",
        alternativas: [
            {
                texto: "Sim, utilizo diversas ferramentas como assistentes virtuais e recomendações personalizadas.",
                afirmacao: "Você tem familiaridade com o uso de tecnologias de IA e as utiliza de maneira ativa."
            },
            {
                texto: "Ainda não, mas tenho interesse em explorar como a IA pode me ajudar.",
                afirmacao: "Você está aberto a novas tecnologias e busca aprender mais sobre o assunto."
            }
        ]
    },
    {
        enunciado: "Como você enxerga o impacto da IA no mercado de trabalho?",
        alternativas: [
            {
                texto: "Acredito que ela pode gerar novos tipos de empregos e otimizar processos em várias áreas.",
                afirmacao: "Você vê a IA como uma ferramenta positiva que pode gerar novas oportunidades."
            },
            {
                texto: "Tenho receio de que a IA substitua empregos e cause um grande desemprego.",
                afirmacao: "Você tem uma visão mais cautelosa, preocupado com a automação do trabalho."
            }
        ]
    },
    {
        enunciado: "Você acredita que as ferramentas de IA devem ser usadas no ambiente educacional?",
        alternativas: [
            {
                texto: "Sim, acho que pode ajudar no ensino personalizado e na otimização do aprendizado.",
                afirmacao: "Você enxerga a IA como um aliado importante no processo educacional."
            },
            {
                texto: "Não, acredito que o uso de IA pode prejudicar o desenvolvimento de habilidades críticas nos alunos.",
                afirmacao: "Você é mais cauteloso quanto ao uso da IA na educação, preferindo métodos mais tradicionais."
            }
        ]
    },
    {
        enunciado: "Como você reagiria ao ver um colega utilizando IA para realizar todo o seu trabalho?",
        alternativas: [
            {
                texto: "Eu incentivaria o uso de IA, pois ela pode melhorar a eficiência e qualidade do trabalho.",
                afirmacao: "Você vê a IA como uma ferramenta valiosa e acredita que ela pode complementar o trabalho humano."
            },
            {
                texto: "Ficaria preocupado, pois poderia perder o valor do esforço individual e da aprendizagem.",
                afirmacao: "Você acredita que a IA deve ser usada como auxílio, mas sem substituir o trabalho pessoal."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

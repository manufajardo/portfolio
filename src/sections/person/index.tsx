import { ReactElement } from "react";

const bio = [
    'Olá, tudo bem? Meu nome é Emanuelly, mas você pode me chamar de Manu! Vim aqui compartilhar um pouquinho da minha história com você.',
    'Eu sempre soube que minha vocação era "pessoas". Com 7 anos, saía com minha avó para arrecadar alimentos e roupas para pessoas em situação de vulnerabilidade. Aos 10 anos, comecei a participar de um grupo semelhante aos escoteiros, chamado "desbravadores", onde promovíamos o cuidado ao meio ambiente e ações voluntárias em auxílio à comunidades carentes. Participei durante minha infância e adolescência de corais, onde visitávamos casas de repouso para idosos e lares de acolhimento infantil, a fim de levar ítens para suas necessidades básicas, alguns presentes e o principal: o acolhimento e a alegria que só a música é capaz de proporcionar.',
    'Por conta do meu fascínio pela mente humana, aos 12 anos decidi que iria cursar psicologia na faculdade. Lia livros de psicologia e sempre era a conselheira e confidente dos amigos. No último ano do ensino médio, após estudar muito e fazer diversos testes vocacionais, estava ainda mais certa de que iria cursar psicologia. Porém, lá dentro, sabia que havia um amor por design e tecnologia.',
    'Após me formar no ensino médio, imediatamente iniciei o curso de psicologia e a cada aprendizado novo, meu amor pelos fenômenos mentais apenas aumentava. Por outro lado, sentia muito que não houvesse uma área da tecnologia em que eu me identificasse.',
    'No entanto, em certo momento, estudando sobre tecnologia, descobri o UI/UX design. Descobri sem querer, uma área multidisciplinar que engloba fortemente a psicologia, e, concomitantemente, a tecnologia e design que sempre fizeram parte da minha vida. Uma área que requer senso estético, capacidade analítica, e, principalmente, foco em pessoas, empatia e capacidade de resolução de problemas. ',
    'A partir de tal momento, passei a estudar diariamente UI/UX, fiz cursos e completei a formação em UX design. Desenvolvi (e desenvolvo) projetos de UI/UX. Neste momento estou migrando de RH para UX/UI Design, a área onde tive a oportunidade de me encontrar por completo!',
]

export const Person = (): ReactElement => (
    <section id="person" className="section--card">
        <span className="section-card-title">Sobre mim</span>
            <div>
                {bio.map(paragraph=>(
                    <p key={paragraph}>{`${paragraph}\n\n`}</p>
                ))}
            </div>
        <span className="section-card-title">Eu e meus hobbies</span>
        <div className="hobbies-content">
            <img src="assets/picture-4.jpg" alt="Uma foto minha em um acampamento"/>
            <img src="assets/picture-1.jpg" alt="Uma fotinha minha"/>
            <img src="assets/picture-3.png" alt="Eu em um coral cantando"/>
            <img src="assets/picture-2.jpeg" alt="Eu e meu violão"/>
        </div>
    </section>
)

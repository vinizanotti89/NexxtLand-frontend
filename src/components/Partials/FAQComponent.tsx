'use client'
import React, { useState } from 'react';
import Icon from '../Adapters/Icon';

interface SubQuestion {
    question: string;
    answer: string;
    subQuestions?: SubQuestion[];
}

interface FAQComponentProps {
    questions: SubQuestion[];
    isSubQuestion?: boolean;
}

const FAQComponent: React.FC<FAQComponentProps> = ({ questions, isSubQuestion = false }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <ul className={`faq ${isSubQuestion ? 'faq-sub' : ''}`}>
            {questions.map((item, index) => (
                <li key={index} className="mb-4">
                    <button
                        onClick={() => toggleAnswer(index)}
                        className={`flex justify-between ${isSubQuestion ? 'bg-gray-200' : 'bg-black mb-4'} w-full px-4 py-3 focus:outline-none`}
                    >
                        <p className={`${isSubQuestion ? 'text-gray-700' : 'text-white'} font-bold text-start normal-case`}>
                            {item.question}
                        </p>
                        {activeIndex === index ? (
                            <Icon
                                icon="eva:arrow-down-fill"
                                rotate={4}
                                className="text-2xl text-white"
                            />
                        ) : (
                            <Icon
                                icon="eva:arrow-down-fill"
                                rotate={2}
                                className="text-2xl text-white"
                            />
                        )}
                    </button>
                    {activeIndex === index && (
                        <div className={`faq-answer ${isSubQuestion ? 'faq-answer-sub' : 'faq-answer-main'}`}>
                            <p className='mt-4 normal-case'>{item.answer}</p>
                            {item.subQuestions && (
                                <FAQComponent questions={item.subQuestions} isSubQuestion={true} />
                            )}
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

const MainFAQ: React.FC = () => {
    const questions: SubQuestion[] = [
        {
            question: 'Sobre nossas propriedades',
            answer: '',
            subQuestions: [
                {
                    question: "O que posso fazer no imóvel?",
                    answer:
                        "Isso depende muito de como é zoneado pelo condado/cidade. Isso será listado na seção Detalhes da Propriedade de cada lote em nosso site. Recomendamos que você confirme essas informações com o condado/cidade (ou HOA) antes de comprar.",
                },
                {
                    question: "O que a maioria das pessoas planeja fazer com suas terras?",
                    answer:
                        "Temos todos os diferentes tipos de compradores. Temos investidores que compram e mantêm ou revendem com lucro devido aos nossos preços baixos. Outros planejam construir, adicionar uma casa móvel ou morar em um trailer. Alguns desejam uma segunda casa ou um lugar para onde ir após a aposentadoria, que possam transmitir aos filhos ou netos. Muitos também planejam utilizar a propriedade como refúgio recreativo, de acampamento ou de caça, cultivar nela, sair da rede ou apenas para fugir da agitação da cidade grande.",
                },
                {
                    question: "E o zoneamento?",
                    answer:
                        "Cada área é diferente. Isso será listado na seção Detalhes da Propriedade de cada lote em nosso site.",
                },
                {
                    question: "E a água?",
                    answer:
                        "Cada área é diferente. Em algumas parcelas mais urbanas, a água da cidade está disponível para captação. Na maioria das propriedades rurais, você tem o direito de perfurar um poço doméstico em sua propriedade às suas próprias custas. Não há garantia de que a água esteja disponível em profundidades, quantidades ou qualidades específicas. Contate o condado e/ou um perfurador de poço licenciado para obter mais informações.",
                },
                {
                    question: "E os utilitários?",
                    answer:
                        "Cada área é diferente. Muitas vezes existe serviço de energia elétrica na região, que ainda deve ser estabelecido para o imóvel específico. Outras vezes, a propriedade necessita de energia alternativa, como solar ou eólica. A eliminação de águas residuais é geralmente realizada por sistemas sépticos individuais. Entre em contato com o condado e/ou fornecedores individuais para obter mais informações.",
                },
                {
                    question: "E o acesso?",
                    answer:
                        "Cada área é diferente. Algumas propriedades contam com acesso rodoviário mantido, algumas possuem estradas de terra, outras só têm acesso legal através de servidão e ainda outras possuem estradas de terra não escrituradas ou sem acesso legal, onde o acesso deve ser estabelecido pelo comprador. Isso será listado na seção Detalhes da Propriedade de cada lote em nosso site.",
                },
                {
                    question: "Como é a superfície da estrada de acesso?",
                    answer:
                        "Cada área é diferente. Isto pode ser visto nas imagens de satélite e estará listado na seção Detalhes da Propriedade de cada lote em nosso site. Recomendamos que confirme esta informação diretamente com o Concelho/Cidade antes de comprar e visitando o imóvel.",
                },
                {
                    question:
                        "Existe uma associação de proprietários ou alguma restrição a propriedade?",
                    answer:
                        "Normalmente não, mas isso estará listado na seção Detalhes da propriedade de cada lote em nosso site e recomendamos que você confirme essas informações com o condado/cidade/HOA diretamente antes de comprar.",
                },
                {
                    question: "Quais são os impostos anuais de propriedade / taxas de HOA?",
                    answer:
                        "Isso será listado na seção Detalhes da Propriedade de cada lote em nosso site e recomendamos que você confirme essas informações diretamente com o Condado/Cidade antes de comprar.",
                },
                {
                    question: "Tenho que construir dentro de um determinado prazo?",
                    answer:
                        "Normalmente, o comprador não é obrigado a um prazo para construir em sua propriedade. Recomendamos que você confirme essas informações diretamente com o condado/cidade ou HOA antes de comprar.",
                },
                {
                    question: "Os direitos minerais estão incluídos?",
                    answer:
                        "Os direitos minerais são normalmente excluídos em Escrituras anteriores na cadeia de titularidade. Portanto, normalmente não somos nossos proprietários e não podemos repassá-los para você. Você é livre para pesquisar mais sobre isso, pois não examinamos títulos de propriedade de direitos minerais antes da compra ou revenda, nem os consideramos em nossos preços.",
                },
            ],
        },
        {
            question: 'Due Diligence',
            answer: 'Você pode encontrar o endereço ou as coordenadas GPS na seção Detalhes da Propriedade de cada lote em nosso site. Em seguida, basta colocá-los no seu programa de mapas favorito no seu smartphone e seguir as instruções até o destino. Pedimos que entre em contato com o nosso time informando sua intenção de visita para receber mais instruções.',
        },
        {
            question: 'Informações de compra',
            answer: '',
            subQuestions: [
                {
                    question: "O que é a taxa de reserva e como funciona? ",
                    answer:
                        "A taxa de reserva é um valor de 200 dólares que permite ao interessado reservar um terreno por um período de 3 dias. Essa taxa é não reembolsável e deve ser paga para garantir que o terreno escolhido não seja adquirido por outra pessoa durante esse período. A reserva oferece tempo adicional para que você possa reunir os documentos necessários e finalizar os detalhes da compra. Após os 3 dias, se a compra não for concluída, o terreno será novamente disponibilizado para venda na plataforma.",
                },
                {
                    question:
                        "Posso fazer uma oferta e que tipos de descontos estão disponíveis?",
                    answer:
                        "SIM! Estamos aqui para vender terrenos rapidamente a preços de atacado, deixando nossos compradores o mais felizes possível. Se você está pronto para seguir em frente hoje e só precisa de um preço um pouco melhor para puxar o gatilho, sinta-se à vontade para nos fazer uma oferta. Apenas tenha em mente que nossas propriedades quase sempre têm preços significativamente abaixo do valor de mercado para movê-las rapidamente, portanto, certifique-se de que sua oferta reflita isso. Oferecemos descontos de vez em quando, portanto, fique atento a quaisquer promoções ou brindes.",
                },
                {
                    question: "Se eu financiar o terreno, a quem faço os pagamentos?",
                    answer:
                        "Seus pagamentos serão feitos à NexxLand LLC ou a uma de nossas subsidiárias.",
                },
                {
                    question: "Tenho a possiblidade de antecipar o pagamento das parcelas do meu terreno?",
                    answer:
                        "Você terá total liberdade para antecipar serus pagamentos. Todo e qualquer pagamento extra será aplicado diretamente ao principal, diminuindo seu saldo.",
                },
                {
                    question: "Posso usar o terreno enquanto pago por ele?",
                    answer:
                        "Não, o terreno deve ser pago integralmente e a Escritura registrada em seu nome antes de você começar a usá-lo. Desta forma evitaremos possíveis transtornos por violações do que são permitidas no terreno pela cidade/condado.",
                },
                {
                    question: "Posso revender meu imóvel e ter lucro?",
                    answer:
                        'Sim, você pode revender o imóvel quando estiver em seu nome. Embora não haja garantia de lucro de qualquer investimento em terrenos, a história provou que os preços imobiliários geralmente aumentam a longo prazo devido à inflação, ao crescimento populacional e a quantidade fixa de terrenos disponíveis.',
                },
                {
                    question:
                        "O terreno é um investimento mais seguro do que o mercado de ações?",
                    answer:
                        'Algumas das pessoas mais ricas do planeta começaram no mercado imobiliário, e por boas razões. A oferta é limitada e, à medida que a população mundial cresce, as terras rurais e não urbanizadas tornar-se-ão provavelmente ainda mais valiosas.',
                },
                {
                    question: "Por que algumas propriedades são mais caras que outras?",
                    answer:
                        "Os valores das propriedades são influenciados por muitos fatores, como oferta/demanda, localização, acesso, atributos, beleza e caráter. Ou seja, onde está localizado, a que distância da cidade, qual a oferta e procura na zona, a existência de energia, água, esgoto, tipo de acesso ao imóvel, o que confina com o imóvel, etc. a propriedade refere-se principalmente à vegetação e às vistas panorâmicas, etc. O caráter da propriedade refere-se principalmente à sua topografia. Por exemplo, o lote é plano, ondulado, íngreme, etc.",
                },
            ],
        },
        {
            question: 'Encerramento, Título, Seguro e Escrituras',
            answer: '',
            subQuestions: [
                {
                    question: "Preciso de um advogado ou agente imobiliário?",
                    answer:
                        "Simplificamos o processo de compra com contratos simples e fáceis de ler. Claro, encorajamos você a contratar um profissional se achar necessário, mas fizemos o nosso melhor para tornar o processo fácil de ser compreendido por qualquer pessoa.",
                },
                {
                    question: "Que tipo de documentos vou receber após a compra?",
                    answer:
                        "Nosso padrão é fornecer Escrituras de Garantia Especial, assegurando que a propriedade esteja livre de problemas de título durante o período que a detivemos. Para maior segurança, oferecemos a opção de uma verificação independente por uma empresa de títulos e seguro de título, permitindo que você escolha o nível de proteção sobre escrituras que melhor atende suas necessidades. Recomendamos que investidores estrangeiros consultem advogados de real estate e/ou agentes de títulos nos EUA para uma melhor compreensão das implicações legais.",
                },
                {
                    question: "Quanto tempo demora para receber minha escritura?",
                    answer:
                        "Embora normalmente façamos isso muito mais cedo, levará em média 30 dias desde o pagamento final até o arquivamento. Assim que o condado registrar a Escritura, ele nos enviará uma cópia gravada que enviaremos a você – o novo proprietário! Mas fique tranquilo, nossa equipe fará esclarecimentos durante o processo de negociação.",
                },
            ],
        },
        {
            question: "Quais são os tipos de propriedades que a NexxLand vende?",
            answer:
                "Oferecemos inicialmente terrenos residenciais para investimento na Flórida. Existe ainda a possibilidade de compra de terreno combinada com construção de casa. Para saber mais sobre esta modalidade de compra de lote com casa, consulte nossos especialistas.",
        },
        {
            question: "Onde estão localizados os terrenos que vocês vendem?",
            answer:
                "Nossos terrenos estão localizados nas regiões mais valorizadas e promissoras da Flórida.",
        },
        {
            question: "Como posso saber mais sobre as propriedades disponíveis?",
            answer:
                "Visite nosso site para ver detalhes e fotos, e/ou entre em contato com nossa equipe para consultas personalizadas.",
        },
        {
            question:
                "Quais são as etapas do processo de compra de terrenos com a NexxLand?",
            answer:
                "O processo envolve: seleção do terreno, análise e verificação de documentos, assinatura do contrato de compra e venda, e finalização da compra, com a transferência de propriedade (se for uma compra em cash).",
        },
        {
            question:
                "Quais são os requisitos para comprar um terreno nos Estados Unidos?",
            answer:
                "Você precisa de um passaporte válido, comprovação de capacidade financeira, e pode ser necessário um ITIN (Individual Taxpayer Identification Number). Para operações de câmbio, pode ser requerido um cadastro simples e documentos como o contrato de compra e venda.",
        },
        {
            question: "A NexxLand oferece parcelamento próprio para a compra de terrenos?",
            answer:
                "Sim, oferecemos opções de parcelamento para facilitar a compra do seu terreno.",
        },
        {
            question: "Como posso entrar em contato com a equipe da NexxLand?",
            answer:
                "Você pode nos contatar pelo nosso site, e-mail, telefone ou redes sociais. Nossos Consultores estão prontos para ajudar.",
        },
        {
            question:
                "Quanto tempo leva para concluir o processo de compra de um terreno com a NexxLand?",
            answer:
                "O processo pode levar de alguns dias a algumas semanas, dependendo do tipo da compra e da finalização dos documentos.",
        },
        {
            question:
                "A NexxLand recomenda alguns profissionais especializados em títulos e escrituras?",
            answer:
                "Sim, entre em contato com nosso suporte e teremos o prazer de ajudar você com isso também.",
        },
    ];

    return (
        <div>
            <FAQComponent questions={questions} />
        </div>
    );
};

export default MainFAQ;

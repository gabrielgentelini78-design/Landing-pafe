import React from 'react'
import SectionTitle from './components/SectionTitle'
import Accordion from './components/Accordion'
import CTAButton from './components/CTAButton'

const App = () => {
  const paraVoceItems = [
    'Quer entender exames, sintomas e escolhas terapêuticas',
    'Busca saúde e performance de forma segura e sustentável',
    'Valoriza acompanhamento médico individual',
    'Prefere decisões baseadas em evidência, não modismos'
  ]

  const naoParaVoceItems = [
    'Procura protocolo pronto para copiar',
    'Quer resultado rápido a qualquer custo',
    'Não deseja acompanhamento',
    'Busca promessas milagrosas'
  ]

  const motivos = [
    'Seguem protocolos genéricos',
    'Tomam decisões sem entender riscos',
    'Pulam etapas importantes',
    'Não têm acompanhamento adequado'
  ]

  const etapas = [
    {
      number: '1',
      title: 'Análise inicial profunda',
      bullets: [
        'Avaliação detalhada do seu contexto',
        'Levantamento de histórico, objetivos e obstáculos',
        'Identificação de erros comuns e gargalos invisíveis'
      ]
    },
    {
      number: '2',
      title: 'Construção da estratégia individual',
      bullets: [
        'Definição de um plano feito para você, não genérico',
        'Priorização do que realmente importa',
        'Direcionamento claro do que fazer, evitar e ajustar'
      ]
    },
    {
      number: '3',
      title: 'Acompanhamento contínuo',
      bullets: [
        'Revisões periódicas',
        'Ajustes estratégicos conforme evolução',
        'Suporte para tomada de decisão e correção de rota'
      ]
    }
  ]

  const incluiItems = [
    'Avaliação clínica individualizada',
    'Análise detalhada de exames',
    'Discussão de sintomas, histórico e objetivos',
    'Estratégia personalizada baseada em evidência',
    'Acompanhamento durante o período contratado',
    'Orientação clara, ética e responsável'
  ]

  const naoIncluiItems = [
    'Protocolos prontos',
    'Promessas de resultados',
    'Intervenções sem respaldo científico'
  ]

  const etapasLista = [
    'Você entra na lista de espera',
    'Preenche um formulário detalhado',
    'Seu perfil é avaliado',
    'Caso haja alinhamento, você recebe um convite para a consultoria'
  ]

  const faqItems = [
    {
      title: 'Como funciona a consultoria?',
      content: 'O acompanhamento é individualizado, com etapas claras e foco em decisões conscientes.'
    },
    {
      title: 'É para quem está começando ou só para avançados?',
      content: 'Para ambos. O plano é ajustado ao seu contexto e ao seu momento atual.'
    },
    {
      title: 'Eu preciso ter exames recentes?',
      content: 'Não necessariamente. Avaliamos caso a caso e orientamos quais exames são necessários.'
    },
    {
      title: 'O que eu vou ganhar com esse acompanhamento?',
      content: 'Clareza, estratégia e segurança para tomar decisões melhores sobre seu corpo.'
    },
    {
      title: 'Quanto tempo dura o acompanhamento?',
      content: 'O período é definido conforme suas necessidades e objetivos.'
    },
    {
      title: 'Tem suporte por WhatsApp?',
      content: 'Há canais de suporte alinhados ao formato contratado.'
    },
    {
      title: 'Se eu não for selecionado(a), o que acontece?',
      content: 'Você permanece na lista de espera e recebe novas oportunidades quando surgirem.'
    }
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-10 sm:pt-16">
        <section
          id="hero"
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 p-8 text-center shadow-xl sm:p-12"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 animate-fade-slide">
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-gold-300/40 bg-neutral-900/70 shadow-glow">
              <span className="absolute text-6xl font-semibold text-gold-300/20">GG</span>
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-gold-300/50 bg-neutral-950 text-sm font-semibold uppercase tracking-[0.4em] text-gold-300">
                GG
              </div>
            </div>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Consultoria individualizada para quem quer entender o próprio corpo e tomar decisões melhores —{' '}
              <span className="text-gold-300">sem protocolos prontos.</span>
            </h1>
            <p className="text-sm text-neutral-300 sm:text-base">
              Um acompanhamento focado em contexto clínico, evidência científica e decisões conscientes. Cada pessoa é única. O cuidado
              também precisa ser.
            </p>
            <CTAButton
              label="QUERO SOLICITAR MINHA VAGA →"
              href="https://tally.so/r/Gxpjdk"
            />
          </div>
        </section>

        <section className="mt-10 text-center text-xs uppercase tracking-[0.4em] text-neutral-500">
          <div className="flex flex-col items-center gap-2">
            <span>Continue navegando</span>
            <span className="text-gold-300">⌄</span>
          </div>
        </section>

        <section id="para-voce" className="mt-16 space-y-8 sm:mt-24">
          <SectionTitle
            align="center"
            title="Essa consultoria é para você?"
            subtitle=""
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-neutral-900/70 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-gold-300">Para você</h3>
              <ul className="mt-4 space-y-3 text-sm text-neutral-200">
                {paraVoceItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold-300/20 text-xs text-gold-300">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-neutral-900/70 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-red-300">Não é para você</h3>
              <ul className="mt-4 space-y-3 text-sm text-neutral-200">
                {naoParaVoceItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500/15 text-xs text-red-300">
                      ✕
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="porque" className="mt-16 space-y-8 sm:mt-24">
          <SectionTitle
            align="center"
            title={
              <>
                Por que essa consultoria <span className="text-gold-300">existe:</span>
              </>
            }
            subtitle="Hoje, informação sobre saúde está em todo lugar. Mas contexto clínico verdadeiro é raro. Muitos pacientes"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {motivos.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900/60 p-4 text-sm text-neutral-200"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold-300/50 text-gold-300">
                  !
                </span>
                {item}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gold-200">
            Isso gera frustração, insegurança e, muitas vezes, resultados ruins
          </p>
          <div className="flex justify-center">
            <CTAButton
              label="QUERO SOLICITAR MINHA VAGA →"
              href="https://tally.so/r/Gxpjdk"
            />
          </div>
        </section>

        <section id="como-funciona" className="mt-16 space-y-8 sm:mt-24">
          <SectionTitle
            align="center"
            title={
              <>
                Como funciona o <span className="text-gold-300">acompanhamento:</span>
              </>
            }
            subtitle="O processo é estruturado em etapas claras, sem improviso:"
          />
          <div className="space-y-5">
            {etapas.map((etapa) => (
              <div
                key={etapa.title}
                className="rounded-3xl border border-white/10 bg-neutral-900/70 p-6 backdrop-blur"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-300 text-sm font-semibold text-neutral-950">
                    {etapa.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{etapa.title}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-200">
                      {etapa.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-neutral-300">
            O foco não é volume de tarefas, mas <span className="text-gold-300">clareza, consistência e execução correta</span>
          </p>
        </section>

        <section id="incluido" className="mt-16 space-y-8 sm:mt-24">
          <SectionTitle
            align="center"
            title={
              <>
                O que está <span className="text-gold-300">incluído:</span>
              </>
            }
          />
          <div className="space-y-4">
            {incluiItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-gold-300/30 bg-neutral-900/70 p-4 text-sm text-neutral-200"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-300 text-sm font-semibold text-neutral-950">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="nao-esta" className="mt-16 space-y-8 sm:mt-24">
          <SectionTitle
            align="center"
            title={
              <>
                O que <span className="text-gold-300">não está:</span>
              </>
            }
          />
          <div className="space-y-4">
            {naoIncluiItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900/70 p-4 text-sm text-neutral-300"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-sm text-neutral-400">
                  ✕
                </span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="etapas" className="mt-16 space-y-8 sm:mt-24">
          <SectionTitle
            align="center"
            title={
              <>
                Quais as <span className="text-gold-300">etapas:</span>
              </>
            }
          />
          <div className="space-y-4">
            {etapasLista.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-neutral-900/70 p-4 text-sm text-neutral-200"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-300 text-sm font-semibold text-neutral-950">
                  {index + 1}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-neutral-300">
            As vagas são limitadas para garantir qualidade no acompanhamento.
          </p>
          <div className="flex justify-center">
            <CTAButton
              label="QUERO SOLICITAR MINHA VAGA →"
              href="https://tally.so/r/Gxpjdk"
            />
          </div>
        </section>

        <section id="sobre" className="mt-16 space-y-10 sm:mt-24">
          <SectionTitle align="center" title="Sobre mim" />
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="flex items-center justify-center">
              <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-gold-300/40 bg-neutral-900/60 shadow-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,193,79,0.15),_transparent_70%)]" />
                <div className="relative z-10 flex h-full w-full items-center justify-center text-6xl font-semibold text-gold-300/30">
                  GG
                </div>
              </div>
            </div>
            <div className="space-y-4 text-sm text-neutral-200">
              <p>
                Sou Gabriel Gentelini, estudante do último ano de Medicina, e estudo metabologia, hipertrofia e performance de forma contínua
                e aprofundada há mais de 4 anos.
              </p>
              <p>
                Criei essa consultoria para pessoas que já tentaram vários atalhos, seguiram protocolos prontos e ainda assim não chegaram ao
                resultado esperado.
              </p>
              <p>
                Aqui, você não encontra soluções genéricas. O foco é acompanhamento próximo, estratégia individualizada e decisões baseadas em
                evidência científica e contexto real.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="mt-16 space-y-8 sm:mt-24">
          <SectionTitle align="center" title="Perguntas Frequentes" />
          <Accordion items={faqItems} />
        </section>

        <section
          id="cta"
          className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 p-10 text-center shadow-xl sm:mt-24"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-gold-300/40 bg-neutral-900 text-lg font-semibold text-gold-300">
              GG
            </div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Pronto para um <span className="text-gold-300">acompanhamento diferente?</span>
            </h2>
            <p className="text-sm text-neutral-300">
              Entre na lista de espera e dê o primeiro passo para entender seu corpo e tomar decisões melhores.
            </p>
            <CTAButton
              label="QUERO SOLICITAR MINHA VAGA →"
              href="https://tally.so/r/Gxpjdk"
            />
          </div>
        </section>

        <footer className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-neutral-500">
          © 2026 Gabriel Gentelini. Todos os direitos reservados.
        </footer>
      </div>
    </div>
  )
}

export default App

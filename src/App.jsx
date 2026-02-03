import React from 'react'
import SectionTitle from './components/SectionTitle'
import Card from './components/Card'
import Accordion from './components/Accordion'
import CTAButton from './components/CTAButton'

const App = () => {
  const paraVoceCards = [
    {
      icon: '01',
      title: 'Não sabe por onde começar',
      description: 'Quer clareza sobre prioridades e direção para estruturar o seu negócio.'
    },
    {
      icon: '02',
      title: 'Precisa vender com consistência',
      description: 'Busca um plano para atrair clientes e converter com previsibilidade.'
    },
    {
      icon: '03',
      title: 'Quer posicionamento premium',
      description: 'Deseja se destacar e cobrar o que realmente vale o seu trabalho.'
    }
  ]

  const porqueConsultoria = [
    {
      icon: '✓',
      title: 'Visão estratégica e prática',
      description: 'Entenda o que ajustar agora e como crescer com segurança.'
    },
    {
      icon: '✓',
      title: 'Direcionamento personalizado',
      description: 'Nada de receita pronta: a estratégia é feita para a sua realidade.'
    },
    {
      icon: '✓',
      title: 'Acompanhamento direto',
      description: 'Você não fica sozinha. Caminhamos juntos nas decisões-chave.'
    }
  ]

  const passos = [
    {
      icon: '1',
      title: 'Diagnóstico completo',
      description: 'Mapeamos negócio, objetivos, público e diferenciais.'
    },
    {
      icon: '2',
      title: 'Plano de ação claro',
      description: 'Entregamos um roteiro com metas, ações e foco em resultados.'
    },
    {
      icon: '3',
      title: 'Implementação guiada',
      description: 'Você coloca em prática com apoio e ajustes contínuos.'
    }
  ]

  const inclui = [
    {
      icon: '★',
      title: 'Sessões individuais ao vivo',
      description: 'Encontros estratégicos para orientar cada fase do projeto.'
    },
    {
      icon: '★',
      title: 'Plano de posicionamento',
      description: 'Clareza de mensagem, diferenciais e proposta de valor.'
    },
    {
      icon: '★',
      title: 'Roteiro de vendas',
      description: 'Scripts, ofertas e próximos passos para converter melhor.'
    }
  ]

  const naoInclui = [
    {
      icon: '✕',
      title: 'Gestão operacional diária',
      description: 'A consultoria guia, mas não executa sua rotina.'
    },
    {
      icon: '✕',
      title: 'Pacotes genéricos',
      description: 'Nada de fórmulas prontas ou estratégias copy-paste.'
    },
    {
      icon: '✕',
      title: 'Resultados instantâneos',
      description: 'O crescimento é construído com consistência e clareza.'
    }
  ]

  const faqItems = [
    {
      title: 'Para quem é essa consultoria?',
      content: 'Para profissionais e negócios que querem estruturar posicionamento, vendas e crescimento com foco.'
    },
    {
      title: 'Qual a duração do processo?',
      content: 'A consultoria é personalizada, mas normalmente ocorre entre 4 e 8 semanas.'
    },
    {
      title: 'Posso fazer mesmo sem equipe?',
      content: 'Sim. A estratégia é desenhada para o seu momento e capacidade de execução.'
    }
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-5xl px-5 pb-20 pt-10 sm:pt-16">
        <section className="space-y-6 rounded-3xl border border-gold-300/30 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 p-6 shadow-lg sm:p-10">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-300/50 bg-gold-300/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-gold-300">
              Consultoria Gentelini
            </span>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Destrave o crescimento do seu negócio com estratégia, posicionamento e vendas.
            </h1>
            <p className="text-sm text-neutral-300 sm:text-base">
              Uma consultoria individual para te ajudar a organizar, vender com clareza e construir um negócio sólido e lucrativo.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton label="Quero me inscrever" />
            <CTAButton label="Quero conversar" variant="outline" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-4 text-xs text-neutral-300">
              Atendimento premium e individual.
            </div>
            <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-4 text-xs text-neutral-300">
              Estratégia feita sob medida.
            </div>
            <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-4 text-xs text-neutral-300">
              Foco em resultados e consistência.
            </div>
          </div>
        </section>

        <section className="mt-16 space-y-8">
          <SectionTitle
            eyebrow="Essa consultoria é para você?"
            title="Se você se identifica com algum desses pontos, é hora de agir."
            subtitle="Uma jornada para quem quer sair da estagnação e crescer com direção."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {paraVoceCards.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-8">
          <SectionTitle
            eyebrow="Por que uma consultoria"
            title="Você precisa de estratégia, não de mais informação."
            subtitle="O plano certo encurta o caminho e evita decisões que custam caro."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {porqueConsultoria.map((card) => (
              <Card key={card.title} {...card} tone="highlight" />
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-8">
          <SectionTitle
            eyebrow="Como funciona"
            title="Um processo estruturado em 3 passos."
            subtitle="Clareza do início ao fim para você executar com segurança."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {passos.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-8">
          <SectionTitle
            eyebrow="O que está incluído"
            title="Tudo o que você precisa para crescer com consistência."
            subtitle="Materiais, direcionamento e suporte para acelerar o resultado."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {inclui.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-8">
          <SectionTitle
            eyebrow="O que não está"
            title="Sem atalhos, sem promessas vazias."
            subtitle="A consultoria é estratégica e exige execução conjunta."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {naoInclui.map((card) => (
              <Card key={card.title} {...card} tone="highlight" />
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-8">
          <SectionTitle
            eyebrow="FAQ"
            title="Dúvidas frequentes"
            subtitle="As respostas para você tomar a melhor decisão."
          />
          <Accordion items={faqItems} />
        </section>

        <section className="mt-16 rounded-3xl border border-gold-300/30 bg-gradient-to-b from-neutral-900 to-neutral-950 p-8 text-center sm:p-12">
          <SectionTitle
            align="center"
            eyebrow="Pronto para começar?"
            title="Construa o crescimento que seu negócio merece."
            subtitle="Clique abaixo e receba todas as informações para iniciar a consultoria."
          />
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton label="Quero me inscrever" />
            <CTAButton label="Falar no WhatsApp" variant="outline" />
          </div>
        </section>

        <footer className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-neutral-400">
          © 2024 Consultoria Gentelini. Todos os direitos reservados.
        </footer>
      </div>
    </div>
  )
}

export default App

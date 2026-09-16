/**
 * VRUM APP — JAVASCRIPT DINÂMICO
 * Gerencia a alternância entre Modo Dono (B2C) e Modo Parceiro (B2B)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elementos da Chave Seletora
  const btnOwner = document.getElementById('toggle-owner');
  const btnPartner = document.getElementById('toggle-partner');

  // Elementos Dinâmicos da Hero
  const heroTag = document.getElementById('hero-audience-tag');
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroCta = document.getElementById('hero-cta-btn');
  const painText = document.getElementById('pain-text');
  const solutionText = document.getElementById('solution-text');

  // Elementos do Prontuário Digital
  const recordPlate = document.getElementById('record-plate-num');
  const recordTitle = document.getElementById('record-title');
  const recordMeta = document.getElementById('record-meta');
  const recordTimeline = document.getElementById('record-timeline');
  const recordVerdictSeal = document.getElementById('record-verdict-seal');
  const recordVerdictNote = document.getElementById('record-verdict-note');

  // Dados dos Estados
  const contentState = {
    dono: {
      mode: 'dono',
      audience: '🚗 Proprietários & Entusiastas',
      title: 'O histórico do seu carro vale dinheiro. <span style="display:block;">Prove que você cuida e venda por mais.</span>',
      subtitle: 'O fim das notas fiscais perdidas. O primeiro prontuário digital automotivo para quem não quer perder dinheiro na revenda.',
      ctaText: 'Baixe o App Gratuitamente',
      ctaHref: '#download',
      pain: 'A palavra do dono não basta na revenda. Notas somem, o comprador desconfia e joga o valor lá embaixo.',
      solution: 'Quem fez o serviço prova com o Vrum. Prontuário digital direto da oficina que garante a valorização.',
      recordPlate: 'RVM 2A26',
      recordTitle: 'Toyota Corolla XEi 2.0 — 2022',
      recordMeta: '3 registros verificados · 1 dono',
      recordTimeline: `
        <li class="record-timeline-item verified">
          <div class="record-item-date">14 mar 2026 · 38.420 km</div>
          <div class="record-item-desc">Troca de óleo e filtros</div>
          <div class="record-item-proofs">
            <em>Foto</em><em>NF-e</em><em>Verificado</em>
          </div>
        </li>
        <li class="record-timeline-item verified">
          <div class="record-item-date">02 jul 2026 · 44.910 km</div>
          <div class="record-item-desc">Pastilhas e discos dianteiros</div>
          <div class="record-item-proofs">
            <em>Foto</em><em>NF-e</em><em>Local</em>
          </div>
        </li>
        <li class="record-timeline-item verified">
          <div class="record-item-date">21 ago 2026 · 47.300 km</div>
          <div class="record-item-desc">Laudo cautelar aprovado</div>
          <div class="record-item-proofs">
            <em>Laudo</em><em>Sem sinistro</em>
          </div>
        </li>
        <li class="record-timeline-item">
          <div class="record-item-date">Próximo</div>
          <div class="record-item-desc">Revisão preventiva de 50.000 km</div>
        </li>
      `,
      sealText: 'Verificado VRUM',
      sealNote: 'Pronto para anunciar com prova'
    },
    parceiro: {
      mode: 'parceiro',
      audience: '🏢 Lojas, Mecânicos, Funilarias, Guinchos & Estéticas',
      title: 'Sua qualidade comprovada. <span style="display:block;">Mais autoridade para o seu negócio, vendas mais rápidas.</span>',
      subtitle: 'Entregue um certificado digital validado. Fidelize clientes e gire seu estoque com o selo de procedência que o mercado exige.',
      ctaText: 'Quero ser um Parceiro Verificado',
      ctaHref: '#download',
      pain: 'Serviço de excelência sem comprovação. O cliente desconfia e pressiona a margem da oficina ou loja.',
      solution: 'Prontuário digital que blinda contra fraudes. Mais autoridade técnica e giro 40% mais rápido de estoque.',
      recordPlate: 'VRM 2026',
      recordTitle: 'O.S. #8842 • Registro de Entrada e Certificação',
      recordMeta: 'Centro Automotivo & Loja Homologada Vrum',
      recordTimeline: `
        <li class="record-timeline-item verified">
          <div class="record-item-date">Admissão do Veículo</div>
          <div class="record-item-desc">Check-in digital e inspeção 120 itens</div>
          <div class="record-item-proofs">
            <em>Laudo</em><em>Fotos</em><em>CNPJ</em>
          </div>
        </li>
        <li class="record-timeline-item verified">
          <div class="record-item-date">Execução no Box</div>
          <div class="record-item-desc">Substituição de peças originais com NF-e</div>
          <div class="record-item-proofs">
            <em>Elevador</em><em>NF-e</em><em>KM</em>
          </div>
        </li>
        <li class="record-timeline-item verified">
          <div class="record-item-date">Emissão de Selo</div>
          <div class="record-item-desc">Prontuário oficial emitido e entregue</div>
          <div class="record-item-proofs">
            <em>Selo Ativo</em><em>QR Code</em>
          </div>
        </li>
        <li class="record-timeline-item">
          <div class="record-item-date">Pós-venda Ativo</div>
          <div class="record-item-desc">Lembrete automático para retorno do cliente</div>
        </li>
      `,
      sealText: 'Parceiro Verificado VRUM',
      sealNote: 'Blindado contra fraudes e garantia ativa'
    }
  };

  // Função para mudar o modo
  function applyMode(modeKey) {
    const data = contentState[modeKey];
    if (!data) return;

    // Atualiza o atributo data-mode no <html>
    document.documentElement.setAttribute('data-mode', data.mode);

    // Alterna a classe ativa nos botões do toggle
    if (modeKey === 'dono') {
      btnOwner.classList.add('active');
      btnPartner.classList.remove('active');
    } else {
      btnPartner.classList.add('active');
      btnOwner.classList.remove('active');
    }

    // Transição suave no texto
    const textContainer = document.querySelector('.hero-text-col');
    if (textContainer) {
      textContainer.style.opacity = '0.6';
      textContainer.style.transform = 'translateY(4px)';
      textContainer.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

      setTimeout(() => {
        heroTag.innerHTML = data.audience;
        heroTitle.innerHTML = data.title;
        heroSubtitle.textContent = data.subtitle;
        heroCta.textContent = data.ctaText;
        heroCta.setAttribute('href', data.ctaHref);
        painText.textContent = data.pain;
        solutionText.textContent = data.solution;

        // Prontuário
        recordPlate.textContent = data.recordPlate;
        recordTitle.textContent = data.recordTitle;
        recordMeta.textContent = data.recordMeta;
        recordTimeline.innerHTML = data.recordTimeline;
        recordVerdictSeal.innerHTML = `<span class="seal-mini-badge">✓</span> ${data.sealText}`;
        recordVerdictNote.textContent = data.sealNote;

        textContainer.style.opacity = '1';
        textContainer.style.transform = 'translateY(0)';
      }, 120);
    }
  }

  // Eventos de clique
  if (btnOwner) {
    btnOwner.addEventListener('click', () => applyMode('dono'));
  }
  if (btnPartner) {
    btnPartner.addEventListener('click', () => applyMode('parceiro'));
  }

  // Inicializa com o estado 'dono'
  applyMode('dono');
});

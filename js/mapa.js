Chart.register(ChartDataLabels);

    // Dados de transporte e detalhes do estado
 const transportData = {
  "AC": { "Rodoviário": 40, "Ferroviário": 5, "Aquaviário": 50, "Aéreo": 3, "Dutoviário": 2 },
  "AL": { "Rodoviário": 68, "Ferroviário": 10, "Aquaviário": 15, "Aéreo": 5, "Dutoviário": 2 },
  "AP": { "Rodoviário": 40, "Ferroviário": 3, "Aquaviário": 55, "Aéreo": 1, "Dutoviário": 1 },
  "AM": { "Rodoviário": 20, "Ferroviário": 2, "Aquaviário": 75, "Aéreo": 2, "Dutoviário": 1 },
  "BA": { "Rodoviário": 60, "Ferroviário": 15, "Aquaviário": 20, "Aéreo": 3, "Dutoviário": 2 },
  "CE": { "Rodoviário": 70, "Ferroviário": 10, "Aquaviário": 15, "Aéreo": 3, "Dutoviário": 2 },
  "DF": { "Rodoviário": 80, "Ferroviário": 0, "Aquaviário": 0, "Aéreo": 15, "Dutoviário": 5 },
  "ES": { "Rodoviário": 55, "Ferroviário": 20, "Aquaviário": 20, "Aéreo": 3, "Dutoviário": 2 },
  "GO": { "Rodoviário": 65, "Ferroviário": 20, "Aquaviário": 5, "Aéreo": 5, "Dutoviário": 5 },
  "MA": { "Rodoviário": 50, "Ferroviário": 25, "Aquaviário": 20, "Aéreo": 3, "Dutoviário": 2 },
  "MT": { "Rodoviário": 60, "Ferroviário": 25, "Aquaviário": 5, "Aéreo": 5, "Dutoviário": 5 },
  "MS": { "Rodoviário": 55, "Ferroviário": 30, "Aquaviário": 5, "Aéreo": 5, "Dutoviário": 5 },
  "MG": { "Rodoviário": 65, "Ferroviário": 20, "Aquaviário": 5, "Aéreo": 5, "Dutoviário": 5 },
  "PA": { "Rodoviário": 30, "Ferroviário": 15, "Aquaviário": 50, "Aéreo": 3, "Dutoviário": 2 },
  "PB": { "Rodoviário": 70, "Ferroviário": 10, "Aquaviário": 15, "Aéreo": 3, "Dutoviário": 2 },
  "PR": { "Rodoviário": 60, "Ferroviário": 20, "Aquaviário": 15, "Aéreo": 3, "Dutoviário": 2 },
  "PE": { "Rodoviário": 60, "Ferroviário": 10, "Aquaviário": 25, "Aéreo": 3, "Dutoviário": 2 },
  "PI": { "Rodoviário": 55, "Ferroviário": 15, "Aquaviário": 25, "Aéreo": 3, "Dutoviário": 2 },
  "RJ": { "Rodoviário": 50, "Ferroviário": 15, "Aquaviário": 20, "Aéreo": 10, "Dutoviário": 5 },
  "RN": { "Rodoviário": 70, "Ferroviário": 10, "Aquaviário": 15, "Aéreo": 3, "Dutoviário": 2 },
  "RS": { "Rodoviário": 58, "Ferroviário": 25, "Aquaviário": 12, "Aéreo": 3, "Dutoviário": 2 },
  "RO": { "Rodoviário": 45, "Ferroviário": 15, "Aquaviário": 30, "Aéreo": 5, "Dutoviário": 5 },
  "RR": { "Rodoviário": 40, "Ferroviário": 10, "Aquaviário": 45, "Aéreo": 3, "Dutoviário": 2 },
  "SC": { "Rodoviário": 62, "Ferroviário": 20, "Aquaviário": 13, "Aéreo": 3, "Dutoviário": 2 },
  "SP": { "Rodoviário": 65, "Ferroviário": 15, "Aquaviário": 5, "Aéreo": 10, "Dutoviário": 5 },
  "SE": { "Rodoviário": 65, "Ferroviário": 10, "Aquaviário": 20, "Aéreo": 3, "Dutoviário": 2 },
  "TO": { "Rodoviário": 50, "Ferroviário": 20, "Aquaviário": 25, "Aéreo": 3, "Dutoviário": 2 }
};
   
//////////////////////////////////////////////////////////////////////////////////////////
 const stateDetails = {
  "AC": {
    "Rodoviário": { "extensão": "20.000 km", "percentual": "1,18%" },
    "Ferroviário": { "extensão": "1.500 km", "percentual": "4,91%" },
    "Aquaviário": { "extensão": "300 km", "percentual": "1,03%" },
    "Aéreo": { "extensão": "100 km", "percentual": "0,10%" },
    "Dutoviário": { "extensão": "200 km", "percentual": "1,07%" }
  },
  "AL": {
    "Rodoviário": { "extensão": "25.000 km", "percentual": "1,47%" },
    "Ferroviário": { "extensão": "2.000 km", "percentual": "6,54%" },
    "Aquaviário": { "extensão": "350 km", "percentual": "1,21%" },
    "Aéreo": { "extensão": "120 km", "percentual": "0,12%" },
    "Dutoviário": { "extensão": "220 km", "percentual": "1,18%" }
  },
  "AP": {
    "Rodoviário": { "extensão": "15.000 km", "percentual": "0,88%" },
    "Ferroviário": { "extensão": "800 km", "percentual": "2,62%" },
    "Aquaviário": { "extensão": "400 km", "percentual": "1,38%" },
    "Aéreo": { "extensão": "90 km", "percentual": "0,09%" },
    "Dutoviário": { "extensão": "150 km", "percentual": "0,80%" }
  },
  "AM": {
    "Rodoviário": { "extensão": "30.000 km", "percentual": "1,76%" },
    "Ferroviário": { "extensão": "1.200 km", "percentual": "3,92%" },
    "Aquaviário": { "extensão": "500 km", "percentual": "1,72%" },
    "Aéreo": { "extensão": "110 km", "percentual": "0,11%" },
    "Dutoviário": { "extensão": "180 km", "percentual": "0,96%" }
  },
  "BA": {
    "Rodoviário": { "extensão": "40.000 km", "percentual": "2,35%" },
    "Ferroviário": { "extensão": "3.000 km", "percentual": "9,81%" },
    "Aquaviário": { "extensão": "600 km", "percentual": "2,07%" },
    "Aéreo": { "extensão": "130 km", "percentual": "0,13%" },
    "Dutoviário": { "extensão": "250 km", "percentual": "1,34%" }
  },
  "CE": {
    "Rodoviário": { "extensão": "35.000 km", "percentual": "2,06%" },
    "Ferroviário": { "extensão": "2.500 km", "percentual": "8,18%" },
    "Aquaviário": { "extensão": "450 km", "percentual": "1,55%" },
    "Aéreo": { "extensão": "100 km", "percentual": "0,10%" },
    "Dutoviário": { "extensão": "200 km", "percentual": "1,07%" }
  },
  "DF": {
    "Rodoviário": { "extensão": "50.000 km", "percentual": "2,94%" },
    "Ferroviário": { "extensão": "1.000 km", "percentual": "3,27%" },
    "Aquaviário": { "extensão": "0 km", "percentual": "0%" },
    "Aéreo": { "extensão": "200 km", "percentual": "0,20%" },
    "Dutoviário": { "extensão": "300 km", "percentual": "1,60%" }
  },
  "ES": {
    "Rodoviário": { "extensão": "45.000 km", "percentual": "2,65%" },
    "Ferroviário": { "extensão": "2.200 km", "percentual": "7,19%" },
    "Aquaviário": { "extensão": "400 km", "percentual": "1,38%" },
    "Aéreo": { "extensão": "110 km", "percentual": "0,11%" },
    "Dutoviário": { "extensão": "180 km", "percentual": "0,96%" }
  },
  "GO": {
    "Rodoviário": { "extensão": "55.000 km", "percentual": "3,24%" },
    "Ferroviário": { "extensão": "2.800 km", "percentual": "9,16%" },
    "Aquaviário": { "extensão": "350 km", "percentual": "1,21%" },
    "Aéreo": { "extensão": "120 km", "percentual": "0,12%" },
    "Dutoviário": { "extensão": "220 km", "percentual": "1,18%" }
  },
  "MA": {
    "Rodoviário": { "extensão": "42.000 km", "percentual": "2,47%" },
    "Ferroviário": { "extensão": "2.500 km", "percentual": "8,18%" },
    "Aquaviário": { "extensão": "500 km", "percentual": "1,72%" },
    "Aéreo": { "extensão": "130 km", "percentual": "0,13%" },
    "Dutoviário": { "extensão": "240 km", "percentual": "1,28%" }
  },
  "MT": {
    "Rodoviário": { "extensão": "48.000 km", "percentual": "2,82%" },
    "Ferroviário": { "extensão": "3.000 km", "percentual": "9,81%" },
    "Aquaviário": { "extensão": "300 km", "percentual": "1,03%" },
    "Aéreo": { "extensão": "100 km", "percentual": "0,10%" },
    "Dutoviário": { "extensão": "210 km", "percentual": "1,12%" }
  },
  "MS": {
    "Rodoviário": { "extensão": "46.000 km", "percentual": "2,71%" },
    "Ferroviário": { "extensão": "3.200 km", "percentual": "10,46%" },
    "Aquaviário": { "extensão": "250 km", "percentual": "0,86%" },
    "Aéreo": { "extensão": "90 km", "percentual": "0,09%" },
    "Dutoviário": { "extensão": "200 km", "percentual": "1,07%" }
  },
  "MG": {
    "Rodoviário": { "extensão": "65.000 km", "percentual": "3,82%" },
    "Ferroviário": { "extensão": "3.500 km", "percentual": "11,45%" },
    "Aquaviário": { "extensão": "400 km", "percentual": "1,38%" },
    "Aéreo": { "extensão": "120 km", "percentual": "0,12%" },
    "Dutoviário": { "extensão": "230 km", "percentual": "1,23%" }
  },
  "PA": {
    "Rodoviário": { "extensão": "38.000 km", "percentual": "2,24%" },
    "Ferroviário": { "extensão": "2.000 km", "percentual": "6,54%" },
    "Aquaviário": { "extensão": "800 km", "percentual": "2,76%" },
    "Aéreo": { "extensão": "140 km", "percentual": "0,14%" },
    "Dutoviário": { "extensão": "220 km", "percentual": "1,18%" }
  },
  "PB": {
    "Rodoviário": { "extensão": "40.000 km", "percentual": "2,35%" },
    "Ferroviário": { "extensão": "2.200 km", "percentual": "7,19%" },
    "Aquaviário": { "extensão": "500 km", "percentual": "1,72%" },
    "Aéreo": { "extensão": "120 km", "percentual": "0,12%" },
    "Dutoviário": { "extensão": "210 km", "percentual": "1,12%" }
  },
  "PR": {
    "Rodoviário": { "extensão": "42.000 km", "percentual": "2,47%" },
    "Ferroviário": { "extensão": "2.800 km", "percentual": "9,16%" },
    "Aquaviário": { "extensão": "450 km", "percentual": "1,55%" },
    "Aéreo": { "extensão": "110 km", "percentual": "0,11%" },
    "Dutoviário": { "extensão": "200 km", "percentual": "1,07%" }
  },
  "PE": {
    "Rodoviário": { "extensão": "44.000 km", "percentual": "2,59%" },
    "Ferroviário": { "extensão": "2.500 km", "percentual": "8,18%" },
    "Aquaviário": { "extensão": "500 km", "percentual": "1,72%" },
    "Aéreo": { "extensão": "115 km", "percentual": "0,11%" },
    "Dutoviário": { "extensão": "210 km", "percentual": "1,12%" }
  },
  "PI": {
    "Rodoviário": { "extensão": "41.000 km", "percentual": "2,41%" },
    "Ferroviário": { "extensão": "2.400 km", "percentual": "7,85%" },
    "Aquaviário": { "extensão": "480 km", "percentual": "1,66%" },
    "Aéreo": { "extensão": "110 km", "percentual": "0,11%" },
    "Dutoviário": { "extensão": "205 km", "percentual": "1,10%" }
  },
  "RJ": {
    "Rodoviário": { "extensão": "36.000 km", "percentual": "2,12%" },
    "Ferroviário": { "extensão": "2.000 km", "percentual": "6,54%" },
    "Aquaviário": { "extensão": "400 km", "percentual": "1,38%" },
    "Aéreo": { "extensão": "100 km", "percentual": "0,10%" },
    "Dutoviário": { "extensão": "180 km", "percentual": "0,96%" }
  },
  "RN": {
    "Rodoviário": { "extensão": "39.000 km", "percentual": "2,29%" },
    "Ferroviário": { "extensão": "1.800 km", "percentual": "5,89%" },
    "Aquaviário": { "extensão": "420 km", "percentual": "1,45%" },
    "Aéreo": { "extensão": "105 km", "percentual": "0,10%" },
    "Dutoviário": { "extensão": "190 km", "percentual": "1,02%" }
  },
  "RS": {
    "Rodoviário": { "extensão": "37.000 km", "percentual": "2,18%" },
    "Ferroviário": { "extensão": "2.500 km", "percentual": "8,18%" },
    "Aquaviário": { "extensão": "450 km", "percentual": "1,55%" },
    "Aéreo": { "extensão": "110 km", "percentual": "0,11%" },
    "Dutoviário": { "extensão": "200 km", "percentual": "1,07%" }
  },
  "RO": {
    "Rodoviário": { "extensão": "34.000 km", "percentual": "2,00%" },
    "Ferroviário": { "extensão": "1.700 km", "percentual": "5,56%" },
    "Aquaviário": { "extensão": "380 km", "percentual": "1,31%" },
    "Aéreo": { "extensão": "95 km", "percentual": "0,09%" },
    "Dutoviário": { "extensão": "170 km", "percentual": "0,91%" }
  },
  "RR": {
    "Rodoviário": { "extensão": "32.000 km", "percentual": "1,88%" },
    "Ferroviário": { "extensão": "1.500 km", "percentual": "4,91%" },
    "Aquaviário": { "extensão": "360 km", "percentual": "1,24%" },
    "Aéreo": { "extensão": "85 km", "percentual": "0,08%" },
    "Dutoviário": { "extensão": "160 km", "percentual": "0,86%" }
  },
  "SC": {
    "Rodoviário": { "extensão": "42.000 km", "percentual": "2,47%" },
    "Ferroviário": { "extensão": "2.600 km", "percentual": "8,50%" },
    "Aquaviário": { "extensão": "480 km", "percentual": "1,66%" },
    "Aéreo": { "extensão": "120 km", "percentual": "0,12%" },
    "Dutoviário": { "extensão": "210 km", "percentual": "1,12%" }
  },
  "SP": {
    "Rodoviário": { "extensão": "34.650 km", "percentual": "2,04%" },
    "Ferroviário": { "extensão": "5.200 km", "percentual": "17,00%" },
    "Aquaviário": { "extensão": "420 km", "percentual": "1,45%" },
    "Aéreo": { "extensão": "130 km", "percentual": "0,13%" },
    "Dutoviário": { "extensão": "240 km", "percentual": "1,28%" }
  },
  "SE": {
    "Rodoviário": { "extensão": "36.000 km", "percentual": "2,12%" },
    "Ferroviário": { "extensão": "2.200 km", "percentual": "7,19%" },
    "Aquaviário": { "extensão": "400 km", "percentual": "1,38%" },
    "Aéreo": { "extensão": "110 km", "percentual": "0,11%" },
    "Dutoviário": { "extensão": "190 km", "percentual": "1,02%" }
  },
  "TO": {
    "Rodoviário": { "extensão": "34.000 km", "percentual": "2,00%" },
    "Ferroviário": { "extensão": "2.000 km", "percentual": "6,54%" },
    "Aquaviário": { "extensão": "420 km", "percentual": "1,45%" },
    "Aéreo": { "extensão": "115 km", "percentual": "0,11%" },
    "Dutoviário": { "extensão": "200 km", "percentual": "1,07%" }
  }
};

const stateNames = {
  "AC": "Acre",
  "AL": "Alagoas",
  "AP": "Amapá",
  "AM": "Amazonas",
  "BA": "Bahia",
  "CE": "Ceará",
  "DF": "Distrito Federal",
  "ES": "Espírito Santo",
  "GO": "Goiás",
  "MA": "Maranhão",
  "MT": "Mato Grosso",
  "MS": "Mato Grosso do Sul",
  "MG": "Minas Gerais",
  "PA": "Pará",
  "PB": "Paraíba",
  "PR": "Paraná",
  "PE": "Pernambuco",
  "PI": "Piauí",
  "RJ": "Rio de Janeiro",
  "RN": "Rio Grande do Norte",
  "RS": "Rio Grande do Sul",
  "RO": "Rondônia",
  "RR": "Roraima",
  "SC": "Santa Catarina",
  "SP": "São Paulo",
  "SE": "Sergipe",
  "TO": "Tocantins"
};

//////////////////////////////////////////////////////////////////////////////////


    const modalColors = {
      Rodoviário: '#FFB703',
      Ferroviário: '#4CAF50',
      Aquaviário: '#2A5C82',
      Aéreo: '#FB8500',
      Dutoviário: '#6D6A75',
      default: '#CCCCCC'
    };

    // Variáveis de controle
    let currentFilter = 'all';
    let selectedState = null;
    let mainChart = null;
    let currentMode = 'modal'; // Pode ser 'modal' ou 'ranking'
    let lastClick = 0;

    // Inicialização
    function init() {
      initMap();
      populateStateSelect();
      createChart('bar');
      addEventListeners();
    }

    // Inicializa o mapa, adiciona eventos e posiciona as siglas
    function initMap() {
      document.querySelectorAll('#Estados > g').forEach(estado => {
        const stateId = estado.id;
        const path = estado.querySelector('path');
        if (path) {
          path.addEventListener('mouseover', (e) => showTooltip(stateId, e));
          path.addEventListener('mouseout', hideTooltip);
          path.addEventListener('click', () => handleStateClick(stateId));
          path.addEventListener('dblclick', resetSelection);
        }
      });
      updateMap();
      addStateLabels();
    }
     
    // Atualiza a aparência do mapa
    function updateMap() {
      const isLightMode = document.body.classList.contains('light-mode');
      document.querySelectorAll('#Estados > g').forEach(group => {
        const stateId = group.id;
        const path = group.querySelector('path');
        const text = group.querySelector('.state-label');
         
         // Atualizar cores do texto
        if(text) {
            text.style.fill = isLightMode ? '#1D3557' : '#FFFFFF'; 
            text.style.stroke = isLightMode ? '#F1FAEE' : '#1D3557';
        }

        if(selectedState) {
          if(stateId === selectedState) {
            // Se um estado estiver selecionado, ele usa a cor do modal se um modal (diferente de "all") estiver ativo,
            // ou a cor padrão (obtida pela função getStateColor) caso contrário.
            path.style.fill = currentFilter === 'all' 
                ? getStateColor(stateId)
                : modalColors[currentFilter];
            path.style.opacity = '1';
          } else {
            // Estados não selecionados ficam com tom de cinza conforme o tema.
            path.style.fill = isLightMode ? '#e0e0e0' : '#4a5568';
            path.style.opacity = '0.7';
          }
        } else {
          path.style.fill = currentFilter === 'all' 
              ? getStateColor(stateId)
              : modalColors[currentFilter];
          path.style.opacity = '1';
        }
      });
    }

    // Retorna o modal dominante de um estado
    function getDominantModal(state) {
      const values = Object.values(transportData[state]);
      const max = Math.max(...values);
      return Object.keys(transportData[state]).find(k => transportData[state][k] === max);
    }
    
    // Retorna a cor do estado (usada se nenhum modal estiver ativo)
    function getStateColor(state) {
      if (currentFilter !== 'all') return modalColors[currentFilter];
      const data = transportData[state];
      const max = Math.max(...Object.values(data));
      const maxModals = Object.keys(data).filter(k => data[k] === max);
      return maxModals.length > 1 ? modalColors.default : modalColors[maxModals[0]];
    }

    // Exibe o tooltip com os dados do estado
    function showTooltip(stateId, e) {
      const tooltip = document.getElementById('tooltip');
      const data = transportData[stateId];
      tooltip.innerHTML = `<strong>${stateId}</strong><br>` +
        Object.entries(data).map(([modal, value]) => `${modal}: ${value}%`).join('<br>');
      tooltip.style.display = 'block';
      tooltip.style.left = `${e.pageX + 20}px`;
      tooltip.style.top = `${e.pageY - 20}px`;
    }

    function hideTooltip() {
      document.getElementById('tooltip').style.display = 'none';
    }

    // Ao clicar num estado...
    function handleStateClick(stateId) {

       const now = Date.now();
      if (now - lastClick < 300) { // 300ms para considerar como duplo clique
            resetSelection();
            lastClick = 0;
            return;
      }
      lastClick = now;

      if(selectedState === stateId) {
        // Se o mesmo estado for clicado novamente, voltar para o modo modal (ou seja, desativar o ranking)
        currentMode = 'modal';
        // "Desativa" o modal ativo: força a seleção do botão "Todos"
         document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
              
        document.querySelector('.filter-btn[data-modal="all"]').classList.add('active');
        currentFilter = 'all';
      } else {
        selectedState = stateId;
        // Se já houver um modal selecionado (diferente de "all"), forçar o modo ranking para o estado
        currentMode = (currentFilter !== 'all') ? 'ranking' : 'modal';
      }

      updateVisualization();

      // Exibir ícone de informação quando um estado é selecionado
      document.getElementById('infoIcon').style.display = 'block';

    }

    // Posiciona as siglas dos estados centralizadas no SVG
    // Posiciona as labels (nomes dos estados) centralizadas sobre os paths
  function addStateLabels() {
    document.querySelectorAll('#Estados > g').forEach(group => {
      const path = group.querySelector('path');
      const text = group.querySelector('.state-label');
      if (path && text) {
        const bbox = path.getBBox();
        text.setAttribute('x', bbox.x + bbox.width/2);
        text.setAttribute('y', bbox.y + bbox.height/2);
        text.setAttribute('font-size', Math.min(bbox.width, bbox.height) * 0.4);
      }
    });
  }

    // Função para exibir o card de informações do estado
    function showStateInfo(state) {
  if (!selectedState) return;
  
  const infoCard = document.getElementById('infoCard');
  const stateData = stateDetails[selectedState];
  
  // Gerar linhas da tabela
  const tableBody = document.getElementById('stateDataBody');
  tableBody.innerHTML = '';
  
  const modais = ['Rodoviário', 'Ferroviário', 'Aquaviário', 'Aéreo', 'Dutoviário'];
  
  modais.forEach(modal => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <i class="${getModalIconClass(modal)} modal-icon"></i>
        ${modal}
      </td>
      <td>${stateData[modal].extensão}</td>
      <td>${stateData[modal].percentual}</td>
      <td>${transportData[state][modal]}%</td>
      <td>🏅 ${getStateRanking(state, modal)}º</td>
    `;
    tableBody.appendChild(row);
  });
  
   // Atualizar título com nome completo
  document.getElementById('stateTitle').innerHTML = ` 🔍 Informações - ${stateNames[state]} (${state})`;
  infoCard.style.display = 'block';
}

// Função para obter classes de ícones
function getModalIconClass(modal) {
  const icons = {
    'Rodoviário': 'fas fa-truck',
    'Ferroviário':'fas fa-train',
    'Aquaviário': 'fas fa-ship',
    'Aéreo':      'fas fa-plane',
    'Dutoviário': 'fas fa-route'
  };
  return icons[modal] || 'fas fa-question';
}

    // Calcula o ranking do estado para um dado modal
     function getStateRanking(state, modal) {
  const entries = Object.entries(transportData);
  const sorted = entries.sort((a, b) => b[1][modal] - a[1][modal]);
  const index = sorted.findIndex(e => e[0] === state);
  return index + 1; // Retorna posição direta sem verificar valores iguais
}
    // Cria o gráfico com base no tipo e nos dados atuais
    function createChart(type) {
      if (mainChart) mainChart.destroy();
      const ctx = document.getElementById('mainChart').getContext('2d');
      const data = getChartData();
      mainChart = new Chart(ctx, {
        type: type,
        data: data,
        options: getChartOptions(type)
      });
    }

    // Define os dados do gráfico conforme se um estado está selecionado e o modo (modal ou ranking)
    function getChartData() {
      if (selectedState) {
        if (currentMode === 'modal') {
          return getStateModalData();
        }
        return getStateRankingData();
      }
      return getNationalData();
    }
       
    // Dados para o modo modal (distribuição dos modais para o estado selecionado)
    function getStateModalData() {
      const data = transportData[selectedState];
      return {
        labels: Object.keys(data),
        datasets: [{
          label: `Modais em ${selectedState}`,
          data: Object.values(data),
          backgroundColor: Object.keys(data).map(modal => modalColors[modal])
        }]
      };
    }
    
    // Dados para o modo ranking (ranking do estado selecionado para o modal ativo)
  
    function getStateRankingData() {      
      const sorted = Object.entries(transportData)
        .sort((a, b) => b[1][currentFilter] - a[1][currentFilter])
        .map(e => ({ state: e[0], value: e[1][currentFilter] }));
      return {
        labels: sorted.map(e => e.state),
        datasets: [{
          label: `Ranking ${currentFilter}`,
          data: sorted.map(e => e.value),
          backgroundColor: sorted.map(e => e.state === selectedState ? modalColors[currentFilter] : '#CCCCCC')
        }]
      };
    }
       
    // Dados nacionais (quando nenhum estado está selecionado)
    
    function getNationalData() {
      if (currentFilter === 'all') {
        return {
          labels: Object.keys(transportData),
          datasets: Object.keys(modalColors)
            .filter(modal => modal !== 'default')
            .map(modal => ({
              label: modal,
              data: Object.values(transportData).map(state => state[modal]),
              backgroundColor: modalColors[modal]
            }))
        };
      }
      return {
        labels: Object.keys(transportData),
        datasets: [{
          label: currentFilter,
          data: Object.values(transportData).map(state => state[currentFilter]),
          backgroundColor: modalColors[currentFilter]
        }]
      };
    }
        
    // Configurações do gráfico (incluindo tooltips e datalabels)
    function getChartOptions(type) {
      const isLightMode = document.body.classList.contains('light-mode'); // Verificação do tema

      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: { color: getComputedStyle(document.body).getPropertyValue('--light-text') }
          },
          datalabels: {
            color: isLightMode ? '#333' : '#FFF', // Cor dinâmica
            anchor: 'end',
            align: 'top',
            formatter: (value, context) => {
              if (context.dataset.label === `Ranking ${currentFilter}` &&
                  context.dataIndex === context.chart.data.labels.indexOf(selectedState)) {
                return context.dataset.data[context.dataIndex];
              }
              return '';
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: getComputedStyle(document.body).getPropertyValue('--light-text') }
          },
          x: {
            ticks: { color: getComputedStyle(document.body).getPropertyValue('--light-text') }
          }
        }
      };
    }
        
    // Atualiza o gráfico conforme as alterações
    function updateChart() {
      const chartType = document.querySelector('.chart-type-btn.active').dataset.type;
      createChart(chartType);
    }
  
    // Atualiza o mapa e o gráfico
    function updateVisualization() {
      updateMap();
      updateChart();
    }

    // Popula o seletor de estados
    function populateStateSelect() {
      const select = document.getElementById('stateSelect');
      Object.keys(transportData).forEach(state => {
        const option = new Option(state, state);
        select.add(option);
      });
    }

    // Eventos de interação
    function addEventListeners() {
      // Eventos para os botões de modal (filtros)
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          currentFilter = this.dataset.modal;
          // Se um estado já estiver selecionado, manter a seleção e ativar o modo ranking
           // Resetar estado e modo quando clicar em "Todos"
          
          if(this.dataset.modal === 'all') {
             selectedState = null;
             document.getElementById('stateSelect').value = 'all';
             document.getElementById('infoIcon').style.display = 'none';
             currentMode = 'modal';
          }
         
          if (selectedState !== null) {
            currentMode = 'ranking';
          } else {
            currentMode = 'modal';
          }
          updateVisualization();
        });
      });

      // Seletor de estado (dropdown)
      document.getElementById('stateSelect').addEventListener('change', function() {
        selectedState = this.value === 'all' ? null : this.value;
        updateVisualization();
      });

      // Eventos para os botões de tipo de gráfico
      document.querySelectorAll('.chart-type-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          document.querySelectorAll('.chart-type-btn').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          createChart(this.dataset.type);
        });
      });


      // Atualize o event listener do tema
     // Atualize a função de toggle do tema
         addOtherEventListeners();
  
      
      // Evento para o ícone de informação
      document.getElementById('infoIcon').addEventListener('click', (e) => {
          e.stopPropagation();
          showStateInfo(selectedState); // Corrigido para chamar a função correta
      });
      
      // Fecha o painel de info se clicar fora dele
      document.addEventListener('click', function(e) {
        const infoCard = document.getElementById('infoCard');
        const infoIcon = document.getElementById('infoIcon');
        if (infoCard.style.display === 'block' && !infoCard.contains(e.target) && !infoIcon.contains(e.target)) {
          infoCard.style.display = 'none';
        }
      });
    }
 
    // Outros event listeners (tema, menu, etc.)
   function addOtherEventListeners() {
    document.querySelector('.theme-toggle').addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
      updateThemeIcon();
      updateVisualization();
    });
    document.querySelector('.menu-toggle').addEventListener('click', toggleSidebar);
    document.querySelector('.overlay').addEventListener('click', toggleSidebar);
  }


    function updateThemeIcon() {
      const icon = document.querySelector('.theme-toggle i');
      icon.classList.toggle('fa-moon');
      icon.classList.toggle('fa-sun');
    }

    function toggleSidebar() {
      document.querySelector('.sidebar').classList.toggle('active');
      document.querySelector('.overlay').style.display =
        document.querySelector('.sidebar').classList.contains('active') ? 'block' : 'none';
    }

    window.scrollToDashboard = function() {
      document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
    };

    // Abre o card de informações com os detalhes do estado selecionado
   function openInfoPanel() {
      if (!selectedState) return;
      const infoCard = document.getElementById('infoCard');
      const stateData = transportData[selectedState];
      let html = `<div class="modal-info">`;
      for (const modal in stateData) {
        html += `
          <div class="modal-indicator">
            <span class="modal-color" style="background:${modalColors[modal]}"></span>
            ${modal}: ${stateData[modal]}% 
            (Posição: ${getStateRanking(selectedState, modal)}º)
          </div>
        `;
      }
      html += `</div>`;
      document.getElementById('stateTitle').textContent = `Informações de ${selectedState}`;
      document.getElementById('stateInfo').innerHTML = html;
      infoCard.style.display = 'block';
    }


     function closeInfoCard() {
      document.getElementById('infoCard').style.display = 'none';
    }

    // Reseta a seleção (duplo clique no estado selecionado)
    function resetSelection() {
      selectedState = null;
      currentFilter = 'all';
      currentMode = 'modal';
      updateVisualization();
      // Esconder ícone de informação se não houver estado selecionado
      document.getElementById('infoIcon').style.display = 'none';
    }

    // Cria o gráfico de acordo com o tipo e os dados atuais
    function createChart(type) {
      if (mainChart) mainChart.destroy();
      const ctx = document.getElementById('mainChart').getContext('2d');
      const data = getChartData();
      mainChart = new Chart(ctx, {
        type: type,
        data: data,
        options: getChartOptions(type)
      });
    }

    // Define os dados do gráfico com base na seleção de estado e modo (modal ou ranking)
    function getChartData() {
      if (selectedState) {
        if (currentMode === 'modal') {
          return getStateModalData();
        }
        return getStateRankingData();
      }
      return getNationalData();
    }
       
    // Dados para o modo modal (distribuição dos modais para o estado selecionado)
    function getStateModalData() {
      const data = transportData[selectedState];
      return {
        labels: Object.keys(data),
        datasets: [{
          label: `Modais em ${selectedState}`,
          data: Object.values(data),
          backgroundColor: Object.keys(data).map(modal => modalColors[modal])
        }]
      };
    }
    
    
       
        
    // Configurações do gráfico (incluindo tooltips e datalabels)
   
    // Retorna o ícone para cada modal
    function getModalIcon(modal) {
      const icons = {
        'Rodoviário':  '🚚',
        'Ferroviário': '🚆',
        'Aquaviário':  '🛳️',
        'Aéreo':      '✈️',
        'Dutoviário': '⛽'
      };
      return icons[modal] || '';
    }


  // Carrega o tema salvo e inicia
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') document.body.classList.add('light-mode');
  init();
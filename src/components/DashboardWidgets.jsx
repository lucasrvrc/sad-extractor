import React from 'react';

// --- DADOS MOCKADOS: Ranking ---
export const rankingMunicipios = [
  { name: 'Recife', value: '1.240' },
  { name: 'Jaboatão dos Guararapes', value: '850' },
  { name: 'Olinda', value: '620' },
  { name: 'Caruaru', value: '580' },
  { name: 'Petrolina', value: '490' },
  { name: 'Paulista', value: '310' },
  { name: 'Cabo de Santo Agostinho', value: '280' },
];

// --- COMPONENTE: Gráfico de Barras Customizado ---
export const RealEstateChart = ({ type }) => {
  // Dados Mockados para o contexto de Imóveis
  const volumeData = [
    { label: 'Jan', value: 120 }, { label: 'Fev', value: 150 }, { label: 'Mar', value: 180 }, 
    { label: 'Abr', value: 140 }, { label: 'Mai', value: 200 }, { label: 'Jun', value: 250 }, 
    { label: 'Jul', value: 300 }, { label: 'Ago', value: 280 }, { label: 'Set', value: 320 }, 
    { label: 'Out', value: 350 }, { label: 'Nov', value: 400 }, { label: 'Dez', value: 380 },
  ];

  const valueData = [ // Valores em Milhões
    { label: 'Jan', value: 45 }, { label: 'Fev', value: 52 }, { label: 'Mar', value: 48 }, 
    { label: 'Abr', value: 60 }, { label: 'Mai', value: 75 }, { label: 'Jun', value: 80 }, 
    { label: 'Jul', value: 95 }, { label: 'Ago', value: 90 }, { label: 'Set', value: 110 }, 
    { label: 'Out', value: 115 }, { label: 'Nov', value: 130 }, { label: 'Dez', value: 125 },
  ];

  const data = type === 'volume' ? volumeData : valueData;
  const maxValue = Math.max(...data.map(d => d.value)) * 1.1; // 10% de folga no topo
  
  // CORREÇÃO: Usando cores fixas se a classe dinâmica falhar, mas mantendo a classe também
  const barColorClass = type === 'volume' ? 'bg-blue-600' : 'bg-green-600';

  return (
    <div className="w-full h-64 flex items-end justify-between space-x-2 pt-4 pr-4">
      {data.map(item => {
        // Cálculo da altura em porcentagem (0 a 100)
        const heightPct = (item.value / maxValue) * 100;
        
        return (
          // CORREÇÃO: 'h-full' e 'justify-end' para garantir que a barra cresça de baixo para cima dentro do espaço total
          <div key={item.label} className="h-full flex-1 flex flex-col justify-end items-center group relative">
            
            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 z-10 whitespace-nowrap shadow-lg">
              {type === 'volume' ? `${item.value} laudos` : `R$ ${item.value} Mi`}
            </div>
            
            {/* Barra */}
            <div 
              className={`w-full ${barColorClass} opacity-80 hover:opacity-100 rounded-t-sm transition-all duration-500 ease-out`}
              style={{ height: `${heightPct}%` }}
            ></div>
            
            {/* Rótulo do Mês */}
            <span className="text-xs text-gray-500 mt-2 font-medium">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};
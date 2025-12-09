// Dados mockados de índices de mercado para análise comparativa de cotações
const indicesMercado = [
  // Leite
  ...Array.from({ length: 12 }, (_, i) => ({
    produto: "Leite",
    data: `2023-${String(i+7).padStart(2, '0')}`,
    valor: +(2.80 + i * 0.05 + (Math.random()-0.5)*0.03).toFixed(2),
    fonte: "Esalq CEPEA"
  })),
  // Soja
  ...Array.from({ length: 12 }, (_, i) => ({
    produto: "Soja",
    data: `2023-${String(i+7).padStart(2, '0')}`,
    valor: +(145 + i * 1.5 + (Math.random()-0.5)*1.2).toFixed(2),
    fonte: "Safras"
  })),
  // Milho
  ...Array.from({ length: 12 }, (_, i) => ({
    produto: "Milho",
    data: `2023-${String(i+7).padStart(2, '0')}`,
    valor: +(65 + i * 0.8 + (Math.random()-0.5)*0.5).toFixed(2),
    fonte: "Safras"
  })),
  // Café
  ...Array.from({ length: 12 }, (_, i) => ({
    produto: "Café",
    data: `2023-${String(i+7).padStart(2, '0')}`,
    valor: +(650 + i * 3.5 + (Math.random()-0.5)*2.0).toFixed(2),
    fonte: "Esalq CEPEA"
  })),
  // Açúcar
  ...Array.from({ length: 12 }, (_, i) => ({
    produto: "Açúcar",
    data: `2023-${String(i+7).padStart(2, '0')}`,
    valor: +(124 + i * 1.2 + (Math.random()-0.5)*0.8).toFixed(2),
    fonte: "Milkpoint"
  })),
  // Carne bovina
  ...Array.from({ length: 12 }, (_, i) => ({
    produto: "Carne bovina",
    data: `2023-${String(i+7).padStart(2, '0')}`,
    valor: +(19.50 + i * 0.18 + (Math.random()-0.5)*0.12).toFixed(2),
    fonte: "Esalq CEPEA"
  })),
  // Carne suína
  ...Array.from({ length: 12 }, (_, i) => ({
    produto: "Carne suína",
    data: `2023-${String(i+7).padStart(2, '0')}`,
    valor: +(12.80 + i * 0.12 + (Math.random()-0.5)*0.09).toFixed(2),
    fonte: "Milkpoint"
  })),
  // Frango
  ...Array.from({ length: 12 }, (_, i) => ({
    produto: "Frango",
    data: `2023-${String(i+7).padStart(2, '0')}`,
    valor: +(7.60 + i * 0.09 + (Math.random()-0.5)*0.07).toFixed(2),
    fonte: "Safras"
  }))
];

export default indicesMercado;

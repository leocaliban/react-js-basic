import React from 'react';
import Title from './Title';

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  return (
    <div style={{ backgroundColor: '#ccc' }}>
      <Title label="Finanças" />
      <div style={{ backgroundColor: '#ccc', color: '#222', padding: 10 }}>
        <p>
          <span style={{ fontWeight: 'bold' }}>Nome: </span>
          <span>{dados.cliente}</span>
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Idade: </span>
          <span>{dados.idade}</span>
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Situação: </span>
          <span style={{ color: dados.ativa ? 'green' : '#ff4444' }}>{dados.ativa ? 'Ativa' : 'Inativa'}</span>
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Total gasto: </span>
          <span>R${total}</span>
        </p>
        {total > 10000 && <p style={{ color: '#ff4444', fontWeight: 'bold', fontSize: 12 }}>Você está gastando muito!</p>}
      </div>

      <Title label="Compras" />
      <ul style={{ margin: 10, paddingBottom: 20 }}>
        {dados.compras.map((item, index) => (<li key={index}>{item.nome}</li>))}
      </ul>

      <Title label="Compras caras (a partir de R$ 3.000)" />
      <ul style={{ margin: 10, paddingBottom: 20 }}>
        {dados.compras.filter((c) => Number(c.preco.replace('R$ ', '')) >= 3000).map((item, index) => (<li key={index}>{item.nome}</li>))}
      </ul>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [total, setTotal] = useState('');
  const [divisor, setDivisor] = useState('');
  const [renderedComponents, setRenderedComponents] = useState([]);

  const handleRender = () => {
    if (total && divisor) {
      const parsedTotal = parseInt(total);
      const parsedDivisor = parseInt(divisor);
      if (parsedTotal && parsedDivisor) {
        const renderArray = Array.from({ length: parsedDivisor }, (_, index) => (
          <div key={index} className="rendered-component">
            Renderização {index + 1} - Valor: {parsedTotal / parsedDivisor}
          </div>
        ));
        setRenderedComponents(renderArray);
      }
    }
  };

  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <div>
        <label>Total: </label>
        <input
          type="number"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
      </div>
      <div>
        <label>Divisor: </label>
        <input
          type="number"
          value={divisor}
          onChange={(e) => setDivisor(e.target.value)}
        />
      </div>
      <button onClick={handleRender}>Renderizar</button>
      <div className="rendered-container">{renderedComponents}</div>
    </div>
  );
}

export default App;

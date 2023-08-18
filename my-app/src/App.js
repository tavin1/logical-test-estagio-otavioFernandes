import React, { useState } from 'react';
import './App.css'; // Certifique-se de ter um arquivo de estilos CSS correspondente

function App() {
  const [total, setTotal] = useState(1);
  const [divisor, setDivisor] = useState(1);
  const [renderizations, setRenderizations] = useState([]);

  const handleRenderClick = () => {
    if (total <= 0 || divisor <= 0) {
      return;
    }

    const renderElements = [];
    for (let i = 0; i < divisor; i++) {
      const result = (i + 1) * (total / divisor);
      renderElements.push(
        <p key={i}>Renderização {i + 1}: {result}</p>
      );
    }
    setRenderizations(renderElements);
  };

  return (
    <div className="container">
      <h1>Divisor Renderizações em React</h1>
      <label htmlFor="total">Valor Total:</label>
      <input
        type="number"
        id="total"
        value={total}
        onChange={(e) => setTotal(parseInt(e.target.value))}
        required
      />
      <label htmlFor="divisor">Divisor:</label>
      <input
        type="number"
        id="divisor"
        value={divisor}
        onChange={(e) => setDivisor(parseInt(e.target.value))}
        required
      />
      <button onClick={handleRenderClick}>Renderizar</button>
      <div id="renderOutput">
        {renderizations.map(renderElement => renderElement)}
      </div>
    </div>
  );
}

export default App;

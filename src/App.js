/*

1. Создать сетку ходов c помощью Flex Bootstrap.
2. Создать бокс с текстом.

 */

import React from 'react';
import './App.css';


function App() {
  return (
    <div>
      <div className="row">
        <div className="col">
          1 of 3
        </div>
        <div className="col-5">
          2 of 3 (wider)
        </div>
        <div className="col">
          3 of 3
        </div>
      </div>
    </div>
  );
}

export default App;

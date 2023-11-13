import React from 'react';

function MiComponente({ isActive }) {
  return (
    <div className={`element ${isActive ? 'active' : 'inactive'}`}>
        ${answer}
    </div>
  );
}

export default MiComponente;

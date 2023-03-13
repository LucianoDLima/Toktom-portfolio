import React from 'react';

const Main = ({ widthControl }) => {
  return (
    <main
      style={{
        width: `calc(100% - ${widthControl})`,
        marginLeft: `${ widthControl }`,
      }}
    >
      <p>Teste</p>
    </main>
  );
};

export default Main;

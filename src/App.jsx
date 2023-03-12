import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import MenuButton from './components/MenuButton/MenuButton';
import { useState } from 'react';

function App() {
  const [pressed, setPressed] = useState(false);

  const handleButton = () => {
    setPressed((current) => !current);
  };
  return (
    <div className='app'>
      <MenuButton
        menuBtn={() => handleButton()}
        menuClass={pressed === true ? 'open' : ''}
      />
      <NavBar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;

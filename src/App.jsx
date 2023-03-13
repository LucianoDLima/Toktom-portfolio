import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import MenuButton from './components/MenuButton/MenuButton';
import { useState } from 'react';

function App() {
  const [pressed, setPressed] = useState(true);
  const [navigation, setNavigation] = useState(false);

  const handleMenuButton = () => {
    setPressed((current) => !current);
    setNavigation((current) => !current);
    console.log(pressed, navigation);
  };

  const handleEnterPress = event => {
    if (event.key === 'Enter') {
      handleMenuButton();
    }
  };


  return (
    <div className="app">
      <MenuButton
        menuBtn={() => handleMenuButton()}
        menuClass={pressed === true ? 'open' : ''}
        enterPress={handleEnterPress}
      />
      <NavBar
        navBarHide={navigation === true ? 'hide' : ''}
        tab={navigation === true ? '-1' : '0'}
      />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;

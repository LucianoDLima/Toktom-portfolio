import NavBar from './components/NavBar/NavBar';
import MenuButton from './components/MenuButton/MenuButton';
import Main from './components/Main/Main'
import { useState } from 'react';

const styleAnimation = [{
  width: '300px'
}]

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
      <Main widthControl={navigation === true ? '0px' : '300px'}/>
    </div>
  );
}

export default App;

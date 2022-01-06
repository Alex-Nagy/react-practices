import './App.css';
import Button from './Button'
import ButtonList from './ButtonList'
import ButtonListWithMap from './ButtonListWithMap';
import Profile from './Profile'
import Profile2 from './Profile2'
import Profile3 from './Profile3'
import Profile4 from './Profile4'

function App() {
  return (
    <div className="App">
        {/* <Button title={someText} /> */}
        {/* <ButtonList /> */}
        <ButtonListWithMap/>
        <Profile/>
        <Profile2/>
        <Profile3/>
        <Profile4/>
    </div>
  );
}

export default App;

/* HF
TODO: ButtonList component
? ami 10-szer kirendereli a Text komponenst
*/
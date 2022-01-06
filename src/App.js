import './App.css';
import Button from './Button'
import ButtonList from './ButtonList'

const someText = "Egy";

function App() {
  return (
    <div className="App">
        <Button title={someText} />
        <ButtonList />
    </div>
  );
}

export default App;

/* HF
TODO: ButtonList component
? ami 10-szer kirendereli a Text komponenst
*/
import './App.css';
import PromoCardBoard from './components/PromoCardBoard';
import mockPromoCodes from './mocks/mock.json';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        Get Promo Code
      </header>
      <PromoCardBoard promoCodes={ mockPromoCodes }/>
    </div>
  );
}

export default App;

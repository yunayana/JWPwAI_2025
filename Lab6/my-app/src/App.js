import ClickCounter from './ClickCounter';
import PrimeCalculator from './PrimeCalculator';
import FormReducer from './FormReducer';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import LayoutEffectExample from './LayoutEffectExample';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Lab 6 React – hooki</h1>
      <section>
        <h2>Ćwiczenie 1: useRef</h2>
        <ClickCounter />
      </section>
      <section>
        <h2>Ćwiczenie 2: useMemo</h2>
        <PrimeCalculator />
      </section>
      <section>
        <h2>Ćwiczenie 3: useReducer</h2>
        <FormReducer />
      </section>
      <section>
          <h2>Ćwiczenie 4: useContext</h2>
          <ThemeProvider>
            <ThemeSwitcher />
          </ThemeProvider>
        </section>
         <section>
            <h2>Ćwiczenie 5: useLayoutEffect</h2>
            <LayoutEffectExample />
          </section>
    </div>
  );
}

export default App;

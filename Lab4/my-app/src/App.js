import Hello from './Hello';
import HelloWithProps from './HelloWithProps';
import Counter from './Counter';
import InputTracker from './InputTracker';
import LoginStatus from './LoginStatus';
import TodoList from './TodoList';
import LoginForm from './LoginForm';
import './App.css';

function App() {
   const tasks = ['Zadanie domowe z grafiki', 'Lab z Aplikacji Internetowych', 'Prototyp robota'];
  return (
    <div className="App">
      <Hello />
    
    <HelloWithProps name="Anna" />
    <HelloWithProps name="Bartek" />
    <HelloWithProps name="Celina" />
     <Counter />
     <InputTracker/>
     <LoginStatus isLoggedIn={true} />
    <LoginStatus isLoggedIn={false} />
    <h2>Lista zadan domowych</h2>
    <TodoList todos={tasks} />
    <LoginForm/>
    </div>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import SpecialGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';


function App() {
  return (
    <div className="App">
     <SpecialGreeting />
     <FunctionalGreetingWithProps name= "Sam" greeting="to React Lesson on Props" experience="for Beginners!"/>
      </div>
  );
}


export default App;

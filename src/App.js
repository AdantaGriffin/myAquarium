
import './App.css';

function displayFactD(e) {
  
  const dolphinFacts = ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
  //console.log(dolphinFacts)

  let randomDIndex = Math.floor(Math.random() * dolphinFacts.length);
  //console.log(randomIndex)

  let randomDolphinFact = dolphinFacts[randomDIndex];

  const p = document.getElementById('fact');
  p.innerHTML = randomDolphinFact; 
}
function displayFactL(e) {
  const lobsterFacts = ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
  //console.log(lobsterFacts)

  let randomLIndex = Math.floor(Math.random() * lobsterFacts.length);
  //console.log(randomIndex)

  let randomLobsterFact = lobsterFacts[randomLIndex];

  const q = document.getElementById('fact');
  q.innerHTML = randomLobsterFact;
}
  function displayFactS(e) {

  const starfishFacts = ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
  //console.log(lobsterFacts)

  let randomSIndex = Math.floor(Math.random() * starfishFacts.length);
  //console.log(randomIndex)

  let randomStarfishFact = starfishFacts[randomSIndex];

  const r = document.getElementById('fact');
  r.innerHTML = randomStarfishFact;  
}

function App() {
  
 
  return (
    <div className="App">
      <h1>My Aquarium</h1>
        <div className='row-1'>
          <p id='fact'></p>
        </div>
        <div className='row-2'>
          <button onClick={displayFactD} className='animals-button-1'></button>
          <button onClick={displayFactL} className='animals-button-2'></button>
          <button onClick={displayFactS} className='animals-button-3'></button>
        </div>
    </div>
  );

}

export default App;


import animalsData from './data/AnimalData.json';
import type { Animal } from './types/animals';

function App() {
  const animals: Animal[] = animalsData;

  return (
    <main>
      <h1>Lista Zwierząt</h1>
      <div>
        {animals.map((animal) => (
          <article key={animal.id}>
            <h2>{animal.name}</h2>
            <p><strong>Kontynent:</strong> {animal.continent}</p>
            <p><strong>Średnia prędkość:</strong> {animal.averageSpeed} km/h</p>
            <p><strong>Średnia waga:</strong> {animal.weight} kg</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default App;

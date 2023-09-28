import Pokemon from "./components/Pokemon";
import BulbasaurImage from "./assets/images/bulbasaur.png";
import PikachuImage from "./assets/images/pikachu.png";
import "./assets/css/main.css";

function App() {
  const bulbasaur = {
    name: "Bulbasaur ♂︎",
    lvl: 10,
    hp: 28,
    maxHp: 28,
  };

  const pikachu = {
    name: "Pikachu ♂",
    lvl: 12,
    hp: 33,
    maxHp: 33,
  };

  return (
    <>
      <main className="battlefield">
        <section className="battlefield__section battlefield__section--align-right">
          <Pokemon stats={bulbasaur} image={BulbasaurImage}></Pokemon>
        </section>
        <section className="battlefield__section">
          <Pokemon stats={pikachu} image={PikachuImage} />
          <div className="interaction">
            <div className="log interaction__logs">What should PIKACHU do?</div>
            <div className="interaction__moves">
              <button className="attack">fight</button>
              <button>bag</button>
              <button>pokémon</button>
              <button>run</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

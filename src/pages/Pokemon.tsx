import { useParams, useNavigate } from "react-router-dom";
import goBack from "../assets/pokeball.png";
import Footer from "../components/Footer";
import bulbasaurImg from '../assets/bulbasaur.gif'
import styles from '../pages/pokemon.module.css'

const Pokemon = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  return (
    <>
    <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
      <img className={styles.pokeballImg} src={goBack} alt="pokeball" />
      Go back
    </button>
    <div className={styles.pokemon}>
      <main className={styles.pokemonInfo}>
        <div className={styles.pokemonTitle}>{name?.toUpperCase()}</div>
        <div>Nr. 001</div>
        <div>
          <img
            className={styles.pokemonInfoImg}
            src={bulbasaurImg}
            alt="bulbasaur"
          />
        </div>
        <div>HP: 00</div>
        <div>Attack: 20</div>
        <div>Defense: 40</div>
      </main>
    </div>
    <Footer />
  </>
  );
};

export default Pokemon;

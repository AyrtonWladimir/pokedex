import styles from "./header.module.css"


type HeaderPropos={
    query: string;
    setQuery:(query: string) => void;
};

const Header = ({query, setQuery}: HeaderPropos) => {
  return <header className={styles.header}> 
    <input className={styles.input} placeholder="Search a Pokemon" type="text" value={query}
    onChange={(event)=> setQuery(event.target.value)}/>
  </header>;
};

export default Header;

import Header from '../components/Header';
import { observer } from 'mobx-react-lite';
import styles from '../styles/searchPage.module.css';
import RepositoryList from '../components/RepositoryList';
import repositories from '../store/Repositories';

const SearchPage = observer(()=>{
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <RepositoryList repositories={repositories.repositories} name='Repositories'/>
        <RepositoryList repositories={repositories.favorites} name='Favorites'/>
      </main>
    </>
  );
});

export default SearchPage;
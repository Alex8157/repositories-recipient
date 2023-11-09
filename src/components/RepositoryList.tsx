import React from 'react';
import { observer } from 'mobx-react-lite';
import { Repository } from '../types';
import RepositoryCard from './RepositoryCard';
import styles from '../styles/repositoryList.module.css'

const RepositoryList: React.FC<{ repositories: Repository[] , name: string}> = observer(({repositories, name}) => {
  return (
    <div className={styles.list}>
        <h1>{name}</h1>
      {repositories.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </div>
  );
});

export default RepositoryList;

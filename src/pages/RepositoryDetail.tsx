import React from 'react';
import { useParams } from 'react-router-dom';
import { PostService } from '../API/PostService';
import { Repository } from '../types';
import styles from '../styles/repositoryDetailPage.module.css'

function RepositoryDetailPage() {
  const [details, setDetails] = React.useState<Repository | null>(null);
  const { id } = useParams();

  React.useEffect(()=>{
    (async()=>{
      const result = await PostService.getDetails(Number(id));
      setDetails(result);
    })();
  },[])
  

  return (
    <>
      {details ? 
      <div className={styles.detail}>
        <img src={details.owner.avatar_url} alt="Avatar" className={styles.avatar}/>
        <h1>{details.full_name}</h1>
        <span>author: {details.owner.login}</span>
        <span>
        Link: 
        <a href={details.html_url} target="_blank" rel="noopener noreferrer">
            {details.full_name}
        </a>
        </span>
        <p>Description: {details.description}</p>
        <span>Stargazers count: {details.stargazers_count}</span>
        <span>Forks: {details.forks}</span>
      </div>
      :
      ''}
    </>
  );
}

export default RepositoryDetailPage;
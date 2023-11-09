import React from 'react';
import { Link } from 'react-router-dom';
import { Repository } from '../types';
import styles from '../styles/repositoryCard.module.css'

import repositories from '../store/Repositories';

const RepositoryCard: React.FC<{ repository: Repository }> = ({ repository }) => {
    const handleLinkClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    }

    return (
        <section onClick={() => repositories.addFavorites(repository)} className={styles.repositoryCard}>
            <h3>
                {repository.full_name}
            </h3>
            <img src={repository.owner.avatar_url} alt="Avatar" className={styles.avatar}/>
            <Link to={`/repository/${repository.id}`} onClick={handleLinkClick} className={styles.pseudoButton}>More details</Link>
            <a href={repository.html_url} onClick={handleLinkClick} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {repository.full_name}
            </a>
            <span>Stargazers count: {repository.stargazers_count}</span>
            <span>Forks: {repository.forks}</span>
        </section>
    );
};

export default RepositoryCard;

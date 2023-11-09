import { makeAutoObservable } from 'mobx';
import { Repository } from '../types';

class Repositories {
  repositories: Repository[] = [];
  favorites: Repository[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setRepositories(repositories: Repository[]) {
    this.repositories = repositories;
  }

  addFavorites(repository: Repository) {
    const index = this.favorites.findIndex(item => item.id === repository.id);

    if (index === -1) {
      this.favorites.push(repository);
    }    
  }
}

export default new Repositories();
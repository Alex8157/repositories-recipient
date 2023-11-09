export class PostService {
    static async getRepositories(text: string) {
        const response = await fetch(`https://api.github.com/search/repositories?q=${text}`
            ).then((response) => response.json());
        return response;
    }
    
    static async getDetails(id: number) {
        const response = await fetch(`https://api.github.com/repositories/${id}`
            ).then((response) => response.json());
        return response;
    }
}
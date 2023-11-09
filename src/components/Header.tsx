import React from 'react';
import { observer } from 'mobx-react-lite';
import { PostService } from '../API/PostService';
import repositories from '../store/Repositories';
import styles from '../styles/header.module.css';

const Header: React.FC = observer(() => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [copyButtonText, setCopyButtonText] = React.useState('Copy');

    React.useEffect(() => {
        let timeout: NodeJS.Timeout;
    
        if (searchQuery !== '') {
            timeout = setTimeout(() => handleSearch(), 500);
        }

        return () => clearTimeout(timeout);
    }, [searchQuery]);
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };
    
    const handleSearch = async () => {
        const result = await PostService.getRepositories(searchQuery);
        repositories.setRepositories(result.items);
    };

    const handleCopyText = () => {
        navigator.clipboard.writeText(searchQuery);
        setCopyButtonText('Copied');
        setTimeout(() => setCopyButtonText('Copy'), 2000);
    };

    return (
        <header className={styles.header}>
            <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search..."
            />
            <button onClick={handleCopyText}>
                {copyButtonText}
            </button>
        </header>
    );
});

export default Header;

import styles from './styles.module.scss';
import logoImg from '../../assets/logo.png'
interface HeaderProps {
    isSearch: string;
    isSetSearch: (search: string) => void;
}

export function Header({ isSearch, isSetSearch }: HeaderProps) {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src={logoImg} alt="delfosim" />
                <nav>
                    <a href='/#'>Home</a>
                </nav>

                <input
                    value={isSearch}
                    onChange={e => isSetSearch(e.target.value)}
                    placeholder='Search by title...'
                />
            </div>
        </header>
    );
}
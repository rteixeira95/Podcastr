import format from 'date-fns/format';
import ptPT from 'date-fns/locale/pt';
import styles from './styles.module.scss';

export default function Header(){
    const currentDate = format( new Date(),'EEEEEE, d MMMM', {
        locale: ptPT,
    });
    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr"/>
            <p>O melhor para você ouvir, sempre</p>
            <span>{currentDate}</span>
        </header>
    );
}
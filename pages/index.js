import Link from 'next/link'
import { useContextFirm } from '../context/firmContext'
import styles from '../styles/Home.module.css'

const Home= () => {
    const { firms } = useContextFirm()

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <ul className={styles.ul}>
                    {firms && firms.map(firm => (
                        <li key={firm.firmid} className={styles.li}>
                            <Link href={`/firm/${firm.firmid}`}>
                                <a>{firm.firmname}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    )
}

export default Home
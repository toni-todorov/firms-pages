import { useContextFirm } from '../context/firmContext'
import styles from '../styles/Home.module.css'

export default function Home() {
    const { firms } = useContextFirm()

    return (
        <div className={styles.container}>
            <ul className={styles.main}>
                {firms && firms.map((i, index) => (
                    <li key={index}>{i.firmname}</li>
                ))}
            </ul>
        </div>
    )
}

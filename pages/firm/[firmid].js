import { useRouter } from 'next/router'
import { getFirmInfo, getFirmsIds } from '../../services/backend/firms'
import transfromToCamelCase from '../../utils/transformToCamelCase'
import styles from './index.module.css'

const Firm = ({ 
    firmname,
    activity,
    description,
    contactPerson,
    contactMobile,
    contactPhOffice,
    website,
    employee,
    countryName,
    cityName,
    sectorName 
}) => {
    const router = useRouter()
    if (router.isFallback) {
        return (
            <div>Loading...</div>
        )
    }
    

    return (
        <div className={styles.container}>
            <h2 className={styles.name}>{firmname}</h2>
            <div className={styles.details}>
                <div className={styles['det-name']}>Дейност</div>
                <div className={styles['det-content']}>{activity}</div>
            </div>
            <div className={styles.details}>
                <div className={styles['det-name']}>Държава</div>
                <div className={styles['det-content']}>{countryName}</div>
            </div>
            <div className={styles.details}>
                <div className={styles['det-name']}>Лице за контакт</div>
                <div className={styles['det-content']}>{contactPerson}</div>
            </div>
            <div className={styles.details}>
                <div className={styles['det-name']}>Мобилен</div>
                <div className={styles['det-content']}>{contactMobile}</div>
            </div>
            <div className={styles.details}>
                <div className={styles['det-name']}>Служебен</div>
                <div className={styles['det-content']}>{contactPhOffice}</div>
            </div>
            <div className={styles.details}>
                <div className={styles['det-name']}>Отрасъл</div>
                <div className={styles['det-content']}>{sectorName}</div>
            </div>
            <div className={styles.details}>
                <div className={styles['det-name']}>Град</div>
                <div className={styles['det-content']}>{cityName}</div>
            </div>
            <div className={styles.details}>
                <div className={styles['det-name']}>website</div>
                <div className={styles['det-content']}>{website}</div>
            </div>
            <div className={styles.details}>
                <div className={styles['det-name']}>Описание</div>
                <div className={styles['det-content']}>{description}</div>
            </div>
            <div className={styles.details}>
                <div className={styles['det-name']}>Брой служители</div>
                <div className={styles['det-content']}>{employee}</div>
            </div>
        </div>
    )

}

export async function getStaticPaths() {
    const data = await getFirmsIds()
    const paths = data.map((firm) => ({ params : { firmid: firm.firmid.toString() }}))
    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
    const response = await getFirmInfo(Number(params.firmid))
    if (!response) {
        return {
            notFound: true
        }
    }
    const data = transfromToCamelCase(response)
    return { props :  data, revalidate: 30}

}

export default Firm
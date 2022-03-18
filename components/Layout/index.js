import styles from './index.module.css'

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            {/* <Nav/> */}
            {children}
            {/* <Footer/> */}
        </div>
    )
}

export default Layout
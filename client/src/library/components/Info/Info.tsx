import styles from './info.module.scss'

interface IInfo {
    title: string
    subTitle?: string
}

const Info = ({
    title,
    subTitle,
}: IInfo) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{title}</h1>
            {subTitle && <p className={styles.subTitle}>{subTitle} </p>}
        </div>
    )
}

export default Info
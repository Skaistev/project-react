import style from'./Footer.module.css'

function Footer(){
    return  (
    <footer className={style.mainFooter + ' red'}>
        <a className={style.link} href="/" >Taisykles</a>
        <p className={style.copyright}>Copyrigth &copy; 2024</p>
    </footer>);
}

export { Footer }

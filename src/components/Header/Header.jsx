import style from './Header.module.css';

function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.menu}>
            <div className={style.wrapper}>
              <a href="/" className={style.logoLink}>
                <svg className={style.logo} width={33} height={33}>
                  <use href="../../images/icons(1).svg#icon-logo"></use>
                </svg>
                Beautyness
              </a>

              <a href="tel:(+22) 123 456 7890" className={style.telLink}>
                <svg className={style.logo} width={21} height={21}>
                  {/* <use href="icons.svg#icon-Logo"></use> */}
                </svg>
                Call Us - (+22) 123 456 7890
              </a>
            </div>
            <nav>
              <ul className={style.menuList}>
                <li className={style.menuItem}>Home</li>
                <li className={style.menuItem}>Pages</li>
                <li className={style.menuItem}>About</li>
                <li className={style.menuItem}>Services</li>
                <li className={style.menuItem}>Contact</li>
              </ul>
              <button type="button" className={style.headerBtn}>
                <svg width={15} height={15}>
                  <use href="../../images/icons(1).svg#icon-calendar"></use>
                </svg>
                Reservation
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

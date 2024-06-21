import { useEffect, useState, React } from "react";


const headerItems = [
  {
    name: "Главная",
    link: "/#home",
    modificator: "text_red",
  },
  {
    name: "О нас",
    link: "/#about",
  },
  {
    name: "Абитуриенту",
    link: "/#enrollee",
  },
  {
    name: "Студенту",
    link: "/#student",
  },
  {
    name: "Выпускнику",
    link: "/#graduate",
  },
  {
    name: "Педагогу",
    link: "/teacher",
  },
];
const topPanelItems = [
  {
    name: "8 (495) 556-52-94",
    link: "/#home",
    img: "images/icon/phone-call.png",
  },
  {
    name: "г.о. Жуковский, ул. Кирова дом 3, корпус 4",
    link: "/#about",
    img: "images/icon/map-point.png",
  },
  {
    name: "mo_zhat@mosreg.ru",
    link: "/#enrollee",
    img: "images/icon/mail-icon.png",
  },
];


export default function Header(props) {
  const [headerClass, setHeaderClass] = useState(" ");
  const [isShowedMenu, setIsShowedMenu] = useState(false);
  const headerHeightPx = 150;

useEffect(() => {
  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > headerHeightPx ||
      document.documentElement.scrollTop > headerHeightPx
    ) {
      setHeaderClass("scrolled");
    } else {
      setHeaderClass("");
    }
  });
}, []);

  return (
    <header id="header" className={headerClass}>
      <div className="bg_blue">
        <div className="container ">
          <div className="row">
            <div className="col-10">
              <ul className="top-panel">
                {topPanelItems.map((item, index) => (
                  <div key={"mykey" + index}>
                    <li>
                      <a className="text_white" href={item.link}>
                        <img className="icon" src={item.img} alt="icon" />{" "}
                        {item.name}
                      </a>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <div className="col-2 d-flex justify-content-end">
              <a href="/reg" className="text_white">
                <img src="images/icon/reg.png" className="icon" alt="reg"></img>{" "}
                Войти
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row items_center">
          <div className="col-4 ">
            <a href="/">
              <img
                src="images/logo/LogoBanner.png"
                alt="logo"
                className="logo-banner"
              ></img>
            </a>
          </div>
          <div className="col-8 d-md-flex d-none">
            <ul className="nav-bar">
              {headerItems.map((item, index) => (
                <div key={"mykey" + index}>
                  <li className="nav-bar-item">
                    <a className={`nav-link ${item.modificator}`} href={item.link}>
                      {" "}
                      {item.name}
                    </a>
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <div
          className={
            "toggle-menu-button " +  ("col-1 ") +
            (isShowedMenu ? "toggle-menu-button__touched " : "") 
          }
          onClick={() => setIsShowedMenu(!isShowedMenu)}
        >
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>

        {isShowedMenu && (
          <nav className={"nav__mobile"}>
            <ul className="nav-list">
              {headerItems.map((item, index) => (
                <li className="nav-list-item" key={index}>
                  <a href={item.link} className="nav-link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        </div>
      </div>
    </header>
  );
}

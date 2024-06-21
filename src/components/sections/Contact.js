export default function Contact() {
  const contactlItems = [
    {
      name: "Телефон: 8 (495) 556-52-94",
      name2: "Телефон филиала: 8 (495) 221 63 09",
      name3: "Приёмная комиссия: +7 (495) 556-53-36",
      img: "images/contact/phone-call (1).png",
    },
    {
      name: "Адрес: г.о. Жуковский, ул. Кирова дом 3, корпус 4",
      name2: "Адрес Филиала: ул. Михалевича, 58, Раменское",
      img: "images/contact/placeholder-filled-point.png",
    },
    {
      name: "mo_zhat@mosreg.ru",
      img: "images/contact/mail.png",
    },
  ];
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              className="about_logo"
              src="images/logo/LogoBanner.png"
              alt="logo"
            ></img>
          </div>
          <div className="col-lg-5 col-10">
            <h3>Контакты</h3>
            <ul className="top-panel">
              {contactlItems.map((item, index) => (
                <div key={"mykey" + index}>
                  <li>
                    <img className="icon" src={item.img} alt="icon" />
                      <p className="text_basic">
                        {item.name}<br/>
                        {item.name2}<br/>
                        {item.name3}
                      </p>
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <div className="col-lg-5 gap-row_max" >
            <h3>Мы в социальных сетях</h3>
            <div className="items_center gap-col">
                <a href="https://t.me/official_zhat/"><img src="images/contact/telegram.png" alt="tg"/></a>
                <a href="https://vk.com/zhatofficial_professionalitet"><img src="images/contact/vkontakte.png" alt="vk"/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

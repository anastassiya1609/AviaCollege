import Button from "./Button";

export default function News() {
  const newsItems = [
    {
      img: "images/news/img 1.jpg",
      new: "Студенты приняли участие в сертификационной олимпиаде «Траектория будущего»",
      data: "16.01.2024 г.",
    },
    {
      img: "images/news/img 2.jpg",
      new: "Турнир по хоккею с мячом в валенках",
      data: "15.01.2024 г.",
    },  
    {
      img: "images/news/img 3.jpg",
      new: "«Разговоры о важном» - «Налоговая грамотность»",
      data: "15.01.2024 г.",
    },
    {
      img: "images/news/img 4.jpg",
      new: "«Наступивший 2024 год объявлен в России Годом семьи!",
      data: "15.01.2024 г.",
    },
    {
      img: "images/news/img 5.jpg",
      new: " Родные просторы",
      data: "11.01.2024 г.",
    },
    {
      img: "images/news/img 6.jpg",
      new: "Поздравление с наступающим Новым годом!",
      data: "29.12.2023 г.",
    },
  ];

  return (
    <section id="news">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Новости</h2>
          </div>
          {newsItems.map((item, index) => (
            <div key={"mykey" + index} className="col-md-4 col-sm-6">
              <a href={item.link} className="wrapper">
                <img src={item.img} className="img_big" alt="prof" />
                <div className="padding">
                  <p className="text_basic">{item.new}</p>
                  <p className="text_red">{item.data}</p>
                </div>
              </a>
              <p></p>
            </div>
          ))}
        </div>
        <Button children={"Посмотреть все.."}/>
      </div>
    </section>
  );
}

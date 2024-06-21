export default function UsefulLinks() {
    const forStudentItems = [
      {
        img: "images/useful/useful 1.png",
        link:"https://kadry.mosreg.ru/",
      },
      {
        img: "images/useful/useful 2.png",
        link:"https://coppmo.ru/",
      },
      {
        img: "images/useful/useful 3.png",
        link:"https://xn--80aapampemcchfmo7a3c9ehj.xn--p1ai/projects/obrazovanie",
      },
      {
        img: "images/useful/useful 4.png",
        link:"https://trudvsem.ru/",
      },
    ];
  
    return (
      <section id="UsefulLinks">
        <div className="container">
          <div className="row gap-row_max">
            <div className="col-12">
              <h2>Полезные ссылки</h2>
            </div>
            <div className="row">
              {forStudentItems.map((item, index) => (
                <div key={"mykey" + index} className="col-md-3 col-sm-6 wrapper_center">
                  <a href={item.link}>
                    <img src={item.img} className="img_big" alt="prof" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
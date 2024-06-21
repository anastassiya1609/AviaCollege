import Button from './Button';


export default function Professions() {

  const profItems = [
    {
      img: "images/prof/prof1.png",
      name: "Производство и обслуживание авиационной техники",
    },
    {
      img: "images/prof/prof3.png",
      name: "Сетевое и системное администрирование",
    },
    {
      img: "images/prof/prof4.png",
      name: "Авиационные приборы и комплексы",
    },
    {
      img: "images/prof/prof5.png",
      name: "Информационные системы и программирование",
    },
  ];
  return (
    <div className="bg_blue" id="prof">
      <div className="row">
        <div className="col-4 d-none d-lg-flex">
          <img
            className="img_big"
            src="images/prof/students.jpg"
            alt="students"
          />
        </div>
        <div className="col-lg-7">
          <div className="container">
            <div className=" wrapper_end">
              <h2 className="text_white">
                Специальности, представленные в нашем техникуме
              </h2>
              {profItems.map((item, index) => (
                <div key={"mykey" + index} className="wrapper-prof">
                  <img src={item.img} className="icon-prof" alt="prof" />
                  <p className="text_bolt">{item.name}</p>
                </div>
              ))}
              <Button children={"Посмотреть все.."} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

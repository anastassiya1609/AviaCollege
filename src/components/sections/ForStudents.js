export default function ForStudent() {
  const forStudentItems = [
    {
      img: "images/stud/cap.png",
      name: "Расписание",
      link: "/",
    },
    {
      img: "images/stud/refresh-data.png",
      name: "Цифровая среда",
    },
    {
      img: "images/stud/worker.png",
      name: "Содействие занятости населения",
    },
    {
      img: "images/stud/briefcase.png",
      name: "Трудоустройство",
    },
  ];

  return (
    <section id="forStudents">
      <div className="container">
        <div className="row gap-row_max">
          <div className="col-12">
            <h2>Информация для студентов</h2>
          </div>
          <div className="row">
            {forStudentItems.map((item, index) => (
              <div key={"mykey" + index} className="col-lg-3 col-6 wrapper_center">
                <a href={item.link} className="wrapper_round">
                  <img src={item.img} className="icon_big" alt="prof" />
                </a>
                <p className="text_bolt ">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

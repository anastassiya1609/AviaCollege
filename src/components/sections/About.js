import Button from "./Button";

export default function About() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2> Краткая информация о нашем техникуме</h2>
            <p className="text_basic">
              Государственное бюджетное профессиональное образовательное
              учреждение Московской области «Авиационный техникум имени В.А.
              Казакова». Образован в 1945 году. Специальности входят в Перечень
              профессий и специальностей среднего профессионального образования,
              необходимых для применения в области реализации приоритетных
              направлений модернизации и технологического развития экономики
              Российской Федерации.
            </p>
          </div>
          <div className="col-4">
            <img
              className="about_logo"
              src="images/logo/LogoBanner.png"
              alt="logo"
            ></img>
          </div>
        </div>
        <div className="row">
            <div className="col-5">
                <Button children={'Подробнее..'}></Button>
              
            </div>
        </div>
      </div>
    </section>
  );
}

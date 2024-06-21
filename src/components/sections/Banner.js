import Button from "./Button";

export default function Banner() {
  return (
    <div id="Banner">
      <img className="img-banner" src="images/banner/airplane.png" alt=""></img>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>
              ГБПОУ МО «АВИАЦИОННЫЙ ТЕХНИКУМ ИМЕНИ В.А. КАЗАКОВА»
              <br />г. Жуковский
            </h1>
          </div>
          <div className="col-lg-5">
            <h3>
              Стройте свое будущее вместе с нами! Образовательные программы
              нашего техникума дадут вам необходимые навыки, подготовку и
              знания, чтобы все, чему вы научились здесь, пригодилось вам в
              будущем.
            </h3>
          </div>
          <div className="col-lg-7 btn_container">
            <Button children={"Задать вопрос"} href={"/form"}/>
            <Button variant='white' children={'Виртуальный тур'} href={'/#>'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

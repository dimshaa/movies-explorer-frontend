import './AboutMe.css';
import myPhoto from '../../images/my-photo.jpg'

function AboutMe() {
  return (
    <article className='about-me'>
      <h2 className='about-me__title'>
        Студент
      </h2>
      <section className='about-me__section'>
        <div className='about-me__section-container'>
          <h3 className='about-me__name'>
            Дима
          </h3>
          <p className='about-me__summary'>
            Фронтенд-разработчик, 31 год
          </p>
          <p className='about-me__biography'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ.
            У меня есть жена и собака. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами
            и ушёл с постоянной работы.
          </p>
          <a className='about-me__link' href='https://github.com/dimshaa' target='_blank' rel='noreferrer'>
            Github
          </a>
        </div>
        <img className='about-me__photo' src={myPhoto} alt='моя фотография' />
      </section>
    </article>
  );
};

export default AboutMe;

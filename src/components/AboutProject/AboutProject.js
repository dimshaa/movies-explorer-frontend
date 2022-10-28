import './AboutProject.css';

function AboutProject() {
  return (
    <article className='about-project'>
      <h2 className='about-project__title'>
        О проекте
      </h2>
      <div className='about-project__section-container'>
        <section className='about-project__section'>
          <h3 className='about-project__subtitle'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__paragraph'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </section>
        <section className='about-project__section'>
          <h3 className='about-project__subtitle'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__paragraph'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </section>
      </div>
      <section className='about-project__timeline'>
        <span className='about-project__diagram about-project__diagram_theme_dark'>1 неделя</span>
        <span className='about-project__diagram about-project__diagram_theme_light'>4 недели</span>
        <p className='about-project__diagram-subtitle'>Back-end</p>
        <p className='about-project__diagram-subtitle'>Front-end</p>
      </section>
    </article>
  );
};

export default AboutProject;

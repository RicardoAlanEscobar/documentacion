import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Alumnos',
    Svg: require('@site/static/img/student-graduation-dance-svgrepo-com.svg').default,
    description: (
      <>
       Si eres alumno, aquí podrás encontrar tutoriales que te facilitarán tu estancia en Neuuni. 
       <p></p>
         <a href='/docs/intro' className='home-buton'><b>Ingresar</b></a>
</>
    ),
  },
  {
    title: 'Mentores',
    Svg: require('@site/static/img/teacher-svgrepo-com.svg').default,
    description: (
      <>
        Como mentor, es importante que conozca su entorno de trabajo y las herramientas
         que día con día empleara para garantizar la mejor calidad dentro de las clases. 
         <p></p>
         <a href='/mentores/intro' className='home-buton'><b> Ingresar</b></a>
          </>
    ),
  },
  {
    title: 'Administrativos',
    Svg: require('@site/static/img/support-online-center-svgrepo-com.svg').default,
    description: (
      <>
       Colaboradores de Neuuni, aquí encontrarán tutoriales para mejorar
        el dominio de las herramientas con las cuales emplean su trabajo.
        <p></p>
         <a href='/administrativos' className='home-buton'><b>Ingresar</b></a>
         
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md ">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

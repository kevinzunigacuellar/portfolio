import profilePic from 'public/img/me.jpg'
import eloquentJavascript from 'public/img/eloquent_javascript.jpg'
export const homeData = {
  en: {
    pageTitle: 'Home',
    welcome: 'Hello, I am Kevin Zuniga',
    description:
      'Welcome to my slice of the internet. I am a graduate student in mechanical engineering at University of Vermont. In my free time I enjoy making websites and experimenting with web app technologies.',
    postsTitle: 'Latest posts:',
  },
  es: {
    pageTitle: 'Inicio',
    welcome: 'Hola, soy Kevin Zuñiga',
    description:
      'Bienvenido a mi rebanada en la internet. Soy un estudiante de posgrado en ingeniería mecánica en la Universidad de Vermont. En mi tiempo libre me dedico a hacer paginas web y experimentar con nuevas tecnologías.',
    postsTitle: 'Últimas articulos:',
  },
}

export const bookShelfData = {
  en: {
    pageTitle: 'My bookshelf',
    pageDescription:
      'I love reading so I thought of making a bookshelf were I share all the books I finished cover to cover.',
    books: [
      {
        img: '/img/eloquent_javascript.jpg',
        title: 'Eloquent JavaScript',
        author: 'Marijn Haverbeke',
        year: '2018',
        comment: 'Hands down one of the best JavaScript books.',
      },
    ],
  },

  es: {
    pageTitle: 'Mi estante de libros',
    pageDescription:
      'Me gusta leer, por eso pense en hacer un estante de libros donde compartire todos los libros que he terminado de tapa a tapa.',
    books: [
      {
        img: '/img/eloquent_javascript.jpg',
        title: 'Eloquent JavaScript',
        author: 'Marijn Haverbeke',
        year: '2018',
        comment: 'Uno de los mejores libros de JavaScript que he leido.',
      },
    ],
  },
}

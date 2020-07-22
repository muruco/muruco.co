<template>
  <div>
    <stage :disable-particles="disableParticles" />
    <home-section image="https://static.iris.net.co/semana/upload/images/2018/12/6/593669_1.jpg" alternative>
      <vue-headline level="2">Comunidad Abierta</vue-headline>
      <br />
      <vue-headline level="3">¿Qué es MuRuCo?</vue-headline>
      <p>
        Es una comunidad abierta para la Mujer Rural Colombiana, una iniciativa con el apoyo de MinTIC y ONU Mujeres la
        cual nace para conectar integralmente a las mujeres del campo con las tecnologias y recursos digitales,
        brindandoles un espacio para crear comunidades, informase y capacitarse continuamente en todos los aspectos
        técnicos y tecnológicos de la industria agricola del país.
      </p>
      <br />
      <vue-headline level="3">Centro de Información y Educación Continua</vue-headline>
      <p>
        Como comunidad abierta contaremos pretendemos centralizar la mayor cantidad de información y recursos de interes
        para la Mujer Rural, seremos además un agilizador en la creación de comunidades productivas autónomas,
        facilitando recursos tecnológicos, capacitaciones y alianzas estratégicas para lograr la conexión necesaria de
        las pequeñas y medianas productoras con la tecnología que fortalezca sus procesos productivos.
      </p>
      <br />
      <vue-headline level="3">Plataforma Digital MultiOperativa</vue-headline>
      <p>
        Para lograr cerrar la brecha tecnológica entre el Campo y la Ciudad, MuRuCo ofrece una plataforma digital
        multioperativa capaz de interactuar dinámicamente con cualquier persona a lo largo del territorio nacional a
        travéz de la integración de servicios que operen sobre la red 3G/SMS, redes de mensajeria instantanea y acceso
        limitado a internet, para ofrecer la máxima covertura posible.
      </p>
    </home-section>

    <home-section image="https://www.elcampesino.co/wp-content/uploads/2018/07/mujer-rural.jpg" flip>
      <vue-headline level="2">Enterprise ready</vue-headline>
      <br />
      <vue-headline level="3">SEO</vue-headline>
      <p>
        We support SEO (document head tags management) and server-side-rendering for search engines that support
        indexing of JavaScript content. (eg. Google)
      </p>
      <br />
      <vue-headline level="3">Best practices</vue-headline>
      <p>
        A Common style guide, TypeScript, and the best test setup: Automatically guarantee code quality and non-breaking
        changes.
      </p>
      <br />
      <vue-headline level="3">i18n</vue-headline>
      <p>
        Scalable apps need to support multiple languages, easily add and support multiple languages with vue-i18n.
      </p>
    </home-section>

    <home-section
      image="https://static.hsbnoticias.com/sites/default/files/styles/original/public/gallery/2019/10/chrismusic09-1.jpg?itok=i2Fc1pfV"
      alternative
    >
      <vue-headline level="2">User experience</vue-headline>
      <br />
      <vue-headline level="3">Animations</vue-headline>
      <p>
        A stable animations set up already included (<a href="http://animejs.com/" target="_blank" rel="noopener"
          >anime.js</a
        >).
      </p>
      <br />
      <vue-headline level="3">Progressive-Web-App</vue-headline>
      <p>
        Offline-first support with service-workers and a lighthouse score as high as possible (90+).
      </p>
      <br />
      <vue-headline level="3">Design System</vue-headline>
      <p>
        Includes a blueprint for a 100% customizable Design System with a huge amount of
        <a href="/storybook" target="_blank" rel="noopener">components</a>.
      </p>
    </home-section>

    <home-section
      image="https://rtvc-assets-radionacional-v2.s3.amazonaws.com/s3fs-public/styles/redes1200x630/public/senalradio/articulo-noticia/galeriaimagen/69835_463218733747849_1186596043_n.jpg?itok=VO6JM-p6"
      flip
    >
      <vue-headline level="2">Quick start</vue-headline>
      <br />
      <vue-headline level="3">Via <code>npx</code></vue-headline>
      <br />
      <ol>
        <li>
          Run <code>npx @vuesion/create [project-name]</code><br />
          for example <code>npx @vuesion/create my-app</code>
        </li>
        <li>Change directory <code>cd my-app</code></li>
        <li>Run <code>npm run dev</code></li>
      </ol>
      <br />
      <br />
      <vue-headline level="3">Via Git</vue-headline>
      <br />
      <ol>
        <li>
          Download or clone (<code>git clone https://github.com/<br />vuesion/vuesion</code>) the repository
        </li>
        <li>Change directory <code>cd vuesion</code></li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Run <code>npm run dev</code></li>
      </ol>
    </home-section>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import Stage from '../components/Stage/Stage.vue';
import HomeSection from '@/app/home/components/HomeSection/HomeSection.vue';
import { IState } from '@/app/state';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  metaInfo: {
    title: 'MuRuCo.co',
    meta: [
      {
        name: 'description',
        content: 'muruco - conectando a al mujer rural colombiana',
      },
      {
        name: 'robots',
        content: 'INDEX,FOLLOW',
      },
      {
        name: 'keywords',
        content: 'vue.js, vuex, vuex-persist, seo, server-side-rendering, isomorphic, progressive-web-app',
      },

      { name: 'og:url', content: 'https://vuesion.herokuapp.com/' },
      { name: 'og:site_name', content: 'vuesion' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en' },
      {
        name: 'og:title',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      {
        name: 'og:description',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      { name: 'og:image:url', content: 'https://vuesion.herokuapp.com/logo.png' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@vuesion1' },
      { name: 'twitter:creator', content: '@vuesion1' },
      {
        name: 'twitter:title',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      { name: 'twitter:url', content: 'https://vuesion.herokuapp.com/' },
      { name: 'twitter:image', content: 'https://vuesion.herokuapp.com/logo.png' },
      {
        name: 'twitter:description',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
    ],
  },
  components: {
    VueHeadline,
    HomeSection,
    Stage,
  },
  computed: {
    ...mapState({
      disableParticles: (state: IState) =>
        (state.app.config && state.app.config.features && state.app.config.features.disableParticles) || false,
    }),
  },
};
</script>

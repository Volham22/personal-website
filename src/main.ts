import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret);
library.add(faGithub);
library.add(faLinkedin);
library.add(faEnvelope);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

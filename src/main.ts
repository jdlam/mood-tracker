import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faFaceFrown, faFaceMeh, faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import {
  faFaceFrown as farFaceFrown,
  faFaceMeh as farFaceMeh,
  faFaceSmile as farFaceSmile
} from '@fortawesome/free-regular-svg-icons'
// import { faFaceMeh } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faFaceFrown, faFaceMeh, faFaceSmile, farFaceFrown, farFaceMeh, farFaceSmile)

/* add icons to the library */
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')

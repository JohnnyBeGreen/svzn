import Vue from "vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faMinus, faPlus, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart, faMinus, faPlus, faPencilAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
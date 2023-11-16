import {Router} from './router.js'

const router = new Router()
router.add('/',"conceito-SPA/pages/home.html")
router.add('/about',"conceito-SPA/pages/about.html")
router.add('/contato',"conceito-SPA/pages/contato.html")
router.add(404,"conceito-SPA/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
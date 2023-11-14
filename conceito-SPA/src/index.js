import './router.js'

const routes = {
    "/": "conceito-SPA/pages/home.html",
    "/about": "conceito-SPA/pages/about.html",
    "/contato": "conceito-SPA/pages/contato.html",
    404: "conceito-SPA/pages/404.html",

}


handle()

window.onpopstate = () => handle()
window.route = () => route()
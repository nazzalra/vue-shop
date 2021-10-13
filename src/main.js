import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from "jquery";
import "@popperjs/core";
import "bootstrap";
import "@/assets/app.scss";

// import component
import Navbar from "@/components/Navbar";

window.$ = window.jQuery = jQuery;
Vue.config.productionTip = false;
Vue.component( 'Navbar', Navbar );

new Vue( {
  router,
  render: ( h ) => h( App ),
} ).$mount( "#app" );

// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Todo from "./components/Todo";

// import "./main.css";

Vue.config.productionTip = false;

// var nameList = new Vue({
//   el: "#nameList",
//   data: {
//     newName: "",
//     names: ["Jack", "Jim", "Johnny", "Jameson"],
//   },

//   methods: {
//     addName() {
//       this.names.push(this.newName);
//     },
//   },

//   mounted() {},
// });

new Vue({
  el: "#app",
  template: "<App/>",
  components: { App },
});

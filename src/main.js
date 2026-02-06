import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/state";
import RestartButton from "./components/UI/RestartButton.vue";
import TestDropdown from "./components/UI/TestDropdown.vue";
import "./assets/main.css";

const app = createApp(App);
app.component("restart-button", RestartButton);
app.component("test-dropdown", TestDropdown);
app.use(store);
app.mount("#app");

import { mount } from "svelte";
import App from "./containers/App.svelte";

const app = mount(App, {
  target: document.getElementById("app"),
});

export default app;

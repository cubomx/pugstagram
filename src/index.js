import App from './containers/App.svelte';

const app = new App({
    // where to push our app
    target: document.querySelector('main')
});

export default app;
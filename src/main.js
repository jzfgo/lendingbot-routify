import HMR from '@sveltech/routify/hmr';
import App from './App.svelte';
import '../node_modules/normalize.css/normalize.css';
import './assets/styles/global.css';

const app = HMR(App, { target: document.body }, 'routify-app');

export default app;

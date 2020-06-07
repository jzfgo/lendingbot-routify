import HMR from '@sveltech/routify/hmr';
import App from './App.svelte';
import '../node_modules/modern-css-reset/dist/reset.css';
import './assets/styles/global.css';

const app = HMR(App, { target: document.body }, 'routify-app');

export default app;

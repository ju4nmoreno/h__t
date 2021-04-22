import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './Components/UI/BaseCard.vue';
import BaseButton from './Components/UI/BaseButton.vue';
import BaseDialog from './Components/UI/BaseDialog.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');

function quein(nada_, nada) {
  return nada_ + nada;
}

quein('well', 'hahah');

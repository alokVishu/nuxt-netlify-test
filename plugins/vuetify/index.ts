import { createVuetify } from 'vuetify'
import { aliases } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    icons: {
      defaultSet: 'mdi',
      aliases,
    }
  })
  nuxtApp.vueApp.use(vuetify)
})

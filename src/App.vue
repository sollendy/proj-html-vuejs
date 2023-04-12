<script>
import {store} from './store'
 import AppHead from './components/AppHead.vue';
 import AppMain from './components/AppMain.vue';
 export default {
    data() {
        return {
            store,
        }
    },
    components: {
       AppHead,
       AppMain,
    },

 }
</script>

<template>
  <AppHead></AppHead>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped>

</style>
<script>
import {store} from './store'
 import AppHead from './components/AppHead.vue';
 import AppMain from './components/AppMain.vue';
 import AppFoot from './components/AppFoot.vue';
 export default {
    data() {
        return {
            store,
        }
    },
    components: {
      AppHead,
      AppMain,
      AppFoot,
    },

 }
</script>

<template>
  <AppHead></AppHead>
  <AppMain></AppMain>
  <AppFoot></AppFoot>
</template>

<style lang="scss" scoped>

</style>
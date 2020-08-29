<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject } from '@vue/composition-api';
import { DI_STORE } from '../share';

export default defineComponent({
  props: {
    msg: String,
  },
  setup(props) {
    const msg = computed(() => props.msg);
    const store = inject(DI_STORE);
    return { msg, store };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

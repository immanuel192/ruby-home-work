<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import { injectStore } from '../share';

export default defineComponent({
  props: {
    msg: String,
  },
  setup(props) {
    const store = injectStore();
    const message = computed(() => props.msg);
    const testValue = computed(() => store.state.testValue);
    return { message, testValue };
  },
});
</script>

<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <h1 class="store-test">{{ testValue }}</h1>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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

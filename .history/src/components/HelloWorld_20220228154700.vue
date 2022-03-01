<script setup lang="ts">
import { useUserStore } from "@/store/user";
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
const userStore = useUserStore();
const appStore = useAppStore();
console.log(appStore.config);
console.log(userStore);
console.log(userStore.name);
const name = computed(() => userStore.name);
const { age } = storeToRefs(userStore);

const updateUserState = () => {
  const { name, age } = userStore.$state;
  userStore.updateState({
    name: name + 1,
    age: age + 1,
  });
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <div>姓名：{{ name }}</div>
  <div>年龄：{{ age }}</div>
  <div>计算的名字：{{ userStore.fullName }}</div>
  <div>app的config: {{ appStore.config }}</div>
  <button @click="updateUserState">更新数据</button>


作者：张雨凡
链接：https://juejin.cn/post/7054163548221472799
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
</template>

<style scoped lang="scss">
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

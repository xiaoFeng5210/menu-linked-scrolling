<script setup lang="ts">
import {ref} from "vue";
import useMenuLinkScroll from "./composables/useMenuLinkScroll.ts";
import {mockList} from "../utils/mock.ts";

const asides = ref([
  {id: 1, title: "Aside 1"},
  {id: 2, title: "Aside 2"},
  {id: 3, title: "Aside 3"},
  {id: 4, title: "Aside 4"},
  {id: 5, title: "Aside 5"},
  {id: 6, title: "Aside 6"},
  {id: 7, title: "Aside 7"},
  {id: 8, title: "Aside 8"},
  {id: 9, title: "Aside 9"},])

const {activeMenu, selectMenu, contentRef} = useMenuLinkScroll(asides);
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="w-[700px] h-[500px] border-4 flex">
      <aside class="border-r-4 h-full w-[20%]">
        <ul>
          <li v-for="(item, index) in asides"
              @click="selectMenu(item.id)"
              class="cursor-pointer text-2xl" :class="activeMenu === item.id ? 'text-red-300' : ''" :key="item.id">
            {{item.title}}
          </li>
        </ul>
      </aside>
      <main class="w-[80%] overflow-hidden h-full overflow-y-auto" ref="contentRef">
        <div v-for="(item, index) in mockList" :key="index" :id="`aside_${item.id}`" class="h-[200px] w-full border-b-4">
          <h2>{{item.title}}</h2>
          <span class="w-full h-full break-all whitespace-normal">{{item.content}}</span>
        </div>
      </main>  
    </div>
  </div>
</template>

<style scoped>
</style>

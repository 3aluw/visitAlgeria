import { defineStore, acceptHMRUpdate  } from "pinia";

export const AlgerianCities = defineStore("AlgerianCities",()=>{});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(AlgerianCities, import.meta.hot))
  }
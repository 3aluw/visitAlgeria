import { defineStore, acceptHMRUpdate  } from "pinia";
 
export const AlgerianCitiesStore = defineStore("AlgerianCities",()=>{
let cities =ref([])

  async function FetchCities(){
  const {$contentful} = useNuxtApp();
  const Entries = await $contentful.getEntries({
    content_type : "algerianCities",
  });
   cities.value = Entries.items;
  return Entries
  };


  return{cities,FetchCities}
});


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(AlgerianCitiesStore, import.meta.hot));
}

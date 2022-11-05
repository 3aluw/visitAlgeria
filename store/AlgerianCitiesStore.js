import { defineStore, acceptHMRUpdate  } from "pinia";
 
export const AlgerianCitiesStore = defineStore("AlgerianCities",()=>{


  async function FetchCities(){
  const {$contentful} = useNuxtApp();
  const Entries = await $contentful.getEntries({
    content_type : "product",
  });
  console.log(Entries);
  return Entries
  }
  return{
    FetchCities
  }
});


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(AlgerianCitiesStore, import.meta.hot));
}

import { defineStore, acceptHMRUpdate  } from "pinia";
 
export const AlgerianCitiesStore = defineStore("AlgerianCities",()=>{
let cities =ref([]);
let selectedCity= ref([]);



  async function FetchCities(){
  const {$contentful} = useNuxtApp();
  const Entries = await $contentful.getEntries({
    content_type : "algerianCities",
    select:"sys.id,fields.name,fields.majorCity"
  });
   cities.value = Entries.items;
  return Entries
  };


   async function  fetchOneCity(cityName){
      await FetchCities();
      //retreive the selected id
    const res = cities.value.find(el=>
     el.fields.name == cityName
     ).sys.id

     //fetch from Contentful
     const {$contentful} = useNuxtApp();
  const Entries = await $contentful.getEntries({
    content_type : "algerianCities",
    "sys.id": res,
  });
  
  selectedCity.value = Entries.items;
 /* console.log( selectedCity.value)*/
  }

  return{cities,selectedCity,FetchCities,fetchOneCity}
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(AlgerianCitiesStore, import.meta.hot));
}

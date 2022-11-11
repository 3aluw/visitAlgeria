import * as contentful from "contentful";

export default defineNuxtPlugin((nuxtapp)=>{
    const runtimeConfig  = useRuntimeConfig();
    const client = contentful.createClient({
        space: runtimeConfig .contentfulSpace,
        accessToken: runtimeConfig.contentfulAcsessToken,
      });
      return{
        provide:{
            contentful : client
        }
      }
})
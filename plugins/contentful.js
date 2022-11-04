import * as contentful from "contentful";
const config = useRuntimeConfig();
export default defineNuxtPlugin((nuxtapp)=>{
    const client = contentful.createClient({
        space: config.contentfulSpace,
        accessToken: contentfulAcsessToken,
      });
      return{
        provide:{
            contentful : client
        }
      }
})
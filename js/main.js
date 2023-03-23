const { createApp } = Vue

  createApp({
    data() {
      return {
        mail: ""
      }
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response)=>{
            this.mail = response.data.response;
        });
    } 
  }).mount('#app')
const { createApp } = Vue

  createApp({
    data() {
      return {
        currentMail : "",
        mails: []
      }
    },
    methods :{
        addTenMailToMails(){
            for(let i=0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response)=>{
                    this.mails.push(response.data.response);
                });
            }
        }
    },
    mounted(){
        this.addTenMailToMails();
    } 
  }).mount('#app')
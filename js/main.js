const { createApp } = Vue

  createApp({
    data() {
      return {
        currentMail: "",
        isReady: false,
        mails: []
      }
    },
    methods :{
        addTenMailToMails(){
            for(let i=0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response)=>{
                    this.mails.push(response.data.response);
                    if(i==9){
                        this.isReady = true;
                    }
                });
            }
        }
    },
    mounted(){
        this.addTenMailToMails();
    } 
  }).mount('#app')
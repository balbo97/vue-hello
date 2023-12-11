const {createApp} = Vue
createApp({
    data(){
        return {
            message: 'Ciao a tutti',
            image: './img/bali.jpeg'

        }
    }
}).mount("#app")
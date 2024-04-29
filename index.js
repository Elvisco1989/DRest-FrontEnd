 
 const baseUrl = "https://localhost:7299/api/Musics"
 Vue.CreateApp({
    data(){
        return{
            Id: null,
            Title:"",
            Artist: "",
            PublicationYear:null,
            Duration: null,

            Music : {
            Id: null,
            Title:"",
            Artist: "",
            PublicationYear:null,
            Duration: null,

            },

            Musics : []

        }
    },
    methods: {
        async getMusics() {
            try {

                const respond = await axios.get(baseUrl)
               
                
                this.Musics = await respond.data
                // console.log(Cars)
            }
            catch (ex) {
                alert(ex.message)
            }

        },

    } 
 }).mount("#app")
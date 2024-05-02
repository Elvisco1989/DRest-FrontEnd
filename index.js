 
//  const baseUrl = "https://localhost:7299/api/Musics"
 const baseUrl = "https://drrest20240418140840.azurewebsites.net/api/Musics"
 Vue.createApp({
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

            Musics : [],
            Singlemusic : null,
            deletemessage: ""

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
        async getbyId(id){
            const url = baseUrl + "/" + id
            try{
                const respond = await axios.get(url)
                this.Singlemusic = await respond.data
            }
            catch(ex){
                alert(ex.message)
            }
        },
        async deleteMusic(deleteId){
            const url = baseUrl + "/" + deleteId
            try{
                respond = await axios.delete(url)
                this.deletemessage = respond.status + "" + respond.statusText
                this.getMusics()
            }
            catch(ex){
                alert(ex.message)
            }
        }
        

    } 
 }).mount("#app")
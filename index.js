 
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
            id: 0,
            title:"",
            artist: "",
            publicationYear:0,
            duration: 0,

            },
            updateData: { id: 0, title: "", artist: "", publicationYear: 0 , duration:0},

            Musics : [],
            Singlemusic : null,
            deletemessage: "",
            addmessage: "",
            updatemessage: ""

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
        },
        async AddMusic(){
           
            try{
                respond = await axios.post(baseUrl, this.Music)
                 this.addmessage = "respond " + respond.status + " " + respond.statusText
                this.getMusics()
            }
            catch(ex){
                alert(ex.message)

            }

        },async updateMusic(){
            const url = baseUrl + "/" + this.updateData.id
            try{
                respond = await axios.put(url, this.updateData)
                 this.updatemessage = "respond " + respond.status + " " + respond.statusText
                this.getMusics()
            }
            catch(ex){
                alert(ex.message)

            }

        }

        

    } 
 }).mount("#app")
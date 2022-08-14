export default {
    name: 'Header',
    data(){
        return{
            isOpen: false,
        }
    },
    methods :{
        showNav(){
            this.isOpen = !this.isOpen;
        }
    }
}
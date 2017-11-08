require('../bootstrap');

const manageTags = new Vue({
    el: '#manageTags',
    data: {},
    methods: {
    	assignData(response){
    		console.log(response);
    	}
    },
    mounted(){
    	axios.get(window.location.pathname)
    		.then(response => this.assignData(response));
    }
});
require('../bootstrap');
import tagsTable from './components/tags/tagsTable';

const manageTags = new Vue({
    el: '#manageTags',
    data: {
    	tags: []
    },
    methods: {
    	assignData(response){
    		this.tags = response.data.tags;
    	}
    },
    components: {
    	tagsTable
    },
    mounted(){
    	axios.get(window.location.pathname)
    		.then(response => this.assignData(response));
    }
});
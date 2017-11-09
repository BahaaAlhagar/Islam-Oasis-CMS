require('../bootstrap');
import tagsTable from './components/tags/tagsTable';

window.eventBus = new Vue();

const manageTags = new Vue({
    el: '#manageTags',
    data: {
    	tags: []
    },
    methods: {
    	assignData(response){
    		this.tags = response.data.tags.data;
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
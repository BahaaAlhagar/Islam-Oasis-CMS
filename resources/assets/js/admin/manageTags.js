require('../bootstrap');

import tagsTable from './components/tags/tagsTable';
import VuePaginator from 'vuejs-paginator';


window.eventBus = new Vue();

const manageTags = new Vue({
    el: '#manageTags',
    data: {
    	tags: [],
        resource_url: window.location.pathname,
            options: {
                  remote_data: 'tags.data',
                  remote_current_page: 'tags.current_page',
                  remote_last_page: 'tags.last_page',
                  remote_next_page_url: 'tags.next_page_url',
                  remote_prev_page_url: 'tags.prev_page_url',
                  next_button_text: 'التالى',
                  previous_button_text: 'السابق'
                }
    },
    methods: {
      updateResource(data){
        this.tags = data;
      },
    	assignData(response){
    		this.tags = response.data.tags.data;
    	},
      reloadData(){
        this.$refs.VP.fetchData(this.resource_url + '?page=' + this.$refs.VP.current_page);
      },
    },
    components: {
    	tagsTable,
        VPaginator: VuePaginator
    },
    mounted(){
    	axios.get(window.location.pathname)
    		.then(response => this.assignData(response));

      this.$on('refetchData', this.fetchData());
    }
});
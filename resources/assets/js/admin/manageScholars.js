require('../bootstrap');

import scholarsTable from './components/scholars/scholarsTable';
import VuePaginator from 'vuejs-paginator';

window.toastr = require('toastr');


window.eventBus = new Vue();

const manageScholars = new Vue({
    el: '#manageScholars',
    data: {
    	scholars: [],
        resource_url: window.location.pathname,
            options: {
                  remote_data: 'scholars.data',
                  remote_current_page: 'scholars.current_page',
                  remote_last_page: 'scholars.last_page',
                  remote_next_page_url: 'scholars.next_page_url',
                  remote_prev_page_url: 'scholars.prev_page_url',
                  next_button_text: 'التالى',
                  previous_button_text: 'السابق'
                }
    },
    methods: {
      updateResource(data){
        this.scholars = data;
      },
    	assignData(response){
    		this.scholars = response.data.scholars.data;
    	},
      reloadData(){
        this.$refs.VP.fetchData(this.resource_url + '?page=' + this.$refs.VP.current_page);
      },
      refetchData(response){
        $('.modal.in').modal('hide')
        toastr.success(response.message);
        this.reloadData();
      },
      afterTagDelete(response){
        toastr.warning(response.data.message);
        this.reloadData();
      },
      showAddScholar(){
        $('#addScholarModal').modal('show');
      }
    },
    components: {
    	scholarsTable,
        VPaginator: VuePaginator
    },
    mounted(){
    	axios.get(window.location.pathname)
    		.then(response => this.assignData(response));

      eventBus.$on('scholarAdded', response => this.refetchData(response));
      // eventBus.$on('tagDeleted', response => this.afterTagDelete(response));
    }
});


toastr.options = {
  "positionClass": "toast-bottom-right",
}

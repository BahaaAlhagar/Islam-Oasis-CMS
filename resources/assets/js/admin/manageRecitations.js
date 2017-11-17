require('../bootstrap');

// import recitationsTable from './components/recitations/recitationsTable';
import VuePaginator from 'vuejs-paginator';

window.toastr = require('toastr');


window.eventBus = new Vue();

const manageRecitations = new Vue({
    el: '#manageRecitations',
    data: {
    	recitations: [],
        resource_url: window.location.pathname,
            options: {
                  remote_data: 'recitations.data',
                  remote_current_page: 'recitations.current_page',
                  remote_last_page: 'recitations.last_page',
                  remote_next_page_url: 'recitations.next_page_url',
                  remote_prev_page_url: 'recitations.prev_page_url',
                  next_button_text: 'التالى',
                  previous_button_text: 'السابق'
                }
    },
    methods: {
      updateResource(data){
        this.recitations = data;
      },
    	assignData(response){
    		this.recitations = response.data.recitations.data;
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
      showAddRecitation(){
        $('#addTagModal').modal('show');
      }
    },
    components: {
    	// recitationsTable,
        VPaginator: VuePaginator
    },
    mounted(){
    	axios.get(window.location.pathname)
    		.then(response => this.assignData(response));

      // eventBus.$on('tagAdded', response => this.refetchData(response));
      // eventBus.$on('tagDeleted', response => this.afterTagDelete(response));
    }
});


toastr.options = {
  "positionClass": "toast-bottom-right",
}

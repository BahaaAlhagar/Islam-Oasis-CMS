require('../bootstrap');


import fatwasTable from './components/fatwas/fatwasTable';
import VuePaginator from 'vuejs-paginator';

window.toastr = require('toastr');


window.eventBus = new Vue();

const manageFatwas = new Vue({
    el: '#manageFatwas',
    data: {
        current_view: '',
        fatwas: [],
        resource_url: window.location.pathname,
            options: {
                  remote_data: 'fatwas.data',
                  remote_current_page: 'fatwas.current_page',
                  remote_last_page: 'fatwas.last_page',
                  remote_next_page_url: 'fatwas.next_page_url',
                  remote_prev_page_url: 'fatwas.prev_page_url',
                  next_button_text: 'التالى',
                  previous_button_text: 'السابق'
                }
    },
    methods: {
      updateResource(data){
        this.fatwas = data;
      },
      fetchData(){
        axios.get(this.resource_url)
          .then(response => this.assignData(response));
      },
      refetchData(){
        if(this.current_page == ''){
          this.resource_url = window.location.pathname;
          this.fetchData();
        } else {
          this.resource_url = window.location.pathname + '/' + this.current_view;
          this.fetchData();
        }
      },
    	assignData(response){
        this.fatwas = response.data.fatwas.data;
    	},
      reloadData(){
        this.$refs.VP.fetchData(this.resource_url + '?page=' + this.$refs.VP.current_page);
      },
      afterFatwaCreated(response){
        $('.modal.in').modal('hide')
        toastr.success(response.message);
        this.reloadData();
      },
      afterFatwaDelete(response){
        toastr.warning(response.data.message);
        this.reloadData();
      },
      addFatwa(){
        eventBus.$emit('addFatwa');
      }
    },
    components: {
      fatwasTable,
      VPaginator: VuePaginator
    },
    mounted(){
    	this.fetchData();

      eventBus.$on('fatwaAdded', response => this.afterFatwaCreated(response));
      eventBus.$on('fatwaDeleted', response => this.afterFatwaDelete(response));
    }
});


toastr.options = {
  "positionClass": "toast-bottom-right",
}

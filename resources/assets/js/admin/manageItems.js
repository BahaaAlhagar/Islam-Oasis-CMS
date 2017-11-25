require('../bootstrap');

import itemsTable from './components/items/itemsTable';
import VuePaginator from 'vuejs-paginator';


import DataForm from '../partials/DataForm';
window.DataForm = DataForm;



window.toastr = require('toastr');

window.eventBus = new Vue();

const manageItems = new Vue({
    el: '#manageItems',
    data: {
        current_view: '',
        tags: [],
        items: [],
        scholars: [],
        resource_url: window.location.pathname,
            options: {
                  remote_data: 'items.data',
                  remote_current_page: 'items.current_page',
                  remote_last_page: 'items.last_page',
                  remote_next_page_url: 'items.next_page_url',
                  remote_prev_page_url: 'items.prev_page_url',
                  next_button_text: 'التالى',
                  previous_button_text: 'السابق'
                }
    },
    methods: {
      updateResource(data){
        this.items = data;
      },
      fetchData(){
        axios.get(this.resource_url)
          .then(response => this.assignData(response));
      },
      refetchData(){
          this.resource_url = window.location.pathname + '/' + this.current_view;
          this.fetchData();
      },
    	assignData(response){
        this.items = response.data.items.data;
        this.scholars = response.data.scholars;
        this.tags = response.data.tags;
    	},
      reloadData(){
        this.$refs.VP.fetchData(this.resource_url + '?page=' + this.$refs.VP.current_page);
      },
      updateResponse(response){
        $('.modal.in').modal('hide')
        toastr.success(response.message);
        this.reloadData();
      },
      afterSeriesDeleted(response){
        toastr.warning(response.data.message);
        this.reloadData();
      },
      addSeries(){
        $('#addItemModal').modal('show');
      }
    },
    components: {
    	itemsTable,
      VPaginator: VuePaginator
    },
    mounted(){
    	this.fetchData();

      eventBus.$on('itemAdded', response => this.updateResponse(response));
      eventBus.$on('itemDeleted', response => this.afterSeriesDeleted(response));
    }
});


toastr.options = {
  "positionClass": "toast-bottom-right",
}

require('../bootstrap');

// import seriesTable from './components/series/seriesTable';
import VuePaginator from 'vuejs-paginator';


import DataForm from '../partials/DataForm';
window.DataForm = DataForm;



window.toastr = require('toastr');

window.eventBus = new Vue();

const manageSeries = new Vue({
    el: '#manageSeries',
    data: {
        current_view: '',
        tags: [],
        series: [],
        scholars: [],
        resource_url: window.location.pathname,
            options: {
                  remote_data: 'series.data',
                  remote_current_page: 'series.current_page',
                  remote_last_page: 'series.last_page',
                  remote_next_page_url: 'series.next_page_url',
                  remote_prev_page_url: 'series.prev_page_url',
                  next_button_text: 'التالى',
                  previous_button_text: 'السابق'
                }
    },
    methods: {
      updateResource(data){
        this.series = data;
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
        this.series = response.data.series.data;
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
        $('#addSeriesModal').modal('show');
      }
    },
    components: {
    	// seriesTable,
      VPaginator: VuePaginator
    },
    mounted(){
    	this.fetchData();

      eventBus.$on('seriesAdded', response => this.updateResponse(response));
      eventBus.$on('seriesDeleted', response => this.afterSeriesDeleted(response));
    }
});


toastr.options = {
  "positionClass": "toast-bottom-right",
}

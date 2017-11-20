require('../bootstrap');

import VuePaginator from 'vuejs-paginator';

window.toastr = require('toastr');


import quranTable from './components/quran/quranTable';


window.eventBus = new Vue();

const manageQuran = new Vue({
    el: '#manageQuran',
    data: {
        current_view: '',
        qurans: [],
        scholars: [],
        recitations: [],
        resource_url: window.location.pathname,
            options: {
                  remote_data: 'qurans.data',
                  remote_current_page: 'qurans.current_page',
                  remote_last_page: 'qurans.last_page',
                  remote_next_page_url: 'qurans.next_page_url',
                  remote_prev_page_url: 'qurans.prev_page_url',
                  next_button_text: 'التالى',
                  previous_button_text: 'السابق'
                }
    },
    methods: {
      updateResource(data){
        this.qurans = data;
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
        this.qurans = response.data.qurans.data;
        this.scholars = response.data.scholars;
    		this.recitations = response.data.recitations;
    	},
      reloadData(){
        this.$refs.VP.fetchData(this.resource_url + '?page=' + this.$refs.VP.current_page);
      },
      afterQuranAdded(response){
        $('.modal.in').modal('hide')
        toastr.success(response.message);
        this.reloadData();
      },
      afterQuranDelete(response){
        toastr.warning(response.data.message);
        this.reloadData();
      },
      addQuran(){
        $('#addQuranModal').modal('show');
      }
    },
    components: {
      quranTable,
      VPaginator: VuePaginator
    },
    mounted(){
    	this.fetchData();

      eventBus.$on('quranAdded', response => this.afterQuranAdded(response));
      eventBus.$on('quranDeleted', response => this.afterQuranDelete(response));
    }
});


toastr.options = {
  "positionClass": "toast-bottom-right",
}

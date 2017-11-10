require('../bootstrap');

import VuePaginator from 'vuejs-paginator';

window.toastr = require('toastr');


import postsTable from './components/posts/postsTable';


window.eventBus = new Vue();

const managePosts = new Vue({
    el: '#managePosts',
    data: {
        current_view: '',
        posts: [],
        resource_url: window.location.pathname,
            options: {
                  remote_data: 'posts.data',
                  remote_current_page: 'posts.current_page',
                  remote_last_page: 'posts.last_page',
                  remote_next_page_url: 'posts.next_page_url',
                  remote_prev_page_url: 'posts.prev_page_url',
                  next_button_text: 'التالى',
                  previous_button_text: 'السابق'
                }
    },
    methods: {
      updateResource(data){
        this.posts = data;
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
    		this.posts = response.data.posts.data;
    	},
      reloadData(){
        this.$refs.VP.fetchData(this.resource_url + '?page=' + this.$refs.VP.current_page);
      },
      afterPostAdded(response){
        $('.modal.in').modal('hide')
        toastr.success(response.message);
        this.reloadData();
      },
      afterPostDelete(response){
        toastr.warning(response.data.message);
        this.reloadData();
      },
      showAddTag(){
        $('#addTagModal').modal('show');
      }
    },
    components: {
      postsTable,
      VPaginator: VuePaginator
    },
    mounted(){
    	this.fetchData();

      // eventBus.$on('tagAdded', response => this.refetchData(response));
      // eventBus.$on('tagDeleted', response => this.afterTagDelete(response));
    }
});


toastr.options = {
  "positionClass": "toast-bottom-right",
}

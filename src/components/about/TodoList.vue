<template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow">
        <i class="checkBtn fa fa-check" aria-hidden="true"></i>
        {{todoItem}}
        <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>
    <!--<paginate ref="pagebuttons"-->
              <!--:page-count="totalpage"-->
              <!--:page-range="4"-->
              <!--:margin-pages="1"-->
              <!--:click-handler="pageChanged"-->
              <!--:prev-text="'.'"-->
              <!--:next-text="'.'"-->
              <!--:container-class="'pagination'"-->
              <!--:page-class="'page-item'"-->
              <!--class="pagina">-->
    <!--</paginate>-->
  </section>
</template>

<script>
  import Constant from '../../constant';
  import {mapState} from 'vuex';
  import Paginate from 'vuejs-paginate';
  import _ from 'lodash';
  import Velocity from 'velocity-animate';

  export default {
    name: 'toDoList',
    components: {Paginate},
    props: ['propsdata'],
    computed:
      _.extend(
        {
          totalpage: function () {
            var totalcount = this.boardlist.totalcount;
            var pagesize = this.boardlist.pagesize;
            return Math.floor((totalcount - 1) / pagesize) + 1;
          }
        },
        mapState(['boardlist'])
      ),
    mounted:
      function () {
        var page = 1;
        if (this.$route.query && this.$route.query.page) {
          page = parseInt(this.$route.query.page);
        }
        this.$store.dispatch(Constant.GET_ALL, {pageno: page});
        this.$refs.pagebuttons.selected = page - 1;
      },
    watch: {
      '$route': function (to, from) {
        if (to.query.page && to.query.page != this.contactlist.pageno) {
          var page = to.query.page;
          this.$store.dispatch(Constant.GET_ALL, {pageno: page});
          this.$refs.pagebuttons.selected = page - 1;
        }
      }
    },

    methods: {
      removeTodo(todoItem, index) {
        this.$emit('removeTodo', todoItem, index);
      }
    }
  };
</script>

<style>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }

  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }

  .list-item {
    display: inline-block;
    margin-right: 10px;
  }

  .list-move {
    transition: transform 1s;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }

  .list-enter-active, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .pagina {
    position: relative;
    top: 50%;
    left: 50%;
    background: #f00;
    transform: translate(-50%, -50%)

  }

</style>

<template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(boar, index) in boardlist.board" :key="boar" class="shadow board">
        <div class="containtodo">
          <div class="left-box">
            <i class="checkBtn fa fa-check" aria-hidden="true"></i>
          </div>
          <div class="center-box">
            <div class="downdiv">
              <span class="downdiv-in">[{{boar.firstaddr}} {{boar.secaddr}}]</span>
              {{boar.title}}
            </div>
          </div>
          <div class="right-box">
        <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </span>
          </div>
        </div>
      </li>
    </transition-group>
    <paginate ref="pagebuttons"
              :page-count="totalpage"
              :page-range="4"
              :margin-pages="1"
              :click-handler="pageChanged"
              :prev-text="'<'"
              :next-text="'>'"
              :container-class="'pagination'"
              :page-class="'page-item'">
      <!--class="pagina">-->
    </paginate>
  </section>
</template>

<script>
  import Constant from '../../constant';
  import {mapState} from 'vuex';
  import Paginate from 'vuejs-paginate';
  import _ from 'lodash';
  import Velocity from 'velocity-animate';
  //  import {mapActions} from 'vuex'

  console.log("lll~~~ ToDoList 01 : ");

  export default {
    name: 'boardList',
    components: {Paginate},
//    props: ['propsdata'],
    computed: _.extend(
      {
        totalpage: function () {
          var totalcount = this.boardlist.totalcount;
          var pagesize = this.boardlist.pagesize;
          return Math.floor((totalcount - 1) / pagesize) + 1;
        }
      },
      mapState(['boardlist'])
    ),
    mounted: function () {
      var page = 1;
      if (this.$route.query && this.$route.query.page) {
        page = parseInt(this.$route.query.page);
      }

      var searchname = "";
      this.$store.dispatch(Constant.CONST_GET_ALL, {pageno: page, searchname: searchname});
      this.$refs.pagebuttons.selected = page - 1;
      console.log("lll~~~ mounted 00 : ");
    },
    watch: {
      '$route': function (to, from) {
        if (to.query.page && to.query.page != this.boardlist.pageno) {
          var page = to.query.page;
          var searchname = "";
          if (to.query.searchname || this.boardlist.searchname) {
            searchname = this.boardlist.searchname;
          }
          this.$store.dispatch(Constant.CONST_GET_ALL, {pageno: page, searchname: searchname});
          this.$refs.pagebuttons.selected = page - 1;
          console.log("lll~~~ watch : ");
        }
      }
    },

    methods: {
      removeTodo(todoItem, index) {
        this.$emit('removeTodo', todoItem, index);
      },
      pageChanged: function (page) {
        this.$router.push({name: 'about', query: {page: page}})
        /*name: 'board' 로 하면 없는 페이지 ?/page=2 나옴*/
      }
    }
  };

  console.log("lll~~~ ToDoList 02 : ");
</script>

<style>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }

  li.board {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    /*padding: 0 0.9rem;*/
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

  .addrBtn {
    margin-right: auto;
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

  /*.pagina {*/
  /*position: relative;*/
  /*top: 50%;*/
  /*left: 50%;*/
  /*background: #f00;*/
  /*transform: translate(-50%, -50%)*/
  /*}*/

  /* 페이지네이션 start */

  .pagination {
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
  }

  .pagination {
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
  }

  .pagination > li {
    display: inline;
  }

  .pagination > li > a,
  .pagination > li > span {
    position: relative;
    float: left;
    /*padding: 6px 12px;*/
    padding: 4.5px 9px;
    line-height: 1.42857143;
    text-decoration: none;
    color: #337ab7;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    margin-left: -1px;
  }

  .pagination > li:first-child > a,
  .pagination > li:first-child > span {
    margin-left: 0;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }

  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }

  .pagination > li > a:hover,
  .pagination > li > span:hover,
  .pagination > li > a:focus,
  .pagination > li > span:focus {
    z-index: 3;
    color: #23527c;
    background-color: #eeeeee;
    border-color: #dddddd;
  }

  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    /*z-index: 2;*/
    color: #ffffff;
    background-color: #6478FB;
    border-color: #8763FB;
    cursor: default;
  }

  .pagination > .disabled > span,
  .pagination > .disabled > span:hover,
  .pagination > .disabled > span:focus,
  .pagination > .disabled > a,
  .pagination > .disabled > a:hover,
  .pagination > .disabled > a:focus {
    color: #777777;
    background-color: #ffffff;
    border-color: #dddddd;
    cursor: not-allowed;
  }

  .pagination-lg > li > a,
  .pagination-lg > li > span {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
  }

  .pagination-lg > li:first-child > a,
  .pagination-lg > li:first-child > span {
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
  }

  .pagination-lg > li:last-child > a,
  .pagination-lg > li:last-child > span {
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
  }

  .pagination-sm > li > a,
  .pagination-sm > li > span {
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
  }

  .pagination-sm > li:first-child > a,
  .pagination-sm > li:first-child > span {
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  }

  .pagination-sm > li:last-child > a,
  .pagination-sm > li:last-child > span {
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }

  .pager {
    padding-left: 0;
    margin: 20px 0;
    list-style: none;
    text-align: center;
  }

  .pager li {
    display: inline;
  }

  .pager li > a,
  .pager li > span {
    display: inline-block;
    padding: 5px 14px;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 15px;
  }

  .pager li > a:hover,
  .pager li > a:focus {
    text-decoration: none;
    background-color: #eeeeee;
  }

  .pager .next > a,
  .pager .next > span {
    float: right;
  }

  .pager .previous > a,
  .pager .previous > span {
    float: left;
  }

  .pager .disabled > a,
  .pager .disabled > a:hover,
  .pager .disabled > a:focus,
  .pager .disabled > span {
    color: #777777;
    background-color: #ffffff;
    cursor: not-allowed;
  }

  /* 페이지네이션 end */

  .left-box {
    /*background: red;*/
    float: left;
    width: 7%;
    /*flex: 1;*/
  }

  .right-box {
    /*background: yellow;*/
    /*flex: 1;*/
    text-align: right;
    margin-right: right;
    float: right;
    width: 13%;
  }

  .containtodo {
    display: flex;
    width: 100%;
    /*height: 100%;*/
  }

  .center-box {
    /*background: orange;*/
    /*flex: 10px;*/
    text-align: left;
    width: 90%;
    /*height: 100%;*/
  }

  .center-box .updiv {
    height: 50%;
    /*width: 100%;*/
    /*padding: 0 0 0 0;*/
    /*background-color: grey;*/
    /*font-size: 7px;*/
    /*padding: 10;*/
    /*height: 50%;*/
    /*white-space: normal !important;*/
    /*display: table-cell;*/
    /*vertical-align: top !important;*/
    /*top: 100px;*/
    /*position: relative !important;*/
    /*text-align: end;*/
  }

  .center-box .downdiv {
    /*padding: 5% 0 0 0;*/
    /*height: 50%;*/
    /*width: 100%;*/
    /*background-color: green;*/
    /*height: 50%;*/
    /* 줄 넘침 start http://doctype.tistory.com/41 */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* 줄 넘침 end */
  }

  .center-box .downdiv .downdiv-in {
    font-size: 7px;
    height: 0em;
    position: static;
  }


</style>

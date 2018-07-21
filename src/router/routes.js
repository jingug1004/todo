import HomePage from '@/pages/home.vue';
import NotFoundPage from '@/pages/not-found.vue';

import PanelLeftPage from '@/pages/panel-left.vue';
import LoginPage from '@/pages/login.vue';
import MenuPage from '@/pages/popup-menus.vue';
import MenuDetailPage from '@/pages/popup-menu-detail.vue';
import TermsPage from '@/pages/join/terms.vue';
import JoinFormPage from '@/pages/join/form.vue';
import UserPage from '@/pages/user.vue';
import TrekCourseListPage from '@/pages/trekCourseList.vue';
import TrekCourseHistoryPage from '@/pages/trekCourseHistory.vue';
import LoadingPage from '@/pages/loading.vue';

const express = require('express');
const router = express.Router();

const mysql = require('mysql');
const connection = mysql.createConnection(require('../../config/db/db_con'));

connection.connect((err) => {
  if(err) {
    console.log("lll~~~ err : " + err);
    return;
  }
  console.log( 'lll~~~ mysql connect completed' );
});
router.get('/impl', (req, res) => {
  const sql = 'SELECT * FROM hwit_board';
  connection.query(sql, (err, results, field) => {
    console.log("lll~~~ results : " + results); // 배열 형태로 결과가 떨어짐
    res.render('index', {
      layout: false, // express-ejs-layouts는 기본으로 layout.ejs가 설정되어야 하는데 이를 사용하지 않을 경우
      projects: results
    });
  });
});

module.exports = router;

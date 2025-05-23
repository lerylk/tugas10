import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import BookCollection from '../components/BookCollection.vue';
import BookDetail from '../components/BookDetail.vue';
import LoanRequest from '../components/LoanRequest.vue';
import LoanStatus from '../components/LoanStatus.vue';
import LoanHistory from '../components/LoanHistory.vue';
import UserProfile from '../components/UserProfile.vue';
import Login from '../components/Login.vue';

import LibrarianDashboard from '../components/librarian/LibrarianDashboard.vue';
import ManageBooks from '../components/librarian/ManageBooks.vue';
import AddBook from '../components/librarian/AddBook.vue';
import EditBook from '../components/librarian/EditBook.vue';
import LoanRequests from '../components/librarian/LoanRequests.vue';
import Reports from '../components/librarian/Reports.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/books',
    name: 'BookCollection',
    component: BookCollection,
  },
  {
    path: '/books/:bookId',
    name: 'BookDetail',
    component: BookDetail,
    props: true,
  },
  {
    path: '/loan/request',
    name: 'LoanRequest',
    component: LoanRequest,
  },
  {
    path: '/loan/status',
    name: 'LoanStatus',
    component: LoanStatus,
  },
  {
    path: '/loan/history',
    name: 'LoanHistory',
    component: LoanHistory,
  },
  {
    path: '/profile',
    name: 'User Profile',
    component: UserProfile,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/librarian/dashboard',
    name: 'LibrarianDashboard',
    component: LibrarianDashboard,
    children: [
      {
        path: 'manage-books',
        name: 'ManageBooks',
        component: ManageBooks,
        children: [
          {
            path: 'add',
            name: 'AddBook',
            component: AddBook,
          },
          {
            path: 'edit/:id',
            name: 'EditBook',
            component: EditBook,
            props: true,
          },
        ],
      },
      {
        path: 'loan-requests',
        name: 'LoanRequests',
        component: LoanRequests,
      },
      {
        path: 'reports',
        name: 'Reports',
        component: Reports,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Login from '@/components/Login.vue';
import BookCollection from '@/components/BookCollection.vue';
import BookDetail from '@/components/BookDetail.vue';
import AddBook from '@/components/librarian/AddBook.vue';
import EditBook from '@/components/librarian/EditBook.vue';
import ManageBooks from '@/components/librarian/ManageBooks.vue';
import LoanRequest from '@/components/LoanRequest.vue';
import LoanRequests from '@/components/librarian/LoanRequests.vue';
import LoanHistory from '@/components/LoanHistory.vue';
import Reports from '@/components/librarian/Reports.vue';
import UserProfile from '@/components/UserProfile.vue';
import LibrarianList from '@/components/librarian/LibrarianList.vue';
import LibrarianDashboard from '@/components/librarian/LibrarianDashboard.vue';
import DbJsonViewer from '@/components/DbJsonViewer.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/books', name: 'BookCollection', component: BookCollection },
  { path: '/books/:id', name: 'BookDetail', component: BookDetail },
  {
    path: '/librarian',
    children: [
      { path: 'manage-books', component: ManageBooks },
      { path: 'add-book', component: AddBook },
      { path: 'edit-book/:id', component: EditBook },
      { path: 'loan-requests', component: LoanRequests },
      { path: 'reports', component: Reports },
      { path: 'list', component: LibrarianList },
      { path: 'dashboard', component: LibrarianDashboard },
      { path: 'db-json', component: DbJsonViewer },
    ],
  },
  { path: '/loan-request', component: LoanRequest },
  { path: '/loan-history', component: LoanHistory },
  { path: '/profile', component: UserProfile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

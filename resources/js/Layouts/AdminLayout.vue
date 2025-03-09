<template>
    <div class="wrapper">
      <Navbar />
      <Sidebar />
      <div class="content-wrapper">
        <slot></slot>
      </div>
      <footer class="main-footer">
        <strong>Copyright &copy; 2025 <a href="/">AdminLTE Vue</a>.</strong>
      </footer>
    </div>
  </template>

  <script>
  import Navbar from '@/Components/Navbar.vue';
  import Sidebar from '@/Components/Sidebar.vue';

  export default {
    components: { Navbar, Sidebar }
  };
  </script>

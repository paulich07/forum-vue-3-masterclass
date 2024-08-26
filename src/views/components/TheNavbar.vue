<template>
 <header class="header" id="header">

        <router-link :to="{name: 'home'}" class="logo">
            <img src="assets/img/svg/vueschool-logo.svg" alt="logo">
        </router-link>

        <div class="btn-hamburger">
            <!-- use .btn-humburger-active to open the menu -->
            <div class="top bar"></div>
            <div class="middle bar"></div>
            <div class="bottom bar"></div>
        </div>

    <!-- use .navbar-open to open nav -->
    <nav class="navbar">
        <ul>

            <li class="navbar-user">
                <router-link :to="{ name:'me'}">
                    <img class="avatar-small" :src="authUser.avatar" :alt="`${authUser.name} profile picture`">
                    <span>

                        {{ authUser.name }}
                        <img class="icon-profile" src="assets/img/svg/arrow-profile.svg" alt="">
                    </span>
                </router-link>

                <!-- dropdown menu -->
                <!-- add class "active-drop" to show the dropdown -->
                <div id="user-dropdown">
                    <div class="triangle-drop"></div>
                    <ul class="dropdown-menu">
                        <li class="dropdown-menu-item"><a href="profile.html">View profile</a></li>
                        <li class="dropdown-menu-item"><a href="#">Log out</a></li>
                    </ul>
                </div>
            </li>
        </ul>

        <ul>
            <li class="navbar-item">
                <a href="index.html">Home</a>
            </li>
            <li class="navbar-item">
                <a href="category.html">Category</a>
            </li>
            <li class="navbar-item">
                <a href="forum.html">Forum</a>
            </li>
            <li class="navbar-item">
                <a href="thread.html">Thread</a>
            </li>
            <!-- Show these option only on mobile-->
            <li class="navbar-item mobile-only">
                <a href="profile.html">My Profile</a>
            </li>
            <li class="navbar-item mobile-only">
                <a href="#">Logout</a>
            </li>
        </ul>
    </nav>
  </header>
    <!--
  <div class="forum-stats desktop-only">
      <hr>
      <ul>
        <li><i class="fa fa-user-circle-o"></i>47 users online</li>
        <li><i class="fa fa-user-o"></i>497 users registered</li>
        <li><i class="fa fa-comments-o"></i>49 threads</li>
        <li><i class="fa fa-comment-o"></i>763 posts</li>
      </ul>
  </div>
  -->

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['authUser'])
  }
}
</script>

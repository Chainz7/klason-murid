<template>
    <div class="body">
        <router-link to="/"><img src="@/assets/img/back.png"></router-link>
        <div class="header-text">Mata Pelajaran :</div>
        <ul>
        <router-link to="/AssignmentMapel"><a><div class="body-text">
            <div class="text-menu">Bahasa Indonesia</div>
            <div class="text-submenu">1/10 Tugas Selesai</div>
        </div></a></router-link>
        <router-link to="/AssignmentMapel"><a><div class="body-text">
            <div class="text-menu">Bahasa Inggris</div>
            <div class="text-submenu">1/10 Tugas Selesai</div>
        </div></a></router-link>
        <router-link to="/AssignmentMapel"><a><div class="body-text">
            <div class="text-menu">Matematika</div>
            <div class="text-submenu">1/10 Tugas Selesai</div>
        </div></a></router-link>
        </ul>
        <img class="body-img" src="@/assets/img/tugas.png">
    </div>
</template>
<style scoped lang="scss">
    .body{
        width: 113.8%;
        max-width: 113.8%;
        margin-left: 2.9%;
        height: 621px;
        font-family: sans-serif;
        background-color: rgba(235, 235, 235, 0.781)
    }
    .header-text{
        color: #4F596B;
        font-weight: bold;
        font-size: 18px;
        padding: 40px;
        margin-bottom: -20px;
    }
    .body-text{
        background-color: #B2ACFB;
        border-radius: 9px;
        width: 100%;
        max-width: 35%;
        height: 50px;
        margin-left: 0px;  
        margin-bottom: 20px;      
    }
    .text-menu{
        padding: 13px;
        color: #4F596B;
        font-weight: bold;
    }
    .text-submenu{
        margin-left: 230px;
        margin-top: -49px;
        padding: 13px;
        color: #4F596B;
    }
    .body-img{
        position: fixed;
        margin-left: 590px;
        margin-top: -321px;
    }
    a:hover {
         text-decoration: none;
      }
</style>
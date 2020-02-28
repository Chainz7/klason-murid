<template>
    <div class="body">
        <router-link to="/AssignmentMapel"><img src="@/assets/img/back.png"></router-link>
        <div class="body-body">
            <div class="body-header">Detail Tugas :</div>
            <div class="nickname">
                <img class="body-user" src="@/assets/img/userc.png">
                <div class="header-name"><input style="margin-left:10px; width: 260px;" type="text" placeholder="Ruslan S.Pd" readonly="readonly"></div>
            </div>
            <div class="body-name">
                <div class="name-header">Judul</div>
                <div class="name-body"><input type="text" placeholder="Bahasa Indonesia bab 1 halaman 20" readonly="readonly"></div>
                <div class="name-header">Deadline</div>
                <div class="name-body"><input type="text" placeholder="7 Februari 2020" readonly="readonly"></div>
                <div style="margin-top:20px;" class="name-body"><textarea placeholder="Deskripsi Dari Guru" name="" id="" cols="46" rows="5" readonly="readonly"></textarea></div>
                <button class="body-button">Kumpulkan</button>
            </div>
        </div>
        <img class="body-img" src="@/assets/img/detailer.png">
    </div>
</template>

<style scoped lang="scss">
    .body{
        width: 100%;
        max-width: 100%;
        margin-left: 3%;
        height: 700px;
        font-family: sans-serif;
        background-color: rgba(235, 235, 235, 0.781);
    }
    .body-body{
        width: 100%;
        max-width: 50%;
        height: auto;
        margin: 30px;
    }
    .body-user{
        width: 100%;
        max-width: 20%;
    }
    .body-photo{
        width: 100%;
        max-width: 10%;
        margin-left: -40px;
        margin-top: 40px;
    }
    .body-header{
        font-size: 20px;
        font-weight: bold;
        color: #4F596B;
        margin-left: 10px;
    }
    .header-name{
        font-weight: bold;
        font-size: 15px;
        margin-top: -60px;
        margin-left: 90px;
        margin-bottom: 30px;
        color: #535E6D;
    }
    .header-class{
        font-size: 14px;
        margin-left: 92px;
        color: #535E6D;
    }
    .name-header{
        font-weight: bold;
        color: rgba(0, 0, 0, 0.219);
        margin-top: 12px;
        margin-left: 10px;
    }
    .name-body{
        margin-left: 10px;
    }
    .body-button{
        margin-top: 20px;
        width: 100%;
        max-width: 68.5%;
        height: 40px;
        max-height: 100px;
        margin-left: 10px;
        border-radius: 2px;
        border: 0px;
        font-size: 18px;
        padding-bottom: 2px;
        font-weight: bold;
        color: white;
        box-shadow: 0px 1px 4px 0px grey;
        background-color: #A49BEE;
    }
    .body-img{
        position: fixed;
        width: 100%;
        max-width: 45%;
        height: 700px;
        margin-left: 550px;
        margin-top: -560px;
    }

    a {
      color: rgba(255, 255, 255, 0.568);
    }
    a:hover {
      color: rgb(255, 255, 255);
      text-decoration: none;
    }
        input {
        width: 350px;
        outline: 0;
        border-width: 0 0 1.5px;
        border-color: #707070;
        background-color: rgba(235, 235, 235, 0.781);
    }
    input:focus {
        border-color: rgb(117, 117, 117)
    }
    input::placeholder {
        color: rgba(0, 0, 0, 0.623);
    }
    input[type="text"] {
        color: rgb(90, 90, 90);
        font-family: sans-serif;
        font-weight: bold;
    }
    input[type="password"] {
        color: rgb(90, 90, 90);
        font-family: sans-serif;
        font-weight: bold;
    }
    textarea {
        background-color: #C4BEF9;
        border: solid #C4BEF9;
        font-family: sans-serif;
        color: rgba(0, 0, 0, 0.466);
        font-size: 14px;
    }
</style>
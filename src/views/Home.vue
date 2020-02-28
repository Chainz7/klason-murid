<template>
   <div class="middle">
      <div class="header">
          <form>
            <input class="search" type="search" placeholder="Search" aria-label="Search">
            <div class="dropdown">
               <img style="margin-left: 590px;" class="bell" src="@/assets/img/bell.png">
               <div style="margin-left: 345px; width:" class="dropdown-content">
                  <div style="padding: 10px; font-size: 15px;"><b>Notifikasi</b></div>
                  <router-link to="/History"><a>
                     <div style="font-size: 12px; margin-top: -52px; margin-left: 215px; margin-right: -30px;">View All</div>
                  </a></router-link>
                  <hr style="margin-top: -50px; margin-left: 3px;">
                  <ul>
                     <div style="margin-top: -10px; margin-left: -30px; font-size: 13px;"><b>Umi Kulsum</b></div>
                     <div style="margin-top: 0px; margin-left: -29px; font-size: 11px;">Tugas Matematika Bab 1</div>
                     <hr style="width: 285px; margin-left: -35px; margin-top: 10px;">
                     <div style="margin-top: -10px; margin-left: -30px; font-size: 13px;"><b>Umi Kulsum</b></div>
                     <div style="margin-top: 0px; margin-left: -29px; font-size: 11px;">Tugas Matematika Bab 1</div>
                     <hr style="width: 285px; margin-left: -35px; margin-top: 10px;">
                  </ul>
               </div>
            </div>
          </form>
      </div>
      <div class="body1">
         <h3 style="font-weight: bold; color: rgba(61, 61, 61, 0.897);">Hay, Sharen Alicia Ayugi</h3>
         Kamu memiliki 4 tugas untuk menyelesaikan semua tugas <br>
         Kamu sudah mengerjakan 20 tugas dari tugas yang ada </p>
         <router-link to="/Assignment"><button class="body-button">Buka Tugas</button></router-link>      
      </div>
      
      <img class="body-img" src="@/assets/img/loby.png">
      <ul>
         <div class="body2">
         <router-link to="/AssignmentDetail"><a>
         <img src="@/assets/img/user1.png">
         <div class="header-text">
            <b style="color: rgb(100, 100, 100);">Ruslan Spd</b>
            <br>Matematika Bab 1<br>
            <img src="@/assets/img/calendar.png">
            Feb 6,2020
            <img style="margin-top: -2px; margin-left: 3px;" src="@/assets/img/time.png">
            1:20 PM
         </div>
         <div class="body-tugas">Tugas Matematika Bab 1.docx</div>
         <div class="body-description">
            <img src="@/assets/img/description.png">
            <div class="header-description">Description</div>
            <div class="description-body">Tugas Selesai</div><br>
         </div>
         </a></router-link>
         </div>
         <div class="body2">
         <router-link to="/AssignmentDetail"><a>
         <img src="@/assets/img/user1.png">
         <div class="header-text">
            <b style="color: rgb(100, 100, 100);">Ruslan Spd</b>
            <br>Matematika Bab 1<br>
            <img src="@/assets/img/calendar.png">
            Feb 6,2020
            <img style="margin-top: -2px; margin-left: 3px;" src="@/assets/img/time.png">
            1:20 PM
         </div>
         <div class="body-tugas">Tugas Matematika Bab 1.docx</div>
         <div class="body-description">
            <img src="@/assets/img/description.png">
            <div class="header-description">Description</div>
            <div class="description-body">Tugas Selesai</div><br>
         </div>
         </a></router-link>
         </div>
      </ul>
      <ul>
         <div class="body3">
            <div class="header-text2">2</div>
            <router-link to="/HistoryUndone"><a><div class="body-text2">Task</div></a></router-link>
            <img class="body-img2" src="@/assets/img/greenline.png">
         </div>
         <div style="margin-left: 650px;" class="body3">
            <div class="header-text2">14</div>
            <router-link to="/HistoryDone"><a><div class="body-text2">Done</div></a></router-link>
            <img class="body-img2" src="@/assets/img/purpleline.png">
         </div>
      </ul>
      <div class="body4">
         <div class="header-text3">My Task</div>
         <hr>
         <ul>
            <router-link to="/AssignmentMapel"><a><div class="body-text3">B.Indonesia</div>
            <div class="body-circle">1/10 Tugas Selesai</div></a></router-link>
            <router-link to="/AssignmentMapel"><a><div class="body-text3">B.Inggris</div>
            <div class="body-circle">1/10 Tugas Selesai</div></a></router-link>
            <router-link to="/AssignmentMapel"><a><div class="body-text3">Matematika</div>
            <div class="body-circle">1/10 Tugas Selesai</div></a></router-link>
         </ul>
         <div style="color: white;">.</div>
      </div>
      <div class="dashboard-profile">
         <div class="header-text4">My Profile</div>
         <div class="body-text4">
            <router-link to=""><img style="margin-left: 70px;" src="@/assets/img/userc.png"><br></router-link>
            <div style="padding-left: 50px; font-weight: bold; font-size: 15px;">Sharen Alicia Ayugi</div> <br>
            <div style="margin-top: -25px; padding-left: 35px; font-size: 12px;">XI-Rekayasa Perangkat Lunak 2</div>
            <img style="margin-left: 15px; margin-top: 15px;" src="@/assets/img/squareright.png">
            <hr style="margin-left: 10px; width: 220px;">
         </div>
         <ul>
            <div style="font-family: sans-serif; color: grey; font-size: 12px;">
               <div style="margin-left: -10px;"><b>Total Tugas:</b></div><br>
               <div style="margin-top: -18px; margin-left: -8px; font-weight: bold; font-size: 18px;"><img src="@/assets/img/blue.png">
                  <div style="margin-top: -26px; margin-left: 7px; margin-bottom: 20px;">16</div> 
               </div>
               <div style="margin-left: -10px;"><b>In Progress:</b></div><br>
               <div style="margin-top: -18px; margin-left: -8px; font-weight: bold; font-size: 18px;"><img src="@/assets/img/green.png">
                  <div style="margin-top: -26px; margin-left: 7px;">1</div> 
               </div>
               <div style="margin-left: 110px; margin-top: -111px; margin-bottom: 131px;">
                  <div style="margin-left: -10px;"><b>Completed:</b></div><br>
                  <div style="margin-top: -18px; margin-left: -8px; font-weight: bold; font-size: 18px;"><img src="@/assets/img/purple.png">
                     <div style="margin-top: -26px; margin-left: 7px;">14</div> 
                  </div>
               </div>
               <div style="margin-left: 110px; margin-top: -111px;">
                  <div style="margin-left: -10px;"><b>Lewat Deadline:</b></div><br>
                  <div style="margin-top: -18px; margin-left: -8px; font-weight: bold; font-size: 18px;"><img src="@/assets/img/red.png">
                     <div style="margin-top: -26px; margin-left: 7px;">1</div> 
                  </div>
               </div>
            </div>
         </ul>
         <hr style="margin-left: 10px; width: 220px;">
         <div>
            <div class="header-text5">
               <div style="padding-left: 20px; font-weight: bold; font-size: 14px;">Ongoing Task</div>
               <router-link to="/Assignment"><a><div style="margin-left: 170px; margin-top: -20px; font-size: 12px; margin-bottom: 15px;">View All</div></a></router-link>
            </div>
            <div style="font-family: sans-serif;" class="body-text5">
               <ul>
                  <img style="margin-left: -25px;" src="@/assets/img/user1.png">
                  <router-link to=""><a style="color: black;"><div style="font-size: 12px; font-weight: bold; margin-top: -45px; margin-left: 30px;">Matematika Bab 1</div></a></router-link>
                  <div style="font-size: 10px; font-weight: bold; color:grey; margin-left: 30px; margin-bottom: 10px;">Ruslan S.Pd</div>
                  <img style="margin-left: -25px;" src="@/assets/img/user1.png">
                  <router-link to=""><a style="color: black;"><div style="font-size: 12px; font-weight: bold; margin-top: -45px; margin-left: 30px;">Matematika Bab 1</div></a></router-link>
                  <div style="font-size: 10px; font-weight: bold; color:grey; margin-left: 30px; margin-bottom: 10px;">Ruslan S.Pd</div>
                  <img style="margin-left: -25px;" src="@/assets/img/user1.png">
                  <router-link to=""><a style="color: black;"><div style="font-size: 12px; font-weight: bold; margin-top: -45px; margin-left: 30px;">Matematika Bab 1</div></a></router-link>
                  <div style="font-size: 10px; font-weight: bold; color:grey; margin-left: 30px; margin-bottom: 10px;">Ruslan S.Pd</div>
               </ul>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
   .middle{
      width: 68%;
      max-width: 1200px;
      height: auto;
      margin-left: 2.2%; 
      position: absolute;
      background-color: rgba(235, 235, 235, 0.781)
   }
      .dashboard-profile{
         background-color: white;
         width: 100%;
         max-width: 26.1%;
         height: 740px;
         position: fixed;
         margin-left: 917px;
         margin-top: -740px;
      }
         .header-text4{
            width: 100%;
            max-width: 100%;
            padding-top: 15px;
            padding-left: 25px;
            font-family: sans-serif;
            font-weight: bold;
            font-size: 15px;
         }
         .body-text4{
            font-family: sans-serif;
         }
      .body1{
         background-color: white;
         width: 100%;
         max-width: 85%;
         height: auto;
         border-radius: 10px;
         font-family: sans-serif;
         margin-left: 20px;
         margin-top: 15px;
         padding-left: 15px;
         padding-top: 15px;
         box-shadow: 0px 1px 4px 0px rgba(128, 128, 128, 0.596);
      }
      .body2{
         background-color: white;
         width: 100%;
         max-width: 45%;
         height: auto;
         border-radius: 10px;
         font-family: sans-serif;
         margin-left: -20px;
         margin-top: 15px;
         padding-left: 15px;
         padding-top: 15px;
         box-shadow: 0px 1px 4px 0px rgba(128, 128, 128, 0.596);
      }
         .header-text{
            width: 100%;
            height: auto;
            margin-left: 50px;
            margin-top: -45px;
            font-family: sans-serif;
            font-size: 11px;
            color: rgb(153, 153, 153);
            margin-bottom: 20px;
         }
         .body-tugas{
            width: 100%;
            max-width: 95%;
            height: 27px;
            padding-left: 15px;
            border-radius: 15px;
            background-color: #DED7F9;
            color: #1E1480;
            font-weight: bold;
            padding-top: 4px;
            font-size: 13px;
            margin-bottom: 5px;
         }
         .tugas-icon{
            width: 100%;
            max-width: 8.5%;
            height: 21px;
            border-radius: 15px;
            padding-left: 8px;
            padding-top: 0px;
            margin-left: 312px;
            margin-top: -20px;
            background-color: #3C2DD1;
            color: white;
            font-size: 14px;
            font-weight: bold;
         }
         .body-description{
            width: 100%;
            max-width: 100%;
            height: auto;
            margin-top: 5px;
         }
            .header-description{
               font-weight: bold;
               color: #000000ce;
               margin-top: -24px;
               margin-left: 30px;
               margin-bottom: 15px;
               font-size: 14px;
            }
            .description-body{
               width: 100%;
               max-width: 92%;
               color: #3a3a3ace;
               font-weight: bold;
               font-size: 12px;
               margin-left: 30px;
            }
      .body3{
         position: absolute;
         background-color: white;
         width: 100%;
         max-width: 18%;
         height: auto;
         border-radius: 10px;
         font-family: sans-serif;
         margin-left: 450px;
         margin-top: -300px;
         box-shadow: 0px 
         1px 4px 0px rgba(128, 128, 128, 0.596);
      } 
         .header-text2{
            width: 100%;
            max-width: 18%;
            height: auto;
            font-weight: bold;
            color: rgb(59, 59, 59);
            font-size: 30px;
            padding: 20px;
         }
         .body-text2{
            width: 100%;
            max-width: 50%;
            height: auto;
            font-size: 18px;
            color: #949393ce;
            font-weight: bold;
            margin-top: -25px;
            margin-left: 20px;
         }
         .body-img2{
            width: 100%;
            max-width: 18%;
            height: auto;
            margin-left: 120px;
            margin-top: -87px;
         }
      .body4{
         background-color: white;
         width: 100%;
         max-width: 45%;
         height: auto;
         border-radius: 10px;
         font-family: sans-serif;
         margin-left: 490px;
         margin-top: -160px;
         margin-bottom: 20px;
         padding-left: 15px;
         padding-top: 15px;
         box-shadow: 0px 1px 4px 0px rgba(128, 128, 128, 0.596);
      }
         .header-text3{
            font-weight: bold;
            margin-bottom: -10px;
            color: rgb(65, 65, 65);
         }
         .body-text3{
            font-weight: bold;
            color: rgba(94, 94, 94, 0.801);
            padding-bottom: 10px;
            margin-left: -38px;
         }
         .body-circle{
            width: 100%;
            max-width: 30%;
            height: 20px;
            box-shadow: 0px 0px 1px 1px blue;
            font-weight: bold;
            font-size: 11px;
            color: rgb(73, 73, 73);
            border-radius: 10px;
            padding-left: 5px;
            padding-TOP: 1px;
            margin-left: 230px;
            margin-bottom: 10px;
            margin-top: -30px;
         }
   .body-img{
      margin-left: 550px; 
      margin-top: -120px; 
      position: absolute;
   }
   .body-button{
      margin-bottom: 15px;
      margin-top: 0px;
      width: 100%;
      max-width: 150px;
      height: 100%;
      max-height: 100px;
      border-radius: 3px;
      border: 0px;
      padding-top: 5px;
      padding-bottom: 5px;
      font-weight: bold;
      color: white;
      background-image: linear-gradient(rgb(176, 0, 230), rgb(153, 1, 199));
   }
   .header{
      width: 100%;
      height: 50px;
      background-color: rgba(235, 235, 235, 0.781)
   }
      .bell{
         width:100%; 
         max-width:50px; 
         height:50px; 
         margin-top: -6px;
         margin-left: 450px;
         
      }
      .search{
         width: 100%;
         max-width: 250px;
         height: 35px;
         background-color: #ffffff; 
         border-radius: 15px; 
         color: blue;
         border: 0px;
         margin-top: 10px;
         margin-left: 20px;
         padding-left: 20px;
      }
      ::placeholder{
         font-size: 15px;
         color: rgba(146, 146, 146, 0.726);
         font-family: sans-serif;
         font-weight: bold;
      }
      .dropbtn {
         width: 100%;
         color: rgba(146, 146, 146, 0.726);
         background-color: rgba(235, 235, 235, 0.781);
         padding: 2px;
         font-family: sans-serif;
         font-weight: bold;
         font-size: 15px;
         border: none;
         cursor: pointer;
      }

      .dropdown {
         position: relative;
         display: inline-block;
      }

      .dropdown-content {
         display: none;
         position: absolute;
         background-color: #ffffff;
         min-width: 300px;
         border-radius: 10px;
         box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
         z-index: 1;
      }

      .dropdown-content a {
         color: rgb(99, 99, 99);
         padding: 12px 16px;
         text-decoration: none;
         font-family: sans-serif;
         display: block;
      }

      .dropdown:hover .dropdown-content {
         display: block;
      }

      .dropdown:hover .dropbtn {
          color: rgb(99, 99, 99);
      }
      a {
      }
      a:hover {
         text-decoration: none;
      }
      hr{
         width: 95%;
         margin-left: 0px;
         border: solid rgba(194, 194, 194, 0.534) 0.5px;
      }
</style>
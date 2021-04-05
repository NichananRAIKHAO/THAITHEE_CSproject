<template>
     <div style="width: 1520px; height: 900px;">
        <h1 style="font-family: 'Kanit'; font-size: 50px; margin-top: 60px; text-align: center;"><b>บัตรประจำตัวประชาชน</b></h1>
        <p style="font-family: 'Kanit'; font-size: 20px; margin-top: 30px; margin-left:350px; text-indent: 5%">เอกสารราชการที่ออกให้สำหรับคนไทยที่มีชื่อในทะเบียนบ้านเท่านั้น เพื่อใช้เป็นหลักฐานในการแสดงตน<br>ใช้พิสูจน์และยืนยันตัวบุคคลในการติดต่อราชการ จะมีทั้งหมด 8 กรณีดังต่อไปนี้</p>
        <div class="w3-center" style="margin:100px; margin-top:50px; margin-left: 250px; color: white;">
          <table>
            <tr>
              <td><button class="w3-button w3-round-xxlarge" style="margin-right: 100px; background-color: #3D3C92; height: 100px; width: 450px;"><router-link to="/ขอมีบัตรครั้งแรก">ขอมีบัตรครั้งแรก</router-link></button></td>
              <td><button class="w3-button w3-round-xxlarge" style="margin-right: 80px; background-color: #3D3C92; height: 100px; width: 450px;"><router-link to="/บัตรเดิมหมดอายุ">บัตรเดิมหมดอายุ</router-link></button></td>
            </tr>
            <tr height="50px"></tr>
            <tr>
              <td><button class="w3-button w3-round-xxlarge" style="margin-right: 100px; background-color: #3D3C92; height: 100px; width: 450px;"><router-link to="/บัตรหายหรือถูกทำลาย">บัตรหายหรือถูกทำลาย</router-link></button></td>
              <td><button class="w3-button w3-round-xxlarge" style="margin-right: 80px; background-color: #3D3C92; height: 100px; width: 450px;"><router-link to="/บัตรเดิมชำรุดในสาระสำคัญ">บัตรเดิมชำรุดในสาระสำคัญ</router-link></button></td>
            </tr>
            <tr height="50px"></tr>
            <tr>
              <td><button class="w3-button w3-round-xxlarge" style="margin-right: 100px; background-color: #3D3C92; height: 100px; width: 450px;"><router-link to="/เปลี่ยนชื่อตัวหรือชื่อสกุล">เปลี่ยนชื่อตัวหรือชื่อสกุล</router-link></button></td>
              <td><button class="w3-button w3-round-xxlarge" style="margin-right: 80px; background-color: #3D3C92; height: 100px; width: 450px;"><router-link to="/ผู้ถือบัตรย้ายที่อยู่">ผู้ถือบัตรย้ายที่อยู่</router-link></button></td>
            </tr>
            <tr height="50px"></tr>
            <tr>
              <td><button class="w3-button w3-round-xxlarge" style="margin-right: 100px; background-color: #3D3C92; height: 100px; width: 450px;"><router-link to="/ผู้มีอายุเกิน 70 ปี ขอมีบัตร">ผู้มีอายุเกิน 70 ปี ขอมีบัตร</router-link></button></td>
              <td><button class="w3-button w3-round-xxlarge" style="margin-right: 80px; background-color: #3D3C92; height: 100px; width: 450px;"><router-link to="/บุคคลได้รับการยกเว้นขอทำบัตร">บุคคลได้รับการยกเว้นขอทำบัตร</router-link></button></td>
            </tr>
          </table>
      </div>
     </div>
</template>

<script>
export default {
    name:"document_2"
}
</script>

  <style>
  </style>
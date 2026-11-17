/* ตัวเสริม: เพิ่มการ์ด "เช็คสถานะผลการอบรม" ในหน้าเดิม
   วิธีใช้: ใส่บรรทัดนี้ใน index.html ก่อนบรรทัด </body>
   <script src="status-addon.js" defer></script> */
(function () {
  function add() {
    if (document.getElementById("statusCard")) return;
    var card = document.createElement("article");
    card.className = "card";
    card.id = "statusCard";
    card.innerHTML =
      "<h3>เช็คสถานะผลการอบรม</h3>" +
      "<p>ตรวจสอบว่าผ่านการอบรมหรือยัง ในระบบ All Homework</p>" +
      '<ul class="tips" style="margin:0 0 14px;color:var(--mute);font-size:.95rem">' +
      "<li>ต้องผ่านสองช่องแรกก่อน แล้วดูช่องที่ 3 ว่าขึ้นว่า “ผ่าน” หรือ “ไม่ผ่าน”</li>" +
      "<li>หลังส่งการบ้าน ต้องรอ 1–2 วัน เพื่อให้เจ้าหน้าที่ตรวจสอบ</li>" +
      "<li>ต้องเข้าสู่ระบบด้วยรหัสเดียวกับที่ใช้ใน CP Connect</li>" +
      "</ul>" +
      '<a class="btn" href="https://service.alllearning.co/activity-track/login" target="_blank" rel="noopener noreferrer">เช็คสถานะ</a>';
    var ref = document.querySelector("#home .pxhero");
    if (ref && ref.parentNode) {
      ref.parentNode.insertBefore(card, ref.nextSibling);
    } else {
      var box = document.querySelector("#home .in");
      if (box) box.appendChild(card);
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", add);
  } else {
    add();
  }
})();

// Update ID card live
function updateID() {
  let name = document.getElementById("name").value || "Your Name";
  let roll = document.getElementById("roll").value || "XXXXX";
  let course = document.getElementById("course").value || "ABC";
  let photo = document.getElementById("photo").value || "https://i.pravatar.cc/150";

  // Update card fields
  document.getElementById("cardName").innerText = name;
  document.getElementById("cardRoll").innerText = "Roll No: " + roll;
  document.getElementById("cardCourse").innerText = "Course: " + course;
  document.getElementById("cardPhoto").src = photo;

  // ✅ Data encode in clean format
  let qrData = `Name:${name}, Roll:${roll}, Course:${course}`;

  // ✅ Clear old QR before generating new
  document.getElementById("qrcode").innerHTML = "";

  // ✅ Generate new QR code with bigger size + high correction level
  new QRCode(document.getElementById("qrcode"), {
    text: qrData,
    width: 180,
    height: 180,
    correctLevel: QRCode.CorrectLevel.H
  });
}

// Download ID card as image
function downloadCard() {
  let card = document.getElementById("idCard");
  html2canvas(card).then(canvas => {
    let link = document.createElement("a");
    link.download = "ID_Card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

// Initialize with default values
updateID();
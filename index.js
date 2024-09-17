// prompt orqali 2 turdagi shaxsni malumotlarini kiritishga tanlov beriladi 3 kasb egasi bo'lishi mumkun 1 tasini tanlagandan keyin uni malumotlarini kiritib boradi malumotlarni object ga yeg'ib console da chiqarilsin

let teacher = {};

let student = {};

function kasblar() {
  let kasb = prompt("Qanday kasb egasisiz 1 teacher, 2 student");

  if (kasb === "1") {
    teacher.name = prompt("Ismingizni kiriting");
    teacher.age = prompt("yoshingizni kiriting");
    teacher.city = prompt("Qayerda ishlaysiz");
    teacher.experience = prompt("Necha yillik tajribaga egasiz");
    teacher.hobby = prompt("Nimalarga qiziqasiz");
  } else if (kasb === "2") {
    student.name = prompt("Ismingizni kiriting");
    student.age = prompt("Yoshingizni kiriting");
    student.city = prompt("Qayerda o'qiysiz");
    student.direction = prompt("Qaysi yo'nalishda o'qiysiz");
    student.hobby = prompt("Nimalarga qiziqasiz");
  } else {
    alert("Bunday kasb yo'q");
  }
  return kasb;
}

kasblar();

console.log(teacher);
console.log(student);

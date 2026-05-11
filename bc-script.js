function openPVI(pviName) {
  var i;
  var x = document.getElementsByClassName("pvisite");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(pviName).style.display = "block";  
}

function dropdown(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function openCourse(crsName) {
  var i;
  var x = document.getElementsByClassName("crs");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(crsName).style.display = "block";  
}

// HELPER -------------

function createChip(text, colorClass, extraClass = "") {
  return `
    <div class="chp ${extraClass} ${colorClass} ubd">
      <span class="c-txt2">${text}</span>
    </div>
  `;
}

function createChip2(text, colorClass, extraClass = "") {
  return `
    <div class="chp chp-r ${extraClass} ${colorClass} ubd">
      <span class="c-txt2">${text}</span>
    </div>
  `;
}


function createTrow(no, title, date, link = "") {
 return `
<th class="mdl m-l w10"><p class="k9 j12">${no}</p></th><th class="mdl w60"><p class="k9 j12">${title}</p></th><th class="mdl w15"><p class="k9 j12">${date}</p></th><th class="mdl w15 m-r">
<div class="chp c-gray"> <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="c-icn"> <use href="#linc"></use> </svg> <a target="_blank" href="${link}" class="c-txt2">Link</a></div>
</th>
`
}

function createCrow(color, status, name, color2, format, color3, type, score, due = "") {
 return ` 
<th class="mdl m-l w15">
 <div class="chp chp-r c-${color} ubd">
      <span class="c-txt2">${status}</span>
    </div>
  </th><th class="mdl m-l w30"><p class="k9 j12">${name}</p></th><th class="mdl m-l w15">
    <div class="chp c-${color2} ubd">
      <span class="c-txt2">${format}</span>
    </div>
  </th><th class="mdl m-l w15">
    <div class="chp  c-${color3} ubd">
      <span class="c-txt2">${type}</span>
    </div>
  </th><th class="mdl m-r w10"><p class="k9 j12">${score}</p></th><th class="mdl m-r w15"><p class="k9 j12">${due}</p></th>
`
}


// CLEAR ----------------------------

function clearCourse() {
  document.getElementById("jvbyzlolhkly").innerHTML = "-";
  document.getElementById("iuaxykzozrk").innerHTML = "-";
  document.getElementById("kwczamlmbiqta").innerHTML = "-";
  document.getElementById("gmizivlamumabmz").innerHTML = "-";
  document.getElementById("wyvmlzzvy").innerHTML = "-";
  document.getElementById("lxdabnblqnmdun").innerHTML = "-";

document.querySelectorAll(".trow").forEach(el => el.style.display = "none");
  document.querySelectorAll(".crow").forEach(el => el.style.display = "none");

  ['trow', 'crow'].forEach(prefix => {
  for (let i = 1; i <= 10; i++) {
    const el = document.getElementById(prefix + i);
    if (el) el.innerHTML = '';
  }
});
}

// CALENDAR FILLER

document.addEventListener("DOMContentLoaded", () => {

 const weeks = [
  document.getElementById("week1"),
  document.getElementById("week2"),
  document.getElementById("week3"),
  document.getElementById("week4"),
  document.getElementById("week5")
];

const today = new Date();

const months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];

function getStartOfWeek(date) {
  const start = new Date(date);
  const day = start.getDay();
  start.setDate(start.getDate() - day);
  return start;
}

function getWeekOfMonth(date) {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const offset = firstDay.getDay();
  return Math.floor((date.getDate() + offset - 1) / 7);
}

function highlightToday() {
  const d = today.getDate();
  const m = months[today.getMonth()];

  document.querySelectorAll(".date").forEach(el => {
    el.classList.remove("slct-dt");

    const cls = [...el.classList].find(c => c.startsWith(m + "-"));
    if (!cls) return;

    const day = parseInt(cls.split("-")[1]);
    if (day === d) el.classList.add("slct-dt");
  });
}

const startWeek = getWeekOfMonth(today);
let currentDate = getStartOfWeek(today);

for (let w = startWeek; w < weeks.length; w++) {
  const row = weeks[w];
  if (!row) continue;

  row.innerHTML = "";

  for (let d = 0; d < 7; d++) {
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const dow = currentDate.getDay();

    const td = document.createElement("td");
    td.className = "wd-day" + ((dow === 0 || dow === 6) ? " wknd" : "");

    td.innerHTML = `
      <h6 class="k6 j9">
        <label class="date ${month}-${String(day).padStart(2, '0')}">${day}</label>
      </h6>
      <div class="fl"></div>
    `;

    row.appendChild(td);
    currentDate.setDate(currentDate.getDate() + 1);
  }
}

highlightToday();

});
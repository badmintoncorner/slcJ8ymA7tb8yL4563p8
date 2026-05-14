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

// APP MODE ------------

function light() { document.getElementById("app").classList.add("light"); document.getElementById("app").classList.remove("dark"); document.getElementById('dark-icn').style.display='none'; document.getElementById('light-icn').style.display='block'; } 

function dark() { document.getElementById("app").classList.add("dark"); document.getElementById("app").classList.remove("light");document.getElementById('dark-icn').style.display='block'; document.getElementById('light-icn').style.display='none'; }



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
  const rows = [
    document.getElementById("rw1"),
    document.getElementById("rw2"),
    document.getElementById("rw3"),
    document.getElementById("rw4")
  ];

  const months = [
    "jan", "feb", "mar", "apr", "may", "jun",
    "jul", "aug", "sep", "oct", "nov", "dec"
  ];

  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  function pad(num) {
    return String(num).padStart(2, "0");
  }

  for (let row = 0; row < 4; row++) {
    const tr = rows[row];

    for (let day = 0; day < 7; day++) {
      const current = new Date(startOfWeek);

      current.setDate(startOfWeek.getDate() + (row * 7) + day);
      current.setHours(0, 0, 0, 0);

      const dateNum = current.getDate();
      const paddedDate = pad(dateNum);

      const monthCode = months[current.getMonth()];
      const monthShort = monthNames[current.getMonth()];

      const prev = new Date(current);
      prev.setDate(current.getDate() - 1);

      let displayText = dateNum;

      if (current.getMonth() !== prev.getMonth()) {
        displayText = `${monthShort} ${dateNum}`;
      }

      let tdClasses = "wd-day";

      if (day === 0 || day === 6) {
        tdClasses += " wknd";
      }

      let labelClasses = `date ${monthCode}-${paddedDate}`;

      if (
        current.getDate() === today.getDate() &&
        current.getMonth() === today.getMonth() &&
        current.getFullYear() === today.getFullYear()
      ) {
        labelClasses += " slct-dt";
      }

      tr.innerHTML += `
        <td class="${tdClasses}">
          <h6 class="k6 j9">
            <label class="${labelClasses}">${displayText}</label>
          </h6>
          <div class="fl"></div>
        </td>
      `;
    }
  }
});

document.getElementById("search-grid").addEventListener("input", function () {
  const search = this.value.toLowerCase();
  const items = document.querySelectorAll(".grid-option");

  items.forEach(function (item) {
    const h6 = item.querySelector("h6");
    const text = h6.textContent.toLowerCase();

    if (text.includes(search)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

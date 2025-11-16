function monsterDropdownScript1() {
  document.getElementById("monDropdown1").classList.toggle("show");
}

function characterDropdownScript1() {
  document.getElementById("charDropdown1").classList.toggle("show");
}

function moveDropdownScript1_1() {
  document.getElementById("moveDropdown1_1").classList.toggle("show");
}
  
window.onclick = function(event) {
  if (!event.target.matches('.monsterDropdownButton1')) {
    var dropdowns = document.getElementsByClassName("monsterDropdownContent1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  } 
  if (!event.target.matches('.characterDropdownButton1')) {
    var dropdowns = document.getElementsByClassName("characterDropdownContent1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.moveDropdownButton1_1')) {
    var dropdowns = document.getElementsByClassName("moveDropdownContent1_1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function selectCharacterScript1() {
  var charPick = event.target.id
  document.getElementById("charDrop1").innerHTML=charPick
  fetch('CBDatabase.json')
  .then(response => response.json())
  .then((data) => {
    document.getElementById("charHP1").value=data.characters[charPick].hp;
    document.getElementById("charMATK1").value=data.characters[charPick].matk;
    document.getElementById("charMDEF1").value=data.characters[charPick].mdef;
    document.getElementById("charRATK1").value=data.characters[charPick].ratk;
    document.getElementById("charRDEF1").value=data.characters[charPick].rdef;
    document.getElementById("charSPEED1").value=data.characters[charPick].speed;
    updateCharStat1()
    updateComStat1()
  })
}

function selectMonsterScript1() {
  var monPick = event.target.id
  document.getElementById("monDrop1").innerHTML=monPick
  fetch('CBDatabase.json')
  .then(response => response.json())
  .then((data) => {
    document.getElementById("monHP1").value=data.monsters[monPick].hp;
    document.getElementById("monMATK1").value=data.monsters[monPick].matk;
    document.getElementById("monMDEF1").value=data.monsters[monPick].mdef;
    document.getElementById("monRATK1").value=data.monsters[monPick].ratk;
    document.getElementById("monRDEF1").value=data.monsters[monPick].rdef;
    document.getElementById("monSPEED1").value=data.monsters[monPick].speed;
    document.getElementById("monType1").value=data.monsters[monPick].type;
    updateMonStat1()
    updateComStat1()
  })
}

window.onkeyup = function(event) {
  event.target.value=event.target.value.replace(/[^0-9]$/i, "")
  if (event.target.value < 1) {
    event.target.value=1
  }
  updateMonStat1()
  updateCharStat1()
  updateComStat1()
}

const monStat1List = ["monHP1", "monMATK1", "monMDEF1", "monRATK1", "monRDEF1", "monSPEED1"]
const monRealStat1List = ["monRealHP1", "monRealMATK1", "monRealMDEF1", "monRealRATK1", "monRealRDEF1", "monRealSPEED1"]
function updateMonStat1() {
  for (let i = 0; i < 6; i++) {
    var monBaseStat = parseInt(document.getElementById(monStat1List[i]).value)
    var monGrade = Math.floor((100+2*monBaseStat*document.getElementById("monGrade1").value)/100-1)
    var monRealStat = monBaseStat + monGrade
    document.getElementById(monRealStat1List[i]).innerHTML=monRealStat
  }
}

const charStat1List = ["charHP1", "charMATK1", "charMDEF1", "charRATK1", "charRDEF1", "charSPEED1"]
const charRealStat1List = ["charRealHP1", "charRealMATK1", "charRealMDEF1", "charRealRATK1", "charRealRDEF1", "charRealSPEED1"]
function updateCharStat1() {
  for (let i = 0; i < 6; i++) {
    var charBaseStat = parseInt(document.getElementById(charStat1List[i]).value)
    var charLevel = parseInt(document.getElementById("level1").value)
    var charRealStat = Math.floor(2*charBaseStat*(charLevel+33)/100)+5
    document.getElementById(charRealStat1List[i]).innerHTML=charRealStat
  }
}

const comStat1List = ["comHP1", "comMATK1", "comMDEF1", "comRATK1", "comRDEF1", "comSPEED1"]
function updateComStat1() {
  for (let i = 0; i < 6; i++) {
    var charBaseStat = parseInt(document.getElementById(charStat1List[i]).value)
    var charLevel = parseInt(document.getElementById("level1").value)
    var monRealStat = parseInt(document.getElementById(monRealStat1List[i]).innerHTML)
    var comStat = Math.floor(2*charBaseStat*monRealStat*(charLevel+33)/10000)+5
    document.getElementById(comStat1List[i]).innerHTML=comStat
  }
}

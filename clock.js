

function clock(){
  d = new Date(),
  h = d.getHours(),
  m = d.getMinutes(),
  s = d.getSeconds(),

  hDeg = h * 30 + m * (360/720),
  mDeg = m * 6 + s * (360/3600),
  sDeg = s * 6,

  hE1 = document.querySelector('.hourhand')
  mE1 = document.querySelector('.minhand')
  sE1 = document.querySelector('.sechand')

  hE1.style.transform = "rotate("+hDeg+"deg)";
  mE1.style.transform = "rotate("+mDeg+"deg)";
  sE1.style.transform = "rotate("+sDeg+"deg)";
}
setInterval("clock()",1000)

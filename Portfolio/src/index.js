function myFunction() {
  var x = document.getElementById("nav_bar");
  const logo = document.getElementById("logo");
  const logo_div = document.getElementById("logo_div");
  const fa_times = document.getElementById("icon_X");
  var value = window.scrollY;
  if (x.className === "navigation_bar") {
    logo.style.opacity = 0;
    logo_div.style.opacity = 0;
    x.className = x.className + " responsive";
    fa_times.classList.remove("fa-bars");
    x.style.zIndex = 2;
    fa_times.classList.add("fa-close");
  } else {
    x.className = "navigation_bar";
    
    x.style.zIndex = 2;
    logo.style.opacity = 1;
    logo_div.style.opacity = 1;
    fa_times.classList.remove("fa-close");
    fa_times.classList.add("fa-bars");
    logo_div.style.marginLeft = "0%";
  }
}

window.addEventListener("scroll", function () {
  var value = window.scrollY;
  const profile_pic = document.getElementById("profile_pic");
  const about_pic = document.getElementById("about_pic");
  const about_txt = document.getElementById("about_txt");
  const leftborder = document.getElementById("leftborder");
  const topborder = document.getElementById("topborder");
  const rightborder = document.getElementById("rightborder");
  const bottomborder = document.getElementById("bottomborder");
  const bg_blob = document.getElementById("blob");
  const about_self_id = document.getElementById("about_self_id");
  const home_nav = document.getElementById("home_nav");
  const about_nav = document.getElementById("about_nav");
  const project_nav = document.getElementById("project_nav");
  const contact_nav = document.getElementById("contact_nav");
  const cards = document.getElementById("cards");
  const project_txt = document.getElementById("project_txt");

  if(value <= 300 ){
    home_nav.classList.add("active");
    about_nav.classList.remove("active");
    project_nav.classList.remove("project_nav");
    contact_nav.classList.remove("contact_nav");
    about_pic.classList.remove("fade-in-right");
    about_pic.style.opacity = "0";
    leftborder.classList.remove("leftborder");
    topborder.classList.remove("topborder");
    rightborder.classList.remove("rightborder");
    bottomborder.classList.remove("bottomborder");
    about_txt.classList.remove("about_self_div_anim");
    about_txt.style.opacity = 0;
    bg_blob.classList.remove("blobanim");
    about_self_id.classList.remove("about_self_div_anim");

  }
  if (value >= 301 && value <= 900) {
    home_nav.classList.remove("active");
    project_nav.classList.remove("active");
    contact_nav.classList.remove("active");
    about_nav.classList.add("active");
    profile_pic.classList.add("profile_pic_anim0");
    about_pic.classList.add("fade-in-right");
    about_pic.style.opacity = "1";
    about_pic.style.animationDelay = "2s ease";
    leftborder.classList.add("leftborder");
    topborder.classList.add("topborder");
    rightborder.classList.add("rightborder");
    bottomborder.classList.add("bottomborder");
    about_txt.classList.add("about_self_div_anim");
    about_txt.style.opacity = 1;
    about_self_id.classList.add("about_self_div_anim");
  }
  
  if(value >= 1200){
  
    project_nav.classList.add("active");
    home_nav.classList.remove("active");
    about_nav.classList.remove("active");
    contact_nav.classList.remove("active");
    
  }
  if(value > 3900){
    project_nav.classList.remove("active");
    home_nav.classList.remove("active");
    about_nav.classList.remove("active");
    contact_nav.classList.add("active");
  }
  const top_nav = document.getElementById("nav_bar");
  if (value >= 1) {
    top_nav.style.boxShadow = "0px 4px 5px 0px black", "5px 1px 3px 0px white";
    top_nav.style.backgroundColor = "#284258";
    top_nav.style.transition = "0.2s ease-in-out";
    top_nav.style.zIndex = 2;
  } if(value <= 0) {
    top_nav.style.boxShadow = "";
    top_nav.style.zIndex = 2;
    top_nav.style.backgroundColor = "#284258";
    top_nav.style.transition = "0.2s ease-in-out";
  }
});

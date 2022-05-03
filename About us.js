var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
function myFunction1() {
  location.replace("https://cn.bing.com/search?q=Financial+education&cvid=f5e85acd3c5941ecad7eb0a235ade619&aqs=edge..69i57j0l8.760j0j4&FORM=ANAB01&PC=U531")
}
function myFunction2() {
  location.replace("https://cn.bing.com/search?q=Postgraduate%20entrance%20examination%20guidance%20class&qs=n&form=QBRE&=%25eManage%20Your%20Search%20History%25E&sp=-1&pq=postgraduate%20entrance%20examination%20guidance%20class&sc=8-48&sk=&cvid=14B8DB42FD4D489A824BACBB764372C0")
}
function myFunction3() {
  location.replace("https://artacademydirect.com/collections/art-courses/products/childrens-creative-art-course-ages-6-to-8")
}
function myFunction4() {
  location.replace("https://www.greyhighschool.com/academics/computer-applications-technology/")
}
function myFunction5() {
  location.replace("https://www.basic-mathematics.com/")
}
function myFunction6() {
  location.replace("https://fl5590.wixsite.com/website#:~:text=INTERNATIONAL%20CONFERENCE%20ON,APPLIED%20ENGLISH%20%E6%9C%AC%E7%A0%94%E8%A8%8E%E6%9C%83%E6%97%A8%E5%9C%A8%E6%8E%A2%E8%A8%8E%E8%B7%A8%E9%A0%98%E5%9F%9F%E7%9A%84%E5%B0%88%E6%A5%AD%E6%95%99%E5%AD%B8%E8%88%87%E6%88%90%E9%95%B7%EF%BC%8C%E4%B8%A6%E5%A4%9A%E5%85%83%E5%8C%96%E9%87%9D%E5%B0%8D%E5%95%86%E6%A5%AD%E3%80%81%E8%A7%80%E5%85%89%E3%80%81%E5%A4%9A%E5%85%83%E6%96%87%E5%8C%96%E7%AD%89%E8%AD%B0%E9%A1%8C%E9%80%B2%E8%A1%8C%E5%9C%8B%E9%9A%9B%E5%AD%B8%E8%A1%93%E6%8E%A2%E8%A8%8E%EF%BC%8C%E6%8F%90%E5%8D%87%E5%AD%B8%E8%A1%93%E6%B0%B4%E6%BA%96%E3%80%82%20%E8%AB%96%E6%96%87%E4%B8%BB%E9%A1%8C")
}
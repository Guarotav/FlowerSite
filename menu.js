var url="";
var linkname="";

let flag=getCookie("flag");
if (flag=="true")
{ 
  url="logoff.html";
  linkname="Logoff";
}
else
{
  url="login.html";
  linkname="Login";
}
document.writeln(
  `
  <a href="${url}" class="but"  title="">${linkname}</a><div class="but_razd"></div>
  <a href="products.html" class="but" title="">Products</a><div class="but_razd"></div>
  <a href="about.html"  class="but" title="">About us</a><div class="but_razd"></div>
  <a href="contact.html" class="but" title="">Contact us</a>
  `);
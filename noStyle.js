function noStyle() {
  Array.from(
    document.getElementsByTagName("style")
  ).forEach((style) => {
    style.remove()
  });
  Array.from(
    document.getElementsByTagName("link")
  ).forEach((link) => { 
    if (a.rel === "stylesheet") {
      link.remove();
    }
  });
  Array.from(
    document.getElementsByTagName("*")
  ).forEach((element) => {
    element.className = "";
    element.style = "";
  });
}

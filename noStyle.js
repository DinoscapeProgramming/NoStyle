function noStyle() {
  Array.from(
    document.getElementsByTagName("style")
  ).forEach((style) => {
    style.remove()
  });
  Array.from(
    document.getElementsByTagName("link")
  ).forEach((link) => { 
    if (link.rel === "stylesheet") {
      link.remove();
    }
  });
  Array.from(
    document.getElementsByTagName("meta")
  ).forEach((meta) => {
    if (meta.name === "color-scheme") {
      meta.remove();
    }
  });
  Array.from(
    document.getElementsByTagName("*")
  ).forEach((element) => {
    element.className = "";
    element.style = "";
  });
}

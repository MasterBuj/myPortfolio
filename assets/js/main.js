

$(function () {

  "use strict";

  // technologies used
  function technolgiesF(tech) {
    var techEl = "";
    tech.forEach(function (tech) {
      switch (tech) {
        case "HTML":
          techEl += '<iconify-icon height="1.5em" icon="mdi:language-html5"></iconify-icon>';
          break;
        case "CSS":
          techEl += '<iconify-icon height="1.5em" icon="mdi:language-css3"></iconify-icon>';
          break;
        case "JS":
          techEl += '<iconify-icon height="1.5em" icon="mdi:language-javascript"></iconify-icon>';
          break;
        case "PHP":
          techEl += '<iconify-icon height="1.5em" icon="mdi:language-php"></iconify-icon>';
          break;
        case "SQL":
          techEl += '<iconify-icon height="1.5em" icon="mdi:database"></iconify-icon>';
          break;
        case "API":
          techEl += '<iconify-icon height="1.5em" icon="mdi:api"></iconify-icon>';
          break;

        default:
          break;
      }
    });
    return techEl;
  };

  //laod all projects
  function loadProjects(projects) {
    projects.forEach(function (project) {
      const { projectName, technolgies, projectUrl, status, category, responsive, images, description, tag, className } = project;
      const skills = technolgiesF(technolgies);
      const projectEl = $("<section>").addClass("project-item");
      projectEl.html(`
        
          <img src="assets/img/projectsImg/${images}" alt="project login/signup"  class="project-bg">
          <span class="project-bg-name">${projectName}</span>       

          <img src="assets/img/projectsImg/${images}" alt="project login/signup"  class="project-ss">
        
        <div class="description ${className}">
          <h4>${projectName}</h4>
          <div class="technologies">
            ${skills}
          </div>
          <p>${description}</p>
          <div class="media-icon">
            <a href="${projectUrl}" class="icon">Demo</a>
            <a href="${projectUrl}" class="icon">Github</a>
          </div>
        </div>
        </div>
      `);

      projectEl.insertAfter($("#main-head"));
    });
  }

  const projectJson = [
    {
      projectName: "Secured Signup/Login",
      technolgies: ["HTML", "CSS", "JS", "PHP", "SQL"],
      projectUrl: "https://github.com/MasterBuj/user-registration-oop",
      status: "Final",
      category: "Web App",
      responsive: false,
      images: "slide1.jpg",
      description: "The project \"Secured Signup/Login\" is a web application developed using HTML, CSS, JavaScript, and PHP OOP. It focuses on providing a secure and user-friendly authentication system for users...",
      tag: "",
      className: "",
    },
    {
      projectName: "Simple To-Do List",
      technolgies: ["HTML", "CSS", "JS", "PHP", "SQL"],
      projectUrl: "https://github.com/MasterBuj/todo-list",
      status: "Complete",
      category: "Web App",
      responsive: true,
      images: "slide2.jpg",
      description: "The \"Simple To-Do List\" project is a web application developed using HTML, CSS, JavaScript, PHP, and SQL. It provides users with a platform to create and manage their to-do tasks with additional features...",
      tag: "",
      className: "blur-max",
    },
    {
      projectName: "MovInfo",
      technolgies: ["HTML", "CSS", "JS", "API"],
      projectUrl: "https://github.com/MasterBuj/MovieInfo",
      status: "Ongoing",
      category: "Web App",
      responsive: true,
      images: "slide3.jpg",
      description: "The \"Movie Information Website\" project is a web application built using HTML, CSS, and JavaScript. Its purpose is to provide users with a platform to explore and access information about movies...",
      tag: "",
      className: "",
    }
  ];

  loadProjects(projectJson);




  // docs slider
  docSlider.init({
    classSelector: '.main',
    speed: 200,
    pager: true,
    afterChange: function (page) {

      $(".project-ss").removeClass("animate__animated animate__lightSpeedInLeft animate__faster");
      $(".description ").removeClass("animate__animated animate__lightSpeedInRight animate__faster");
      $(".project-bg-name ").removeClass("animate__animated animate__slideInUp");

      let n = $(".project-ss").length;
      if (0 >= page || page > n)
        return;

      let a = $(".project-ss")[page - 1];
      let b = $(".description")[page - 1];
      let c = $(".project-bg-name")[page - 1];

      a.classList.add("animate__animated", "animate__lightSpeedInLeft", "animate__faster");
      b.classList.add("animate__animated", "animate__lightSpeedInRight", "animate__faster");
      c.classList.add("animate__animated", "animate__slideInUp");
    }
  });


  // mouse effect
  let mouse = new Mouse({
    mouse: 'cirle',
    color: '#ffffff',
    el: 'a , button',
    mouseHover: 'border',
    mousePointer: false,
    el_hover: true,
    mouse_clicked: true,
    clrChanged: false
  })
  mouse.mouse();




  // clipboard copy
  $(".copyText").click(function (event) {
    event.preventDefault();
    var hiddenClipboard = $('#_hiddenClipboard_');
    if (!hiddenClipboard.length) {
      $('body').append('<textarea readonly style="position:absolute;top: -9999px;" id="_hiddenClipboard_">' + this.getAttribute("data-clipboard-text") + '</textarea>');
      hiddenClipboard = $('#_hiddenClipboard_');
    }
    hiddenClipboard.select();
    document.execCommand('copy');
    document.getSelection().removeAllRanges();

    $(".notif-toast").text(this.getAttribute("data-clipboard-text") + " copied to clipboard")
    $(".notif-toast").css("display", "block");
    setTimeout(function () {
      $(".notif-toast").css("display", "none");
    }, 5000);

  });





})
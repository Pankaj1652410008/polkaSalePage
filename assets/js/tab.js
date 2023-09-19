$(document).on(
    "click",
    ".section-slk .container .tabs-wrapper .tabs .tab",
    function () {
      if ($(this).data("target") < $(".is-active").data("target")) {
        $(".section-slk .container .tabs-wrapper .tabs .tab").addClass(
          "before-slide"
        );
        $(".section-slk .container .tabs-wrapper .tabs .tab").removeClass(
          "after-slide"
        );
      } else {
        $(".section-slk .container .tabs-wrapper .tabs .tab").removeClass(
          "before-slide"
        );
        $(".section-slk .container .tabs-wrapper .tabs .tab").addClass(
          "after-slide"
        );
      }
  
      $(".section-slk .container .tabs-wrapper .tabs .tab").removeClass(
        "is-active"
      );
      $(this).addClass("is-active");
  
      $(".section-slk .active-content .text").removeClass("active-text");
      let active_text = $(this).data("target");
      $(
        `.section-slk .active-content div:nth-child(${parseInt(active_text)})`
      ).addClass("active-text");
    }
  );
  
  var modal  = document.getElementById("exampleModal");
  function swapModal(){
    if(modal.style.display == "none"){
      modal.style.display = "block";
    }
    else{
      modal.style.display = "block"
      modal.style.opacity= "1";
      modal.style.backdropFilter = " brightness(0.5)";
    }
  }
  
  function closeModal(){
    modal.style.display = "none";
  }
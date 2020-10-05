(function($) {
  "use strict"; // Start of use strict

  // Opera 8.0+
  var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

  // Firefox 1.0+
  var isFirefox = typeof InstallTrigger !== 'undefined';

  // Safari 3.0+ "[object HTMLElementConstructor]" 
  var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/false || !!document.documentMode;

  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1 - 79
  var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  if (isFirefox) {
    $('ul.menu.uppercase').addClass('firefox');
  }

  if (isSafari) {
    $('ul.menu.uppercase').addClass('safari');
  }


  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  // Show the navbar when the page is scrolled up
  var MQL = 0;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('#mainNav').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
            $('#mainNav').addClass('is-visible');
          } else {
            $('#mainNav').removeClass('is-visible is-fixed');
          }
        } else if (currentTop > this.previousTop) {
          //if scrolling down...
          $('#mainNav').removeClass('is-visible');
          if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }

  $('.tagline').hover( 
    function() { $('.nameFull').removeClass('hidden'); },
    function() { $('.nameFull').addClass('hidden'); }
  );

  $('.tagline').hover( 
    function() { $('.bracket').addClass('hidden'); },
    function() { $('.bracket').removeClass('hidden'); }
  );

  function refactorBrand(w) {
    if (w.matches) {
      $('.navbar-brand').html('<span>Mind Empathy netWorking \\([ E = mc^2 ]\\)</span> <span class="tagline">Empathy = mind creativity²</span>');
    } else {
      $('.navbar-brand').html("<span>Mind Empathy netWorking</span><span class='tagline'><span><span class='bracket'>\\([\\)</span><span class='initial'>E</span><span class='hidden nameFull mpathy'>mpathy</span> <span>=</span> <span class='initial'>m</span><span class='hidden nameFull ind'>ind</span> <span class='initial'>c</span><span class='hidden nameFull reativity'>reativity</span><span>²</span><span class='bracket'>\\(]\\)</span></span></span>");
      $('.tagline').hover( 
        function() { $('.nameFull').removeClass('hidden'); },
        function() { $('.nameFull').addClass('hidden'); }
      );
      $('.tagline').hover( 
        function() { $('.bracket').addClass('hidden'); },
        function() { $('.bracket').removeClass('hidden'); }
      );
    }
    MathJax.typeset();
  };

  var isTOCvisible = 1;
  function showHideTOC(w) {
    if (w.matches) {
      $(".toc").css('right','-320px');
      setTimeout(function() { $(".toc-box").addClass('hidden'); $(".toc").css('right','-290px'); }, 500);
      isTOCvisible = 0;
    } else {
      $(".toc").css('right','-320px');
      setTimeout(function() { $(".toc-box").removeClass('hidden'); $(".toc").css('right','3px'); }, 500);
      isTOCvisible = 1;
    }
  }

  var w = window.matchMedia("(max-width: 991px)");
  refactorBrand(w);
  w.addListener(refactorBrand);
  showHideTOC(w);
  w.addListener(showHideTOC);

  function forceNewline(x) {
    if (x.matches) {
      $('.subheading').html('<p><strong>Your idea is a valid one</strong></p> Inside <span class="blair"><span class="ME">ME</span> netWork</span> you will find collaboration and brainstorming <br>to achieve it');
    } else {
      $('.subheading').html('<p><strong>Your idea is a valid one</strong></p> Inside <span class="blair"><span class="ME">ME</span> netWork</span> you will find collaboration and brainstorming to achieve it');
    }
  };

  var x = window.matchMedia("(min-width: 429px) and (max-width: 768px)");
  forceNewline(x);
  x.addListener(forceNewline);

  $('.menu-item-24890').hover( 
    function() { $('.ideasFull').removeClass('hidden'); },
    function() { $('.ideasFull').addClass('hidden'); }
  );

  $('.menu-item-24892').hover( 
    function() { $('.blogFull').removeClass('hidden'); },
    function() { $('.blogFull').addClass('hidden'); }
  );

  $('.menu-item-24896').hover( 
    function() { $('.projectsFull').removeClass('hidden'); },
    function() { $('.projectsFull').addClass('hidden'); }
  );

  var isExploratoryVisible = 0;
  $('.start').click( function() {
    if (isExploratoryVisible) {
      setTimeout(function(){ $('#mainNav').css('background-color',''); }, 500);
      $('header.masthead').css('left','0');
      $('header.masthead .exploratory').css('left','-200vw');
      $('.start').html("◀︎ Explore");
    } else {
      setTimeout(function(){ $('#mainNav').css('background-color','rgba(255, 255, 255, 0.9)'); }, 500);
      $('header.masthead').css('left','100vw');
      $('header.masthead .exploratory').css('left','-100vw');
      $('.start').html("Go back ▶︎");
    }
    isExploratoryVisible = !isExploratoryVisible;
  });

  $('.mdc-card > .mdc-card__actions > .mdc-card__action-buttons > .expand').click( function() {
    $(this).parent().parent().parent().find('.display').find('.summary').toggleClass('expanded');
    if ($(this).find('.mdc-button__label').text() === 'Collapse') {
      $(this).find('.mdc-button__label').text('Expand');
    } else {
      $(this).find('.mdc-button__label').text('Collapse');
    }
  });

  $('.heart').click( function() {
    $(this).toggleClass('hearted');
  });

  $('.summary #ez-toc-container').css('display','none');

  if ($('.histoire').length) {
    $('.histoire').createTOC({title: "", insert: ".toc"});
  }

  $(".toc-box").on('click', function (e) {
    if (e.offsetX < 8) {
      if (isTOCvisible) {
        $(".toc").css('right','-320px');
        setTimeout(function() { $(".toc-box").addClass('hidden'); $(".toc").css('right','-290px'); }, 500);
      } else {
        $(".toc").css('right','-320px');
        setTimeout(function() { $(".toc-box").removeClass('hidden'); $(".toc").css('right','3px'); }, 500);
      }
      isTOCvisible = !isTOCvisible;
    }
  });

  function scaleLogo() {
    if (window.screen.height < 700) {
      let perpx = 0.75/700;
      let ratio = perpx * window.screen.height;
      $(".main-logo").css('transform','scale('+ratio+')');
    }
    else {
      $(".main-logo").css('transform','scale(1)');
    }
  }

  scaleLogo();
  $(window).resize(scaleLogo);

})(jQuery); // End of use strict

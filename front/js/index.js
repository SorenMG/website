// window.onload = function() {
//   // Update repository list
//   $.getJSON('https://api.github.com/users/soren1146/repos', function(data) {
//     // Generate cells
//     for (var i = 0; i < data.length; i++) {
//       var currentRepo = data[i];
//
//       var row = document.createElement('tr');
//       var name = document.createElement('td');
//       name.innerHTML = currentRepo.name;
//       row.appendChild(name);
//       var description = document.createElement('td');
//       description.innerHTML = currentRepo.description;
//       row.appendChild(description);
//       var stars = document.createElement('td');
//       stars.innerHTML = currentRepo.stargazers_count;
//       row.appendChild(stars);
//       document.getElementById('repo-table').appendChild(row);
//     }
//   });
// }

(function($) {
  "use strict"; // Start of use strict

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

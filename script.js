// Detecting the scroll position to add animations
window.addEventListener('scroll', function() {
                              let sections = document.querySelectorAll('.section');
                              
                              sections.forEach(function(section) {
                                  if (isInViewport(section)) {
                                      section.classList.add('scroll-animation');
                                  }
                              });
                          });
                          
                          // Function to check if an element is in the viewport
                          function isInViewport(element) {
                              let rect = element.getBoundingClientRect();
                              return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
                          }
                          
                          // Example of shake animation when a section is clicked
                          document.querySelectorAll('.card').forEach(function(card) {
                              card.addEventListener('click', function() {
                                  card.style.animation = 'shake 0.5s ease';
                                  setTimeout(function() {
                                      card.style.animation = '';
                                  }, 500);
                              });
                          });
                          
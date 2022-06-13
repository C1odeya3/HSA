// materialize components initialization
document.addEventListener('DOMContentLoaded', function() {
    var provSel = document.querySelectorAll('select');
    M.FormSelect.init(provSel);
  });
  document.addEventListener('DOMContentLoaded', function() {
    var tabi = document.querySelector('.tabs');
    M.Tabs.init(tabi, {
      swipeable: true
    });
});
document.addEventListener('DOMContentLoaded', function() {
  var popa = document.querySelectorAll('.modal');
  M.Modal.init(popa);
});
document.addEventListener('DOMContentLoaded', function() {
  var floata = document.querySelectorAll('.fixed-action-btn');
  M.FloatingActionButton.init(floata);
});
document.addEventListener('DOMContentLoaded', function() {
  var caro = document.querySelectorAll('.carousel');
  M.Carousel.init(caro);
});

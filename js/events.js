//define functions here
function getIt () {
    $('p').on('click', function() {
      alert("Hey!")
    })
  }

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass("tasty")
  })
}


function pressIt() {
  $('input').on('keydown', function(key) {
    if(key.which == 71) {
      alert('good work')
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert()
  })
}
 
$(document).ready(function(){
  
});

$(document).ready(function() { //Плавное открытие
    $("body").css("display", "none");

    $("body").fadeIn(2000);

  $("a.transition").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(1000, redirectPage);
  });

  function redirectPage() {
    window.location = linkLocation;
  }
});
//Плавный скроллинг
$(function(){
$('a[href^="#"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
return false;
});
});

//Проверка ответа
function checkAnswers()
{
  var useranswer = document.getElementById("answer").value;
  useranswer = useranswer.toLowerCase();
  if (useranswer == "настя" || useranswer == "анастейша" || useranswer == "ананас" || useranswer == "анастасия")
  {
    alert("Умница");
  }
  else
    alert("Вы явно ошибаетесь, сударыня");
}

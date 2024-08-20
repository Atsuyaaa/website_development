
// index.html  //
//W3 Schools, "DOM / JavaScript reference" , 2023. [Online]. Available: https://www.w3schools.com/jsrEF/default.asp. //

var listItems = document.getElementsByClassName('navDom');
for(x =0; x < listItems.length; x++) 
{
  listItems[x].onclick
   = function () {
    changeMe(this);
  }
}
function changeMe(e) {
  e.innerHTML = "You are HERE!!";
  e.style.color = 'yellow';
 
}


var titleIn = document.getElementById('titleIn');
titleIn.addEventListener('click', function() {
  findMe(this);
});
function findMe(e) {
  if(e.style.backgroundColor !== 'red') {
    e.innerHTML = 'Hi. Thanks for clicking and showing your interest in this topic. Please read more!';
    e.style.backgroundColor = 'Cornsilk';
    e.style.padding = '30px';
    e.style.color = 'ForestGreen';
    e.style.borderRadius = "20px";
  }
}



// about.html 




// detail.html 
// scroll movement 
// W3 Schools, "DOM / JavaScript reference" , 2023. [Online]. Available:
https://www.w3schools.com/jsrEF/default.asp. 

$(document).ready(function () {
  $('.detDrop .dropdown-menu a').click(function (event) {
    event.preventDefault();
    var sectionId = $(this).attr('href');
    var fromTop = $(sectionId).offset().top;
    $('html, body').animate({
        scrollTop: fromTop
    }, 1000);

});

$(window).scroll(function () {
  $('.section').each(function () {
      var fromTop = $(this).offset().top;
      if (window.scrollY >= (fromTop + 100)) {
          $(this).addClass('fixPoint');
      } else {
          $(this).removeClass('fixPoint');
      }
      console.log(fromTop);
  })
})


})



// contact.html



// key.html //
// W3 Schools, "DOM / JavaScript reference" , 2023. [Online]. Available:
https://www.w3schools.com/jsrEF/default.asp. 

$(document).ready(function () {

  $('#navMenu a').on('click', function (e) {
    e.preventDefault();
    var sectionId = $(this).attr('href');
    var fromTop = $(sectionId).offset().top;
    $('html, body').stop().animate({
      scrollTop: fromTop
    }, 1000);
  });

});
   // funny effect-popup
var listItems = document.getElementsByClassName('imgPopup');
for(i =0; i<listItems.length; i++) {
  listItems[i].onclick = function() {
    window.open(this.src,'myImage','resizable=yes, scrollbars=yes,width=800,height=600');
  }
}

  // modal popups
  const btns = document.querySelectorAll('.modal1');
  const output = document.querySelector('.modal-text');
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      myModal.style.display = 'block';
      console.log(e.target.textContent);
      let val = e.target.textContent;
      let html = "";
      switch (val) {
      case 'Key 1':
        html = ' <h1>Rising temperatures:</h1> If we do not take more substantial measures to address global warming than what is currently in place, it is predicted that the number of days with temperatures exceeding 30°C, known as "hot summer days," will further increase. Presently, Tokyo experiences approximately 46 hot summer days annually. By the end of the 21st century, this number is projected to rise to around 103 days per year, accounting for nearly 30% of the entire year.';
        break;
      case 'Key 2':
        html = '<h1>Rising sea levels due to climate change</h1>  will have a significant impact on the lives of people living in coastal areas, low-lying regions, and small islands. They will face more damage from storm surges caused by typhoons, coastal flooding, and coastal erosion.';
        break;
      default:
        html = '<h1>Impact on crops</h1> The effects on food production are also becoming evident. For instance, apples typically ripen and change color in the autumn. However, when temperatures during this period are higher, the ripening process may be affected, resulting in poorer or delayed coloration. Since the degree of ripening is used to determine the harvest time, this can have an impact on when crops are harvested.';
      }
      output.innerHTML = html;
    })
  })
  const closer = document.querySelector('.close');
  const myModal = document.querySelector('#ModalMainKey');
  closer.addEventListener('click', closeModal);
  myModal.addEventListener('click', closeModal);

  function closeModal() {
    myModal.style.display = 'none';
  }

  
  
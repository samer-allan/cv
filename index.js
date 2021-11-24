const button = document.querySelectorAll(".piano")
for (let i=0; i < button.length; i++){
     button[i].addEventListener("click",function() {

          var buttonInnerHTML = this.innerHTML
          makeSound(buttonInnerHTML)
          buttonAnimation(buttonInnerHTML)


     });
}

addEventListener("keypress", function(event){
     makeSound(event.key)

     buttonAnimation(event.key)
})

function makeSound(buttonInnerHTML){

     

     switch (buttonInnerHTML) {
          case 'C':
          var c = new Audio("c.m4a")
          c.play()
          
               break;

          case 'Db':
          var db = new Audio("db.m4a")
          db.play()
               break;

          case 'D':
          var d = new Audio("d.m4a")
          d.play()
               break;

          case 'Eb':
          var eb = new Audio("eb.m4a")
          eb.play()
               break;

          case 'E':
          var e = new Audio("e.m4a")
          e.play()
               break;

          case 'F':
          var f = new Audio("f.m4a")
          f.play()
               break;
          
          case 'Gb':
          var gb = new Audio("gb.m4a")
          gb.play()
               break;

          case 'G':
          var g = new Audio("g.m4a")
          g.play()
               break;

          case 'Ab':
          var ab = new Audio("ab.m4a")
          ab.play()
               break;

          case 'A':
          var a = new Audio("a.m4a")
          a.play()
               break;

          case 'Bb':
          var bb = new Audio("bb.m4a")
          bb.play()
               break;
                         
          case 'B':
          var b = new Audio("b.m4a")
          b.play()
               break; 
          
          case 'c':
          var cc = new Audio("cc.m4a")
          cc.play()
               break; 
     
     default:
          case 's':
          var c = new Audio("c.m4a")
          c.play()
          
               break;

          case 'e':
          var db = new Audio("db.m4a")
          db.play()
               break;

          case 'd':
          var d = new Audio("d.m4a")
          d.play()
               break;

          case 'r':
          var eb = new Audio("eb.m4a")
          eb.play()
               break;

          case 'f':
          var e = new Audio("e.m4a")
          e.play()
               break;

          case 'g':
          var f = new Audio("f.m4a")
          f.play()
               break;
          
          case 'y':
          var gb = new Audio("gb.m4a")
          gb.play()
               break;

          case 'h':
          var g = new Audio("g.m4a")
          g.play()
               break;

          case 'u':
          var ab = new Audio("ab.m4a")
          ab.play()
               break;

          case 'j':
          var a = new Audio("a.m4a")
          a.play()
               break;

          case 'i':
          var bb = new Audio("bb.m4a")
          bb.play()
               break;
                         
          case 'k':
          var b = new Audio("b.m4a")
          b.play()
               break; 
          
          case 'l':
          var cc = new Audio("cc.m4a")
          cc.play()
               break;

     }

}

function buttonAnimation(keypressed) {

     
     var activeButton = document.querySelector("." + keypressed)
     activeButton.classList.add("pressed")
     setTimeout(function (){
          activeButton.classList.remove("pressed")}, 100)

}

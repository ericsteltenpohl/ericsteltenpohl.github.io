class lettersInit{
    constructor(){
      this.alfa='abcdefghijklmnoprstuwxyz';
      this.nums='12345678901';
    }
    getLetters(){
      return this.alfa.split('');
    }
    getNums(){
      return this.nums.split('');
    }
  }

  let init =new lettersInit;
  let temp = init.getLetters();
  let i = 1;
  for (const item of temp ) {

    var div = document.createElement("div");
    var alink = document.createElement("a");
    alink.textContent=item;

    if(i<=init.alfa.length/2 +1){
      document.getElementById('letters').appendChild(div).appendChild(alink);
    }else{
      document.getElementById('letters2').appendChild(div).appendChild(alink);
    }
    i++;
  }
  let tempForNums = init.getNums();
  for(const item of tempForNums){
    var div = document.createElement("div");
    var alink = document.createElement("a");
    alink.textContent=item;
    document.getElementById('nums').appendChild(div).appendChild(alink);
  }
document.addEventListener("mousemove", function(ev){
  let pointer=document.getElementById('pointer');
  const tempX =(document.body.offsetWidth - document.getElementById('board').clientWidth)/2;

console.log(ev.pageY);

  pointer.style.left=ev.pageX-tempX-70+'px';
  pointer.style.top=ev.pageY-(document.getElementById('board').clientHeight)/2+'px';
});

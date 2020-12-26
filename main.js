{
  const timer =document.getElementById("timer");
  const start =document.getElementById("start");
  const reset =document.getElementById("reset");
  const stop =document.getElementById("stop");

  let  time = 0;
  let timeId = null;

  function updateTime() {
    const ms =time%100;
    const s =Math.floor(time/100)%60;
    const m =Math.floor(time/(100*60))%60;
    const h =Math.floor(time/(100*60*60));

    const msString=ms.toString().padStart(2,'0');
    const sString=s.toString().padStart(2,'0');
    const mString=m.toString().padStart(2,'0');
    const hString=h.toString().padStart(2,'0');

    timer.innerHTML= `${hString}:${mString}:${sString}.${msString}`;
  }
  start.addEventListener('click',()=> {
    if(timeId!==null){return;}
    let startTime=Date.now();
    timeId = setInterval(function(){
     let now = Date.now();
     time +=now-startTime;
     startTime=now;
     updateTime();
    },10);
  });

  stop.addEventListener('click',()=> {
    clearInterval(timeId);
    timeId=null;
  });

  reset.addEventListener('click',()=> {
    time=0;
    updateTime();
  });
}
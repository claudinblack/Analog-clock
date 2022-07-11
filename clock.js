setInterval(() => {
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotation=30*htime + mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;

    hr.style.transform =`rotateZ(${hrotation}deg)`;
    min.style.transform =`rotateZ(${mrotation}deg)`;
    sec.style.transform =`rotateZ(${srotation}deg)`;
}, 1000);
setInterval(drawClock, 1000);
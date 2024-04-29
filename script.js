var mats = document.getElementsByClassName("mat");
var sum = document.getElementById("sum");
var tote = document.getElementById("tote");
var prce = document.getElementById("prce");
var rate = document.getElementById("rate");
var tot = 0;
var prc = 0;
var pr = 0; 
sum.addEventListener('click', function(){
    for(let i=0; i<mats.length; i++){
        tot += Number(mats[i].value);
        prc += 100;
    }
    tote.innerText = tot;
    pr = (tot/prc)*100;
    prce.innerText = pr.toFixed(2) + "%";
    if (pr < 50) {
        rate.innerText = "راسب"
    }
    if(pr >= 50 && pr <= 65){
        rate.innerText = 'مقبول'
    }
    if(pr >= 65 && pr <= 75){
        rate.innerText = 'جيد'
    }
    if(pr >= 75 && pr <= 85){
        rate.innerText = 'جيد جداً'
    }
    if(pr >= 85 && pr <= 95){
        rate.innerText = 'جيد جداً'
    }
    if(pr >= 95 && pr <= 100){
        rate.innerText = 'ممتاز'
    }
    tot = 0
    prc = 0
});
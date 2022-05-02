let bookmark = document.getElementById('book');
let book_text = document.getElementById('book_text');
let book_div = document.getElementById('bookmark');

let back = document.getElementById('back_this');
let cache = document.getElementById('cache');
let modal = document.getElementById('modal');
let close_modal = document.getElementById('close_modal');

let select_one = document.getElementById('s1');
let select_two = document.getElementById('s2');
let choice_one = document.getElementById('choice1');
let pledge1 = document.getElementById('pledge1');
let radio1 = document.getElementById('c1');
let choice_two = document.getElementById('choice2');
let pledge2 = document.getElementById('pledge2');
let radio2 = document.getElementById('c2');

let radio_all = document.querySelectorAll('input[type="radio"]');
let number_all = document.querySelectorAll('input[type="number"]')
let pledger = document .querySelectorAll('.pledger');
let pledges = document.querySelectorAll('.pledge');

let twen = document.getElementById('p1');
let seven = document.getElementById('p2');
let anypledge = document.getElementById('p0');
let subone = document.getElementById('submit1');
let subtwo = document.getElementById('submit2');
let subzero = document.getElementById('submit0');
let completed = document.getElementById('complete');

let gotit = document.querySelector('.agreement');

let dollar_th = document.getElementById('dollard');
let num_t = 89914;

let backer_th = document.getElementById('backers');
let bckr_t = 5007;

let bamboo_left = document.querySelectorAll('.bamboo_left');
let bamboo = 101;
let black_left = document.querySelectorAll('.black_left');
let black = 64;


let pourcent = document.getElementById('pourcent');

function percent(){
    let prc = num_t/1000;
    pourcent.setAttribute('style', 'width:'+ prc.toString()+'%;');
}

function numStr(a){
    let b = ',';
    a = '' + a;
    var c = '';
        d = 0;
    
    while (a.match(/^0[0-9]/)){
        a = a.substr(1);
    }
    for (let i = a.length-1; i>=0; i--){
        c = (d != 0 && d%3 == 0) ? a[i] + b + c : a[i] + c;
        d++;
    }
    return c;
}

function addnone(element){
    element.classList.add('none');
}

function removenone(element){
    element.classList.remove('none');
}

function resetPledge(){
    pledger.forEach(pledger => pledger.classList.remove('selected'));
    pledges.forEach(pledge => addnone(pledge));
    radio_all.forEach(radio => radio.removeAttribute('checked'));
}

function RaisedTotal(doll){
    num_t += parseInt(doll);
    ++bckr_t;

    dollar_th.innerHTML = numStr(num_t);
    backer_th.innerHTML = numStr(bckr_t);
}

//Bookmark
bookmark.addEventListener('click', ()=> {
    if(book_div.classList.contains('clicked')){
        book_text.textContent = 'Bookmark';
        book_div.classList.remove('clicked');
    }else{
        book_div.classList.add('clicked');
        book_text.textContent = 'Bookmarked';
    };
})

//Back this project
back.addEventListener('click', ()=>{
    removenone(cache);
    removenone(modal);
    resetPledge();
    modal.scrollIntoView({block: 'start'});
})

close_modal.addEventListener('click', ()=>{
    addnone(cache);
    addnone(modal);
})

//Click sur cache pour fermer le modal
cache.addEventListener('click', ()=> {
    addnone(cache);
    addnone(modal);
    addnone(completed);
})

//Selection par click sur le div conteneur

pledger.forEach(element =>{
    element.addEventListener('click', e => {
        resetPledge();
        element.classList.add('selected');
        element.scrollIntoView({block: 'center'});
        element.querySelector('input').setAttribute('checked', 'checked');
        element.querySelector('.pledge').classList.remove('none');
    })
})

//Selection dans la partie About sur le projet souhaité
select_one.addEventListener('click', ()=>{
    removenone(cache);
    removenone(modal);
    resetPledge();
    choice_one.classList.add('selected');
    removenone(pledge1);
    radio1.setAttribute('checked', 'checked');
    choice_one.scrollIntoView({block:"center"});
})

select_two.addEventListener('click', ()=>{
    removenone(cache);
    removenone(modal);
    resetPledge();
    choice_two.classList.add('selected');
    removenone(pledge2);
    radio2.setAttribute('checked', 'checked');
    choice_two.scrollIntoView({block:"center"});
})

//Minimal pledge
subone.addEventListener('click', () => {
    if(twen.value >= 25){
        RaisedTotal(twen.value);
        addnone(modal);
        removenone(completed);
        --bamboo;
        bamboo_left.forEach(bmb => bmb.innerHTML = bamboo);
        document.documentElement.scrollTop = 100;
        percent();
    }else{
        twen.classList.add('wrong');
        setTimeout(() => twen.classList.remove('wrong'), 1500);
    }
})

subtwo.addEventListener('click', () => {
    if(seven.value >= 75){
        RaisedTotal(seven.value);
        addnone(modal);
        removenone(completed);
        --black;
        black_left.forEach(blc => blc.innerHTML = black);
        document.documentElement.scrollTop = 100;
        percent();
    }else{
        seven.classList.add('wrong');
        setTimeout(() => seven.classList.remove('wrong'), 1500);
    }
})

subzero.addEventListener('click', () => {
    if(anypledge.value != 0){
        RaisedTotal(anypledge.value);
        addnone(modal);
        removenone(completed);
        document.documentElement.scrollTop = 100;
        percent();
    }else{
        anypledge.classList.add('wrong');
        setTimeout(() => anypledge.classList.remove('wrong'), 1500);
    }
})

//Completed page 
gotit.addEventListener('click', () => {
    addnone(cache);
    addnone(completed);
})

let btn = document.getElementById ('tombol');
let body = document.getElementsByTagName ('body')[0];
btn.addEventListener ('click', rubahWarna);
btn.addEventListener ('click', tambahButton);

//toggle berguna untuk memberi dan menghilangka class
function rubahWarna (){
    body.classList.toggle ('biru-muda')
}

//bikin button
const btn2 = document.createElement ('button');
const text = document.createTextNode ('acak warna');
btn2.appendChild (text);
function tambahButton () {
    btn.after (btn2); //after menempatkan setelah element 
}

//event ketika klik acak diklik
btn2.addEventListener ('click', function(){
    const r = Math.round(Math.random() * 255 + 1); //math random ini membuat random angka. math round membuat angka dibulatkan tanpa desimal
    const b = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'; //tanda plus untuk penulisan variabel yang harusnya diisi string
})

//Bikin SLIDER
const sMerah = document.querySelector ('input[name=sMerah]');  //ini jika elemen tidak ada id atau class
const sHijau = document.querySelector ('input[name=sHijau]'); 
const sBiru = document.querySelector ('input[name=sBiru]');  

sMerah.addEventListener ('input', function(){
    const r = sMerah.value ; // ini untuk menangkap nilai slider. kan tadi udah ditentuin besarannya di HTML
    const g = sHijau.value ;
    const b = sBiru.value ;
    body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})

sHijau.addEventListener ('input', function(){
    const r = sMerah.value ; // ini untuk menangkap nilai slider. kan tadi udah ditentuin besarannya di HTML
    const g = sHijau.value ;
    const b = sBiru.value ;
    body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})

sBiru.addEventListener ('input', function(){
     const r = sMerah.value ; // ini untuk menangkap nilai slider. kan tadi udah ditentuin besarannya di HTML
    const g = sHijau.value ;
    const b = sBiru.value ;
    body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})

//bermain dengan CURSOR
document.body.addEventListener ('mousemove', function(event){
    const xPos = Math.round((event.clientX / window.innerWidth) * 255); //clientX untuk menagkap posisi cursor berdasar sumbu X, memakai window karena agar responsive
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    body.style.backgroundColor = 'rgb('+xPos+','+yPos+',100)';
})
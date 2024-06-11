console.log('welcome');
function toggleDown(){
    let icon=document.getElementById('icon');
    window.scrollTo(0,600);
    // smooth slide krna h aabhi
}
function toggleUp(){
    let iconup=document.getElementById('iconup');
    window.scrollTo(0,100);
    // smooth slide krna h aabhi
}
function toggleHide(){
    let button=document.getElementById('btn1');
        let para=document.getElementById('para');
        if(para.style.display!='none'){
            para.style.display='none';
            button.innerHTML='View More';
        }
        else{
            para.style.display='block';
            button.innerHTML='View Less';
        }
}
function toggleHide1(){
    let btn=document.getElementById('btn2');
        let para=document.getElementById('para1');
        if(para.style.display!='none'){
            para.style.display='none';
            btn.innerHTML='View More';

        }
        else{
            para.style.display='block';
            btn.innerHTML='View Less';
        }
}
function toggleHide2(){
    let btn=document.getElementById('btn3');
        let para=document.getElementById('para2');
        if(para.style.display!='none'){
            para.style.display='none';
            btn.innerHTML='View More';

        }
        else{
            para.style.display='block';
            btn.innerHTML='View Less';
        }
}
function toggleHide3(){
    let btn=document.getElementById('btn4');
        let para=document.getElementById('para3');
        if(para.style.display!='none'){
            para.style.display='none';
            btn.innerHTML='View More';

        }
        else{
            para.style.display='block';
            btn.innerHTML='View Less';
        }
}
function toggleHide4(){
    let btn=document.getElementById('btn5');
        let para=document.getElementById('para4');
        if(para.style.display!='none'){
            para.style.display='none';
            btn.innerHTML='View More';

        }
        else{
            para.style.display='block';
            btn.innerHTML='View Less';
        }
}
function toggleBurger(){
    let burger=document.getElementById('burger');
        let navbar=document.getElementById('navbar');
        if(navbar.style.display!='none'){
            navbar.style.display='none';
        }
        else{
            navbar.style.display='block';
        }
}
function toggleList(){
    let btns=document.querySelectorAll('li');
        let navbar=document.getElementById('navbar');
        if(navbar.style.display!='none'){
            navbar.style.display='none';
        }
        else{
            navbar.style.display='block';
        }
}
   let btn=document.getElementById('veiw_resume');
   let my_img=document.getElementById('my_img');
   btn.addEventListener("click", () => { 
    my_img.style.display = "block"; 
 });
   my_img.addEventListener("click",()=>{
    my_img.style.display="none";
   })


 

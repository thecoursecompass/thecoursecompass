const cards=document.querySelectorAll('.card');

cards.forEach(card=>{
card.addEventListener('mouseenter',()=>{
card.style.background='#2563EB';
card.style.color='white';
});

card.addEventListener('mouseleave',()=>{
card.style.background='white';
card.style.color='#183153';
});
});

window.addEventListener('scroll',()=>{
document.querySelectorAll('.career-grid div,.update-card').forEach(item=>{
const pos=item.getBoundingClientRect().top;
if(pos<window.innerHeight-80){
item.style.opacity=1;
item.style.transform='translateY(0)';
}
});
});

document.querySelectorAll('.career-grid div,.update-card').forEach(item=>{
item.style.opacity=0;
item.style.transform='translateY(40px)';
item.style.transition='0.5s';
});
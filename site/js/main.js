
document.querySelector('#button').addEventListener('click',CallWatsApp);
function CallWatsApp(){
    window.location.href=`https://wa.clck.bar/77477064857`;
}

function menuOpen(){
    const menu=new Promise((resolve)=>{
        function openMenu(){
            const firstOpen=document.createElement('script');
            firstOpen.src='site/js/menu.js';
            document.querySelector('body').append(firstOpen);
        }
        resolve(openMenu());
    });
    
}
window.addEventListener('DOMContentLoaded',mainFunction)
        async function mainFunction(){
            await menuOpen();
        }
    

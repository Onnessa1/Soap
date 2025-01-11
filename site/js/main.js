let path = ' ';
if(window.location.pathname=='/Soap/'||window.location.pathname=='/var/www/html/Soap/index.html'){
    document.querySelector('#button').addEventListener('click',CallWatsApp);
    function CallWatsApp(){
        window.location.href=`https://wa.clck.bar/77477064857`;
    }
}else{
    path='../';
}


function menuOpen(){
    return new Promise((resolve)=>{
        function openMenu(){
            const firstOpen=document.createElement('script');
            firstOpen.src=`${path}`+'site/js/menu.js';
            document.querySelector('body').append(firstOpen);
        }
        resolve(openMenu());
    });
    
}
window.addEventListener('DOMContentLoaded',mainFunction)
        async function mainFunction(){
            await menuOpen();
        }
    

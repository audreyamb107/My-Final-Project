function parachute(){
    let cursor=document.getElementById("cursor");
    cursor.style.animation="glide 4s ease";
    setTimeout(()=>{
        // this code will run in 2 seconds 
        cursor.style.animation="";
        cursor.style.left="0";
        cursor.style.top="0";
        document.onmousemove= (e)=>{
            // this code will run every page update
            let x = e.clientX; 
            let y = e.clientY;
            x_target = parseInt(cursor.style.left);
            y_target = parseInt(cursor.style.top);
            cursor.style.left = `${(x_target * 0.2 + x * 0.8)}px`;
            cursor.style.top = `${(y_target * 0.2 + y * 0.8)}px`;
            
        };
    }, 2000);

}

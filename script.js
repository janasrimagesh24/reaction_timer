var start= new Date().getTime();

function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
        return color;
            }

function move(){
                var left=Math.random()*300;
                var top=Math.random()*300;
                var wh=(Math.random()*100 + 10); //width & height
                var color=getRandomColor();
                document.getElementById("shape").style.left=left;
                document.getElementById("shape").style.top=top;
                document.getElementById("shape").style.width=wh;
                document.getElementById("shape").style.height=wh;
                document.getElementById("shape").style.backgroundColor=color;
                document.getElementById('shape').style.display="block";
                start= new Date().getTime();

}
move();
            
document.getElementById('shape').addEventListener('click',function(){
        document.getElementById('shape').style.display="none";
        var end=new Date().getTime();
        var timeTaken=(end - start) / 1000;
        document.getElementById("clickedCount").innerText = (Number(document.getElementById("clickedCount").innerText) + 1)
        document.getElementById("timeToClick").innerText = "Time taken: " + timeTaken;
        //alert(`Time Taken by the User is ${timeTaken}`);
                //document.getElementById('shape').style.opacity=1;
        move();
    })

    document.getElementById("reset").addEventListener("click", ()=>{
        document.getElementById("clickedCount").innerText =0 
        document.getElementById("timeToClick").innerText = "Time taken: 0";
        
    })
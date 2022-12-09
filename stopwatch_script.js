$(document).ready(function(){

    var min=$("#min").val();
    var second=$("#second").val();
    var interval;
   
    $("#start").on('click',function(){
        $('#timer-container').addClass('timer-container-style');
        $( "#start" ).prop( "disabled",true );
        

        interval=setInterval(function(){
            second++;

            if(second > 9){
                $("#second").html(second);
            }else{
                $("#second").html("0"+second);
            }
            

           
            if (second >59) {
                min++;

                if(min>9){
                    $("#min").html(min);
                }else{
                    $("#min").html('0' + min);
                }
               
                second=00;
                $("#second").html(second);
            }
           
        },1000);

    });


    $("#stop").on('click',function(){

        if(second>00 ||  min >00){
            clearInterval(interval);
            $( "#start" ).prop( "disabled", false );
        }else{
            alert('Start the stopwatch first');
            return;
        }
        
        
    });

    $("#reset").on('click',function(){
        clearInterval(interval);
        second=00;
        min=00;
        $("#min").html("00");
        $("#second").html("00");
        $('#timer-container').removeClass('timer-container-style');
    });
});
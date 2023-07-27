$( document ).ready(function() {

    let input_value = '';
    let first_value;
    let second_value;
    
    $('.buttons .figure').click(function(){
        console.dir('first_value -> ' + first_value);
        let buttons_number = Number($(this).html());

        input_value = input_value + $(this).html();
        console.dir(input_value);
        //input_value = String(input_value) + String(buttons_number);

        if(buttons_number >= 0 && buttons_number < 10) {
            $('.user-input input').val(input_value);
        } else {
     
            console.dir(input_value);
            
        }
        

    });

    $('.buttons .plus').click(function(){
        first_value = input_value;
        input_value = input_value + '+';
        console.dir(input_value);
        $('.user-input input').val(input_value);      

    });

    $('.buttons .minus').click(function(){

        alert('MINUS');        

    });

    $('.buttons .multiplication').click(function(){

        alert('MULTIPLICATION');        

    });

    $('.buttons .division').click(function(){

        alert('DIVISION');        

    });

    $('.buttons .equals').click(function(){
        second_value = input_value;
        console.dir('second_value -> ' + second_value);
        alert('RESULT');        

    });
    
});

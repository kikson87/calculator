$( document ).ready(function() {

    let input_value = '';
    let first_value;
    let second_value;
    
    $('.buttons .figure').click(function(){
        let buttons_number = Number($(this).html());

        input_value = $(this).html();
        //input_value = String(input_value) + String(buttons_number);
        console.dir('input_value -> ' + input_value);
        if(buttons_number >= 0 && buttons_number < 10) {
            if(first_value) {
                //$('.user-input input').val('11111');
                $('.user-input input').val(input_value);
            } else {
                $('.user-input input').val(input_value);
            }
        } else {
     
            console.dir(input_value);
            
        }
        

    });

    $('.buttons .plus').click(function(){
        
        first_value = input_value;

        console.dir('first_value -> ' + first_value);
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
        let result_value = Number(first_value) + Number(second_value);
        console.dir('second_value -> ' + second_value);

        console.dir('result_value -> ' + result_value);
        $('.user-input input').val(result_value);

        first_value = '';
        second_value = '';
        input_value = '';

        //$('.user-input input').val('');

    });

    $('.buttons .reset').click(function(){
        
        first_value = '';
        second_value = '';
        input_value = '';

        $('.user-input input').val('');

    });
    
});

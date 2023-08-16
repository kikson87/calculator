$( document ).ready(function() {

    let input_value = '';
    let first_value;
    let second_value;
    let action_button;

    $('.buttons .figure').click(function(){
        let buttons_number = Number($(this).html());
        //console.dir('action_button -> ' + action_button);
        /*if(action_button = 'plus'){
          $('.user-input input').val('');
        }*/

        input_value = input_value + $(this).html();
        //input_value = String(input_value) + String(buttons_number);
        //console.dir('input_value -> ' + input_value);
        if(buttons_number >= 0 && buttons_number < 10) {

            if(action_button === undefined) {
                //$('.user-input input').val('11111');
                $('.user-input input').val(input_value);
            } else {
                $('.user-input input').val(input_value);
            }
        } else {

            //console.dir(input_value);

        }


    });


    $('.buttons .slice').click(function(){
      console.dir('SLICE START');
      let curent_slice = $('.user-input input').val();
      console.dir('curent_slice  -> ' + curent_slice);
      curent_slice = curent_slice.slice(0, -1);
      $('.user-input input').val(curent_slice);

    });
    $('.buttons .plus').click(function(){

        first_value = input_value;

        //console.dir('first_value -> ' + first_value);
        $('.user-input input').val(input_value);
        action_button = 'plus';
        //console.dir('action_button -> ' + action_button);
        input_value = '';
    });

    $('.buttons .minus').click(function(){

        first_value = input_value;
        //console.dir('first_value -> ' + first_value);
        //alert('MINUS');
        action_button = 'minus';
        input_value = '';
    });

    $('.buttons .multiplication').click(function(){

        first_value = input_value;
        //console.dir('first_value -> ' + first_value);
        //alert('MULTIPLICATION');
        action_button = 'multiplication';
        input_value = '';
    });

    $('.buttons .division').click(function(){

        first_value = input_value;
        //console.dir('first_value -> ' + first_value);
        //alert('DIVISION');
        action_button = 'division';
        input_value = '';
    });

    $('.buttons .equals').click(function(){

      if(action_button == 'plus'){

        second_value = input_value;
        let result_value = Number(first_value) + Number(second_value);
        //console.dir('second_value -> ' + second_value);

        //console.dir('result_value -> ' + result_value);
        $('.user-input input').val(result_value);

        first_value = '';
        second_value = '';
        input_value = '';

        //$('.user-input input').val('');

      } else if (action_button == 'minus') {

        second_value = input_value;
        let result_value = Number(first_value) - Number(second_value);
        //console.dir('first_value -> ' + first_value);
        //console.dir('second_value -> ' + second_value);

        //console.dir('result_value -> ' + result_value);
        $('.user-input input').val(result_value);

        first_value = '';
        second_value = '';
        input_value = '';

        //$('.user-input input').val('');

      } else if (action_button == 'multiplication') {

        second_value = input_value;
        let result_value = Number(first_value) * Number(second_value);
        //console.dir('first_value -> ' + first_value);
        //console.dir('second_value -> ' + second_value);

        //console.dir('result_value -> ' + result_value);
        $('.user-input input').val(result_value);

        first_value = '';
        second_value = '';
        input_value = '';

        //$('.user-input input').val('');

      } else if (action_button == 'division') {

        second_value = input_value;
        let result_value = Number(first_value) / Number(second_value);
        //console.dir('first_value -> ' + first_value);
        //console.dir('second_value -> ' + second_value);

        //console.dir('result_value -> ' + result_value);
        $('.user-input input').val(result_value);

        first_value = '';
        second_value = '';
        input_value = '';

        //$('.user-input input').val('');

      }

    });

    $('.buttons .reset').click(function(){

        first_value = '';
        second_value = '';
        input_value = '';
        action_button = '';

        $('.user-input input').val('');

    });

});

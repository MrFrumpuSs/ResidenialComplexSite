$(".button").on("click", function(){
    parent = ($(this).closest('.form'));
    name = $(parent).children("input[name=name]").val();
    phone = $(parent).children("input[name=phone]").val();
    if(name == "") {
        $(parent).children("input[name=name]").addClass('red');
        $(parent).children("input[name=name]").attr('placeholder', 'Вы не ввели имя');
        return false;
    }
    if (phone == "") {
        $(parent).children("input[name=phone]").addClass('red');
        $(parent).children("input[name=phone]").attr('placeholder', 'Вы не ввели номер телефона');
        return false;
    }
    $.ajax({
        url: "http://residentialcomplex.ru/wp-content/themes/residentialcomplex/action_ajax_form_contact.php",
        type: 'POST',
        cache: false,
        data: { 'name': name.trim(), 'phone': phone.trim() },
        dataType: 'html',
        beforeSend: function(data)
        {
            $(parent).children("input[name=name]").val('');
            $(parent).children("input[name=phone]").val('');
            $(parent).children("input[name=name]").removeClass('red');
            $(parent).children("input[name=name]").attr('placeholder', 'Ваше имя');
            $(parent).children("input[name=phone]").removeClass('red');
            $(parent).children("input[name=phone]").attr('placeholder', 'Ваш телефон');

            var $this = $('#modal1'),
            modal = $($this).data("modal");
    
            $('#modal1').removeClass("open");
            setTimeout( function(){	
                $('#modal1').parents(".overlay").removeClass("open");
            }, 350);

            $('#modal3').parents(".overlay").addClass("open");
            setTimeout( function(){
                $('#modal3').addClass("open");
            }, 350);
        },
        
        success: function(data)
        {
        }
    });
});
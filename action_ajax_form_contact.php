<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    mail("test@mail.ru", "Заявка", "Имя клиента: $name \nТелефон клиента: $phone" );
?>
$(() => {

    $('.listbox__btn').on('click', function () {

        let inputValue = $('.listbox__inputbox-input input').val();
        if (inputValue !== '') {
            $('.listbox__list-title').fadeOut(0);
            let $newItem = $('<div class="listbox__list-item"></div>');
            let $newItemTitle = $('<div class="listbox__list-item-title"></div>');
            let $newItemBtn = $('<div class="listbox__list-item-close"></div>');
            $('.listbox__list').append($newItem);
            $('.listbox__list-item:last').append($newItemTitle);
            $('.listbox__list-item:last').append($newItemBtn);
            $('.listbox__list-item-title:last').html(inputValue);
            $('.listbox__inputbox-input input').val('');
        }

    });

    $('.listbox__list').on('click', '.listbox__list-item-close', function () {

        $(this).parent().remove();
        if ($('.listbox__list-item').length == 0) {
            $('.listbox__list-title').fadeIn(500);
        }
        
    });

    $('.listbox__list').on('click', '.listbox__list-item', function(){
        $(this).toggleClass('deactivated');
        //console.log('deactivated');
    })



})
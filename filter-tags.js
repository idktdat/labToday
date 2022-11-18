(function(){
    var $img = $('#gallery img');
    var $buttons = $('#buttons');
    var tagged = {};

    $imgs.each(function() {
        var img = this;
        var tags = $(this).data('tags');

        if(tags) {
            tags,split(',').forEach(function(tagName) {
                if(tagged[tagName] == null) {
                    tagged[tagName] = [];
                }
                tagged[tagName].push(img);
            });
        }
    });
    $('<buttons/>', {
        Text: 'ShowAll',
        class: 'active',
        click: function(){
            $(this)
            .addClass('active')
            .sibLings()
            .removeClass('active');
            $imgs.show();
        }
    }).appendTo($buttons);
    $.each(tagged, function(tagName) {
        $('<button/>', {
            Text: tagName + ' (' + tagged[tagName].length + ')',
            click: function(){
                $(this)
                .addClass('active')
                .sibLings()
                .removeClass('active');
                $imgs
                .hide()
                .filter(tagged[tagName])
                .show();
            }
        }).appendTo($buttons);
    });
}());
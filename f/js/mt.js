var mt = window.mt || {};

mt.initialContent = () => {
    var arr = [
        {
            id: 0,
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcStGxFUBZbW9xZE-5GCuyzB5t1gab4rHoWD2_AoihSWyoiGbi-V',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            id: 1,
            src: 'https://static.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            id: 2,
            src: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/11/animal-portraits-sergey-polyushko-5-582b05d084f19__880.jpg',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            id: 3,
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS6bKVZ0T_OSckgRO6H4xj3OUqC_npme_LGl-NQWV1_1JKLBz3k',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            id: 4,
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTd0ocjOKbsPs1ZiApPXPDxShh2_MrhRkzDy6_0ixcat402DH7y',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
    ]
    console.log('init');
    var prev = $('.prev'),
        next = $('.next');
    var obj = {}, currentIndex = 0;

    var initDots = (arr, len) => {
        var i = 0;
        var ul = $('<ul />');
        $('.dots').append(ul);
        for(; i < len; i++) {
            let li = $('<li />');
            let a = $('<a href="#"/>');
            a.html(arr[i].id);
            li.append(a);
            ul.append(li);
        }
    }

    var appendContent = () => {
        var img = new Image();
        img.onload = function () {

        }
        img.src = obj.src;
        $('.content').html(img);
    }

    initDots(arr, arr.length);

    $('.dots').on('click', 'a', function (e) {
        e.preventDefault();
        var el = $(this),
            cIndex = parseInt(el.text());
        obj = {
            src: arr[cIndex].src,
            text: arr[cIndex].text
        };
        appendContent();
    });

    next.on('click', function (e) {
        e.preventDefault();
        if(currentIndex == arr.length - 1) return;
        if(currentIndex == arr.length - 2) {
            next.hide();
        }
        if(currentIndex < 0) {
            currentIndex+=2;
        }
        currentIndex++;
        obj = {
            src: arr[currentIndex].src,
            text: arr[currentIndex].text
        };

        prev.show();
        appendContent();
    });
    prev.on('click', function (e) {
        e.preventDefault();
        if(currentIndex == 0) return;
        if(currentIndex == 1) {
            prev.hide();
        }
        if(currentIndex > arr.length - 1) {
            currentIndex-=2;
        }
        currentIndex--;
        obj = {
            src: arr[currentIndex].src,
            text: arr[currentIndex].text
        };

        next.show();
        appendContent();
    });
}

mt.init = () => {
    mt.initialContent();
}

$(document).ready(mt.init);
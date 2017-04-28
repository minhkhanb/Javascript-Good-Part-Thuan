var mt = window.mt || {};

mt.initialContent = () => {
    var arr = [
        {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcStGxFUBZbW9xZE-5GCuyzB5t1gab4rHoWD2_AoihSWyoiGbi-V',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            src: 'https://static.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            src: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/11/animal-portraits-sergey-polyushko-5-582b05d084f19__880.jpg',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS6bKVZ0T_OSckgRO6H4xj3OUqC_npme_LGl-NQWV1_1JKLBz3k',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTd0ocjOKbsPs1ZiApPXPDxShh2_MrhRkzDy6_0ixcat402DH7y',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
    ]
    console.log('init');
    var prev = $('.prev'),
        next = $('.next');
    var obj = {}, currentIndex = 0;
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
        var img = new Image();
        img.onload = function () {

        }
        img.src = obj.src;
        $('.content').html(img);
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
        var img = new Image();
        img.onload = function () {

        }
        img.src = obj.src;
        $('.content').html(img);
    });
}

mt.init = () => {
    mt.initialContent();
}

$(document).ready(mt.init);
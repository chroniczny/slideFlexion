/**
 * Created by jakub_000 on 2016-11-07.
 */

document.addEventListener("DOMContentLoaded", function () {


    console.log('halle selfie');
    var roundi = document.querySelectorAll('.cube');
    var output = document.querySelector('.information');
    var container = document.querySelector('.container');


    clear();
    function clear() {
        for (var j = 0; j < roundi.length; j++) {
            var newOrder = roundi[j].style.order;
            console.log(newOrder);
            roundi[j].style.order = newOrder - j;


        }
    }


    for (var i = 0; i < roundi.length; i++) {
        roundi[i].addEventListener('click', function (event) {
            clear();
            this.style.order = -i;


        })
    }


});


// $(function () {
//   $('.tlt').textillate();
// })

// $('.tlt').textillate({ 
//   in: { effect: 'wobble' },
//   out: { effect: 'foldUnfold', sync: true },
//   loop: true
// });

$(function() {
    $('.tlt').textillate({
        in: {
            effect: 'fadeInLeft', // Change this effect as needed
        },
        out: {
            effect: 'fadeOutRight', // Change this effect as needed
            sync: true
        },
        loop: true
    });
});
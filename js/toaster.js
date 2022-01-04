function toast(text, D_type) {

    var bg_Color = "#eee";
    if (D_type == "error") {
        bg_Color = '#a94442';
    } else
    if (D_type == "success") {

        bg_Color = '#3c763d';

    }
    $.toast({
        text: text,
        showHideTransition: 'slide', // It can be plain, fade or slide
        bgColor: bg_Color, // Background color for toast
        textColor: '#FFF', // text color
        allowToastClose: true, // Show the close button or not
        hideAfter: 3000, // `false` to make it sticky or time in miliseconds to hide after
        stack: 5, // `fakse` to show one stack at a time count showing the number of toasts that can be shown at once
        textAlign: 'left', // Alignment of text i.e. left, right, center
        position: 'bottom-center' // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values to position the toast on page
    })
}
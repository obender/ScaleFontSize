(function ($) {
    $.fn.autoFont = function (settings) {

        if (settings == undefined)
            settings = {};


            $('*[data-text-max-width]').each(function () {
                var textMaxWidth = parseInt($(this).data("text-max-width"));
                var textMaxHeight = parseInt($(this).data("text-max-height"));
                var minSizeOfaText = parseFloat($(this).data("text-min-size"));

                $(this).css('font-size', '9em');

                if (minSizeOfaText == null || minSizeOfaText == 0)
                    minSizeOfaText = textConsts.MIN_SIZE_OF_A_TEXT;

                if (textMaxWidth == null || textMaxWidth == 0)
                    textMaxWidth = $(this).parent().width();

                if (textMaxHeight == null || textMaxHeight == 0)
                    textMaxHeight = $(this).parent().height();

                var curentWidth = $(this).width();
                var curentFontSize = 0;
                var numberOfRounds = 0;
                var currentHeigth = $(this).height();
                curentFontSize = parseInt($(this).css('font-size'));
                var lineHeigth = parseInt($(this).css('line-height'));
                if (currentHeigth > (curentFontSize * lineHeigth)) {
                    curentWidth += curentFontSize * lineHeigth;
                }

                while (curentWidth > textMaxWidth || currentHeigth > textMaxHeight) {

                    curentFontSize = parseInt($(this).css('font-size'));
                    curentFontSize -= 1;

                    $(this).css('font-size', curentFontSize + "px");

                    curentWidth = $(this).width();
                    currentHeigth = $(this).height();

                    if (currentHeigth > (curentFontSize * 1.5))
                        curentWidth += curentFontSize * 1.5;

                    numberOfRounds += 1;

                    if (numberOfRounds > 1000)
                        break;

                    if (curentFontSize <= minSizeOfaText)
                        break;
                }

                $(this).css('height', textMaxHeight + "px");
                $(this).css('width', textMaxWidth + "px");
                $(this).css('white-space', "nowrap !important");
            });
    };
}(jQuery));
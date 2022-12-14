$(document).ready(function () {
    $('.navbar-nav').on('click', 'a', function () {
        $('.navbar-nav a.active').removeClass('active');
        $(this).addClass('active');
    });

    // Education Details Input Field 
    $(document).ready(function () {
        var max_fields = 10; //maximum input boxes allowed
        var wrapper = $(".input_fields_education"); //Fields wrapper
        var add_button = $(".add_field_education"); //Add button ID

        var x = 1; //initlal text box count
        $(add_button).click(function (e) {
            //on add input button click
            e.preventDefault();
            if (x < max_fields) {
                //max input box allowed
                x++; //text box increment
                $(wrapper).append(
                    '<div class="input-group mb-3"><input type="text" name="education[]" class="form-control"/> <a href="#" class="remove_field input-group-append"><span class="input-group-text"><i class="fa fa-times" aria-hidden="true"></i></span></a> </div>'
                ); //add input box
            }
        });

        $(wrapper).on("click", ".remove_field", function (e) {
            //user click on remove text
            e.preventDefault();
            $(this).parent("div").remove();
            x--;
        });
    });

    var row = $('#row-container .row:eq(0)').clone();
    $('#addButton').data('row', row);
    $('#addButton').click(function () {
        $('#row-container').append($(this).data('row').clone());
    });
    $('#removeButton').click(function () {
        $('#row-container .row').eq($('#row-container .row').length - 1).remove();
    });



    // Experience Details Input Field 
    $(document).ready(function () {
        var max_fields = 10; //maximum input boxes allowed
        var wrapper = $(".input_fields_experience"); //Fields wrapper
        var add_button_exp = $(".add_field_experience"); //Add button ID

        var x = 1; //initlal text box count
        $(add_button_exp).click(function (e) {
            //on add input button click
            e.preventDefault();
            if (x < max_fields) {
                //max input box allowed
                x++; //text box increment
                $(wrapper).append(
                    '<div class="input-group mb-5"><input type="text" name="experience[]" class="form-control"/> <a href="#" class="remove_field input-group-append"><span class="input-group-text"><i class="fa fa-times" aria-hidden="true"></i></span></a> </div>'
                ); //add input box
            }
        });

        $(wrapper).on("click", ".remove_field", function (e) {
            //user click on remove text
            e.preventDefault();
            $(this).parent("div").remove();
            x--;
        });
    });

    var row = $('#row-containerExp .row:eq(0)').clone();
    $('#addExpButton').data('row', row);
    $('#addExpButton').click(function () {
        $('#row-containerExp').append($(this).data('row').clone());
    });
    $('#removeExpButton').click(function () {
        $('#row-containerExp .row').eq($('#row-containerExp .row').length - 1).remove();
    });


})
$(document).ready(function () {
    $(function () {
        var option = function (i, j) {
            return $("<option>").append(j + 1900);
        };

        var options = (new Array(150) + "").split(",").map(option);

        $(".year").append(options);
    });

});
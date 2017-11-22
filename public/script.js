let locations_radio = $("#locations input:radio");
let location_ca = $('#location_CA');
let cat_selector_sec = $('#category_selector_section');
let cat_selector = $('#category');

let media_radio = $('#media-format input:radio');
let image_section = $('#image_section');
let image_selector = $('#image');
let media_image = $('#media_image');
let media_youtube = $('#media_youtube');
let yt_section = $('#ytLink_section');
let yt_selector = $('#ytLink');


locations_radio.change(() => {
    // Only show category picker when adding commercial ad
    // Only hide youtube field when adding commercial ad
    if (location_ca.is(':checked')) {
        cat_selector_sec.removeClass('hidden');
        cat_selector.prop('required', true);

        media_image.prop('checked', true);
        media_youtube.prop('checked', false);
        media_youtube.prop('disabled', true);

        image_section.removeClass('hidden');
        image_selector.prop('required', true);
        yt_section.addClass('hidden');
        yt_selector.prop('required', false);
    } else {
        cat_selector_sec.addClass('hidden');
        cat_selector.prop('required', false);
        media_youtube.prop('disabled', false);
    }
})


media_radio.change(() => {
    if (media_youtube.is(':checked')) {
        yt_section.removeClass('hidden');
        yt_selector.prop('required', true);
        yt_selector.prop('disabled', false);

        image_section.addClass('hidden');
        image_selector.prop('required', false);
        image_selector.prop('disabled', true);
    } else {
        image_section.removeClass('hidden');
        image_selector.prop('required', true);
        image_selector.prop('disabled', false);

        yt_section.addClass('hidden');
        yt_selector.prop('required', false);
        yt_selector.prop('disabled', true);
    }
})

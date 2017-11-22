let locations_radio = $("#locations input:radio");
let location_ca = $('#location_CA');
let cat_selector_sec = $('#category_selector_section');
let cat_selector = $('#category');
let yt_section = $('#ytLink_section');

locations_radio.change(() => {
    // Only show category picker when adding commercial ad
    // Only hide youtube field when adding commercial ad
    if (location_ca.is(':checked')) {
        cat_selector_sec.removeClass('hidden');
        cat_selector.prop('required', true);

        yt_section.addClass('hidden');
    } else {
        cat_selector_sec.addClass('hidden');
        cat_selector.prop('required', false);
        
        yt_section.removeClass('hidden');
    }
})
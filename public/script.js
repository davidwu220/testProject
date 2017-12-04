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
let yt_s_selector = $('#ytShortLink');
let yt_f_selector = $('#ytFullLink');

// show appropriate fields when edit page first load
$(document).ready(() => {
    // Only show category picker when adding commercial ad
    // Only hide youtube field when adding commercial ad
    if (location_ca.is(':checked')) {
        // Show category selector and set it to be required
        cat_selector_sec.removeClass('hidden');
        cat_selector.prop('required', true);

        // Set image media format checked
        media_image.prop('checked', true);

        // Set youtube media format unchecked and disable it
        media_youtube.prop('checked', false);
        media_youtube.prop('disabled', true);

        // Show image section and set it to be required
        image_section.removeClass('hidden');
        image_selector.prop('required', true);

        // Hide youtube section and not required
        yt_section.addClass('hidden');
        yt_s_selector.prop('required', false);
        yt_f_selector.prop('required', false);
    } else {
        // Hide category selector and set not required
        cat_selector_sec.addClass('hidden');
        cat_selector.prop('required', false);

        // Set youtube media format enabled
        media_youtube.prop('disabled', false);
    }

    if (media_youtube.is(':checked')) {
        yt_section.removeClass('hidden');
        
        yt_s_selector.prop('required', true);
        yt_f_selector.prop('required', true);
        
        yt_s_selector.prop('disabled', false);
        yt_f_selector.prop('disabled', false);

        image_section.addClass('hidden');
        image_selector.prop('required', false);
        image_selector.prop('disabled', true);
    } else {
        image_section.removeClass('hidden');
        image_selector.prop('required', true);
        image_selector.prop('disabled', false);

        yt_section.addClass('hidden');
        
        yt_s_selector.prop('required', false);
        yt_f_selector.prop('required', false);
        
        yt_s_selector.prop('disabled', true);
        yt_f_selector.prop('disabled', true);
    }
})

locations_radio.change(() => {
    // Only show category picker when adding commercial ad
    // Only hide youtube field when adding commercial ad
    if (location_ca.is(':checked')) {
        // Show category selector and set it to be required
        cat_selector_sec.removeClass('hidden');
        cat_selector.prop('required', true);

        // Set image media format checked
        media_image.prop('checked', true);

        // Set youtube media format unchecked and disable it
        media_youtube.prop('checked', false);
        media_youtube.prop('disabled', true);

        // Show image section and set it to be required
        image_section.removeClass('hidden');
        image_selector.prop('required', true);

        // Hide youtube section and not required
        yt_section.addClass('hidden');
        yt_s_selector.prop('required', false);
        yt_f_selector.prop('required', false);
    } else {
        // Hide category selector and set not required
        cat_selector_sec.addClass('hidden');
        cat_selector.prop('required', false);

        // Set youtube media format enabled
        media_youtube.prop('disabled', false);
    }
})

media_radio.change(() => {
    if (media_youtube.is(':checked')) {
        yt_section.removeClass('hidden');
        
        yt_s_selector.prop('required', true);
        yt_f_selector.prop('required', true);
        
        yt_s_selector.prop('disabled', false);
        yt_f_selector.prop('disabled', false);

        image_section.addClass('hidden');
        image_selector.prop('required', false);
        image_selector.prop('disabled', true);
    } else {
        image_section.removeClass('hidden');
        image_selector.prop('required', true);
        image_selector.prop('disabled', false);

        yt_section.addClass('hidden');
        
        yt_s_selector.prop('required', false);
        yt_f_selector.prop('required', false);
        
        yt_s_selector.prop('disabled', true);
        yt_f_selector.prop('disabled', true);
    }
})


$('#deleteModal').on('show.bs.modal', function (event) {
    let button = $(event.relatedTarget);
    let postTo = button.data('post-to');
    let adId = button.data('ad-id');
    let title = button.data('title');
    let location = button.data('location');
    let image = button.data('image');
    let yt_short_link = button.data('yt_short_link') || '[ No Link ]';
    let yt_full_link = button.data('yt_full_link') || '[ No Link ]';

    let modal = $(this);
    modal.find('#deleteModalForm').attr('action', postTo);
    modal.find('#ad_id').val(adId);
    modal.find('#location').val(location);
    modal.find('#title').val(title);
    modal.find('#deleteModalImagePlaceHolder').html(() => {
        let imageHtml = "";
        if (image !== "") {
            imageHtml = "<div style='overflow: hidden';>" +
                            "<a href='" + image + "' target='_blank'>" +
                                "<img src='" + image + "' style='max-height: 200px;' alt='Ad image' />" +
                            "</a>" + 
                        "</div>";
        } else {
            imageHtml = "<div>" +
                            "[ NO IMAGE ]" +
                        "</div>";
        }
        return imageHtml;
    });
    modal.find('#yt_short_link').val(yt_short_link);
    modal.find('#yt_full_link').val(yt_full_link);
})

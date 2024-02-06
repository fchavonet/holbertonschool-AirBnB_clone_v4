/* global $ */

$(document).ready(function () {
  const amenitiesSelected = {};

  $('input[type="checkbox"]').change(function () {
    const amenityId = $(this).closest('li').data('id');
    const amenityName = $(this).closest('li').data('name');

    if ($(this).is(':checked')) {
      amenitiesSelected[amenityId] = amenityName;
    } else {
      delete amenitiesSelected[amenityId];
    }

    const amenitiesList = Object.values(amenitiesSelected).join(', ');
    $('div.amenities h4').text(amenitiesList);
  });

  $.get('http://localhost:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});

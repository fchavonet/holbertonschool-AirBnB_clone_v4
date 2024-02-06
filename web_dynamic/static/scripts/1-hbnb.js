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
});

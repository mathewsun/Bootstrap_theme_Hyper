/**
 * Theme: Hyper - Responsive Bootstrap 5 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Time Picker
 */

$('#timepicker').timepicker({
    "showSeconds": true,
    icons: {
      up: 'mdi mdi-chevron-up',
      down: 'mdi mdi-chevron-down'
    },
    appendWidgetTo: "#timepicker-input-group1"
  });
  $('#timepicker2').timepicker({
    "showSeconds": true,
    showMeridian: false,
    icons: {
      up: 'mdi mdi-chevron-up',
      down: 'mdi mdi-chevron-down'
    },
    appendWidgetTo: "#timepicker-input-group2"
  });
  $('#timepicker3').timepicker({
    "showSeconds": true,
    minuteStep: 15,
    icons: {
      up: 'mdi mdi-chevron-up',
      down: 'mdi mdi-chevron-down'
    },
    appendWidgetTo: "#timepicker-input-group3"
  });
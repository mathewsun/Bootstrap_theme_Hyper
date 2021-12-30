/**
 * Theme: Hyper - Responsive Bootstrap 5 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Products demo page
 */

$(document).ready(function() {
    "use strict";

    // Default Datatable
    $('#products-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            },
            "info": "Showing products _START_ to _END_ of _TOTAL_",
            "lengthMenu": "Display <select class='form-select form-select-sm ms-1 me-1'>"+
                  '<option value="5">5</option>'+
                  '<option value="10">10</option>'+
                  '<option value="20">20</option>'+
                  '<option value="-1">All</option>'+
                  '</select> products',
        },
        "pageLength": 5,
        "columns": [
            {
                'orderable': false, 'targets': 0,
                'render': function(data, type, row, meta){
                    if(type === 'display'){
                        data = "<div class=\"form-check\"><input type=\"checkbox\" class=\"form-check-input dt-checkboxes\"><label class=\"form-check-label\">&nbsp;</label></div>";
                    }
                    return data;
                 },
                'checkboxes': {
                    'selectRow': true,
                    'selectAllRender': '<div class=\"form-check\"><input type=\"checkbox\" class=\"form-check-input dt-checkboxes\"><label class=\"form-check-label\">&nbsp;</label></div>'
                }
            },
            {'orderable': true},
            {'orderable': true},
            {'orderable': true},
            {'orderable': true},
            {'orderable': true},
            {'orderable': true},
            {'orderable': false}
        ],
        "select": {
            "style": "multi"
        },
        "order": [[ 1, "asc" ]],
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
            $('#products-datatable_length label').addClass('form-label');

            // Col add & remove
            var filterDiv = document.querySelector('.dataTables_wrapper .row');
            filterDiv.querySelectorAll('.col-md-6').forEach(function(element){
                element.classList.add('col-sm-6');
                element.classList.remove('col-sm-12');
                element.classList.remove('col-md-6');
            });
        }
    });
} );
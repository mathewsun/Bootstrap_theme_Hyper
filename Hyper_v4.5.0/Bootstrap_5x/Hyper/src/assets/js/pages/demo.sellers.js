/**
 * Theme: Hyper - Responsive Bootstrap 5 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Sellers demo page
 */

$(document).ready(function () {
    "use strict";

    // Sellers revenue chart
    var options = {
        chart: {
            type: 'line',
            width: 80,
            height: 35,
            sparkline: {
                enabled: true
            }
        },
        series: [],
        stroke: {
            width: 2,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        colors: ["#727cf5"],
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
    
    var charts = [];
    // Default Datatable
    var table = $('#products-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            },
            "info": "Showing sellers _START_ to _END_ of _TOTAL_",
            "lengthMenu": "Display <select class='form-select form-select-sm ms-1 me-1'>" +
                '<option value="10">10</option>' +
                '<option value="20">20</option>' +
                '<option value="-1">All</option>' +
                '</select> sellers',
        },
        "pageLength": 10,
        "columns": [
            {
                'orderable': false,
                'render': function (data, type, row, meta) {
                    if (type === 'display') {
                        data = "<div class=\"form-check\"><input type=\"checkbox\" class=\"form-check-input dt-checkboxes\"><label class=\"form-check-label\">&nbsp;</label></div>";
                    }
                    return data;
                },
                'checkboxes': {
                    'selectRow': true,
                    'selectAllRender': '<div class=\"form-check\"><input type=\"checkbox\" class=\"form-check-input dt-checkboxes\"><label class=\"form-check-label\">&nbsp;</label></div>'
                }
            },
            { 'orderable': true },
            { 'orderable': true },
            { 'orderable': true },
            { 'orderable': true },
            { 'orderable': true },
            { 'orderable': false },
            { 'orderable': false }
        ],
        "select": {
            "style": "multi"
        },
        "order": [[4, "desc"]],
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
            $('#products-datatable_length label').addClass('form-label');
            // {data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]}

            // remove existing charts
            for (var idx=0; idx<charts.length;idx++) {
                try { charts[idx].destroy(); } catch (e) { console.log(e) };
            }
            charts = [];

            $(".spark-chart").each(function (index) {
                var data = $(this).data()['dataset'];
                options['series'] = [{ 'data': data }];
                var chart = new ApexCharts($(this)[0], options)
                charts.push(chart);
                chart.render();
            });

            // Col add & remove
            var filterDiv = document.querySelector('.dataTables_wrapper .row');
            filterDiv.querySelectorAll('.col-md-6').forEach(function(element){
                element.classList.add('col-sm-6');
                element.classList.remove('col-sm-12');
                element.classList.remove('col-md-6');
            });
        },
    });
});



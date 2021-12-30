/**
 * Theme: Hyper - Responsive Bootstrap 5 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Chartjs 
 */

! function ($) {
    "use strict";

    var JSTree = function () {
        this.$body = $("body")
    };

        //initializing various components and plugins
        JSTree.prototype.init = function () {

            // jstree-1
            $("#jstree-1").jstree({
                "core": {
                    "themes": {
                        "responsive": false
                    }
                },
                "types": {
                    "default": {
                        "icon": "dripicons-folder"
                    },
                    "file": {
                        "icon": "dripicons-document"
                    }
                },
                "plugins": ["types"]
            });

            // handle link clicks in tree nodes(support target="_blank" as well)
            $('#jstree-1').on('select_node.jstree', function(e, data) {
                var link = $('#' + data.selected).find('a');
                if (link.attr("href") != "#" && link.attr("href") != "javascript:;" && link.attr("href") != "") {
                    if (link.attr("target") == "_blank") {
                        link.attr("href").target = "_blank";
                    }
                    document.location.href = link.attr("href");
                    return false;
                }
            });


            // jstree-2
            $('#jstree-2').jstree({
                "core": {
                    "themes": {
                        "responsive": false
                    }
                },
                "types": {
                    "default": {
                        "icon": "dripicons-folder text-warning"
                    },
                    "file": {
                        "icon": "dripicons-document  text-warning"
                    }
                },
                "plugins": ["types"]
            });

            $('#jstree-2').on('select_node.jstree', function(e, data) {
                var link = $('#' + data.selected).find('a');
                if (link.attr("href") != "#" && link.attr("href") != "javascript:;" && link.attr("href") != "") {
                    if (link.attr("target") == "_blank") {
                        link.attr("href").target = "_blank";
                    }
                    document.location.href = link.attr("href");
                    return false;
                }
            });


            // jstree-3
            $('#jstree-3').jstree({
                "plugins": ["wholerow", "checkbox", "types"],
                "core": {
                    "themes": {
                        "responsive": false
                    },
                    "data": [{
                           "text": "Same but with checkboxes",
                            "children": [{
                                "text": "initially selected",
                                "state": {
                                    "selected": true
                                }
                            }, {
                                "text": "custom icon",
                                "icon": "dripicons-feed text-danger"
                            }, {
                                "text": "initially open",
                                "icon": "dripicons-folder text-default",
                                "state": {
                                    "opened": true
                                },
                                "children": ["Another node"]
                            }, {
                                "text": "custom icon",
                                "icon": "dripicons-hourglass text-warning"
                            }, {
                                "text": "disabled node",
                                "icon": "dripicons-wrong text-success",
                                "state": {
                                    "disabled": true
                                }
                            }]
                        },
                        "And wholerow selection"
                    ]
                },
                "types": {
                    "default": {
                        "icon": "dripicons-folder text-warning"
                    },
                    "file": {
                        "icon": "dripicons-document  text-warning"
                    }
                },
            });



            // jstree-4
            $("#jstree-4").jstree({
                "core": {
                    "themes": {
                        "responsive": false
                    },
                    // so that create works
                    "check_callback": true,
                    "data": [{
                            "text": "Parent Node",
                            "children": [{
                                "text": "Initially selected",
                                "state": {
                                    "selected": true
                                }
                            }, {
                                "text": "Custom Icon",
                                "icon": "dripicons-feed text-danger"
                            }, {
                                "text": "Initially open",
                                "icon": "dripicons-folder text-success",
                                "state": {
                                    "opened": true
                                },
                                "children": [{
                                    "text": "Another node",
                                    "icon": "dripicons-document text-warning"
                                }]
                            }, {
                                "text": "Another Custom Icon",
                                "icon": "dripicons-hourglass text-warning"
                            }, {
                                "text": "Disabled Node",
                                "icon": "dripicons-wrong text-success",
                                "state": {
                                    "disabled": true
                                }
                            }, {
                                "text": "Sub Nodes",
                                "icon": "dripicons-folder text-danger",
                                "children": [{
                                        "text": "Item 1",
                                        "icon": "dripicons-document text-warning"
                                    },
                                    {
                                        "text": "Item 2",
                                        "icon": "dripicons-document text-success"
                                    },
                                    {
                                        "text": "Item 3",
                                        "icon": "dripicons-document text-default"
                                    },
                                    {
                                        "text": "Item 4",
                                        "icon": "dripicons-document text-danger"
                                    },
                                    {
                                        "text": "Item 5",
                                        "icon": "dripicons-document text-info"
                                    }
                                ]
                            }]
                        },
                        "Another Node"
                    ]
                },
                "types": {
                    "default": {
                        "icon": "dripicons-folder text-primary"
                    },
                    "file": {
                        "icon": "dripicons-document  text-primary"
                    }
                },
                "state": {
                    "key": "demo2"
                },
                "plugins": ["contextmenu", "state", "types"]
            });



            // jstree-5
            $("#jstree-5").jstree({
                "core": {
                    "themes": {
                        "responsive": false
                    },
                    // so that create works
                    "check_callback": true,
                    "data": [{
                            "text": "Parent Node",
                            "children": [{
                                "text": "Initially selected",
                                "state": {
                                    "selected": true
                                }
                            }, {
                                "text": "Custom Icon",
                                "icon": "dripicons-hourglass text-danger"
                            }, {
                                "text": "Initially open",
                                "icon": "dripicons-folder text-success",
                                "state": {
                                    "opened": true
                                },
                                "children": [{
                                    "text": "Another node",
                                    "icon": "dripicons-document text-warning"
                                }]
                            }, {
                                "text": "Another Custom Icon",
                                "icon": "dripicons-graph-line text-warning"
                            }, {
                                "text": "Disabled Node",
                                "icon": "dripicons-wrong text-success",
                                "state": {
                                    "disabled": true
                                }
                            }, {
                                "text": "Sub Nodes",
                                "icon": "dripicons-folder text-danger",
                                "children": [{
                                        "text": "Item 1",
                                        "icon": "dripicons-document text-warning"
                                    },
                                    {
                                        "text": "Item 2",
                                        "icon": "dripicons-document text-success"
                                    },
                                    {
                                        "text": "Item 3",
                                        "icon": "dripicons-document text-default"
                                    },
                                    {
                                        "text": "Item 4",
                                        "icon": "dripicons-document text-danger"
                                    },
                                    {
                                        "text": "Item 5",
                                        "icon": "dripicons-document text-info"
                                    }
                                ]
                            }]
                        },
                        "Another Node"
                    ]
                },
                "types": {
                    "default": {
                        "icon": "dripicons-folder text-success"
                    },
                    "file": {
                        "icon": "dripicons-document  text-success"
                    }
                },
                "state": {
                    "key": "demo2"
                },
                "plugins": ["dnd", "state", "types"]
            });




            // jstree-6
            $("#jstree-6").jstree({
                "core": {
                    "themes": {
                        "responsive": false
                    },
                    // so that create works
                    "check_callback": true,
                    'data' : {
                        'url' : function (node) {
                          return node.id === '#' ?
                            'assets/data/vendor/ajax_demo_children.json' : 'assets/data/vendor/ajax_demo_children.json';
                        },
                        'data' : function (node) {
                          return { 'id' : node.id };
                        }
                      }
                },
                "types": {
                    "default": {
                        "icon": "dripicons-folder text-primary"
                    },
                    "file": {
                        "icon": "dripicons-document  text-primary"
                    }
                },
                "state": {
                    "key": "demo3"
                },
                "plugins": ["dnd", "state", "types"]
            });

        },

        //init flotchart
        $.JSTree = new JSTree, $.JSTree.Constructor = JSTree
}(window.jQuery),

    //initializing ChartJs
    function ($) {
        "use strict";
        $.JSTree.init()
    }(window.jQuery);
    
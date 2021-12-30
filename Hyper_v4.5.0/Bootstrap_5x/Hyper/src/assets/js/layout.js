/**
 * Theme: Hyper - Responsive Bootstrap 5 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Layout Js
 */


/**
 * LeftSidebar
 * @param {*} $ 
 */


!function ($) {
    'use strict';

    var LeftSidebar = function () {
        this.body = $('body'),
        this.window = $(window),
        this.menuContainer = $('#leftside-menu-container');
    };

    /**
     * Reset the theme
     */
    LeftSidebar.prototype._reset = function() {
        this.body.removeAttr('data-leftbar-theme');
    },

    /**
     * Activates the condensed side bar
     */
    LeftSidebar.prototype.activateCondensedSidebar = function () {
        this.body.attr('data-leftbar-compact-mode', 'condensed');
    },

    /**
     * Deactivates the condensed side bar
     */
    LeftSidebar.prototype.deactivateCondensedSidebar = function() {
        this.body.removeAttr('data-leftbar-compact-mode');
    },
  
    /**
     * Activates the scrollable sidenar
     */
    LeftSidebar.prototype.activateScrollableSidebar = function() {
        this.body.attr('data-leftbar-compact-mode', 'scrollable');
    },

    /**
     * Deactivates the scrollbar
     */
    LeftSidebar.prototype.deactivateScrollableSidebar = function() {
        this.body.removeAttr('data-leftbar-compact-mode');
    },

    /**
     * Activates the default theme
     */
    LeftSidebar.prototype.activateDefaultTheme = function () {
        this._reset();
    },
    
    /**
     * Activates the light theme
     */
    LeftSidebar.prototype.activateLightTheme = function() {
        this._reset();
        this.body.attr('data-leftbar-theme', 'light');
    },

    /**
     * Activates the dark theme
     */
    LeftSidebar.prototype.activateDarkTheme = function() {
        this._reset();
        this.body.attr('data-leftbar-theme', 'dark');
    },

    /**
     * Initilizes the menu
     */
    LeftSidebar.prototype.initMenu = function() {
        var self = this;

        // resets everything
        this._reset();

        // click events
        // Left menu collapse
        $(document).on('click', '.button-menu-mobile', function(e) {
            e.preventDefault();
            self.body.toggleClass('sidebar-enable');

                if (self.body.attr('data-layout') === 'full') {
                    self.body.toggleClass('hide-menu');
                }
                else {
                    if (self.body.attr('data-leftbar-compact-mode') === 'condensed') {
                        self.deactivateCondensedSidebar();
                    } else {
                        self.activateCondensedSidebar(); 
                    }
                }
            
        });

        // sidebar - main menu
        if ($(".side-nav").length) { 
            var navCollapse = $('.side-nav li .collapse');
            var navToggle = $(".side-nav li [data-bs-toggle='collapse']");
            navToggle.on('click', function(e) {
                return false;
            });

            // open one menu at a time only
            navCollapse.on({
                'show.bs.collapse': function (event) {
                    var parent = $(event.target).parents('.collapse.show');
                    $('.side-nav .collapse.show').not(event.target).not(parent).collapse('hide');
                }
            });

            // activate the menu in left side bar (Vertical Menu) based on url
            $(".side-nav a").each(function () {
                var pageUrl = window.location.href.split(/[?#]/)[0];
                if (this.href == pageUrl) {
                    $(this).addClass("active");
                    $(this).parent().addClass("menuitem-active");
                    $(this).parent().parent().parent().addClass("show");
                    $(this).parent().parent().parent().parent().addClass("menuitem-active"); // add active to li of the current link
                    
                    var firstLevelParent = $(this).parent().parent().parent().parent().parent().parent();
                    if (firstLevelParent.attr('id') !== 'sidebar-menu')
                        firstLevelParent.addClass("show");
                    
                    $(this).parent().parent().parent().parent().parent().parent().parent().addClass("menuitem-active");
                    
                    var secondLevelParent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent();
                    if (secondLevelParent.attr('id') !== 'wrapper')
                        secondLevelParent.addClass("show");

                    var upperLevelParent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                    if (!upperLevelParent.is('body'))
                        upperLevelParent.addClass("menuitem-active");
                }
            });
        }


               
        //Horizontal Menu (For SM Screen)
        var AllNavs = document.querySelectorAll('ul.navbar-nav .dropdown .dropdown-toggle');

        var isInner = false;

        AllNavs.forEach(function(element) {
            element.addEventListener('click',function(event){
                if(!element.parentElement.classList.contains('nav-item')){
                    isInner = true;
                    //element.parentElement.parentElement.classList.add('show');
                    var parent = element.parentElement.parentElement.parentElement.querySelector('.nav-link');
                    bootstrap.Dropdown.getInstance(parent).show();
                    if(element.ariaExpanded){
                        bootstrap.Dropdown.getInstance(element).hide();}
                    else{
                        bootstrap.Dropdown.getInstance(parent).show();
                        }
                    isInner = true;
                 }
            });
            
            element.addEventListener('hide.bs.dropdown', function(event){
                if(isInner){
                    event.preventDefault();
                    event.stopPropagation();
                    isInner = false;
                }
            });
            
            
            element.addEventListener('show.bs.dropdown', function(event){
                if(!isInner && !element.parentElement.classList.contains('nav-item')){
                    event.preventDefault();
                    event.stopPropagation();
                    isInner = true;
                }
            });
            
         
        });


 

    },

    /**
     * Initilizes the menu
     */
    LeftSidebar.prototype.init = function() {
        this.initMenu();
    },
  
    $.LeftSidebar = new LeftSidebar, $.LeftSidebar.Constructor = LeftSidebar
}(window.jQuery),


/**
 * Topbar
 * @param {*} $ 
 */
function ($) {
    'use strict';

    var Topbar = function () {
        this.$body = $('body'),
        this.$window = $(window)
    };

    /**
     * Initilizes the menu
     */
    Topbar.prototype.initMenu = function() {
        if ($('.topnav-menu').length) {
            $('.topnav-menu li a').each(function () {
                var pageUrl = window.location.href.split(/[?#]/)[0];
                if (this.href == pageUrl) {
                    $(this).addClass('active');
                    $(this).parent().parent().addClass('active'); // add active to li of the current link
                    $(this).parent().parent().parent().parent().addClass('active');
                    $(this).parent().parent().parent().parent().parent().parent().addClass('active');
                }
            });

            // Topbar - main menu
            $('.navbar-toggle').on('click', function () {
                $(this).toggleClass('open');
                $('#navigation').slideToggle(400);
            });
        }


    },
    // init search
    Topbar.prototype.initSearch = function() {
        // Serach Toggle
        var navDropdowns = $('.navbar-custom .dropdown:not(.app-search)');

        // hide on other click
        $(document).on('click', function (e) {
            if(e.target.id =="top-search" || e.target.closest('#search-dropdown')){
                $('#search-dropdown').addClass('d-block');
            }else{
                $('#search-dropdown').removeClass('d-block');
            }
            return true;
        });

        // Serach Toggle
        $('#top-search').on('focus',function (e) {
            e.preventDefault();
            navDropdowns.children('.dropdown-menu.show').removeClass('show');
            $('#search-dropdown').addClass('d-block');
            return false;
        });

        // hide search on opening other dropdown
        navDropdowns.on('show.bs.dropdown', function () {
            $('#search-dropdown').removeClass('d-block');
        });
    },

    /**
     * Initilizes the menu
     */
    Topbar.prototype.init = function() {
        this.initMenu();

        this.initSearch();
    },
    $.Topbar = new Topbar, $.Topbar.Constructor = Topbar
}(window.jQuery),


/**
 * RightBar
 * @param {*} $ 
 */
function ($) {
    'use strict';

    var RightBar = function () {
        this.body = $('body'),
        this.window = $(window)
    };

    /** 
     * Select the option based on saved config
    */
   RightBar.prototype._selectOptionsFromConfig = function() {
        var config = $.App.getLayoutConfig();
        if (config) {
            // sideBarTheme

            $('.end-bar input[type=checkbox]').prop('checked',false);

            switch (config.sideBarTheme) {
                case 'default':
                    $('#default-check').prop('checked', true);
                    break;
                case 'light':
                    $('#light-check').prop('checked', true);
                    break;
                case 'dark':
                    $('#dark-check').prop('checked', true);
                    break;
            }

            if (config.isBoxed) {
                $('#boxed-check').prop('checked', true);
            } else {
                $('#fluid-check').prop('checked', true);
            }
            if (config.isCondensed) $('#condensed-check').prop('checked', true);
            if (config.isScrollable) $('#scrollable-check').prop('checked', true);
            if (!config.isScrollable && !config.isCondensed) $('#fixed-check').prop('checked', true);

            // overall color scheme
            if (!config.isDarkModeEnabled) {
                $('#light-mode-check').prop('checked', true);
                if (config.layout === 'vertical')
                    $('input[type=checkbox][name=theme]').prop('disabled', false);
            } 
            if (config.isDarkModeEnabled) {
                $('#dark-mode-check').prop('checked', true);
                if (config.layout === 'vertical')
                    $('input[type=checkbox][name=theme]').prop('disabled', false);
            }
        }
    },
  
    /**
     * Toggles the right sidebar
     */
    RightBar.prototype.toggleRightSideBar = function() {
        var self = this;
        self.body.toggleClass('end-bar-enabled');
        self._selectOptionsFromConfig();
    },

    /**
     * Initilizes the right side bar
     */
    RightBar.prototype.init = function() {
        var self = this;

        // right side-bar toggle
        $(document).on('click', '.end-bar-toggle', function () {
            self.toggleRightSideBar();
        });

        $(document).on('click', 'body', function (e) {
            if ($(e.target).closest('.end-bar-toggle, .end-bar').length > 0) {
                return;
            }

            if (
                $(e.target).closest('.leftside-menu, .side-nav').length > 0 ||
                $(e.target).hasClass('button-menu-mobile') ||
                $(e.target).closest('.button-menu-mobile').length > 0
            ) {
                return;
            }
            $('body').removeClass('end-bar-enabled');
            $('body').removeClass('sidebar-enable');
            return;
        });

        // width mode
        $('input[type=checkbox][name=width]').change(function () {
            switch ($(this).val()) {
                case 'fluid':
                    $.App.activateFluid();
                    break;
                case 'boxed':
                    $.App.activateBoxed();
                    break;
            }
            self._selectOptionsFromConfig();

        });

        // theme

        $('input[type=checkbox][name=theme]').change(function () {
            switch ($(this).val()) {
                case 'default':
                    $.App.activateDefaultSidebarTheme();
                    break;
                case 'light':
                    $.App.activateLightSidebarTheme();
                    break;
                case 'dark':
                    $.App.activateDarkSidebarTheme();
                    break;
            }

            self._selectOptionsFromConfig();

        });

        // compact
        $('input[type=checkbox][name=compact]').change(function () {
            switch ($(this).val()) {
                case 'fixed':
                    $.App.deactivateCondensedSidebar();
                    $.App.deactivateScrollableSidebar();
                    break;
                case 'scrollable':
                    $.App.activateScrollableSidebar();
                    break;
                case 'condensed':
                    $.App.activateCondensedSidebar();
                    break;
            }
                        self._selectOptionsFromConfig();

        });

        // overall color scheme
        $('input[type=checkbox][name=color-scheme-mode]').change(function () {
            switch ($(this).val()) {
                case 'light':
                    $.App.deactivateDarkMode();
                    // $.App.activateDefaultSidebarTheme();
                    $('#default-check').prop('checked', true);
                    $('input[type=checkbox][name=theme]').prop('disabled', false);
                    break;
                case 'dark':
                    $.App.activateDarkMode();
                    $('#dark-check').prop('checked', true);

                    // $('input[type=radio][name=theme]').prop('disabled', true);
                    break;
            }

            self._selectOptionsFromConfig();

        });        

        // reset
        $('#resetBtn').on('click', function (e) {
            e.preventDefault();
            // reset to default
            $.App.resetLayout(function() {
                self._selectOptionsFromConfig();
            });
        });
    },

    $.RightBar = new RightBar, $.RightBar.Constructor = RightBar
}(window.jQuery),


/**
 * Layout and theme manager
 * @param {*} $ 
 */

function ($) {
    'use strict';

    // Layout and theme manager
    var SIDEBAR_THEME_DEFAULT = 'default';
    var SIDEBAR_THEME_LIGHT = 'light';
    var SIDEBAR_THEME_DARK = 'dark';

    var DEFAULT_CONFIG = {
        sideBarTheme: SIDEBAR_THEME_DEFAULT,
        isBoxed: false,
        isCondensed: false,
        isScrollable: false,
        isDarkModeEnabled: false
    };

    var LayoutThemeApp = function () {
        this.body = $('body'),
        this.window = $(window),
        this._config = {};
        this.defaultSelectedStyle = null;
    };

    /**
    * Preserves the config
    */
    LayoutThemeApp.prototype._saveConfig = function(newConfig) {
        $.extend(this._config, newConfig);
        // sessionStorage.setItem('_HYPER_CONFIG_', JSON.stringify(this._config));
    },

    /**
     * Get the stored config
     */
    LayoutThemeApp.prototype._getStoredConfig = function() {
        var bodyConfig = this.body.data('layoutConfig');
        var config = DEFAULT_CONFIG;
        if (bodyConfig) {
            config['sideBarTheme'] = bodyConfig['leftSideBarTheme'];
            config['isBoxed'] = bodyConfig['layoutBoxed'];
            config['isCondensed'] = bodyConfig['leftSidebarCondensed'];
            config['isScrollable'] = bodyConfig['leftSidebarScrollable'];
            config['isDarkModeEnabled'] = bodyConfig['darkMode'];
        }
        return config;
    },

    /**
    * Apply the given config and sets the layout and theme
    */
    LayoutThemeApp.prototype._applyConfig = function() {
        var self = this;

        // getting the saved config if available
        this._config = this._getStoredConfig();

        // activate menus
        $.LeftSidebar.init();

        // sets the theme
        switch (self._config.sideBarTheme) {
            case SIDEBAR_THEME_DARK: {
                self.activateDarkSidebarTheme();
                break;
            }
            case SIDEBAR_THEME_LIGHT: {
                self.activateLightSidebarTheme();
                break;
            }
        }

        // enable or disable the dark mode
        if (self._config.isDarkModeEnabled)
            self.activateDarkMode();
        else
            self.deactivateDarkMode();

        // sets the boxed
        if (self._config.isBoxed) self.activateBoxed();

        // sets condensed view
        if (self._config.isCondensed) self.activateCondensedSidebar();

        // sets scrollable navbar
        if (self._config.isScrollable) self.activateScrollableSidebar();
    },

    /**
     * Initilizes the layout
     */
    LayoutThemeApp.prototype._adjustLayout = function() {
        // in case of small size, add class enlarge to have minimal menu
        if (this.window.width() >= 750 && this.window.width() <= 1028) {
            this.activateCondensedSidebar(true);
        } else {
            var config = this._getStoredConfig();
            if (!config.isCondensed && !config.isScrollable)
                this.deactivateCondensedSidebar();
        }
    },

    /**
     * Activate fluid mode
     */
    LayoutThemeApp.prototype.activateFluid = function() {
        this._saveConfig({ isBoxed: false });
        this.body.attr('data-layout-mode', 'fluid');
    },

    /**
     * Activate boxed mode
     */
    LayoutThemeApp.prototype.activateBoxed = function() {
        this._saveConfig({ isBoxed: true });
        this.body.attr('data-layout-mode', 'boxed');
    },

    /**
     * Activates the condensed side bar
     */
    LayoutThemeApp.prototype.activateCondensedSidebar = function(ignoreToStore) {
        if (!ignoreToStore) {
            this._saveConfig({
                isCondensed: true,
                isScrollable: false
            });
        }
        $.LeftSidebar.activateCondensedSidebar();
    },

    /**
     * Deactivates the condensed side bar
     */
    LayoutThemeApp.prototype.deactivateCondensedSidebar = function() {
        this._saveConfig({ isCondensed: false });
        $.LeftSidebar.deactivateCondensedSidebar();
    }

    /**
     * Activates the scrollable sidenar
     */
    LayoutThemeApp.prototype.activateScrollableSidebar = function() {
        this._saveConfig({ isScrollable: true, isCondensed: false });
        $.LeftSidebar.activateScrollableSidebar();
    },

    /**
     * Deactivates the scrollable sidenar
     */
    LayoutThemeApp.prototype.deactivateScrollableSidebar = function() {
        this._saveConfig({ isScrollable: false });
        $.LeftSidebar.deactivateScrollableSidebar();
    },

    /**
     * Activates the default theme
     */
    LayoutThemeApp.prototype.activateDefaultSidebarTheme = function() {
        $.LeftSidebar.activateDefaultTheme();
        this._saveConfig({ sideBarTheme: SIDEBAR_THEME_DEFAULT });
    },

    /**
     * Activates the light theme
     */
    LayoutThemeApp.prototype.activateLightSidebarTheme = function() {
        // this._resetLayout();
        $.LeftSidebar.activateLightTheme();
        this._saveConfig({ sideBarTheme: SIDEBAR_THEME_LIGHT });
    },

    /**
     * Activates the dark theme
     */
    LayoutThemeApp.prototype.activateDarkSidebarTheme = function() {
        // this._resetLayout();
        $.LeftSidebar.activateDarkTheme();
        this._saveConfig({ sideBarTheme: SIDEBAR_THEME_DARK });
    },

    /**
     * toggle the dark mode
     */
    LayoutThemeApp.prototype.activateDarkMode = function() {
        var self = this;
        this.body.css('visibility', 'hidden');
        $("#light-style").attr("disabled", true);
        $("#dark-style").removeAttr("disabled");

        setTimeout(function() {
            self.body.css('visibility', 'visible');
        }, 500);
        

        if (!this.body.attr('data-layout') === "detached") {
            $.LeftSidebar.activateDarkTheme();
            this._saveConfig({ isDarkModeEnabled: true, sideBarTheme: SIDEBAR_THEME_DARK });
        } else {
            this._saveConfig({ isDarkModeEnabled: true });
        }
    }

    /**
     * Deactivate the dark mode
     */
    LayoutThemeApp.prototype.deactivateDarkMode = function() {
        var self = this;
        this.body.css('visibility', 'hidden');
        $("#dark-style").attr("disabled", true);
        $("#light-style").removeAttr("disabled");

        setTimeout(function() {
            self.body.css('visibility', 'visible');
        }, 500);
        
        this._saveConfig({ isDarkModeEnabled: false });
    }

    /**
     * Clear out the saved config
     */
    LayoutThemeApp.prototype.clearSavedConfig = function() {
        this._config = DEFAULT_CONFIG;
    },

    /**
     * Gets the config
     */
    LayoutThemeApp.prototype.getConfig = function() {
        return this._config;
    },

    /**
     * Reset to default
     */
    LayoutThemeApp.prototype.reset = function(callback) {
        this.clearSavedConfig();
        
        var self = this;
        if($("#main-style-container").length) {
            self.defaultSelectedStyle = $("#main-style-container").attr('href');
        }
        self.deactivateCondensedSidebar();
        self.deactivateDarkMode();
        self.activateDefaultSidebarTheme();
        self.activateFluid();
        // calling the call back to let the caller know that it's done
        callback();
    },

    /**
     * 
     */
    LayoutThemeApp.prototype.init = function() {
        var self = this;

        if($("#main-style-container").length) {
            self.defaultSelectedStyle = $("#main-style-container").attr('href');
        }
        
        // initilize the menu
        this._applyConfig();

        // adjust layout based on width
        this._adjustLayout();

        // on window resize, make menu flipped automatically
        this.window.on('resize', function (e) {
            e.preventDefault();
            self._adjustLayout();
        });

        // topbar
        $.Topbar.init();
    },

    $.LayoutThemeApp = new LayoutThemeApp, $.LayoutThemeApp.Constructor = LayoutThemeApp
}(window.jQuery);
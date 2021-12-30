var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    lodash = require("lodash"),
    sourcemaps = require("gulp-sourcemaps"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    vars = require('../variables');

// compile and concate js
const compileJs = function () {
    const out = vars.getDistAssetsPath() + "js/";
    const baseAssets = vars.getBaseAssetsPath();

    //copying demo pages related assets
    var appPagesAssets = {
        js: [
            baseAssets + "js/pages/demo.dashboard.js",
            baseAssets + "js/pages/demo.dashboard-crm.js",
            baseAssets + "js/pages/demo.dashboard-projects.js",
            baseAssets + "js/pages/demo.dashboard-analytics.js",
            baseAssets + "js/pages/demo.britechart.js",
            baseAssets + "js/pages/demo.calendar.js",
            baseAssets + "js/pages/demo.chartjs.js",
            baseAssets + "js/pages/demo.datatable-init.js",
            baseAssets + "js/pages/demo.form-wizard.js",
            baseAssets + "js/pages/demo.google-maps.js",
            baseAssets + "js/pages/demo.vector-maps.js",
            baseAssets + "js/pages/demo.profile.js",
            baseAssets + "js/pages/demo.toastr.js",
            baseAssets + "js/pages/demo.project-detail.js",
            baseAssets + "js/pages/demo.apex-line.js",
            baseAssets + "js/pages/demo.apex-area.js",
            baseAssets + "js/pages/demo.apex-column.js",
            baseAssets + "js/pages/demo.apex-bar.js",
            baseAssets + "js/pages/demo.apex-mixed.js",
            baseAssets + "js/pages/demo.apex-bubble.js",
            baseAssets + "js/pages/demo.apex-candlestick.js",
            baseAssets + "js/pages/demo.apex-scatter.js",
            baseAssets + "js/pages/demo.apex-pie.js",
            baseAssets + "js/pages/demo.apex-radialbar.js",
            baseAssets + "js/pages/demo.apex-heatmap.js",
            baseAssets + "js/pages/demo.apex-sparklines.js",
            baseAssets + "js/pages/demo.apex-radar.js",
            baseAssets + "js/pages/demo.simplemde.js",
            baseAssets + "js/pages/demo.products.js",
            baseAssets + "js/pages/demo.customers.js",
            baseAssets + "js/pages/demo.sellers.js",
            baseAssets + "js/pages/demo.widgets.js",
            baseAssets + "js/pages/demo.typehead.js",
            baseAssets + "js/pages/demo.sparkline.js",
            baseAssets + "js/pages/demo.tasks.js",
            baseAssets + "js/pages/demo.timepicker.js",
            baseAssets + "js/pages/demo.inbox.js",
            baseAssets + "js/pages/demo.project-gantt.js",
            baseAssets + "js/pages/demo.materialdesignicons.js",
            baseAssets + "js/pages/demo.quilljs.js",
            baseAssets + "js/pages/demo.jstree.js"
        ]
    };

    lodash(appPagesAssets).forEach(function (assets, type) {
        gulp.src(assets)
            .pipe(uglify())
            .on("error", function (err) {
                console.log(err.toString());
            })
            .pipe(gulp.dest(out + "pages"));
    });

    // optional components
    var componentsAssets = {
        js: [
            baseAssets + "js/ui/component.dragula.js",
            baseAssets + "js/ui/component.fileupload.js",
            baseAssets + "js/ui/component.chat.js",
            baseAssets + "js/ui/component.todo.js",
            baseAssets + "js/ui/component.range-slider.js",
            baseAssets + "js/ui/component.rating.js",
            baseAssets + "js/ui/component.scrollbar.js"
        ]
    };

    lodash(componentsAssets).forEach(function (assets, type) {
        gulp.src(assets)
            .pipe(uglify())
            .on("error", function (err) {
                console.log(err.toString());
            })
            .pipe(gulp.dest(out + "ui"));
    });

    // creating separate vendor js file

    // It's important to keep files at this order
    // so that `app.min.js` can be executed properly
    return gulp
        .src([baseAssets + "js/layout.js", baseAssets + "js/hyper.js"])
        .pipe(sourcemaps.init())
        .pipe(concat("app.js"))
        .pipe(gulp.dest(out))
        .pipe(
            rename({
                // rename app.js to app.min.js
                suffix: ".min"
            })
        )
        .pipe(uglify())
        .on("error", function (err) {
            console.log(err.toString());
        })
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(out));
}

gulp.task(compileJs);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false;
$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    trigger.click(function () {
        hamburger_cross();
    });

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
    $.get(urlbtype, function (data) {
        $('#testa').children('option').remove();
        $.each(data, function (index, value) {
            $('#testa').append($('<option>', { value: value.id, text: value.description }));
        });
    });
    updateNotificationCount();
    getBuildingType();
    getFloor();
    getRange();
    $(".selectMenu").selectmenu();
    $("#newContract").on("click", toggleShowCurrentContracts);
    $("#existingContract").on("click", toggleShowCurrentContracts);
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {
        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);
    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);
    });
    $("#btnRequestSubmit").click(function (e) {
        $("#btnRequestSubmit").attr('disabled', 'disabled');
        setTimeout(function () {
            $("#btnRequestSubmit").removeAttr('disabled');
        }, 1000);
        e.preventDefault();
        var formData = $("#requestUnitsForm").serialize();
        $.ajax({
            type: 'POST',
            url: urlSubmit,
            data: formData,
            error: function error(data) {
                console.log('Error:', data.responseText);
            },
            success: function success(data) {
                //toastr.success('Item Created Successfully.', 'Success Alert', { timeOut: 5000 });
            }
        });
    });
});
var room = 1;
var buil_option = "";
var floor_option = "";
var range_option = "";
var building_types = {};

function fields() {
    room++;
    var objTo = document.getElementById('fields');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "form-group removeclass" + room);
    divtest.innerHTML = '<div class="col-sm-2 nopadding"> <div class=form-group> <div class=input-group> <label class=control-label>Building Type*</label> <div class=form-line> <select class="form-control form-line" id=builtype name=builtype[]>' + buil_option + '</select> </div> </div> </div> </div> <div class="col-sm-3 nopadding"> <div class=form-group> <label class=control-label>Floor #*</label> <div class=form-line> <select class="form-control form-line" id=floor name=floor[]>' + floor_option + '</select> </div> </div> </div> <div class="col-sm-2 nopadding"> <div class=form-group> <div class=input-group> <label class=control-label>Unit Type*</label> <div class=form-line> <select class="form-control form-line" id=utype name=utype[]> <option value=0>Raw</option> <option value=1>Shell</option> </select> </div> </div> </div> </div> <div class="col-sm-3 nopadding"> <div class=form-group> <label class=control-label>Size*</label> <div class=form-line> <select class="form-control form-line" id=size name=size[]>' + range_option + '</select></div></div></div><div class = "col-sm-2 nopadding"><br><a href = "#" class="btn btn-danger" type="button"  onclick="remove_fields(' + room + ');"> <span class="glyphicon glyphicon-minus" aria-hidden="true"></span> Remove Unit </a></div></div> <div class="col-sm-12 nopadding"> <div class=form-group> <label class=control-label>Remarks*</label> <div class=form-line> <textarea class="form-control form-line" id=remarks name=remarks[] value></textarea> </div> </div> </div>';
    objTo.appendChild(divtest);
}

function remove_fields(rid) {
    $('.removeclass' + rid).remove();
}

function toggleShowCurrentContracts() {
    elem = 'test';
    if (document.getElementById(elem).style.display == 'none') {
        document.getElementById(elem).style.display = '';
        $('select option:first-child').attr("selected", "selected");
    } else {
        document.getElementById(elem).style.display = 'none';
    }
}

function getBuildingType() {
    $.get(buil_type_url, function (data) {
        $.each(data, function (index, value) {
            $('#builtype').append($('<option>', { value: value.id, text: value.description }));
            buil_option += ' <option value="' + value.id + '">' + value.description + '</option>';
            building_types[value.id] = value.description;
        });
    });
}

function getFloor() {
    $.get(floor_url, function (data) {
        $.each(data, function (index, value) {
            $('#floor').append($('<option>', { value: value.number, text: value.number }));
            floor_option += ' <option value="' + value.number + '">' + value.number + '</option>';
        });
    });
}

function getRange() {
    $.get(range_url, function (data) {
        $.each(data, function (index, value) {
            $('#size').append($('<option>', { value: value.value, text: value.name }));
            range_option += ' <option value="' + value.value + '">' + value.name + '</option>';
        });
    });
}
function updateNotificationCount() {
    $.get(urlNotificationCount, function (data) {
        var count = data.count;
        $('#notification').html('Notifications <span class="badge">' + count + '</span>');
    });
}
function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}

function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}

function hamburger_cross() {

    if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
    } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
    }
}

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ })

/******/ });
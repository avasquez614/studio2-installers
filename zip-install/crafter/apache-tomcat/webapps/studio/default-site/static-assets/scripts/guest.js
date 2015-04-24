define('guest', ['crafter', 'jquery', 'communicator', 'ice-overlay', 'dnd-controller'], function (crafter, $, Communicator, ICEOverlay, DnDController) {
    'use strict';

    $.noConflict(true);

    var origin = window.location.origin; // 'http://127.0.0.1:8080';
    var Topics = crafter.studio.preview.Topics;
    var communicator = new Communicator({window: window.parent, origin: origin}, origin);

    // When the page has successfully loaded, notify the host window of it's readiness
    communicator.publish(Topics.GUEST_SITE_LOAD, {
        location: window.location.href,
        url: window.location.href.replace(window.location.origin, '')
    });

    function loadCss(url) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    var count = 0,
        overlay = new ICEOverlay(),
        $document = $(document),
        $window = $(window),
        dndController;

    communicator.on(Topics.START_DRAG_AND_DROP, function (message) {
        require(['dnd-controller'], function (DnDController) {
            (typeof dndController === 'undefined') && (dndController = new DnDController({
                communicator: communicator
            }));
            dndController.start(message.components);
        });
    });

    function initICETarget(elem) {

        var $elem = $(elem),
            position = $elem.offset(),
            iceRef = $elem.data('studioIce') + '-' + count++;

        $elem.attr('data-studio-ice-target', iceRef);

        $(crafter.String('<i class="studio-ice-indicator" data-studio-ice-trigger="%@"></i>').fmt(iceRef)).css({
            top: position.top,
            left: position.left
        }).appendTo('body');

    }

    function initICERegions() {
        $('.studio-ice-indicator').remove();
        var elems = document.querySelectorAll('[data-studio-ice]');
        for (var i = 0; i < elems.length; ++i) {
            initICETarget(elems[i]);
        }
    }

    $document.on('mouseover', '.studio-ice-indicator', function (e) {

        var $i = $(this),
            $e = $(crafter.String('[data-studio-ice-target="%@"]').fmt($i.data('studioIceTrigger'))),
            iceId = $e.data('studioIce');

        var position = $e.offset(),
            width = $e.width() - 4, // border-left-width + border-right-width = 4,
            height = $e.height() - 4, // border-top-width + border-bottom-width = 4
            props = {
                top: position.top,
                left: position.left,
                width: width,
                height: height
            };

        overlay.show(props);

    });

    $document.on('mouseout', '.studio-ice-indicator', function (e) {
        overlay.hide();
    });

    $document.on('click', '.studio-ice-indicator', function (e) {

        var $i = $(this),
            $e = $(crafter.String('[data-studio-ice-target="%@"]').fmt($i.data('studioIceTrigger'))),
            iceId = $e.data('studioIce');

        var position = $e.offset(),
            props = {
                top: position.top,
                left: position.left,
                width: $e.width(),
                height: $e.height()
            };

        props.iceId = iceId;
        props.scrollTop = $window.scrollTop();
        props.scrollLeft = $window.scrollLeft();

        communicator.publish(Topics.ICE_ZONE_ON, props);

    });

    $window.resize(function () {
        initICERegions();
    });

    loadCss('/studio/static-assets/styles/guest.css');

    initICERegions();

});

var config = {
    style: 'mapbox://styles/jleung11/clfppyzcr006801pekaps8i1i',
    accessToken: 'pk.eyJ1IjoiamxldW5nMTEiLCJhIjoiY2xlZG9kaHFmMDE5bjN2cGUwZmkycXM0NCJ9.az64dqVxhUevW4I_qYb1Sw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: "Climate Change's Effect on Tree Communities",
    subtitle: 'An analysis on tree threats on the contintental United States',
    byline: 'Jolie Leung',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id', //ids need to be unique for each chapter
            alignment: 'left',
            hidden: false,
            title: 'Urban Tree Cover Change',
            image: './path/to/image/source.png',
            description: 'According to a dataset on urban Forest Threats through 2060 from the U.S. Forest Service, the effect of climate change on urban tree cover in the conterminous United States will be significant. Rising temperatures, changing precipitation patterns, and increased frequency of extreme weather events associated with climate change have resulted in declines in urban tree cover in several regions. These changes have led to increased stress on urban trees, which are facing challenges such as drought, heat stress, and pest infestations. The dataset also has implications that vulnerable communities in urban areas, particularly those with lower socio-economic status, are disproportionately affected by the loss of tree cover, exacerbating existing environmental and health disparities. These findings underscore the urgent need for effective urban forest management strategies and climate adaptation measures to mitigate the impacts of climate change on urban tree cover and enhance the resilience of urban ecosystems in the United States.',
            location: {
                center: [-97.86118, 40.54797],
                zoom: 3.95,
                pitch: 54,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'state-boundary',
                     opacity: 1,
                     duration: 5000
                 },
                 {
                    layer: 'utcci',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                 {
                     layer: 'utcci',
                     opacity: 1
                 }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

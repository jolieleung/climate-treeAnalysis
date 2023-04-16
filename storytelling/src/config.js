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
    subtitle: 'An analysis on tree threats on the conterminous United States',
    byline: 'Jolie Leung',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'landing-1', //ids need to be unique for each chapter
            alignment: 'left',
            hidden: false,
            title: 'Urban Tree Cover Change',
            image: '',
            description: 'According to a dataset on urban Forest Threats through 2060 from the U.S. Forest Service, the effect of climate change on urban tree cover in the conterminous United States will be significant. Rising temperatures, changing precipitation patterns, and increased frequency of extreme weather events associated with climate change have resulted in declines in urban tree cover in several regions. These changes have led to increased stress on urban trees, which are facing challenges such as drought, heat stress, and pest infestations. The dataset also has implications that vulnerable communities in urban areas, particularly those with lower socio-economic status, are disproportionately affected by the loss of tree cover, exacerbating existing environmental and health disparities. These findings underscore the urgent need for effective urban forest management strategies and climate adaptation measures to mitigate the impacts of climate change on urban tree cover and enhance the resilience of urban ecosystems in the counterminous United States.',
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
                 }
                 ,
                 {
                    layer: 'utcci_3d',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                 {
                     layer: 'utcci_3d',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'nys-1',
            alignment: 'right',
            hidden: false,
            title: 'Temperature Change Index',
            image: './images/phz_90-99.gif',
            description: 'Based on the dataset from the U.S. Forest Service, the findings reveal significant changes in plant hardiness zones in the conterminous United States. The data indicates that plant hardiness zones, which provide information on the average annual minimum temperatures for different regions, have shifted northward and upward in elevation over time, reflecting the impact of climate change. Warmer minimum temperatures have resulted in the expansion of plant hardiness zones towards higher latitudes and altitudes, allowing for the potential migration of plant species to new areas. However, the dataset also shows that these changes are not uniform across the country, with variations in the magnitude and direction of the shifts depending on geographic location. These shifts in plant hardiness zones have important implications for plant distribution, ecosystem dynamics, and agriculture, and highlight the need for ongoing monitoring and adaptive management to mitigate the impacts of changing climate on plant communities in the United States.',
            location: {
                center: [-75.45871, 42.87633],
                zoom: 6.98,
                pitch: 45.00,
                bearing: 0.00,
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
            onChapterEnter: [
                {
                    layer: 'tci',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'tci',
                    opacity: 0,
                    duration: 5000
                }
            ]
        },
        {
            id: 'nys-2',
            alignment: 'left',
            hidden: false,
            title: 'Absolute Preciptation Change Index',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-75.45871, 42.87633],
                zoom: 6.98,
                pitch: 45.00,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'apci',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'apci',
                    opacity: 0,
                    duration: 5000
                }
            ]
        },
        {
            id: 'nys-3',
            alignment: 'fully',
            hidden: false,
            title: 'Aridity Change Index',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-75.45871, 42.87633],
                zoom: 6.98,
                pitch: 45.00,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'aci',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'aci',
                    opacity: 0,
                    duration: 5000
                }
            ]
        },
        {
            id: 'landing-2',
            alignment: 'left',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-97.86118, 40.54797],
                zoom: 3.95,
                pitch: 54,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'utcci',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'utcci',
                    opacity: 0,
                    duration: 5000
                }
            ]
        },
    ]
};

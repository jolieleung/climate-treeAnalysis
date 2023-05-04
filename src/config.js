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
            id: 'overall-utcci-1', //ids need to be unique for each chapter
            alignment: 'left',
            hidden: false,
            title: 'Urban Tree Cover Change',
            image: '',
            description: 'According to a dataset on urban Forest Threats through 2060 from the U.S. Forest Service, the effect of climate change on urban tree cover in the conterminous United States will be significant. Rising temperatures, changing precipitation patterns, and increased frequency of extreme weather events associated with climate change have resulted in declines in urban tree cover in several regions. These changes have led to increased stress on urban trees, which are facing challenges such as drought, heat stress, and pest infestations.',
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
                     opacity: 0
                 }
            ]
        },
        {
            id: 'overall-tci-1', //ids need to be unique for each chapter
            alignment: 'left',
            hidden: false,
            title: 'Temperature Change Index',
            image: '',
            description: 'We are able to see that temperature is steadier along the coasts, and most of the riskier temperature change index is inland, with the riskiest areas located in the midwest.', 
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
                    layer: 'tci',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                 {
                     layer: 'tci',
                     opacity: 1
                 }
            ]
        },
        {
            id: 'overall-tci-2', //ids need to be unique for each chapter
            alignment: 'left',
            hidden: false,
            title: 'Plant Hardiness Zones to Measure Temperature',
            image: './images/phz_90-99.gif',
            description: 'Based on the dataset from the U.S. Forest Service, the findings reveal significant changes in plant hardiness zones in the conterminous United States. The data indicates that plant hardiness zones, which provide information on the average annual minimum temperatures for different regions, have shifted northward and upward in elevation over time, reflecting the impact of climate change. Warmer minimum temperatures have resulted in the expansion of plant hardiness zones towards higher latitudes and altitudes, allowing for the potential migration of plant species to new areas. However, the dataset also shows that these changes are not uniform across the country, with variations in the magnitude and direction of the shifts depending on geographic location. These shifts in plant hardiness zones have important implications for plant distribution, ecosystem dynamics, and agriculture, and highlight the need for ongoing monitoring and adaptive management to mitigate the impacts of changing climate on plant communities in the United States.',
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
                    layer: 'tci',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                 {
                     layer: 'tci',
                     opacity: 1
                 }
            ]
        },
        {
            id: 'overall-tci-3', //ids need to be unique for each chapter
            alignment: 'left',
            hidden: false,
            title: 'Temperature Scatterplot',
            image: '',
            description: 'Below is a scatterplot comparing the mean Urban Tree Cover Change Index with the Temperature Change Index per state. The dashed line represents the country mean for both metrics. The values closest to 0, marked by a light blue line, represent no change.' + 
            '<br/><div class="video-container"><iframe src="./plots/tci_scatter.html" frameborder="0" scrolling="no" /></div>',
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
                    layer: 'tci',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                 {
                     layer: 'tci',
                     opacity: 0
                 }
            ]
        },            
        {
            id: 'overall-apci', //ids need to be unique for each chapter
            alignment: 'left',
            hidden: false,
            title: 'Absolute Precipitation Change Index',
            image: '',
            description: 'We are able to see that throughout the eastern side of the country, there is higher risk for preciptation change. Though this metric does not account for whether the change is an increase or a decrease in precipitation. Below is a scatterplot comparing the mean Urban Tree Cover Change Index with the Absolute Preciptation Change Index per state. The dashed line represents the country mean for both metrics. The values closest to 0, marked by a light blue line, represent no change.' + 
            '<br/><div class="video-container"><iframe src="./plots/apci_scatter.html" frameborder="0" scrolling="no" /></div>',
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
                    layer: 'apci',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                 {
                     layer: 'apci',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'overall-aci', //ids need to be unique for each chapter
            alignment: 'left',
            hidden: false,
            title: 'Aridity Change Index',
            image: '',
            description: 'We are able to get more clarity in which areas will get less rain with this metric. We see that throughout the eastern side of the country, there is higher risk for aridity change, with the exception of the central eastern coastal states. Below is a scatterplot comparing the mean Urban Tree Cover Change Index with the Arridity Change Index per state. The dashed line represents the country mean for both metrics. The values closest to 0, marked by a light blue line, represent no change.' + 
            '<br/><div class="video-container"><iframe src="./plots/aci_scatter.html" frameborder="0" scrolling="no" /></div>',
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
                    layer: 'aci',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                 {
                     layer: 'aci',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'overall_utcci-2', //ids need to be unique for each chapter
            alignment: 'left',
            hidden: false,
            title: 'Urban Tree Cover Change',
            image: '',
            description: 'These three factors, temperature, precipitation, and arridity all have an effect on tree communities and tree cover. When visualizing the urban tree cover indexes, we can see most of the country is at risk for urban tree cover change, though the metric does not specify whether it is an increase or a decrease in tree cover. However, when ecosystems are exposed to drasically different climates, for the species that cannot adapt, the implications are usually that that change is reduction.',
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
                     opacity: 0
                 }
            ]
        },
        {
            id: 'nys_treecover',
            alignment: 'right',
            hidden: false,
            title: 'Temperature Change Index',
            image: '',
            description: '',
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
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'TCC_Risk2',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'TCC_Risk3',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'TCC_Risk4',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'TCC_Risk5',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'county',
                    opacity: 1,
                    duration: 5000
                },
            ],
            onChapterExit: [
                {
                    layer: 'TCC_Risk5',
                    opacity: 0,
                    duration: 5000
                }
            ]
        },
        {
            id: 'nys_tci',
            alignment: 'right',
            hidden: false,
            title: 'Temperature Change Index',
            image: './images/phz_90-99.gif',
            description: '',
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
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'tci',
                //     opacity: 1,
                //     duration: 5000
                // },
                {
                    layer: 'tci',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'tci',
                //     opacity: 0,
                //     duration: 5000
                // },
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
            rotateAnimation: false,
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

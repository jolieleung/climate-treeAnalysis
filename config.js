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
    footer: 'Jolie Leung, <a href="https://github.com/jolieleung/climate-treeAnalysis/tree/site" target="_blank">Github Repository</a> <br> MS Data Analystics & Visualization | Pratt Institute School of Information<br> May',
    // Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.
    chapters: [
        {
            id: 'overall-utcci-1', //ids need to be unique for each chapter
            alignment: 'left',
            hidden: false,
            title: 'Urban Tree Cover Change',
            image: './images/utcci_legend.png',
            iframe: '',
            description: 'According to a dataset on urban Forest Threats through 2060 from the U.S. Forest Service, the effect of climate change on urban tree cover in the conterminous United States will be significant. Rising temperatures, changing precipitation patterns, and increased frequency of extreme weather events associated with climate change have resulted in declines in urban tree cover in several regions. These changes have led to increased stress on urban trees, which are facing challenges such as drought, heat stress, and pest infestations.',
            location: {
                center: [-97.86118, 40.54797],
                zoom: 3.75,
                pitch: 35,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'state-boundary',
                     opacity: 1,
                     duration: 4000
                 },
                 {
                    layer: 'utcci',
                    opacity: 1,
                    duration: 4000
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
            image: './images/tci_legend.png',
            iframe: '',
            description: 'We are able to see that temperature is steadier along the coasts, and most of the riskier temperature change index is inland, with the riskiest areas located in the midwest.', 
            location: {
                center: [-97.86118, 40.54797],
                zoom: 3.75,
                pitch: 35,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'state-boundary',
                     opacity: 1,
                     duration: 4000
                 },
                 {
                    layer: 'tci',
                    opacity: 1,
                    duration: 4000
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
            iframe: '',
            description: 'Based on the dataset from the U.S. Forest Service, the findings reveal significant changes in plant hardiness zones in the conterminous United States. The data indicates that plant hardiness zones, which provide information on the average annual minimum temperatures for different regions, have shifted northward and upward in elevation over time, reflecting the impact of climate change. Warmer minimum temperatures have resulted in the expansion of plant hardiness zones towards higher latitudes and altitudes, allowing for the potential migration of plant species to new areas. However, the dataset also shows that these changes are not uniform across the country, with variations in the magnitude and direction of the shifts depending on geographic location. These shifts in plant hardiness zones have important implications for plant distribution, ecosystem dynamics, and agriculture, and highlight the need for ongoing monitoring and adaptive management to mitigate the impacts of changing climate on plant communities in the United States.',
            location: {
                center: [-97.86118, 40.54797],
                zoom: 3.75,
                pitch: 35,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'state-boundary',
                     opacity: 1,
                     duration: 4000
                 },
                 {
                    layer: 'tci',
                    opacity: 1,
                    duration: 4000
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
            iframe: './plots/tci_scatter.html',
            description: 'Below is a scatterplot comparing the mean Urban Tree Cover Change Index with the Temperature Change Index per state. The dashed line represents the country mean for both metrics. The values closest to 0, marked by a light blue line, represent no change. Hover over points to see state and index values.',
            location: {
                center: [-97.86118, 40.54797],
                zoom: 3.75,
                pitch: 35,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'state-boundary',
                     opacity: 1,
                     duration: 4000
                 },
                 {
                    layer: 'tci',
                    opacity: 1,
                    duration: 4000
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
            image: './images/api_legend.png',
            iframe: './plots/apci_scatter.html',
            description: 'We are able to see that throughout the eastern side of the country, there is higher risk for preciptation change. Though this metric does not account for whether the change is an increase or a decrease in precipitation. Below is a scatterplot comparing the mean Urban Tree Cover Change Index with the Absolute Preciptation Change Index per state. The dashed line represents the country mean for both metrics. The values closest to 0, marked by a light blue line, represent no change. Hover over points to see state and index values.',
            location: {
                center: [-97.86118, 40.54797],
                zoom: 3.75,
                pitch: 35,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'state-boundary',
                     opacity: 1,
                     duration: 4000
                 },
                 {
                    layer: 'apci',
                    opacity: 1,
                    duration: 4000
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
            image: './images/aci_legend.png',
            iframe: './plots/aci_scatter.html',
            description: 'We are able to get more clarity in which areas will get less rain with this metric. We see that throughout the eastern side of the country, there is higher risk for aridity change, with the exception of the central eastern coastal states. Below is a scatterplot comparing the mean Urban Tree Cover Change Index with the Aridity Change Index per state. The dashed line represents the country mean for both metrics. The values closest to 0, marked by a light blue line, represent no change. Hover over points to see state and index values.',
            location: {
                center: [-97.86118, 40.54797],
                zoom: 3.75,
                pitch: 35,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'state-boundary',
                     opacity: 1,
                     duration: 4000
                 },
                 {
                    layer: 'aci',
                    opacity: 1,
                    duration: 4000
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
            image: './images/utcci_legend.png',
            iframe: '',
            description: 'These three factors (temperature, precipitation, and arridity) all have an effect on tree communities and tree cover. When visualizing the urban tree cover indexes, we can see most of the country is at risk for urban tree cover change, though the metric does not specify whether it is an increase or a decrease in tree cover. However, when ecosystems are exposed to drasically different climates, for the species that cannot adapt, the implications are usually that that change is a reduction.',
            location: {
                center: [-97.86118, 40.54797],
                zoom: 3.75,
                pitch: 35,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'state-boundary',
                     opacity: 1,
                     duration: 4000
                 },
                 {
                    layer: 'utcci',
                    opacity: 1,
                    duration: 4000
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
            id: 'nys_treecover_species',
            alignment: 'right',
            hidden: false,
            title: 'Tree Cover in New York State by Species',
            image: '',
            iframe: '',
            description: "Let's look at the tree cover in New York state by species. The lime green represents the most prevalent forest type in New York state, a sugar maple, beech, and yellow birch mix.",
            location: {
                center: [-75.10197, 42.73273],
                zoom: 6.98,
                pitch: 45.00,
                bearing: 0.00
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
                    duration: 4000
                },
                {
                    layer: 'TCC_Risk3',
                    opacity: 1,
                    duration: 4000
                },
                {
                    layer: 'TCC_Risk4',
                    opacity: 1,
                    duration: 4000
                },
                {
                    layer: 'TCC_Risk5',
                    opacity: 1,
                    duration: 4000
                },
                {
                    layer: 'county',
                    opacity: 1,
                    duration: 4000
                },
            ],
            onChapterExit: [
            {    
                layer: 'TCC_Risk2',
                opacity: 0,
                duration: 4000
            },
            {
                layer: 'TCC_Risk3',
                opacity: 0,
                duration: 4000
            },
            {
                layer: 'TCC_Risk4',
                opacity: 0,
                duration: 4000
            },
            {
                layer: 'TCC_Risk5',
                opacity: 0,
                duration: 4000
            }
            ]
        },
        {
            id: 'nys_treecover_count-1',
            alignment: 'centered',
            hidden: false,
            title: 'Live Tree Count (by Acre) in New York State',
            image: './plots/NYS_Risk5_TPAdist.png',
            iframe: '',
            description: "Let's look at the tree cover in New York state by number of live trees per acre. The darker the green, the more trees per acre.",
            location: {
                center: [-74.19956, 43.40139],
                zoom: 6.52,
                pitch: 45.00,
                bearing: 0.00
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
                    layer: 'count_Risk2',
                    opacity: 1,
                    duration: 4000
                },
                {
                    layer: 'count_Risk3',
                    opacity: 1,
                    duration: 4000
                },
                {
                    layer: 'count_Risk4',
                    opacity: 1,
                    duration: 4000
                },
                {
                    layer: 'count_Risk5',
                    opacity: 1,
                    duration: 4000
                },
                {
                    layer: 'county',
                    opacity: 1,
                    duration: 4000
                },
            ],
            onChapterExit: [
                {
                    layer: 'count_Risk2',
                    opacity: .3,
                    duration: 2000
                },
                {
                    layer: 'count_Risk3',
                    opacity: .3,
                    duration: 2000
                },
                {
                    layer: 'count_Risk4',
                    opacity: .3,
                    duration: 2000
                }
            ]
        },
        {
            id: 'nys_treecover_count-2',
            alignment: 'right',
            hidden: false,
            title: 'Risk Level 5 (Highest) | Live Tree Count (by Acre) in New York State',
            image: './images/count_risk5.png',
            iframe: '',
            description: "Note that the riskiest zone for tree cover change, located to the southeast of the state, dispears as you scroll to the next section.",
            location: {
                center: [-74.19956, 43.40139],
                zoom: 6.52,
                pitch: 45.00,
                bearing: 0.00
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
                    layer: 'county',
                    opacity: 1,
                    duration: 4000
                },
            ],
            onChapterExit: [
                {
                    layer: 'count_Risk5',
                    opacity: 0,
                    duration: 4000
                },
                {
                    layer: 'count_Risk2',
                    opacity: 1,
                    duration: 4000
                },
                {
                    layer: 'count_Risk3',
                    opacity: 1,
                    duration: 4000
                },
                {
                    layer: 'count_Risk4',
                    opacity: 1,
                    duration: 4000
                }
            ]
        },
        {
            id: 'nys_tci-1',
            alignment: 'centered',
            hidden: false,
            title: 'Temperature Change Index in New York State',
            image: './plots/NYS_Risk4_TPAdist.png',
            iframe: '',
            description: 'Now looking at the temperature change index, we can see that overall New York state is at high risk for a change in temperature through 2060. Given global trends and the plant hardiness zone analysis, we can assume that means the temperature is increasing.',
            location: {
                center: [-74.19956, 43.40139],
                zoom: 6.52,
                pitch: 45.00,
                bearing: 0.00
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
                    layer: 'tci',
                    opacity: 1,
                    duration: 4000
                },
                {
                    layer: 'county',
                    opacity: 1,
                    duration: 4000
                },
            ],
            onChapterExit: [
                {
                    layer: 'count_Risk2',
                    opacity: .3,
                    duration: 2000
                },
                {
                    layer: 'count_Risk3',
                    opacity: .3,
                    duration: 2000
                }
            ]
        },
        {
            id: 'nys_tci-2',
            alignment: 'right',
            hidden: false,
            title: 'Risk Level 4 | Temperature Change Index in New York State',
            image: './images/count_risk4.png',
            iframe: '',
            description: 'Note that the next riskiest zone for tree cover change dispears as you scroll to the next section.',
            location: {
                center: [-74.19956, 43.40139],
                zoom: 6.52,
                pitch: 45.00,
                bearing: 0.00
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
                    layer: 'county',
                    opacity: 1,
                    duration: 4000
                },
            ],
            onChapterExit: [
                {
                    layer: 'count_Risk4',
                    opacity: 0,
                    duration: 4000
                },
                {
                    layer: 'count_Risk2',
                    opacity: 1,
                    duration: 4000
                },
                {
                    layer: 'count_Risk3',
                    opacity: 1,
                    duration: 4000
                },
                {
                    layer: 'tci',
                    opacity: 0,
                    duration: 4000
                }
            ]
        },
        {
            id: 'nys_apci-1',
            alignment: 'centered',
            hidden: false,
            title: 'Absolute Preciptation Change Index in New York State',
            image: './plots/NYS_Risk3_TPAdist.png',
            iframe: '',
            description: 'Now looking at the absolute preciptation change index, we can see that the lower part of the state is at high risk for absolute preciptation change through 2060.',
            location: {
                center: [-74.19956, 43.40139],
                zoom: 6.52,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'apci',
                    opacity: 1,
                    duration: 4000
                },
                {
                    layer: 'county',
                    opacity: 1,
                    duration: 4000
                },
            ],
            onChapterExit: [
                {
                    layer: 'count_Risk2',
                    opacity: .3,
                    duration: 2000
                }
            ]
        },
        {
            id: 'nys_apci-2',
            alignment: 'right',
            hidden: false,
            title: 'Risk Level 3 | Absolute Preciptation Change Index in New York State',
            image: './images/count_risk3.png',
            iframe: '',
            description: 'Note that the next riskiest zone for tree cover change dispears as you scroll to the next section.',
            location: {
                center: [-74.19956, 43.40139],
                zoom: 6.52,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'apci',
                    opacity: 1,
                    duration: 4000
                }
            ],
            onChapterExit: [
                {
                    layer: 'count_Risk3',
                    opacity: 0,
                    duration: 4000
                },
                {
                    layer: 'count_Risk2',
                    opacity: 1,
                    duration: 4000
                },
                {
                    layer: 'apci',
                    opacity: 0,
                    duration: 4000
                }
            ]
        },
        {
            id: 'nys_aci-1',
            alignment: 'centered',
            hidden: false,
            title: 'Aridity Change Index in New York State',
            image: './plots/NYS_Risk2_TPAdist.png',
            iframe: '',
            description: 'Now looking at the aridity change index, we can see that overall the state is at high risk for aridity change through 2060.',
            location: {
                center: [-74.19956, 43.40139],
                zoom: 6.52,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'aci',
                    opacity: 1,
                    duration: 4000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'TCC_Risk2',
                //     opacity: 0,
                //     duration: 4000
                // },
                // {
                //     layer: 'aci',
                //     opacity: 0,
                //     duration: 4000
                // }
            ]
        },
        {
            id: 'nys_aci-2',
            alignment: 'right',
            hidden: false,
            title: 'Risk Level 2 (Lowest) | Aridity Change Index in New York State',
            image: './images/count_risk2.png',
            iframe: '',
            description: 'Note that the next riskiest zone for tree cover change dispears as you scroll to the next section.',
            location: {
                center: [-74.19956, 43.40139],
                zoom: 6.52,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'aci',
                    opacity: 1,
                    duration: 4000
                }
            ],
            onChapterExit: [
                {
                    layer: 'TCC_Risk2',
                    opacity: 0,
                    duration: 4000
                },
                {
                    layer: 'aci',
                    opacity: 0,
                    duration: 4000
                }
            ]
        },
        {
            id: 'overall_utcci-3',
            alignment: 'left',
            hidden: false,
            title: 'Change is Coming',
            image: './images/count_total.png',
            iframe: '',
            description: "Across all metrics, it's clear that climate is changing and it's time to help tree communities adapt to the inevitable change in climate. It's time to conduct more research into plant migration and planning tree corridors for planned and sustained growth to keep our forests and biodiversity thriving.",
            location: {
                center: [-97.86118, 40.54797],
                zoom: 3.75,
                pitch: 35,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'utcci',
                    opacity: 1,
                    duration: 4000
                }
            ],
            onChapterExit: [
                {
                    layer: 'utcci',
                    opacity: 0,
                    duration: 4000
                }
            ]
        },
    ]
};
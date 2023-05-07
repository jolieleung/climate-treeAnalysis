# Climate Change's Effect on Tree Communities

## Project Summary & Problem
As a practicing landscape architect, it’s hard to ignore the role climate change plays in the profession. The American Society of Landscape Architects (ASLA) released their Climate Action Plan last year, which outlines their vision for their goals by 2040, as well as the action items and initiatives it will take to get there. To supplement this document, I would like to visualize how plant material, specifically trees, will be affected by climate change and other environmental factors in the future. 

The rate at which the climate is warming means dire consequences for ecosystems and forced plant migration for the species that are able to survive. Neilson et. al. predicted the need to account for this shift as published in 2005 in their article “Forecasting Regional to Global Plant Migration in Response to Climate Change”, and yet the research since then on plant migration within the country has been sparse. This is particularly important in a profession where we are planning landscapes that must endure in an ever-changing environment. If we continue planting for the climate today, it likely will not be relevant in the coming 10-20 years.

## Data Matrix
Here is a link to the <a href="https://docs.google.com/spreadsheets/d/1-U8MYWjdZTW1YlAPH0wXrIeaHMdnrVUXoG2aaaqCkWk/edit?usp=sharing" target="_blank"> data matrix </a> associated with this project.

The main datasets used for this project are the following:

Matthews, Stephen N.; Iverson, Louis R.; Peters, Matthew P.; Prasad, Anantha M. 2019. Climate change pressures for the conterminous United States: plant hardiness zones, heat zones, growing degree days, and cumulative drought severity. Fort Collins, CO: Forest Service Research Data Archive. https://doi.org/10.2737/RDS-2019-0001

Nowak, David J.; Greenfield, Eric J.; Ellis, Alexis. 2022. Conterminous United States urban forest threats to 2060. Fort Collins, CO: Forest Service Research Data Archive. https://doi.org/10.2737/RDS-2021-0068

Riley, Karin L.; Grenfell, Isaac C.; Finney, Mark A.; Shaw, John D. 2021. TreeMap 2016: A tree-level model of the forests of the conterminous United States circa 2016. Fort Collins, CO: Forest Service Research Data Archive. https://doi.org/10.2737/RDS-2021-0074


## Process & Methods
1. Processing Tabular Data: Conterminous United States urban forest threats to 2060 (USDA Department of Agriculture/USDA Forest Service)
  - Reformat FIPS codes to join with county shapefile
  - Visualize each index (already normalized) by standard deviation

2. Proess Raster Data: TreeMap 2016: A tree-level model of the forests of the conterminous United States circa 2016 (USDA Department of Agriculture/USDA Forest Service)
  - Clip to New York State in order to render data
  - EDA on several attributes (count, species, height) - summary statistics, zonal statistics, tabulate area
  - Export as GeoTIFF* (compression and background mask issues)
  - Iterations on styling and compression settings in QGIS and export again as GeoTIFF

3. Create supplementary interactive Plotly graphs

4. Format and hook up data to the Mapbox GL JS Storytelling template
  - Develop layering and animation sequence
  - Set camera positions, styling, and formating
  - Formulate narrative

## EDA
Here is a link to the <a href="https://docs.google.com/spreadsheets/d/1-U8MYWjdZTW1YlAPH0wXrIeaHMdnrVUXoG2aaaqCkWk/edit?usp=sharing" target="_blank"> 50% Progress Presentation </a> to highlight some exploratory data analysis.

## Conclusions
Conclusions are highlighted in the final website. Across all metrics, it's clear that climate is changing and it's time to help tree communities adapt to the inevitable change in climate. It's time to conduct more research into plant migration and planning tree corridors for planned and sustained growth to keep our forests and biodiversity thriving.

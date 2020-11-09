import React, { useRef, useLayoutEffect } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected"; 
am4core.useTheme(am4themes_animated);

function AnimationImg(props) {
  const chart = useRef(null);

  useLayoutEffect(() => {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree); 

    let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
    // series.dataFields.dateX = "date";
    // series.dataFields.valueY = "value";
    // series.tooltipText = "{valueY.value}";
    series.data = [  
        {  
           "name":"Location",
           "value":350,
           "linkWith":[  
              "Social Feeds"
           ],
           "children":[  
              {  
                
                 "value":35
              }
           ]
        },
        {  
           "name":"Social Feeds",
           "value":350,
           "linkWith":[  
              "Inventory",
              "Warehousing",
              "Transactions"
              
           ],
           "children":[  
              {  
                
                 "value":30
              },
              {  
               
                 "value":30
              }
           ]
        },
        {  
           "name":"Warehousing",
           "value":300,
           "link":[  
           "Inventory",
              "Social Feeds",
              "Transactions"
           ],
           "children":[  
              {  
                 
                 "value":40
              },
              {  
                 
                 "value":40
              },
              {  
                 
                 "value":40
              }
           ]
        },
        {  
           "name":"Transactions",
           "value":350,
           "link":[  
           "Inventory",
              "Warehousing",
              "Social Feeds"
           ],
           "children":[  
              {  
                 
                 "value":40
              },
              {  
                 
                 "value":40
              }
           ]
        },
        {  
           "name":"Finance",
           "value":300,
        //    "link":[  
        //    "Inventory",
        //       "Warehousing",
        //       "Procurement",
        //       "Analytics"
        //    ],
           "children":[  
              {  
                 
                 "value":40
              },
             
           ]
        },
        {  
           "name":"Analytics",
           "value":300,
           "linkWith":[  
           "Inventory",
              "Warehousing",
              "Social Feeds",
              "Finance"
           ],
           
           "children":[  
              {  
               
                 "value":60
              }
           ]
        }
      
      
     ];
     chart.zoomable = true;
      // Set up data fields
      series.dataFields.linkWith = "linkWith";
      series.dataFields.value = "value";
      series.dataFields.name = "name";
      series.dataFields.children = "children";
    series.dataFields.id = "name";
    series.nodes.template.label.text = "{name}"  
    series.linkWithStrength = 0;

      series.fontSize = 15;
    //   series.minRadius = 50;
    //   series.maxRadius = 40;
    

      var nodeTemplate = series.nodes.template;
      nodeTemplate.tooltipText = "{name}";
      nodeTemplate.fillOpacity = 1;
      nodeTemplate.label.hideOversized = true;
      nodeTemplate.label.truncate = true;
      
      var linkTemplate = series.links.template;
      linkTemplate.strokeWidth = 1;
      var linkHoverState = linkTemplate.states.create("hover");
      linkHoverState.properties.strokeOpacity = 1;
      linkHoverState.properties.strokeWidth = 2;

      nodeTemplate.events.on("over", function (event) {
        var dataItem = event.target.dataItem;
        dataItem.childLinks.each(function (link) {
            link.isHover = true;
        })
    })
    
    nodeTemplate.events.on("out", function (event) {
        var dataItem = event.target.dataItem;
        dataItem.childLinks.each(function (link) {
            link.isHover = false;
        })
    })
    

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div id="chartdiv" style={{height:"26rem"}}></div>
  );
}
export default AnimationImg;
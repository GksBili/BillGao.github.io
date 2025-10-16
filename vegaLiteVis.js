// Load data from datasets/videogames_wide.csv using d3.csv and then make visualizations
async function fetchData() {
  const data = await d3.csv("./dataset/videogames_wide.csv");
  return data;
}

fetchData().then(async (data) => {
  const vlSpec = vl
    .markText()
    .data(data)
    .title("Total record of video games in the world 1980-2020")
    .encode(
        vl.text().fieldQ('Name').aggregate('count')
    )
    .width(500)
    .height(100)
    .toSpec();

  const vlSpec2 = vl
    .markBar()
    .data(data)
    .title("Total number of video games released on platforms in 1980-2020")
    .encode(
        vl.x().fieldN('Platform').sort('-y'),
        vl.y().fieldN('Platform').aggregate('count').title("Records of video game"),
        vl.color().fieldN('Platform')
    )
    .width(500)
    .height(300)
    .toSpec();

  const vlSpec3 = vl
    .markBar()
    .data(data)
    .encode(
        vl.x().fieldN('Year'),
        vl.y().fieldN('Name').aggregate('count'),
        vl.color().fieldQ('Name').aggregate("count").title("Number of Video Games")
    )
    .width(500)
    .height(300)
    .toSpec();
  const vlSpec4 = vl
    .markBar()
    .data(data)
    .title("Number of Video Games by Genre")
    .encode(
       vl.y().fieldN('Genre'),
       vl.x().fieldN('Genre').aggregate("count").title("Record of video Games"),
    )
    .width(500)
    .height(300)
    .toSpec();

  const vlSpec5 = vl
    .markBar()
    .data(data)
    .title("Global Sales by Genre and Platform")
    .encode(
       vl.y().fieldQ('Global_Sales').aggregate('sum').title("Total Global Sales (in millions of units)"),
       vl.x().fieldN('Genre').sort('-y'),
       vl.color().fieldN('Platform'),
       vl.column().fieldN('Platform').sort(vl.sum('Global_Sales').order('descending'))
    )
    .width(250)
    .height(280)
    .toSpec();

   const vlSpec6 = vl
    .markBar()
    .data(data)
    .title("Global Sales by Genre")
    .encode(
       vl.x().fieldQ('Global_Sales').aggregate('sum').title("Total Global Sales (millions)"),
       vl.y().fieldN('Genre').sort('-x'),
       vl.color().fieldN('Genre').scale({scheme:'category20'}),
    )
    .width(350).height(300)
    .toSpec();

    const vlSpec7 = vl
    .markBar()
    .data(data)
    .title("Global Sales by Platform")
    .encode(
       vl.x().fieldQ('Global_Sales').aggregate('sum').title("Total Global Sales ( millions)"),
       vl.y().fieldN('Platform').sort('-x'),
       vl.color().fieldN('Platform').scale({scheme:'category20'}),
    )
    .width(300)
    .toSpec();

    const vlSpec8 = vl
    .markBar()
    .data(data)
    .title("Sales Over Time by Platform")
    .encode(
       vl.y().fieldQ('Global_Sales').aggregate('sum').title("Total Global Sales (in millions of units)"),
       vl.x().fieldN('Year'),
       vl.color().fieldN('Platform').scale({scheme:'category20'}).sort(vl.sum('Global_Sales').order('descending')),
    )
    .width(500)
    .height(300)
    .toSpec();

    const vlSpec9 = vl
    .markBar()
    .data(data)
    .title("Sales Over Time by Genre")
    .encode(
       vl.y().fieldQ('Global_Sales').aggregate('sum').title("Total Global Sales (in millions of units)"),
       vl.x().fieldN('Year'),
       vl.column().fieldN('Genre'),
       vl.color().fieldN('Genre')
    )
    .width(300).height(300)
    .toSpec();

    const vlSpec10 = vl
    .markBar()
    .data(data)
    .title("Japanese Market in Each Platform")
    .encode(
        vl.y().fieldQ('JP_Sales').aggregate('sum').title("Total JP Sales (millions)"),
        vl.x().fieldN('Platform').sort('-y'),
        vl.color().value("#5D2E8C")
    )
    .width(500).height(300)
    .toSpec();

    const vlSpec11 = vl
    .markBar()
    .data(data)
    .title("North America Market in Each Platform")
    .encode(
        vl.y().fieldQ('NA_Sales').aggregate('sum').title("Total NA Sales (millions)"),
        vl.x().fieldN('Platform').sort('-y'),
        vl.color().value("#C1DFF0")
    )
    .width(500).height(300)
    .toSpec();

    const vlSpec12 = vl
    .markBar()
    .data(data)
    .title("Europe Market in Each Platform")
    .encode(
        vl.y().fieldQ('EU_Sales').aggregate('sum').title("Total EU Sales (millions)"),
        vl.x().fieldN('Platform').sort('-y'),
        vl.color().value("#2D848A")
    )
    .width(500).height(300)
    .toSpec();

    const vlSpec13 = vl
    .markBar()
    .data(data)
    .title("Other Region Market in Each Platform")
    .encode(
        vl.y().fieldQ('Other_Sales').aggregate('sum').title("Total other region Sales (millions)"),
        vl.x().fieldN('Platform').sort('-y'),
        vl.color().value("#CDA2AB")
    )
    .width(500).height(300)
    .toSpec();

    const vlSpec14 = vl
    .markLine()
    .data(data)
    .title("North America Market over time")
    .encode(
        vl.y().fieldQ('NA_Sales').aggregate('sum').title("Total NA Sales (millions)"),
        vl.x().fieldN('Year'),
        vl.color().value("#D64F06")
    )
    .width(500).height(300)
    .toSpec();

    const vlSpec15 = vl
    .markLine()
    .data(data)
    .title("North America Market average over time")
    .encode(
        vl.y().fieldQ('NA_Sales').aggregate('average').title("Average NA Sales (millions)"),
        vl.x().fieldN('Year'),
        vl.color().value("#2EC4B6")
    )
    .width(500).height(300)
    .toSpec();

    const vlSpec16 = vl
    .markLine()
    .data(data)
    .title("Japan Market average over time")
    .encode(
        vl.y().fieldQ('JP_Sales').aggregate('average').title("Average JP Sales (millions)"),
        vl.x().fieldN('Year'),
        vl.color().value("#F1E8B8")
    )
    .width(500).height(300)
    .toSpec();

    const vlSpec17 = vl
    .markLine()
    .data(data)
    .title("The era of quantitative game production")
    .encode(
        vl.y().fieldQ('Name').aggregate('count').title("Records of video games"),
        vl.x().fieldN('Year'),
    )
    .width(500).height(300)
    .toSpec();

  render("#view", vlSpec);
  render("#view2", vlSpec2);
  render("#view3", vlSpec3);
  render("#view4", vlSpec4);
  render("#view5", vlSpec5);
  render("#view6", vlSpec6);
  render("#view7", vlSpec7);
  render("#view8", vlSpec8);
  render("#view9", vlSpec9);

  render("#view10", vlSpec10);
  render("#view11", vlSpec11);
  render("#view12", vlSpec12);
  render("#view13", vlSpec13);

  render("#view14", vlSpec14);
  render("#view15", vlSpec15);
  render("#view16", vlSpec16);
  render("#view17", vlSpec17);
});

async function render(viewID, spec) {
  const result = await vegaEmbed(viewID, spec);
  result.view.run();
}
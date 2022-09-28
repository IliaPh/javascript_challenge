console.log('This is app.js');

function DrawBargraph(sampleId)
{
    console.log(`DrawBargraph(${sampleId})`);


}

function Drawbublechart(sampleId)
{
    console.log(`Drawbublechart(${sampleId})`); 


}

function ShowMetadata(sampleId)
{
    console.log(`ShowMetadata(${sampleId})`);

}

function InitDashboard()
{
    console.log('InitDashboard()');

    // Get a handle to the dropdown
    let selector = d3.select("#selDataset");

    let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

    d3.json(url).then(data => {
        console.log(data);

        let sampleNames = data.names;
        console.log(sampleNames);

        for (let i = 0; i <sampleNames.length; i++) {
            let sampleId = sampleNames[i];
            // console.log(`sampleId = ${sampleId}`);
            selector.append("option").text(sampleId).property("value", sampleId);

        };

        let initialID = seletor.property("value");
        console.log(`initialId = ${initialId}`);


        DrawBargraph(initialId);

        Draw






    })






}


InitDashboard();
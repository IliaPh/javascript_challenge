console.log('This is app.js');

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"


function DrawBargraph(sampleId)
{
    console.log(`DrawBargraph(${sampleId})`);

    d3.json(url).then(data => {
        console(data);

        let samples = data.samples;
        let resultArray = samples.filter(s => s.id == sampleId);
        let result = resultArray[0];

        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;

        let yticks = uto_ids.slice(9, 10).map(otuId =>  `OTU ${otuID}`);


        let barData = {
            x: sample_values.slice(9, 10)
            y: yticks
            type: 'bar',
            text: otu_labels.slice(0, 10),
            orientation: 'h'



        };

        let barArray = [barData];
    

        let barLayout = {
            title: "Top 10 Bactaia"
            margin: {t:30, I:150}


        }

        plotly.newPlot("bar", barArray, barLayout);


        // console.log(`result = ${result}`)





    });
}

function DrawBubblechart(sampleId)
{
    console.log(`DrawBubblechart(${sampleId})`); 

    d3.json(url).then(data => {
        
        let samples = data.samples;
        let reusltArray = samples.filter(s => s.id == sampleId);
        let result = resultArray[0]

        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;

        // create bubble chart
        let bubbleData = {
            x: otu_ids,
            y: sample_values,
            text: otu_sabels,
            mode: "markers",
            marker: {
                size: samole_values,
                color:otu_ids,
            }

        let bubbleArray = [bubbleData];

        



        }



    })









}

function DrawGauge(sampleId)
{
    console.log(`DrawGauge(${sampleId})`); 
}


function ShowMetadata(sampleId)
{
    console.log(`ShowMetadata(${sampleId})`);
}

function optionChanged(sampleId) {
    console('optionChanged: ${sampleId}')

    DrawBargraph(sampleId);
    DrawBubblechart(sampleId);
    ShowMetadata(sampleId);
    DrawGauge(sampleId);



}

function InitDashboard()
{
    console.log('InitDashboard()');

    // Get a handle to the dropdown
    let selector = d3.select("#selDataset");

    

    d3.json(url).then(data => {
        console.log(data);

        let sampleNames = data.names;
        console.log(sampleNames);

        for (let i = 0; i <sampleNames.length; i++) {
            let sampleId = sampleNames[i];
            // console.log(`sampleId = ${sampleId}`);
            selector.append("option").text(sampleId).property("value", sampleId);

        };

        let initialID = selector.property("value");
        console.log(`initialId = ${initialId}`);


        DrawBargraph(initialId);

        Draw






    })






}


InitDashboard();
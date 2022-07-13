Webcam.set({
    width  :350,
    height :300,
    image_format:'png',
    png_quality:100
});

Webcam.attach("#camera");

function takeSnapshot()
{

    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"'>";
    });
}

console.log('ml5 version:',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wcpfPZe4x/model.json',modelLoaded);

function modelLoaded()
{
    console.log("model loaded");

}

function check()
{
    img = document.getElementById('captued_image');
    classifier.classify(img,gotResult);

}

function gotResult(error,results)
{
    if(error)
    {
        console.error
    }
    else
    {
       console.log(results);
       document.getElementById("result_object_name").innerHTML= results[0].label;
    }  document.getElementById("result_object_accuracy").innerHTML= results[0].confidence.toFixed(2);

}
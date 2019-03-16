var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
colorDisplay.textContent = pickedColor; 


resetButton.addEventListener("click", function(){
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    for( i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue"    ;
});

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for( i = 0; i < squares.length; i++)
    {
        if(colors[i])
            squares[i].style.background = colors[i];
        else
            squares[i].style.display = "none";
    }
    h1.style.backgroundColor = "steelblue"
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6; 
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for( i = 0; i < squares.length; i++)
    {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
    h1.style.backgroundColor = "steelblue"
});
for(var i = 0; i < squares.length; i++)
{
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor)
        {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else
        {
            messageDisplay.textContent = "Try again";
            this.style.backgroundColor = "#232323";

        }
    });
}

function changeColors(color)
{
    for( i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}
function pickColor()
{
    
    return  colors[Math.floor(Math.random() * colors.length)];

}

function generateRandomColor(num)
{
    var arr = [];
    for( var i = 0; i < num; i++)
    {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
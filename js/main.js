var qutes =[
    {qute : "I am so clever that sometimes I don't understand a single word of what I am saying.", auther: "Oscar Wilde"},
    {qute : "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", auther: "Ralph Waldo Emerson"},
    {qute : "It is better to be hated for what you are than to be loved for what you are not.", auther: "Andre Gide"},
    {qute : "Be the change that you wish to see in the world.", auther: "Mahatma Gandhi"},
    {qute : "In three words I can sum up everything I've learned about life: it goes on.", auther: "ORobert Frost"},
    {qute : "If you tell the truth, you don't have to remember anything.", auther: "Mark Twain"},
    {qute : "Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .", auther: "C.S. Lewis"},
    {qute : "A friend is someone who knows all about you and still loves you.", auther: "Elbert Hubbard"},
    {qute : "There is nothing better than a friend, unless it is a friend with chocolate.", auther: "Linda Grayson"}

];
function quteOfDay() {
    randomQuteIndex=Math.abs( Math.ceil( Math.random()*qutes.length-1));
    console.log(randomQuteIndex)
    document.getElementById("quote").innerHTML=`"${qutes[randomQuteIndex].qute}"`
    document.getElementById("auther").innerHTML=`--${qutes[randomQuteIndex].auther}`
}
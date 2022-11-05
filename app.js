const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();

app.set('view engine', 'ejs');

app.get("/", function (req,res)
{
    // res.send("this is  a to do list logic");
    var today= new Date();
    var currentDay = today.getDay();
     var day="";
    
     switch(currentDay)
     {
        case 0:
            day="sunday";
            break;
            case 1:
                day="Monday";
                break;
                case 2:
                    day="Tuesday";
                    break;
                    case 3:
                        day="Wednesday";
                        break;
                        case 4:
                            day="thursday";
                            break;
                            case 5:
                                day="friday";
                                break;
                                case 6:
                                    day="saturday";
                                    break;
                                    default:
                                        console.log("error");
      }
    // if (currentDay==6|| currentDay==0)
    // {
    //     day="weekend";
    // }
    // else{
    //     day="weekday";
    // }
    res.render("list",{kindofDay :day});
});
app.listen(7000,function()
{
    console.log("server working at port 7000");
});
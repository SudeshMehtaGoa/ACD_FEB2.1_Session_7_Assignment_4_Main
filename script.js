
/*Outer - inner function demo */
function callOuterFunction()
{
    /* Passing function as parameter */
    outerFunction(
                    function() {
                        document.getElementById("lblMessage").innerText = "Hello world from inner function. Current Time is :" + Date();
                        console.log("Hello world from inner function. Current time is :" + Date());
                    }
                  );
};

function outerFunction(innerFunction) { 
    /* executing function which is passed as parameter */
    innerFunction();
}; 


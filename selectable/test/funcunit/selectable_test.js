module("selectable")


test("selectable testing works", function(){

        S.open("file:/c:/Development/jmvc/jupiter/selectable/selectable.html");
		S.wait(10, function(){
			ok(true, "things working");
		})

})
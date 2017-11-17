console.log(this)
onmessage = function(e) {
	console.log(e)
	console.log('worker recive msg from main')
    var str = 'Result: ' + (e.data[0] + '------' + e.data[1]);
    postMessage(str);
    console.log('worker post msg to main')
}

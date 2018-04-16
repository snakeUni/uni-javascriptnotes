/**
利用Promise.race来进行超时处理
**/
function delay(miliseconds) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, miliseconds);
	})
}
function timeoutPromise(promise, miliseconds) {
	var timeout = delay(miliseconds).then(() => {
		throw new Error(`request timed out after ${miliseconds}ms`)
	})
	return Promise.race([promise, timeout]);
}
function request(url, method) {
	return new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();
		xhr.open(url, method, true);
		xhr.send();
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				if(xhr.status == 200) {
					try {
						var response = xhr.responseText;
						if(typeof response !== 'object') {
							response = JSON.parse(response);
						}
						resolve(response);
					} catch(e) {
						reject(e)
					}
				} else {
					reject(new Error(xhr.statusText));
				}	
			}
		}
	})
}
timeoutPromise(request(url), 5000).then(()=>{}).then(()=>{});
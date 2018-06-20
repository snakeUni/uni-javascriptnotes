'use strict'

let UniPromise
(function() {

	/**
	 * 
	 */
	let listeners = []

	UniPromise = class UniPromise {

		/**
		 * resolve
		 * @param {}
		 * @returns promise
		 */
		static resolve(resolve) {
			return Promise.resolve(resolve)
		}
	
		/**
		 * reject
		 */
		static reject(reject) {
			return Promise.reject(reject)
		}
	
		/**
		 * all
		 * @param {Array} 
		 */
		static all(all) {
			return Promise.all(all)
		}
	
		/**
		 * race
		 */
		static race(race) {
			return Promise.race(race)
		}
	
		constructor(callback) {
			let xhr = new XMLHttpRequest()
			new Promise(callback)
		}
	
		subscriber () {
	
		}
	
		getCurrent() {
			console.log(this)
		}
	
	}
}())


new UniPromise((() => {console.log(11)})).getCurrent()
console.log("resolve:", UniPromise.resolve())
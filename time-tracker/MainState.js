var moment = require( "lib/moment.js" )

class TimeItem {
	constructor(name, color, value) {
		this.name = name
		this.color = color
		this.value = value
	}
	
}

class PageDetails {
	constructor( collection ) {
		this.item = collection
		this.productivity = Math.floor(Math.random() * 500) / 60
	}
	
	get prodStr() {
		return moment.hours(this.productivity).format("HH:MM")
	}

	//TODO: crashed without "this."
	get sortedValues() {
		return this.item.values.slice().sort( (a,b) => b.value - a.value )
	}
}

class PageOverview {
	constructor() {
		this.days = [
			this.createDay( "Friday" ),
			this.createDay( "Thursday" ),
			this.createDay( "Wednesday" ),
			this.createDay( "Tuesday" ),
			this.createDay( "Monday" ),
			this.createDay( "Sunday" ),
			this.createDay( "Saturday" ),
		]
	}
	
	createDay( dayName ) {
		return {
			name: dayName,
			values: [ 
				new TimeItem("Sketch", "#1F8", Math.random() ), 
				new TimeItem("Dribbble", "#F1F", Math.random() ), 
				new TimeItem("Learning", [1.0, 0.8, 0.1], Math.random() ), 
				new TimeItem("Chat", "#18F", Math.random() ),
			]
		}
	}
}

export default class MainState {
	constructor() {
		this.pages = [ new PageOverview() ]
	}
	
	showItem( args ) {
		var item = args.data
		this.pages.push( new PageDetails(item) )
	}
	
	goBack() {
		this.pages.pop()
	}
}

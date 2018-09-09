//8. In JS: create one variable (or constant) for each link in your HTML. Each of these variables will contain one object with one "template" property.
//9. In JS: in each template property, write some HTML markup which includes an h1, an img, and a paragraph. Feel free ot use dummy text, but be sure that each image is different.


const home = {
	template: 	`
		<div class="text-center">
        	<h1>Home</h1>
        	<img src="https://vignette.wikia.nocookie.net/runescape2/images/6/6a/Red_dragon.png/revision/latest?cb=20130626161708" alt="Dragon">
        	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
    	</div>		
	`
}
const about = {
	template: `
		<div class="text-center">
	        <h1>About</h1>
	        <img src="https://vignette.wikia.nocookie.net/2007scape/images/2/22/Grimgnash.png/revision/latest?cb=20161011222423" alt="Griffin">
	        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
	    </div>
	`
}
const contact = {
	template: `
		<div class="text-center">
	        <h1>Contact</h1>
	        <img src="https://vignette.wikia.nocookie.net/runescape2/images/e/e3/Desert_Phoenix.png/revision/latest?cb=20120108014502" alt="Art work of a phoenix">
	        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
	    </div>
	`
}
const blog = {
	template: `
		<div class="text-center">
	        <h1>Blog</h1>
	        <img src="https://vignette.wikia.nocookie.net/runescape2/images/e/ec/Kurask_overlord.png/revision/latest?cb=20140826120932" alt="Art work of the chimera">
	        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
	    </div>
	`
}
const menu = {
	template:`
		<div class="text-center">
	        <h1>Menu</h1>
	        <img src="https://vignette.wikia.nocookie.net/runescape2/images/7/7e/Minotaur.png/revision/latest?cb=20140906194216" alt="Art work of a minotaur">
	        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
	    </div>
	`
}


//5. In JS: create a new VueRouter instance, stored in a variable called "myRouter".
//6. In JS: inside your VueRouter instance, create a "routes" property containing an array. Inside this array, create one object for each link in your HTML. Each object should have two properties: "path" and "component".
//7. In JS: for each path property of each object in your "routes" array, give each the value of a string containing a "/" followed by a number (e.g. "/one", "/two", "/three", etc.). Each "component" property will remain empty for now.


const router = new VueRouter({
	routes: [
	{
		path: '/home',
		component: home
	},
	{
		path: '/about',
		component: about
	},
	{
		path: '/contact',
		component: contact
	},
	{
		path: '/blog',
		component: blog
	},
	{
		path: '/menu',
		component: menu
	}
	]
})

//4. In JS: create a new Vue instance with an "el" property, linking your instance to your "#app" div.

var routeTest = new Vue ({
	router,
	el:'#app',
	data: {
		
	},
	methods: {

	}
}).$mount('#app')







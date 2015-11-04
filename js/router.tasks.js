/* Author: shoba - 11/03/2015 
Description :Backbone search and sort - collection
*/

myapp.router.Tasks = Backbone.Router.extend({

	routes: {
		"":  	"list",  
	 },
	list: function(){
		this.listContainerView = new myapp.view.TasksContainer({
			collection:myapp.collection.tasks
		});
		$("#contentContainer").append(this.listContainerView.render().el);	
		this.listContainerView.sorts()
	 }
});

myapp.router.tasks = new myapp.router.Tasks;
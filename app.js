/// reference path = angular.min.js

var myApp = angular.module("myModule", []);

var myController = function($scope){
	var persons = [
		{name:"Tuncay", surname: "Altinpulluk"},
		{name:"Ece", surname: "Yamak Altinpulluk"},
		{name:"Emrah", surname: "Altinpulluk"},
		{name:"Huseyin", surname: "Altinpulluk"}	
		];
	$scope.persons = persons;
};

myApp.controller("myController", myController);
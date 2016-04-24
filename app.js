/// reference path = angular.min.js

var myApp = angular.module("myModule", []);

var myController = function($scope){
	var persons = [
		{name:"Tuncay", surname: "Altinpulluk"},
		{name:"Ece", surname: "Yamak Altinpulluk"},
		{name:"Emrah", surname: "Altinpulluk"},
		{name:"Huseyin", surname: "Altinpulluk"},	
		{name:"Hikmet", surname: "Altinpulluk"}
		];
	$scope.persons = persons;
	$scope.rowNumber = 4;
};

myApp.controller("myController", myController);
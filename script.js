let myApp = angular.module("ToDoList", []);
myApp.controller("myListController", function($scope){
    $scope.items = ["Clean The Car", "Wash The Dishes", "Feed the Cat"];
    $scope.newItem = "";
    $scope.pushItem = function() {
     if($scope.newItem != "") {
        $scope.items.push($scope.newItem)
        $scope.newItem = "";
    }
}

$scope.deleteItem = function(index) {
    $scope.items.splice(index, 1);
}

});
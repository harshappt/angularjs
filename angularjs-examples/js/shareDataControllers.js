var myApp = angular.module("shareDataControllers",[]);

myApp.factory("Data",function(){
    return {message:"I am from Service"}
})

myApp.filter("reverse",function(Data){
    return function(text){
        return text.split("").reverse().join("")+Data.message;
    }
})

firstController=function($scope,Data){
  $scope.data = Data

}

secondController=function($scope,Data){
  $scope.data = Data
}
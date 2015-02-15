'use strict';


var yow = angular.module('yow',['ngCookies']);
yow.controller('SignupCtrl', function SignupCtrl($scope, $cookies, $location) {
    var mailParam = $location.search().mail;
    $scope.mail = mailParam ? mailParam : '';
    $scope.subscribed = false;

    if($cookies.mail) {
        $scope.mail = $cookies.mail;
        $scope.subscribed = true;
    }

    $scope.toggleSubscription = function() {
        $scope.subscribed = !$scope.subscribed;
    };

    $('#signup [name="pizza"]').ddslick({
        width: '100%',
        background: '#fff',
        onSelected: function(data) {
            $scope.pizza = data.text;
        }
    });
});


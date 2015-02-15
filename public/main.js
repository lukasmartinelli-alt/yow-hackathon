'use strict';

var pizzas = ['Margherita', 'Stromboli', 'Napoli', 'Prosciutto'];

var yow = angular.module('yow',['ngCookies']);
yow.controller('SignupCtrl', function SignupCtrl($scope, $cookies, $location) {
    var mailParam = $location.search().mail;
    $scope.mail = mailParam ? mailParam : '';
    $scope.is_attending = false;
    $scope.name = '';

    if($cookies.mail) {
        $scope.mail = $cookies.mail;
    }

    $('#pizza-list').ddslick({
        width: '100%',
        background: '#fff',
        onSelected: function(data) {
            $scope.pizza = data.selectedData.value;
        }
    });

    $.getJSON('api/attendees/' + $scope.mail, function(attendee) {
        $scope.is_attending = attendee.is_attending;
        $scope.name = attendee.first_name + ' ' + attendee.last_name;
        $scope.pizza = attendee.pizza;
        $('#pizza-list').ddslick('select', {
            index: Math.abs(pizzas.indexOf(attendee.pizza))
        });
        $scope.$apply();
    });

    $scope.toggleSubscription = function() {
        $scope.is_attending = !$scope.is_attending;
        var names = $scope.name.split(' ');

        $.ajax('api/attendees/', {
            data: JSON.stringify({
                mail: $scope.mail,
                first_name: names[0],
                last_name: names[names.length - 1],
                is_attending: $scope.is_attending,
                pizza: $scope.pizza
            }),
            contentType: 'application/json',
            type: 'POST'
        });
    };
});


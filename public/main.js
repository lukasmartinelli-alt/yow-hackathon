'use strict';

var pizzas = ['Margherita', 'Stromboli', 'Napoli', 'Prosciutto',
              'Rustica', 'Salame', 'Calzone'];


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


var yow = angular.module('yow',['ngCookies']);
yow.controller('SignupCtrl', function SignupCtrl($scope, $cookies) {
    var mailParam = getParameterByName('mail');
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
        $scope.name = attendee.name;
        $scope.pizza = attendee.pizza;
        $('#pizza-list').ddslick('select', {
            index: Math.abs(pizzas.indexOf(attendee.pizza))
        });
        $scope.$apply();
    });

    $scope.toggleSubscription = function() {
        $scope.is_attending = !$scope.is_attending;
        $cookies.mail = $scope.mail;

        $.ajax('api/attendees/', {
            data: JSON.stringify({
                mail: $scope.mail,
                name: $scope.name,
                is_attending: $scope.is_attending,
                pizza: $scope.pizza
            }),
            contentType: 'application/json',
            type: 'POST'
        });
    };
});


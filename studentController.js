/**
 * Created by svadagam on 3/21/2017.
 */
mainApp.controller("studentController", function($scope) {
    $scope.student = {
        firstName: "Srikanth",
        lastName: "Vadagam",
        fees:500,

        subjects:[
            {name:'Physics',marks:70},
            {name:'Chemistry',marks:80},
            {name:'Math',marks:65},
            {name:'English',marks:75},
            {name:'C',marks:67}
        ],

        fullName: function() {
            var studentObject;
            studentObject = $scope.student;
            return studentObject.firstName + " " + studentObject.lastName;
        }
    };
});
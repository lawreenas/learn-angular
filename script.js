
var module = angular.module("app", []);

module.controller("MainCtrl", ['$scope', function ($scope) {

    $scope.issues = [{id:   1, 
                    type:   'Bug', 
                storypoints: 3,
                title:      'Create HTML', 
                created:    '1392126870991', 
            description:    'Test desciption'
        }];
    $scope.selectedIssue = null;
    $scope.issueTypes = [{name:'bug'},{name:'feature'}];

    $scope.delete = function(issue) {
    	var index = $scope.issues.indexOf(issue);
    	$scope.issues.splice(index, 1);
    };
    
    $scope.create = function(type) {
    	$scope.selectedIssue = {};
        $scope.selectedIssue.type = type;
        $scope.selectedIssue.show = false;
    };

    $scope.edit = function(issue) {
        $scope.selectedIssue = issue;
    };

    $scope.show = function(issue) {
        issue.show = !issue.show;
    };

    $scope.save = function(issue) {
    	if (!issue.id) {
    		issue.id = Math.random();
            issue.created = new Date();
    		$scope.issues.push(issue);
    	}
    	$scope.selectedIssue = null;
    };

}]);

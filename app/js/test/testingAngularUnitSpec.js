describe('Testing Angular JS Test Suite', function(){

  beforeEach(module('testingAngularApp'));

  describe('Testing Angular JS Controller', function(){
    var scope, ctrl;
    beforeEach(  inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        ctrl = $controller('testingAngularCtrl', {$scope:scope});
      }));

      afterEach(function(){
        //cleanup code
      });

    it('Should initialize the title in the scope', function(){
      expect(scope.title).toBeDefined();
      expect(scope.title).toBe("Testing Angular Js Application");
    });

    it('should add 2 destinations to the destinations list', function(){
      expect(scope.destinations).toBeDefined();
      expect(scope.destinations.length).toBe(0);

      scope.newDestination = {
        city: "Enland",
        Country: "London"
      }

      scope.addDestination();

      expect(scope.destinations).toBeDefined();
      expect(scope.destinations.length).toBe(1);

      scope.newDestination = {
        city: "Delhi",
        Country: "India"
      }

      scope.addDestination();

      expect(scope.destinations).toBeDefined();
      expect(scope.destinations.length).toBe(2);
      expect(scope.destinations[1].city).toBe("Delhi");
    });

  });
});

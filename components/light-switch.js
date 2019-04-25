"use strict";

function LightSwitchController($scope){
    const ctrl = this;

    // ctrl.onFlip = function(){
    //     $scope.emit()
    // }
    
}

angular
.module('LightApp')
.component('lightSwitch', {
    template: `
        <button ng-click="$ctrl.onFlip()">"Switch"</button>
            `,
    controller: LightSwitchController,
    bindings: {
        onFlip: "&"
    }
});
/**
 * emit: $rootScope.$broadcast("newMessage", "This is from ControllerA");
 */
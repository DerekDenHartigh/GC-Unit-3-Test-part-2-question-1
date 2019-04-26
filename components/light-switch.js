"use strict";

function LightSwitchController($scope){
    const ctrl = this;

    // ctrl.onFlip = function(){
    //     $scope.emit()
    // }
    
    $("button").on('click', ()=>{
        if ($('body').hasClass('bright')===true){
            $('body').removeClass('bright');
        } else {
            $('body').addClass('bright');
        }
    })
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
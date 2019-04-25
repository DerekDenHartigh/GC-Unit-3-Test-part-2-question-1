"use strict";

function LightController($scope){ // $watch
    
    const ctrl = this;

    ctrl.isOn = false;
    console.log("light on? "+ctrl.isOn);

    $scope.$on("switched", (event, data) => {
        if (ctrl.isOn===false){
            ctrl.isOn = true;
        }
        else{
            ctrl.isOn = false;
        }
        console.log("light on? "+ctrl.isOn);
        });
    
    ctrl.onFlip = function(){
        $scope.$emit("switched", undefined)
    }  // this seems like a weird thing to do? but I guess it shows that I can do function binding?

    // $scope.$watch($ctrl.isOn, function(value) {
    //     console.warn(value);
    //     if (value===true){
    //         $("#light").addClass("lightOn");
    //     } else {
    //         $("#light").removeClass("lightOn");
    //     };
    // });
};


angular
.module("LightApp")
.component("light", {
    template: `
        <div id="light" ng-class="{lightOn: $ctrl.isOn}">LIGHT</div>
        <light-switch on-flip="$ctrl.onFlip()"></light-switch>
        `,
    controller: LightController
});

/**
 * listener: 
 * $Scope.$on("newMessage", (event, data) => {
vm.message = data;
});
 */

 // <div ng-class="if ($ctrl.isOn===true){this.addClass("lightOn")}else{removeClass("lightOn")}">LIGHT</div>
// no go above
Use AngularJS to create a light switch.

    Create a component file named lightSwitch.js in the components folder. Declare a component named lightSwitch. 

    This component renders a button with text ""SWITCH"". It has an onFlip function binding that emits an event whenever the button is clicked.

    Create a component file named light.js in the components folder. Declare a component named light.

    This is the parent component for the lightSwitch component so include a reference to lightSwitch in the template. 

    The light component keeps a boolean isOn in its model. When lightSwitch onFlip is emitted, it toggles isOn between true and false. 

    In the template, also add a <div> with text "LIGHT". When isOn is true, the <div> should have class lightOn. When isOn is false, it should not have the lightOn class. 

    Add CSS to make the light background yellow when it has the lightOn class.

    Any errors will result in two points being removed.

    When finished, ZIP your project folder and upload below.
(function() {
    Polymer({
            is:'timer-element',

            created: onElementCreated,
            attached: onElementAttached,
            ready: onElementReady,
            detatched: onElementDetached,

            properties: {
                hour: {
                    type: Number,
                    value: 0,
                    reflectToAttribute: true,
                },
                minute: {
                    type: Number,
                    value: 0,
                    reflectToAttribute: true,
                },
                second: {
                    type: Number,
                    value: 0,
                    reflectToAttribute: true,
                },
            },

            startTimer: startTimer,
            stopTimer: stopTimer,
    });

    function onElementCreated() {
    }

    function onElementAttached() {
    }

    function onElementReady() {
        // on creation, get the time that the element was created
        this.startTimer();

        window.setTimeout(() => {
            Polymer.dom(this.root).querySelector('button').addEventListener('click', getTimeElapsed.bind(this))
        }, 1000)

    }

    function onElementDetached(){
    }

    function getStartTime() {
        let startTime = new Date();
        this.hour = startTime.getHours();
        this.minute = startTime.getMinutes();
        this.second = startTime.getSeconds();

    }

    function startTimer() {
        // get exact time that element was created
        let self = this;
        getStartTime.call(this);
    }

    function getTimeElapsed() {
        // get the approximate amount of time that has elapsed since creation of element
        // use button to tell clock to 'get time elapsed'
        // not sure where to put logic (if this.hour > startTime.hour blah blah blah)
        let timeElapsed = new Date();
        this.hour = timeElapsed.getHours();
        this.minute = timeElapsed.getMinutes();
        this.second = timeElapsed.getSeconds();

    }
})

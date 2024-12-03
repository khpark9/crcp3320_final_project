class Wave {
    amp;
    period;
    phase; 

    constructor(amp, period, phase) {
        this.amp = amp;
        this.period = period;
        this.phase = phase;
    }
    
    evaluate(x) {
        return sin(this.phase + TWO_PI / this.period * x ) * this.amp;
    }

    update() {
        this.phase += 0.05;
    }

}
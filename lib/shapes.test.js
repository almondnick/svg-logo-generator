const { Triangle, Square, Circle } = require('./shapes');

describe ('Triangle test', () => {
    it('should render a triangle with a black background', () => {
        const shape = new Triangle();
        shape.setColor('black');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="black"/>');
    });
});

describe ('Square test', () => {
    it('should render a square with a red background', () => {
        const shape = new Square();
        shape.setColor('red');
        expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="red"/>');
    });
});

describe ('Circle test', () => {
    it('should render a circle with a green background', () => {
        const shape = new Circle();
        shape.setColor('green');
        expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="green"/>');
    });
});

describe ('Triangle hex test', () => {
    it('should render a triangle with a #ffc0cb background', () => {
        const shape = new Triangle();
        shape.setColor('#ffc0cb');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#ffc0cb"/>');
    });
});

describe ('Square hex test', () => {
    it('should render a square with a #ffff00 background', () => {
        const shape = new Square();
        shape.setColor('#ffff00');
        expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="#ffff00"/>');
    });
});

describe ('Circle hex test', () => {
    it('should render a circle with a #0000ff background', () => {
        const shape = new Circle();
        shape.setColor('#0000ff');
        expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="#0000ff"/>');
    });
});
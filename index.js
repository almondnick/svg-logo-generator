const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shapes');

function write(fileName, answers) {
    let svg = '';
    svg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svg += '<g>';
    svg += `${answers.shape}`;

    let shapeChoice;
    if (answers.shape === 'Triangle') {
        shapeChoice = new Triangle();
        svg += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === 'Square') {
        shapeChoice = new Square();
        svg += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
    } else {
        shapeChoice = new Circle();
        svg += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
    }

    svg += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svg += '</g>';
    svg += '</svg>';

    fs.writeFile(fileName, svg, (err) => {
        err ? console.log(err) : console.log('Generated Logo!');
    });
}

function promptUser() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What text would you like on your logo? (Enter up to three characters.)',
                name: 'text',
            },
            {
                type: 'input',
                message: 'What color would you like your text to be? (Enter a color keyword or a hexadecimal number).',
                name: 'textColor',
            },
            {
                type: 'list',
                message: 'What shape would you like your logo to be?',
                choices: ['Triangle', 'Square', 'Circle'],
                name: 'shape',
            },
            {
                type: 'input',
                message: 'What color would you like your shape to be? (Enter a color keyword or a hexadecimal number).',
                name: 'shapeColor',
            },
    ])
    .then((answers) => {
        if (answers.text.length > 3) {
            console.log('Logo text must be 3 characters or less.');
            promptUser();
        } else {
            write('logo.svg', answers);
        }
    });
}

promptUser();
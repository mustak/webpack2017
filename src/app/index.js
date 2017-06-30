import _ from 'lodash';
import '../css/style.scss';

function component() {
    var element = document.createElement('div');

    element.classList.add('hello');
    element.innerHTML = _.join(['Hello', 'webpack 3.0'], ' ');

    return element;
}

document.body.appendChild(component());

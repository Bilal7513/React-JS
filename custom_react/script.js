function CustomRender(element, cont){
    // const domElement = document.createElement(element.type)
    // domElement.innerHTML = element.children
    // domElement.setAttribute('href', element.props.href)
    // domElement.setAttribute('target', element.props.target)
    // cont.appendChild(domElement);

    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    for (const prop in element.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, element.props[prop])
    }
    cont.appendChild(domElement)
}

const element = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const cont = document.querySelector('#root');

CustomRender(element, cont);
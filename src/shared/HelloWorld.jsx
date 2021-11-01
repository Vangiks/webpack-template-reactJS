import React from 'react';
import helloWorldStyles from './helloWorld.scss';

export default function HelloWorld() {
    console.log(helloWorldStyles);
    return (
        <header className={[helloWorldStyles.header, helloWorldStyles.header_fontWeight_bold].join(' ')}>
            <h1>Hello World</h1>
        </header>
    );
}
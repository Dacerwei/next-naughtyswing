import React from 'react';
import Link from 'next/link';

export default class Coop extends React.Component {
    render() {
        return(
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <h1>Co-Op</h1>
            </div>
        );
    }
}
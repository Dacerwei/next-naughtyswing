import React from 'react';
import Link from 'next/link';

export default class Events extends React.Component {
    render() {
        return(
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <h1>Events</h1>
            </div>
        );
    }
}
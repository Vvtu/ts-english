import React, { PureComponent } from 'react';

export default class CancelIcon extends PureComponent {
    render() {
        return (
            <svg
                height="32"
                viewBox="0 0 32 32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                {...this.props}
            >
                <rect fill="none" height="32" width="32" />
                <polygon
                    fill={this.props.fill}
                    points="2,26 6,30 16,20 26,30 30,26 20,16 30,6 26,2 16,12 6,2 2,6 12,16"
                />
            </svg>
        );
    }
}

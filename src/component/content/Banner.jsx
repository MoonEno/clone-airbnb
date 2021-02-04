import React from 'react';
import '../../static/css/Banner.css';
import { Button } from '@material-ui/core';

function Banner() {
    return (
        <div className="banner">
            <div className="banner_info">
                <h1>IT IS Product TITLE </h1>
                <h5>
                    this is Product Detail description Area :)
                </h5>
                <Button variant="outlined"> Explore near by </Button>
            </div>
        </div>
    );
}

export default Banner;

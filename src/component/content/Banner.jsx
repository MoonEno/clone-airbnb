import React, { useState } from 'react';
import '../../static/css/Banner.css';
import { Button } from '@material-ui/core';
import Search from '../common/Search'

function Banner() {

    const [showSearch, setShowSearch] = useState(false);
    const [endDate, setEndDate] = useState( new Date());


    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <Search />}
                <Button onClick={() => setShowSearch(!showSearch)}
                        className="banner_searchBtn" variant="outlined">Search Date</Button>
            </div>
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

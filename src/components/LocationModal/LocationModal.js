

import React, {Fragment} from 'react';


import { Dialog, Grid, } from '@mui/material'

const LocationMap = ({ maxWidth, button, buttonClass }) => {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }


    return (
        <Fragment>
            <button
                className={`btn ${buttonClass}`}
                onClick={handleClickOpen}>
                {button}
                See Location
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
              <button onClick={handleClose} className='event-close-btn'>
                <i  className='fa fa-close'></i>
              </button>
                <Grid className="modalBody modal-body">
                    <Grid className="modalBody modal-body">
                        <iframe title="map" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Hotel%20Gal%20Arana+(Hotel%20Gal%20Arana)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </Grid>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default LocationMap



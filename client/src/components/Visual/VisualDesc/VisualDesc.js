import React from 'react'

import Table from '../TableComponent/Table'
import classes from './VisualDesc.module.css'

const visualDesc = (props) => {
    return(
        <div {...props.settings}>
            <div className={classes.DataContainer}>
                <div className={classes.TableContainer}>
                    <Table districtArray={[...props.districtArray]}
                            sortedBy={props.sortedBy}
                            sortHandler={props.sortHandler}
                            clickHandler={props.clickHandler}
                            current={props.current}/>
                </div>
            </div>
        </div>
    )
}

export default visualDesc
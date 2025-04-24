import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton.jsx";

export default props =>(
    <div role="form" className="todoForm">
        <div className="row">
            <Grid cols="12 9 10">
                <input type="text" className="form-control" id="description" placeholder="Adicione uma tarefa"
                value={props.description} onChange={props.handleChange}   />
            </Grid>
                

            <Grid cols="12 3 2">
                <IconButton style="primary" icon = "plus" onClick={props.handleAdd}>
                    <i className="fa fa-plus"></i>
                </IconButton>
                <IconButton style="info" icon='search' onClick={props.handleSearch}></IconButton>
            
            </Grid>
        </div>
    </div>
)
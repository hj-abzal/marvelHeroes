import { Grid, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import s from './Movies.module.css'
import { MovieType } from './movieReducer';

type MoviesPropsType = {
    movies: MovieType[]
}


export const Movies = (props: MoviesPropsType) => {
    return (
        <div className={s.wrapper}>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={5}>
                {
                    props.movies.map(m => {

                        return <Grid item key={m.imdbID}>
                            <Paper elevation={10}>
                                <div className={s.item}>
                                    <div className={s.img}>
                                        <img
                                            src={m.Poster}
                                            alt={'some movie related to this character'} 
                                            />
                                    </div>
                                    <div className={s.desc}>
                                        <div>{m.Title}</div>
                                        <div>{m.Year}</div>
                                    </div>
                                </div>
                            </Paper>
                        </Grid>
                    })
                }
            </Grid>
        </div>
    )
}
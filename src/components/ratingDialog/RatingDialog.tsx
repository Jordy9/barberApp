import { forwardRef, useState, Fragment, useEffect } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Avatar, Typography, Grid, TextField } from '@mui/material';
import { RatingComponent } from "./RatingComponent"
import { TransitionProps } from '@mui/material/transitions';
import IconButton from '@mui/material/IconButton';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { motion, useIsPresent } from 'framer-motion';
import { RatingFormType } from '../../interfaces/usuarios';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useAppDispatch } from '../../store/hooks';
import { createRating } from '../../store/rating/thunk';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  interface RatingProps {
    ratingForm: RatingFormType[] | undefined
  }

export const RatingDialog = ({ ratingForm }: RatingProps) => {

    const dispatch = useAppDispatch();

    const [showDialog, setShowDialog] = useState( ratingForm?.length !== 0 ? true : false )

    const handleClose = () => {
        setShowDialog(false)
    }

    const [ratingValues, setRatingValues] = useState([
        {
            usuarioId: '',
            barberId: '',
            calificacion: 0,
            // comentario: ''
        },
        {
            usuarioId: '',
            barberId: '',
            calificacion: 0,
            // comentario: ''
        },
    ])

    useEffect(() => {
      setRatingValues(ratingForm!)
    }, [])
    
    const {handleSubmit, touched, errors} = useFormik({
        initialValues: {
          ratingFormValues: ratingValues
        },
        enableReinitialize: true,
        onSubmit: ({ ratingFormValues }) => {
    
            for (let index = 0; index < ratingFormValues.length; index++) {
                const element = ratingFormValues[index];
                
                const deleteRatingFromUser = index + 1 === ratingFormValues.length
                dispatch( createRating(element, deleteRatingFromUser) )
            }

            handleClose()
        },
        validationSchema: Yup.object({

        })
    })

    const [count, setCount] = useState(0)

    const isPresent = useIsPresent()

    const validate = ratingValues.every( e => e.calificacion > 0 )

    const handleButtonSubmit = () => {
        document.getElementById('buttonRatingSubmit')?.click()
    }
    
  return (
    <Dialog
        open={ showDialog }
        fullWidth
        TransitionComponent={ Transition }
        maxWidth = 'xs'
        onClose={ handleClose }
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll={ 'paper' }
        PaperProps = {{
            style: { borderRadius: '11px' }
        }}
    >
        <DialogTitle>

            {
                ratingValues.map( ( e, index ) => (
                    <Fragment>
                        {
                            ( index === count )
                                &&
                            <motion.div
                                initial={{ width: '100%', opacity: 0, scaleX: 0 }}
                                animate={{ width: '100%', scaleX: 1, opacity: 1, transition: { duration: 0.5, ease: "linear" } }}
                                exit={{ scaleX: 0.5, transition: { duration: 0.3, ease: "linear" } }}
                                style={{ originX: isPresent ? 0 : 2,  display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                            >
                            
                                <IconButton onClick={ handleClose }>
                                    <ArrowBackIos />
                                </IconButton>

                                <Typography variant="body1">
                                    ¿Cómo fue tu experiencia con Fulano?
                                </Typography>

                                <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
                            
                            </motion.div>
                        }
                    </Fragment>
                ) )

            }

        </DialogTitle>

        <DialogContent sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>

            <form onSubmit = { handleSubmit }>

                {
                    ratingValues.map( ( e, index ) => (
                        <Fragment>
                            {
                                ( index === count )
                                    &&
                                <motion.div
                                    initial={{ width: '100%', opacity: 0, scaleX: 0 }}
                                    animate={{ width: '100%', scaleX: 1, opacity: 1, transition: { duration: 0.5, ease: "linear" } }}
                                    exit={{ scaleX: 0.5, transition: { duration: 0.3, ease: "linear" } }}
                                    style={{ originX: isPresent ? 0 : 2 }}
                                >
                                    <Grid>
                                        <Typography mb={ 2 }>
                                            Tu valoración es anónima.
                                        </Typography>

                                        <RatingComponent index = { index } ratingValues = { ratingValues } setRatingValues = { setRatingValues } />

                                        {/* <Grid>
                                            <TextField
                                                maxRows={ 6 }
                                                multiline
                                                fullWidth
                                                label = 'Comentario'
                                                placeholder="Me atendiste de maravilla"
                                                helperText = 'Este comentario no es obligatorio, con solo calificarme es suficiente.'
                                            />
                                        </Grid> */}

                                    </Grid>
                                </motion.div>
                            }

                            {
                                ( ratingValues.length > 1 )
                                    &&
                                <>
                                    <Grid sx={{ zIndex: 1046, position: 'absolute', left: 24, top: '45%' }}>

                                        <IconButton disabled = { ( count === 0 ) } onClick={ () => setCount(prev => prev - 1) }>
                                            <ArrowBackIos />
                                        </IconButton>

                                    </Grid>

                                    <Grid sx={{ zIndex: 1046, position: 'absolute', right: 24, top: '45%' }}>

                                        <IconButton disabled = { ratingValues.length === count + 1 } onClick={ () => setCount(prev => prev + 1) }>
                                            <ArrowForwardIos />
                                        </IconButton>

                                    </Grid>
                                </>
                            }
                        </Fragment>
                    ) )
                }

                <button id='buttonRatingSubmit' type='submit' hidden></button>
            </form>
        </DialogContent>
        
        <DialogActions sx={{ p: 2 }}>
            <Button type='submit' disabled = { !validate } fullWidth onClick={ handleButtonSubmit } color = { 'inherit' } variant='contained'>Enviar</Button>
        </DialogActions>
    </Dialog>
  )
}

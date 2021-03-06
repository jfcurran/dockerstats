import React from 'react'
import MuiInput from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import { StyledComponentProps, makeStyles } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'

const useStyles = makeStyles((theme) => ({
  input: {
    color: '#015B8D',
    fontWeight: 300,
    fontSize: '43px',
    lineHeight: '56px',
  },
  iconButton: {
    width: 56,
    height: 56,
    background: 'white',
    filter: 'drop-shadow(0px 0px 64px rgba(34, 186, 251, 0.1))',
    // [theme.breakpoints.down('sm')]: {
    //   width: 27,
    //   height: 27,
    // },
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
  box: {
    display: 'inline-block',
    width: 'calc(100% - 24px - 56px)',
  },
  button: {
    display: 'inline-block',
    marginLeft: 24,
  },
  container: {
    flex: 1,
    marginBottom: 56,
    // [theme.breakpoints.down('sm')]: {
    //   marginBottom: 27,
    // },
  },
}))

interface PropTypes extends StyledComponentProps {
  value: string
  error: boolean
  label: string

  onChange: React.ChangeEventHandler<HTMLInputElement>
  onKeyPress: React.KeyboardEventHandler<HTMLInputElement>

  onDone(): void
}

const Input = ({
  onChange,
  value,
  onKeyPress,
  error,
  onDone,
  label,
}: PropTypes) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <InputLabel>{label}</InputLabel>
        <MuiInput
          placeholder="organization/repository"
          onKeyPress={onKeyPress}
          error={error}
          onChange={onChange}
          value={value}
          className={classes.input}
          fullWidth={true}
        />
      </div>
      <div className={classes.button}>
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="Search"
          onClick={onDone}
        >
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Input

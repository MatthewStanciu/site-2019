import styled from 'styled-components'
import { Box } from 'rebass'
import PropTypes from 'prop-types'

export const Container = styled(Box)`
  max-width: ${props => props.maxWidth}rem;
`

Container.displayName = 'Container'

Container.propTypes = {
  maxWidth: PropTypes.number
}

Container.defaultProps = {
  maxWidth: 72,
  width: 1,
  mx: 'auto'
}

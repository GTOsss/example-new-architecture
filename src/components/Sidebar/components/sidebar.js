import React from 'react'
import styles from '../../../styles/sidebar.scss'
import cx from 'classnames'
import {
  ListGroup,
  ListGroupItem
} from 'reactstrap'
import PropTypes from 'prop-types'

const sidebar = ({items}) => (
  <ListGroup className={styles.sidebar} >
    {items.map((el, i) => (
      <ListGroupItem
        key={i}
        tag="a"
        href={el.href}
        className={cx(styles.listGroupItem, {[styles.active]: i === 0})}>
          {el.text}
      </ListGroupItem>
    ))}
  </ListGroup>
);

sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired
  })).isRequired
}

export default sidebar

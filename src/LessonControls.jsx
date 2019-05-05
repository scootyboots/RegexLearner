import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  .error { color: red; }
`

const LessonControls = ({
  regexStr,
  title,
  handleRegexUpdate,
  errorMsg,
}) => {
  return (
    <Container>
      <h2>{title}</h2>
      <h3>Regex</h3>
      <input type="text" value={regexStr} onChange={handleRegexUpdate} placeholder="\d{1,10}" />
      <p className="error">{errorMsg}</p>
    </Container>
  )
}

LessonControls.propTypes = {
  regexStr: PropTypes.string,
  title: PropTypes.string,
  handleRegexUpdate: PropTypes.func,
  errorMsg: PropTypes.string,
}

export default LessonControls;

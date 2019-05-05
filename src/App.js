import React, { Component } from 'react';
import styled from 'styled-components';
import Display from './Display';
import LessonControls from './LessonControls'

const AppContainer = styled.div`
  html, body { margin: 0; padding: 0; }
  font-family: monospace;
  display: flex;

  .sidemenu, .main {
    padding: 1rem;
  }

  .sidemenu {
    flex: 1;
  }
  .main {
    flex: 3;
  }
`

class App extends Component {
  state = {
    regexStr: '',
    title: "Wonderful regex tester",
    texts: [
      'Salary:',
      '10,000 - 20,000',
      'Salary:',
      '30,000 - 40,000',
      'Salary:',
      '60,000 - 70,000',
    ],
    selectedTexts: [],
    errorMsg: '',
  }

  handleRegexUpdate = e => {
    const regexStr = e.target.value;
    // Update the textbox
    this.setState({ regexStr })
    // Update the selectedTexts
    this.updateSelectedTexts(regexStr);
  }

  updateSelectedTexts = regexStr => {
    try {
      const { texts } = this.state;
      const regexp = this.makeRegex(regexStr);
      const matches = this.calculateMatches(regexp, texts);
      this.setState({
        selectedTexts: matches,
        errorMsg: '',
      });
    } catch (e) {
      this.setState({ errorMsg: e.message })
    }
  }

  makeRegex = str => new RegExp(str, 'g')
  calculateMatches = (regex, texts) => {
    return texts
      .map(text => text.match(regex))
      .filter(t => t)
      .reduce((collector, matches) => [...collector, ...matches], [])
  }

  render() {
    return (
      <AppContainer>
        <div className="sidemenu">
          <LessonControls
            handleRegexUpdate={this.handleRegexUpdate}
            {...this.state}
          />
        </div>
        <div className="main">
          <Display
            {...this.state}
          />
        </div>
      </AppContainer>
    );
  }
}

export default App;

import React, {Component} from 'react';
import EntryForm from '../../components/entryForm/entryForm';
import Entries from '../../components/entries/entries';
import Insights from '../../components/insights/insights';
import {Route} from 'react-router-dom';
import classes from './diary.module.css';

class Diary extends Component {
  state = {
    entries: [
      {
        id: 1,
        happiness: 6,
        sleep: 7,
        meditation: false,
        note: 'Tänään oli dolmio päivä :D',
      },
      {
        id: 2,
        happiness: 8,
        sleep: 9,
        meditation: true,
        note: 'Tänäänkin oli dolmio päivä :D',
      },
    ],
  };

  render() {
    return (
      <React.Fragment className={classes.main}>
          <Route exact path="/" component={EntryForm} />
          <Route
            path="/entries"
            render={props => (
              <Entries {...props} entries={this.state.entries} />
            )}
          />
          <Route path="/insights" component={Insights} />
      </React.Fragment>
    );
  }
}

export default Diary;

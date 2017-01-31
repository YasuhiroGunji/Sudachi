import React from 'react';
import _ from 'lodash';

const TimelineViewport = class TimelineViewport extends React.Component {
  render() {
    return (
      <div id="timeline-viewport" className="col-md-5 col-sm-6 hidden-xs">
        <table>
          <tbody>
            <tr height="1">
              <td className="tv-time"></td>
              <TvMarker></TvMarker>
            </tr>
            <tr className="">
              <TvTime></TvTime>
              <TvTask taskList={this.props.taskList}></TvTask>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class TvMarker extends React.Component {
  render() {
    return (
      <td className="tv-marker">
        {_.map(_.range(1, 14), (m, i) => {
          return <div key={i} className="markercell"></div>;
        })}
      </td>
    );
  }
}

class TvTime extends React.Component {
  render() {
    return (
      <td className="tv-time">
        {_.map(_.range(8, 21), (t, i) => {
          return <div key={i} className="time">{t + ":" + "00"}</div>
        })}
      </td>
    );
  }
}

class TvTask extends React.Component {
  render() {
    let index = 1;
    let tasks = [];
    let taskList = this.props.taskList;
    let keys = Object.keys(taskList);

    if (keys.length > 0) {
      keys.forEach((key, index) =>{
        if (taskList[key].description != "" ){
          let style = {top: (50*(parseInt(index) + 1)).toString() + 'px'};
          tasks.push(<div key={key} className={taskList[key].done ? "task done" : "task"} style={style}><span>{taskList[key].description}</span></div>);
        }
      });
    }

    if (tasks) {
      return (
        <td className="tv-task">
          {tasks}
          <div className="nowmarker"></div>
        </td>
      );
    } else {
      return null;
    }
  }
}

module.exports = TimelineViewport;


import React from 'react';
import '../css/style.css';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="greeting">
        너는 왜 hello, {this.props.name}! <br />
        <ul>
        {
          this.props.subway.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))
        }
        </ul>
      </div>
    );
  }
}

Greeting.defaultProps = {
  subway: [
    'dan', 'nam', 'san', 'bok', 'jang', 'moon', 'ga', 'song', 'seock', 'jam', 'mong'
  ]
};

Greeting.propTypes = {
  subway: React.PropTypes.array
};

module.exports = Greeting;

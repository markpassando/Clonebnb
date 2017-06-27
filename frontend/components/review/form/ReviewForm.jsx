import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <form>
        <input type="radio" name="rating" value="1" />1
        <input type="radio" name="rating" value="2" />2
        <input type="radio" name="rating" value="3" />3
        <input type="radio" name="rating" value="4" />4
        <input type="radio" name="rating" value="5" />5

        <textarea></textarea>

      <input type="submit" value="Rate"/>
      </form>
    );
  }
}

export default ReviewForm;

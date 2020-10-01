import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReviewSummary.module.css';

import STAR_IMAGE from './filled-star.png';
import EMPTY_STAR_IMAGE from './empty-star.png';

const Overview = (props) => {
  Overview.propTypes = {
    numberOfFiveStarReviews: PropTypes.number,
    numberOfFourStarReviews: PropTypes.number,
    numberOfThreeStarReviews: PropTypes.number,
    numberOfTwoStarReviews: PropTypes.number,
    numberOfOneStarReviews: PropTypes.number,
    averageValueRating: PropTypes.number,
    averageQualityRating: PropTypes.number,
    averageStarRating: PropTypes.number,
  };
  Overview.defaultProps = {
    numberOfFiveStarReviews: 0,
    numberOfFourStarReviews: 0,
    numberOfThreeStarReviews: 0,
    numberOfTwoStarReviews: 0,
    numberOfOneStarReviews: 0,
    averageValueRating: 0,
    averageQualityRating: 0,
    averageStarRating: 0,
  };
  const {
    numberOfFiveStarReviews,
    numberOfFourStarReviews,
    numberOfThreeStarReviews,
    numberOfTwoStarReviews,
    numberOfOneStarReviews,
    averageStarRating,
    averageQualityRating,
    averageValueRating,
  } = props;

  function renderStars(num) {
    const stars = Array.apply(null, new Array(5))
    return stars.map((star, index) => (
      <img
        alt="star"
        style={{ width: '20px' }}
        src={index < num ? STAR_IMAGE : EMPTY_STAR_IMAGE}
      />
    ));
  }

  return (
    <div>
      <h4 className={styles.header}>
        Reviews
      </h4>
      <div className={styles.block}>
        <div className={styles.inline_block}>
          <p>Ratings Snapshot</p>

          <p className={styles.select_header}>
            Select a row below to filter reviews.
          </p>
          <div className={styles.ratings_content}>
            <p>
              5 ★:
              {numberOfFiveStarReviews}
            </p>
            <p>
              4 ★:
              {numberOfFourStarReviews}
            </p>
            <p>
              3 ★:
              {numberOfThreeStarReviews}
            </p>
            <p>
              2 ★:
              {numberOfTwoStarReviews}
            </p>
            <p>
              1 ★:
              {numberOfOneStarReviews}
            </p>

          </div>

        </div>

        <div className={styles.inline_block}>
          <p>Average Customer Ratings</p>
          <div className={styles.ratings_content}>
            <p className={styles.stars}>
              {`Overall: still a work in progress
              ${averageStarRating}, rounded  `}
              {renderStars(3)}
            </p>
            <p>
              Quality of Product:
              {averageQualityRating}
            </p>
            <p>
              Value of Product:
              {averageValueRating}
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Overview;
